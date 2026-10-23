import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import worker from '../worker/index.ts';
import {transform} from '../src/lib/weather.ts';
const raw=()=>({current:{time:'2026-10-23T12:00',temperature_2m:25,apparent_temperature:26,relative_humidity_2m:60,wind_speed_10m:12,precipitation:0,weather_code:1,uv_index:5},daily:{time:['2026-10-23'],weather_code:[1],temperature_2m_max:[29],temperature_2m_min:[19],precipitation_probability_max:[20],wind_speed_10m_max:[18],uv_index_max:[7]}});
const env={ASSETS:{fetch:async r=>{const path=new URL(r.url).pathname;return new Response(path.includes('404')?'localized error':'page',{status:path.includes('missing')?404:200,headers:{'Content-Type':'text/html'}});}}};
test('native weather: fixed location, shared raw cache, localized result, bodyless HEAD',async()=>{
 const priorFetch=globalThis.fetch,priorCaches=globalThis.caches;let calls=0,saved;
 globalThis.caches={default:{match:async()=>saved?.clone(),put:async(k,r)=>{saved=r.clone();assert.match(r.headers.get('Cache-Control'),/300/);}}};
 globalThis.fetch=async url=>{calls++;const u=new URL(url);assert.equal(u.searchParams.get('latitude'),'-27.4651406');assert.equal(u.searchParams.get('longitude'),'-58.8480081');return Response.json(raw());};
 try{let r=await worker.fetch(new Request('https://costaneractes.com/api/weather?lang=en&latitude=0'),env);assert.equal(r.status,200);assert.equal((await r.json()).current.label,'Mainly clear');r=await worker.fetch(new Request('https://costaneractes.com/api/weather?lang=es',{method:'HEAD'}),env);assert.equal(await r.text(),'');assert.match(r.headers.get('Cache-Control'),/300/);assert.equal(calls,1);}finally{globalThis.fetch=priorFetch;globalThis.caches=priorCaches;}
});
test('native weather: malformed cache bypassed; upstream errors unavailable and not cached',async()=>{
 const priorFetch=globalThis.fetch,priorCaches=globalThis.caches;let writes=0;
 globalThis.caches={default:{match:async()=>Response.json({current:{}}),put:async()=>{writes++;}}};
 try{for(const result of [()=>Response.json({}),()=>new Response('bad',{status:503}),()=>{throw Error('offline');}]){globalThis.fetch=async()=>result();const r=await worker.fetch(new Request('https://costaneractes.com/api/weather',{method:'HEAD'}),env);assert.equal(r.status,502);assert.equal(await r.text(),'');assert.equal(r.headers.get('Cache-Control'),'no-store');}assert.equal(writes,0);assert.throws(()=>transform({current:{}},'es'));}finally{globalThis.fetch=priorFetch;globalThis.caches=priorCaches;}
});
test('native routing: aliases preserve queries; localized 404 and HEAD/405 semantics',async()=>{
 let r=await worker.fetch(new Request('https://costaneractes.com/en/legal/privacy?x=1'),env);assert.equal(r.status,301);assert.equal(r.headers.get('Location'),'https://costaneractes.com/en/legal/privacy/?x=1');
 r=await worker.fetch(new Request('https://costaneractes.com/en/missing'),env);assert.equal(r.status,404);assert.equal(await r.text(),'localized error');assert.equal(r.headers.get('X-Robots-Tag'),'noindex');
 r=await worker.fetch(new Request('https://costaneractes.com/en/missing',{method:'HEAD'}),env);assert.equal(await r.text(),'');
 r=await worker.fetch(new Request('https://costaneractes.com/',{method:'POST'}),env);assert.equal(r.status,405);
});
function analytics(mode='ok',grant=false){let stored=grant?JSON.stringify({analytics:true}):null;const input={checked:false},message={textContent:''},handlers={},scripts=[];
 const document={cookie:'_ga=old',documentElement:{lang:'en'},head:{appendChild:s=>scripts.push(s)},createElement:()=>({}),addEventListener:(e,f)=>f(),querySelector:s=>s==='#analytics'?input:s==='[data-status]'?message:{addEventListener:(e,f)=>handlers[s]=f}};
 const window={};vm.runInNewContext(fs.readFileSync('public/analytics.js','utf8'),{window,document,location:{hostname:'costaneractes.com'},localStorage:{getItem:()=>stored,setItem:(k,v)=>{if(mode==='throw')throw Error('denied');if(mode!=='ignore')stored=v;}}});return{window,input,message,handlers,scripts,stored:()=>stored};}
test('existing GA choice: opt in, withdraw, regrant once; existing JSON contract',()=>{const a=analytics();assert.equal(a.scripts.length,0);a.input.checked=true;a.handlers['[data-save]']();assert.equal(a.scripts.length,1);assert.equal(JSON.parse(a.stored()).analytics,true);a.handlers['[data-reject]']();assert.equal(a.window['ga-disable-G-HXM22WWPKP'],true);assert.equal(a.input.checked,false);a.input.checked=true;a.handlers['[data-save]']();assert.equal(a.scripts.length,1);assert.equal(a.window['ga-disable-G-HXM22WWPKP'],false);});
test('existing GA choice: throwing/ignored withdrawal of old grant fails closed with truthful scope',()=>{for(const mode of ['throw','ignore']){const a=analytics(mode,true);assert.equal(a.scripts.length,1);a.handlers['[data-reject]']();assert.equal(a.window['ga-disable-G-HXM22WWPKP'],true);assert.equal(a.input.checked,false);assert.match(a.message.textContent,/could not be saved/);assert.match(a.message.textContent,/later page or reload/);assert.equal(JSON.parse(a.stored()).analytics,true);}});
test('actual weather client: normalized success renders; malformed response clears both loading regions',async()=>{
 const source=fs.readFileSync('src/components/WeatherSection.astro','utf8').match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
 for(const lang of ['es','en'])for(const valid of [true,false]){const els=Object.fromEntries(['weather-now','weather-forecast','weather-advice','weather-updated'].map(k=>[k,{innerHTML:'Loading',textContent:'Loading',hidden:true}]));const labels={loadError:'Unavailable',updated:'Updated',riskNone:'Not an official alert'};const section={getAttribute:k=>({'data-lang':lang,'data-labels':JSON.stringify(labels),'data-initial':''}[k])};vm.runInNewContext(source,{document:{getElementById:k=>k==='clima'?section:els[k]},fetch:async()=>Response.json(valid?transform(raw(),lang):{}),AbortSignal,Intl,Date});await new Promise(r=>setTimeout(r,5));if(valid){assert.match(els['weather-now'].innerHTML,/25°/);assert.match(els['weather-updated'].textContent,/UTC−3/);}else{assert.match(els['weather-now'].innerHTML,/Unavailable/);assert.equal(els['weather-forecast'].textContent,'Unavailable');assert.equal(els['weather-advice'].hidden,true);}}
});
test('actual offline worker: weather bypasses cache; offline assets retained, failed HTTP not cached',async()=>{
 const handlers={},requests=[];let writes=0,responded;
 const context={self:{location:{origin:'https://costaneractes.com'},addEventListener:(e,f)=>handlers[e]=f},URL,Response,caches:{match:async()=>new Response('offline asset'),open:async()=>({put:async()=>{writes++;}})},fetch:async request=>{requests.push(request);return new Response('missing',{status:404});}};
 vm.runInNewContext(fs.readFileSync('public/sw.js','utf8'),context);
 handlers.fetch({request:new Request('https://costaneractes.com/api/weather'),respondWith:()=>{throw Error('weather intercepted');}});assert.equal(requests.length,0);
 handlers.fetch({request:new Request('https://costaneractes.com/missing'),respondWith:p=>responded=p,waitUntil:()=>{}});assert.equal((await responded).status,404);assert.equal(writes,0);
 context.fetch=async()=>{throw Error('offline');};handlers.fetch({request:new Request('https://costaneractes.com/icons/icon-192.png'),respondWith:p=>responded=p,waitUntil:()=>{}});assert.equal(await(await responded).text(),'offline asset');
});

test('localized error targets match actual Astro output files',async()=>{
 const assets={ASSETS:{fetch:async request=>{const path=new URL(request.url).pathname;const file='dist'+path+(path.endsWith('/')?'index.html':'');return fs.existsSync(file)?new Response(fs.readFileSync(file),{headers:{'Content-Type':'text/html'}}):new Response('not an asset',{status:404});}}};
 for(const path of ['/unknown','/404.html','/404/','/en/unknown','/en/404.html']){const response=await worker.fetch(new Request('https://costaneractes.com'+path),assets);assert.equal(response.status,404);assert.match(await response.text(),path.startsWith('/en/')?/Page not found/:/Página no encontrada/);}
});

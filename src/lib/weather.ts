// Weather helpers for Costanera Corrientes.
// Data source: Open-Meteo forecast API. Coordinates from the attraction record.
export const COORDS = { lat: -27.465140576322273, lon: -58.850583022788314 };

// Convert wind speed (km/h) to the Beaufort scale for threshold logic.
export function beaufort(kmh: number): number {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  if (kmh < 118) return 11;
  return 12;
}

export interface WeatherAdvice {
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}

// Turn raw forecast numbers into visitor-ready, actionable advice.
// Each list is shown only when its conditions are met, so the page never
// dumps every rule at once. Risk items are derived from current conditions
// (no official alert feed is used or implied).
export function buildAdvice(p: WeatherPayload, lang: 'es' | 'en'): WeatherAdvice {
  const s = (es: string, en: string) => (lang === 'es' ? es : en);
  const risk: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];
  const add = (arr: string[], v: string) => { if (!arr.includes(v)) arr.push(v); };

  const cur = p.current;
  const today = p.daily[0];
  const code = cur.code;
  const isThunder = code >= 95;
  const isHeavy = code === 63 || code === 65 || code === 81 || code === 82;
  const isLightRain = (code >= 51 && code <= 61) || code === 80;
  const isFog = code === 45 || code === 48;
  const isClear = code <= 1;
  const isCloudy = code === 3;
  const precipProb = today ? today.precipProb : 0;
  const uv = cur.uv;
  const uvMax = today ? (today.uvMax ?? 0) : 0;
  const bft = beaufort(cur.wind);
  const tmax = today ? today.tmax : cur.temp;
  const tmin = today ? today.tmin : cur.temp;
  const diff = tmax - tmin;

  // ---- Risk (red, top) — derived from conditions, not an official alert ----
  if (isThunder) {
    add(risk, s('Tormenta eléctrica: no te refugies bajo los árboles ni te acerques al río o al agua. Las actividades acuáticas se suspenden.', 'Thunderstorm: do not shelter under trees or go near the river or water. Water activities are suspended.'));
  }
  if (isHeavy) {
    add(risk, s('Lluvia intensa: evitá la costa baja y las riberas anegadas; las salidas en bote pueden suspenderse.', 'Heavy rain: avoid low banks and flooded shores; boat trips may be suspended.'));
  }
  if (bft >= 7) {
    add(risk, s('Viento muy fuerte: alejate de carteles, árboles y de la orilla del río.', 'Very strong wind: keep away from signs, trees and the riverbank.'));
  }
  if (cur.temp >= 38) {
    add(risk, s('Mucho calor: evitá la exposición prolongada al sol e hidratate con frecuencia.', 'Extreme heat: avoid prolonged sun exposure and drink water often.'));
  }
  if (isFog) {
    add(risk, s('Visibilidad reducida: las salidas en bote y la navegación se retrasan; no es buen momento para mirar el paisaje.', 'Reduced visibility: boat trips and navigation are delayed; not a good time for views.'));
  }

  // ---- Precipitation ----
  if (precipProb >= 60) {
    add(outfit, s('Es probable que llueva, llevá paraguas o impermeable.', 'Rain is likely, bring an umbrella or raincoat.'));
    add(plan, s('Priorizá actividades bajo techo y postponé las caminatas largas por la costa.', 'Prioritise indoor activities and postpone long walks along the shore.'));
    add(items, s('Paraguas o poncho', 'Umbrella or poncho'));
  } else if (isLightRain) {
    add(outfit, s('Lluvia leve, el suelo está resbaladizo: caminá con cuidado.', 'Light rain, ground is slippery: walk carefully.'));
    add(plan, s('Los paseos al aire libre se disfrutan menos; buscá sombra o refugio si hace falta.', 'Outdoor strolls are less pleasant; find shade or shelter if needed.'));
    add(items, s('Paraguas plegable', 'Foldable umbrella'));
  } else if (isHeavy) {
    add(plan, s('No es buen momento para estar al aire libre; las salidas en bote pueden suspenderse.', 'Not a good moment to be outdoors; boat trips may be suspended.'));
    add(items, s('Poncho (mejor que paraguas largo por el viento)', 'Poncho (better than a long umbrella in wind)'));
  }

  // ---- Heat & UV ----
  if (cur.temp >= 32) {
    add(outfit, s('Hace calor: evitá salir al mediodía y usá ropa ligera y clara.', 'It is hot: avoid going out at midday and wear light, breathable clothing.'));
    add(plan, s('Acortá el tiempo al aire libre y buscá sombra.', 'Shorten outdoor time and seek shade.'));
    add(items, s('Protector solar y mucha agua', 'Sunscreen and plenty of water'));
  }
  if (uv >= 5 || uvMax >= 5) {
    add(outfit, s('Radiación solar fuerte, cuidate del sol.', 'Strong solar radiation, protect yourself from the sun.'));
    add(items, s('Lentes de sol y gorra', 'Sunglasses and a cap'));
  }

  // ---- Cold ----
  if (diff > 8) {
    add(outfit, s('Gran diferencia de temperatura entre el día y la noche: llevá una prenda para abrigarte.', 'Big temperature swing between day and night: bring a layer to cover up.'));
  }
  if (tmax <= 10) {
    add(outfit, s('Hace frío: abrigate bien.', 'It is cold: bundle up well.'));
    add(items, s('Abrigo y bufanda', 'Coat and scarf'));
  }

  // ---- Wind ----
  if (bft >= 5 && bft <= 6) {
    add(outfit, s('Viento fuerte: el sombrero puede volar, evitá ropa muy suelta.', 'Strong wind: your hat may blow away, avoid very loose clothing.'));
    add(plan, s('Las salidas en bote y algunas actividades al aire libre pueden suspenderse.', 'Boat trips and some outdoor activities may be suspended.'));
  }

  // ---- Clear / cloudy ----
  if (isClear && cur.temp < 32 && bft < 5) {
    add(outfit, s('Buen clima para recorrer la costanera.', 'Good weather to walk the waterfront.'));
    add(plan, s('Ideal para ver amaneceres y la puesta de sol.', 'Ideal for sunrise and sunset views.'));
    add(items, s('Llevá agua para el recorrido', 'Bring water for the walk'));
  }
  if (isCloudy) {
    add(outfit, s('Luz suave, muy buena para fotos.', 'Soft light, great for photos.'));
    add(plan, s('Sin sol fuerte, ideal para caminar rato largo.', 'No harsh sun, ideal for a long walk.'));
  }

  return { risk, outfit, plan, items };
}

type WmoEntry = { es: string; en: string; icon: string };

// WMO weather interpretation codes (https://open-meteo.com/en/docs).
const WMO: Record<number, WmoEntry> = {
  0: { es: 'Despejado', en: 'Clear sky', icon: '☀️' },
  1: { es: 'Mayormente despejado', en: 'Mainly clear', icon: '🌤️' },
  2: { es: 'Parcialmente nublado', en: 'Partly cloudy', icon: '⛅' },
  3: { es: 'Nublado', en: 'Overcast', icon: '☁️' },
  45: { es: 'Niebla', en: 'Fog', icon: '🌫️' },
  48: { es: 'Niebla con escarcha', en: 'Rime fog', icon: '🌫️' },
  51: { es: 'Llovizna leve', en: 'Light drizzle', icon: '🌦️' },
  53: { es: 'Llovizna moderada', en: 'Moderate drizzle', icon: '🌦️' },
  55: { es: 'Llovizna intensa', en: 'Dense drizzle', icon: '🌦️' },
  56: { es: 'Llovizna helada leve', en: 'Light freezing drizzle', icon: '🌧️' },
  57: { es: 'Llovizna helada intensa', en: 'Dense freezing drizzle', icon: '🌧️' },
  61: { es: 'Lluvia leve', en: 'Slight rain', icon: '🌧️' },
  63: { es: 'Lluvia moderada', en: 'Moderate rain', icon: '🌧️' },
  65: { es: 'Lluvia intensa', en: 'Heavy rain', icon: '🌧️' },
  66: { es: 'Lluvia helada leve', en: 'Light freezing rain', icon: '🌧️' },
  67: { es: 'Lluvia helada intensa', en: 'Heavy freezing rain', icon: '🌧️' },
  71: { es: 'Nieve leve', en: 'Slight snow', icon: '🌨️' },
  73: { es: 'Nieve moderada', en: 'Moderate snow', icon: '🌨️' },
  75: { es: 'Nieve intensa', en: 'Heavy snow', icon: '🌨️' },
  77: { es: 'Granizo', en: 'Snow grains', icon: '🌨️' },
  80: { es: 'Chubascos leves', en: 'Slight rain showers', icon: '🌦️' },
  81: { es: 'Chubascos moderados', en: 'Moderate rain showers', icon: '🌧️' },
  82: { es: 'Chubascos violentos', en: 'Violent rain showers', icon: '⛈️' },
  85: { es: 'Chubascos de nieve leves', en: 'Slight snow showers', icon: '🌨️' },
  86: { es: 'Chubascos de nieve intensos', en: 'Heavy snow showers', icon: '🌨️' },
  95: { es: 'Tormenta', en: 'Thunderstorm', icon: '⛈️' },
  96: { es: 'Tormenta con granizo leve', en: 'Thunderstorm with slight hail', icon: '⛈️' },
  99: { es: 'Tormenta con granizo intenso', en: 'Thunderstorm with heavy hail', icon: '⛈️' },
};

export function describe(code: number, lang: 'es' | 'en'): { label: string; icon: string } {
  const w = WMO[code] ?? { es: 'Condición variable', en: 'Variable conditions', icon: '🌡️' };
  return { label: lang === 'es' ? w.es : w.en, icon: w.icon };
}

export function buildUrl(lat: number, lon: number): string {
  const base = 'https://api.open-meteo.com/v1/forecast';
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max',
    timezone: 'America/Argentina/Cordoba',
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `${base}?${params.toString()}`;
}

export interface DailyForecast {
  date: string;
  code: number;
  label: string;
  icon: string;
  tmax: number;
  tmin: number;
  precipProb: number;
  wind: number;
  uvMax: number;
  umbrella: boolean;
}

export interface WeatherPayload {
  updated: string;
  current: {
    temp: number;
    feels: number;
    humidity: number;
    wind: number;
    precip: number;
    code: number;
    label: string;
    icon: string;
    uv: number;
    umbrella: boolean;
  };
  daily: DailyForecast[];
  advice: WeatherAdvice;
}

// Build the JSON consumed by the front-end from an Open-Meteo response.
export function transform(data: any, lang: 'es' | 'en'): WeatherPayload {
  const cur = data.current ?? {};
  const daily = data.daily ?? { time: [], weather_code: [], temperature_2m_max: [], temperature_2m_min: [], precipitation_probability_max: [], wind_speed_10m_max: [] };
  const precipProbNow = Array.isArray(daily.precipitation_probability_max)
    ? daily.precipitation_probability_max[0] ?? 0
    : 0;

  const dailyList: DailyForecast[] = (daily.time ?? []).map((t: string, i: number) => {
    const code = daily.weather_code[i];
    const d = describe(code, lang);
    const precipProb = daily.precipitation_probability_max[i] ?? 0;
    return {
      date: t,
      code,
      label: d.label,
      icon: d.icon,
      tmax: Math.round(daily.temperature_2m_max[i]),
      tmin: Math.round(daily.temperature_2m_min[i]),
      precipProb,
      wind: Math.round(daily.wind_speed_10m_max[i]),
      uvMax: Math.round(daily.uv_index_max[i] ?? 0),
      umbrella: precipProb >= 50,
    };
  });

  const cDesc = describe(cur.weather_code, lang);
  const payload: WeatherPayload = {
    updated: cur.time ?? '',
    current: {
      temp: Math.round(cur.temperature_2m ?? 0),
      feels: Math.round(cur.apparent_temperature ?? 0),
      humidity: Math.round(cur.relative_humidity_2m ?? 0),
      wind: Math.round(cur.wind_speed_10m ?? 0),
      precip: cur.precipitation ?? 0,
      code: cur.weather_code ?? 0,
      label: cDesc.label,
      icon: cDesc.icon,
      uv: Math.round(cur.uv_index ?? 0),
      umbrella: (cur.precipitation ?? 0) > 0.1 || precipProbNow >= 50,
    },
    daily: dailyList,
    advice: { risk: [], outfit: [], plan: [], items: [] },
  };
  payload.advice = buildAdvice(payload, lang);
  return payload;
}

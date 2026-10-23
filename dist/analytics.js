(() => {
  const id = 'G-HXM22WWPKP', key = 'costanera-cookie-preferences';
  let loaded = false, enabled = false;
  const read = () => { try { return JSON.parse(localStorage.getItem(key) || '{}').analytics === true; } catch { return false; } };
  function enable() {
    enabled = true;
    window['ga-disable-' + id] = false;
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true; script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function eraseCookies() {
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) return;
      for (const domain of ['', location.hostname, '.' + location.hostname]) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax' + (domain ? '; Domain=' + domain : '');
      }
    });
  }
  window.setGuideAnalytics = accepted => {
    // Stop measurement before any storage operation; an old saved grant must not
    // override the visitor's current choice when persistence fails.
    enabled = false;
    window['ga-disable-' + id] = true;
    if (!accepted) eraseCookies();
    const value = JSON.stringify({ necessary: true, preferences: true, analytics: accepted, updatedAt: new Date().toISOString() });
    let saved = false;
    try {
      localStorage.setItem(key, value);
      saved = localStorage.getItem(key) === value;
    } catch {}
    if (!saved) { eraseCookies(); return false; }
    if (accepted) enable();
    return true;
  };
  window['ga-disable-' + id] = true;
  if (read()) enable();
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#analytics');
    if (!input) return;
    input.checked = enabled;
    const apply = allow => {
      input.checked = allow;
      const saved = window.setGuideAnalytics(input.checked);
      const message = document.querySelector('[data-status]');
      if (message) message.textContent = saved ? (document.documentElement.lang.startsWith('en') ? 'Preference saved. Previously sent data cannot be recalled.' : 'Preferencia guardada. No se pueden retirar datos ya enviados.') : (document.documentElement.lang.startsWith('en') ? 'Analytics is off on this page, but the preference could not be saved. A later page or reload may use an older saved choice; use browser storage controls to remove it.' : 'Analytics está desactivado en esta página, pero no se pudo guardar la elección. Otra página o una recarga puede usar una elección anterior; eliminá ese dato desde los controles de almacenamiento del navegador.');
      input.checked = enabled;
    };
    document.querySelector('[data-save]')?.addEventListener('click', () => apply(input.checked));
    document.querySelector('[data-reject]')?.addEventListener('click', () => apply(false));
  });
})();

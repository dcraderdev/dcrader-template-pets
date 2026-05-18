(function () {
  try {
    if (!location.hostname.endsWith('templates.dcrader.dev')) return;
    if (document.getElementById('dcrader-back-pill')) return;
    function mount() {
      if (document.getElementById('dcrader-back-pill')) return;
      var a = document.createElement('a');
      a.id = 'dcrader-back-pill';
      a.href = 'https://dcrader.dev';
      a.target = '_self';
      a.rel = 'noopener';
      a.textContent = 'dcrader.dev';
      a.setAttribute('aria-label', 'Built by dcrader.dev — back to portfolio');
      a.style.cssText = [
        'position:fixed','right:14px','bottom:14px','z-index:2147483647',
        'padding:8px 14px','border-radius:999px',
        'background:rgba(0,0,0,0.65)','color:#fff','text-decoration:none',
        'font:500 13px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif',
        'backdrop-filter:blur(6px)','-webkit-backdrop-filter:blur(6px)',
        'box-shadow:0 4px 14px rgba(0,0,0,0.25)',
        'transition:opacity .2s ease','opacity:0.85'
      ].join(';');
      a.addEventListener('mouseenter', function () { a.style.opacity = '1'; });
      a.addEventListener('mouseleave', function () { a.style.opacity = '0.85'; });
      document.body.appendChild(a);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', mount);
    } else {
      mount();
    }
  } catch (_e) {}
})();

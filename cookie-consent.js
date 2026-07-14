/*
  VCT — lightweight cookie consent + Google Analytics (GA4) loader
  ---------------------------------------------------------------
  Opt-in model: Google Analytics is NOT loaded until the visitor clicks "Accept".
  The choice is stored in localStorage, so the banner only shows on the first visit.

  >>> SET YOUR GA4 MEASUREMENT ID BELOW (looks like "G-XXXXXXXXXX") <<<
  Until a real ID is set, nothing is sent to Google even after "Accept".
*/
(function () {
  var GA_ID = 'G-XXXXXXXXXX';          // <-- replace with your GA4 Measurement ID
  var STORAGE_KEY = 'vct-cookie-consent';

  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  function loadGA() {
    if (!GA_ID || GA_ID.indexOf('XXXX') !== -1) return;   // no real ID set yet
    if (window.__vctGaLoaded) return;
    window.__vctGaLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (b && b.parentNode) b.parentNode.removeChild(b);
  }

  function setConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    hideBanner();
    if (value === 'accepted') loadGA();
  }

  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner';
    b.className = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie consent');
    b.innerHTML =
      '<div class="cookie-inner">' +
        '<p class="cookie-text">We use cookies for Google Analytics to see how the site is used and improve it. ' +
        'You can accept or decline. See our <a href="privacy.html">Privacy Policy</a>.</p>' +
        '<div class="cookie-actions">' +
          '<button type="button" class="btn btn-ghost btn-sm" id="cookie-decline">Decline</button>' +
          '<button type="button" class="btn btn-primary btn-sm" id="cookie-accept">Accept</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(b);
    document.getElementById('cookie-accept').addEventListener('click', function () { setConsent('accepted'); });
    document.getElementById('cookie-decline').addEventListener('click', function () { setConsent('declined'); });
  }

  // Let users reopen the banner to change their choice (e.g. from a footer link).
  window.vctCookieSettings = showBanner;

  if (stored === 'accepted') {
    loadGA();
  } else if (stored === 'declined') {
    /* do nothing — respect the decline */
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }
})();

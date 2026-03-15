(function () {
  'use strict';

  var WHATSAPP_NUMBER = '2290197616563';
  var MESSAGE_GENERIC = "Bonjour, j'aimerais avoir des informations sur vos produits.";
  var MESSAGE_PRODUCT_TEMPLATE = 'Bonjour, je souhaite commander {product}. Pouvez-vous me donner les détails ?';

  function buildWhatsAppUrl(phone, text) {
    var base = 'https://wa.me/' + (phone || WHATSAPP_NUMBER);
    if (text && text.trim()) {
      base += '?text=' + encodeURIComponent(text.trim());
    }
    return base;
  }

  function openWhatsApp(phone, message) {
    var url = buildWhatsAppUrl(phone || WHATSAPP_NUMBER, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function getProductMessage(productName) {
    return MESSAGE_PRODUCT_TEMPLATE.replace('{product}', productName);
  }

  function initWhatsAppLinks() {
    var ids = ['nav-whatsapp', 'hero-whatsapp', 'stats-whatsapp', 'cta-final-whatsapp'];
    var url = buildWhatsAppUrl(WHATSAPP_NUMBER, MESSAGE_GENERIC);
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.href = url;
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    });

    var floatEl = document.getElementById('whatsapp-float');
    if (floatEl) {
      floatEl.href = url;
      floatEl.setAttribute('target', '_blank');
      floatEl.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function initProductButtons() {
    var buttons = document.querySelectorAll('.js-commander');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.product-card');
        var productName = card ? card.getAttribute('data-product') : '';
        var message = productName ? getProductMessage(productName) : MESSAGE_GENERIC;
        openWhatsApp(WHATSAPP_NUMBER, message);
      });
    });
  }

  function initProductFilter() {
    var filters = document.querySelectorAll('.products__filter');
    var cards = document.querySelectorAll('.product-card');
    if (!filters.length || !cards.length) return;

    filters.forEach(function (filter) {
      filter.addEventListener('click', function () {
        var value = filter.getAttribute('data-filter');
        filters.forEach(function (f) { f.classList.remove('is-active'); });
        filter.classList.add('is-active');

        cards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          var show = value === 'tous' || category === value;
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  function initFooterWhatsApp() {
    var links = document.querySelectorAll('.js-whatsapp-link');
    links.forEach(function (link) {
      var phone = link.getAttribute('data-phone');
      var message = link.getAttribute('data-message') || '';
      if (phone) {
        link.href = buildWhatsAppUrl(phone, message);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  function initScrollReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    initWhatsAppLinks();
    initProductButtons();
    initProductFilter();
    initFooterWhatsApp();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

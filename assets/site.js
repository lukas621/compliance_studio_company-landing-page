// MECC — shared site behavior

// Nav scroll state
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  update();
  window.addEventListener('scroll', update, { passive: true });

  // Mobile menu toggle
  const toggle = nav.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelector('.nav-links').addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
})();

// Reveal on scroll
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  els.forEach(e => obs.observe(e));
})();


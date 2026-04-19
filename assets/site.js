// Compliance Studio — shared site behavior

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

// Tweaks ----------------------------------------------------------------
const TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "teal",
  "serif": "instrument"
}/*EDITMODE-END*/;

const ACCENTS = {
  teal:     { '--accent': '#0D4F4F', '--accent-2': '#0f6363', '--gold': '#C9A96E', '--gold-soft': '#b8955c' },
  slate:    { '--accent': '#3D5A80', '--accent-2': '#4a6d9b', '--gold': '#7FA3C7', '--gold-soft': '#6b8fb3' },
  burgundy: { '--accent': '#5C1A1A', '--accent-2': '#742424', '--gold': '#D4886E', '--gold-soft': '#bf7460' }
};
const SERIFS = {
  instrument: "'Instrument Serif', 'Times New Roman', Georgia, serif",
  fraunces:   "'Fraunces', 'Times New Roman', Georgia, serif",
  source:     "'Source Serif 4', 'Times New Roman', Georgia, serif",
  libre:      "'Libre Caslon Display', 'Times New Roman', Georgia, serif"
};

function applyTweaks(t) {
  const a = ACCENTS[t.accent] || ACCENTS.teal;
  Object.entries(a).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  document.documentElement.style.setProperty('--serif', SERIFS[t.serif] || SERIFS.instrument);
}
applyTweaks(TWEAKS);

function buildTweaks() {
  if (document.querySelector('.tweaks')) return;
  const panel = document.createElement('div');
  panel.className = 'tweaks';
  panel.innerHTML = `
    <h5>Tweaks</h5>
    <div class="tweak-group">
      <label>Accent</label>
      <div class="swatches" data-group="accent">
        <div class="swatch" data-val="teal" style="background:#0D4F4F" title="Teal"></div>
        <div class="swatch" data-val="slate" style="background:#3D5A80" title="Slate"></div>
        <div class="swatch" data-val="burgundy" style="background:#5C1A1A" title="Burgundy"></div>
      </div>
    </div>
    <div class="tweak-group">
      <label>Display serif</label>
      <div class="opts" data-group="serif">
        <div class="opt" data-val="instrument">Instrument</div>
        <div class="opt" data-val="fraunces">Fraunces</div>
        <div class="opt" data-val="source">Source Serif</div>
        <div class="opt" data-val="libre">Libre Caslon</div>
      </div>
    </div>
  `;
  document.body.appendChild(panel);
  const sync = () => {
    panel.querySelectorAll('[data-group]').forEach(g => {
      const key = g.dataset.group;
      g.querySelectorAll('[data-val]').forEach(el => {
        el.classList.toggle('active', el.dataset.val === TWEAKS[key]);
      });
    });
  };
  panel.addEventListener('click', (e) => {
    const el = e.target.closest('[data-val]');
    if (!el) return;
    const group = el.closest('[data-group]').dataset.group;
    TWEAKS[group] = el.dataset.val;
    applyTweaks(TWEAKS);
    sync();
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [group]: el.dataset.val } }, '*');
    } catch (e) {}
  });
  sync();
  return panel;
}

window.addEventListener('message', (ev) => {
  const d = ev.data || {};
  if (d.type === '__activate_edit_mode') {
    const p = buildTweaks() || document.querySelector('.tweaks');
    p.classList.add('on');
  } else if (d.type === '__deactivate_edit_mode') {
    const p = document.querySelector('.tweaks');
    if (p) p.classList.remove('on');
  }
});
try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

/* Single-section router: intercepts main nav before legacy scroll handlers. */
(() => {
  'use strict';
  const valid = new Set(['home','relationship','capabilities','integrated-intelligence','differentiators','cta']);
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const frame = document.getElementById('iiFrame');
  const allSections = Array.from(document.querySelectorAll('main > section'));
  let selected = 'home';
  let internalView = 'home';
  const apply = (id, updateUrl = true) => {
    if (!valid.has(id)) return;
    selected = id;
    document.body.dataset.c5iView = id;
    // Clear legacy Focus Mode classes; the single-section router controls visibility.
    document.querySelectorAll('.ii-hidden-during-explore,.capabilities-focus-hidden').forEach(el => {
      el.classList.remove('ii-hidden-during-explore','capabilities-focus-hidden');
    });
    document.body.classList.toggle('ii-exploring', id === 'integrated-intelligence' && internalView !== 'home');
    for (const link of links) {
      const active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    }
    for (const section of allSections) section.setAttribute('aria-hidden',
      String(!(section.id === id || (id === 'relationship' && section.id === 'teams'))));
    if (updateUrl) history.replaceState(null,'','#'+id);
    window.scrollTo({top:0,behavior:'instant'});
    requestAnimationFrame(() => window.scrollTo(0,0));
  };
  // Capture ensures older click listeners cannot send navigation to another section.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('.nav a[href^="#"]');
    if (!link || !nav.contains(link)) return;
    const id = link.getAttribute('href').slice(1);
    if (!valid.has(id)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    apply(id);
  }, true);
  // Ignore legacy iframe view/scroll messages at parent level; keep height messages.
  window.addEventListener('message', (event) => {
    if (!frame || event.source !== frame.contentWindow || !event.data) return;
    if (event.data.type === 'ii-view') {
      internalView = event.data.view || 'home';
      document.body.classList.toggle('ii-exploring', selected === 'integrated-intelligence' && internalView !== 'home');
      event.stopImmediatePropagation();
    } else if (event.data.type === 'ii-top' || event.data.type === 'ii-user-navigation') {
      event.stopImmediatePropagation();
      if (event.data.type === 'ii-top' && selected === 'integrated-intelligence') {
        const header = document.getElementById('topbar');
        const offset = header ? header.getBoundingClientRect().height : 0;
        const section = document.getElementById('integrated-intelligence');
        if (section) window.scrollTo({top:Math.max(0,section.getBoundingClientRect().top+scrollY-offset),behavior:'smooth'});
      }
    }
  }, true);
  // Avoid any old scroll/highlight logic overriding the chosen section.
  window.addEventListener('scroll', () => {
    links.forEach(link => link.classList.toggle('active',link.getAttribute('href') === '#' + selected));
  }, {passive:true});
  // The public site must open at Home on fresh visits.
  if (location.hash) history.replaceState(null,'',location.pathname+location.search);
  apply('home', false);
  window.addEventListener('load', () => {
    apply('home', false);
    setTimeout(() => apply('home',false),250);
  }, {once:true});
})();

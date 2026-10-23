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
  const sequence = [
    ['home','Home'],['relationship','Relationship summary'],
    ['capabilities','What we do for Amazon'],
    ['integrated-intelligence','Our Capabilities'],
    ['differentiators','Why C5i'],['cta','Contact Us']
  ];
  const nextControl=document.createElement('button');
  nextControl.type='button';
  nextControl.id='c5i-next-view';
  nextControl.setAttribute('aria-label','Move to the next page');
  // The next-page control belongs AFTER the selected page's content,
  // not in a fixed overlay on top of its cards.
  const nextRow=document.createElement('div');
  nextRow.id='c5i-next-row';
  nextRow.appendChild(nextControl);
  // Keep navigation within its own visible section, never in an extra strip.
  const nextHosts = {
    home: document.getElementById('home'),
    relationship: document.getElementById('teams'),
    capabilities: document.getElementById('capabilities'),
    'integrated-intelligence': document.getElementById('integrated-intelligence'),
    differentiators: document.getElementById('differentiators'),
    cta: document.getElementById('cta')
  };

  function updateNext(id){
    const i=sequence.findIndex(([key])=>key===id);
    const next=sequence[i+1];
    // Manager feedback: no next-page CTA on Home or Why C5i.
    const show=Boolean(next) && id!=='home' && id!=='differentiators';
    nextControl.hidden=!show;
    nextRow.hidden=!show;
    if(!show)return;
    nextControl.replaceChildren();
    const text=document.createElement('span');
    text.textContent=next[1];
    const arrow=document.createElement('span');
    arrow.className='next-arrow';arrow.textContent='→';arrow.setAttribute('aria-hidden','true');
    nextControl.append(text,arrow);
    nextControl.dataset.next=next[0];
    nextControl.setAttribute('aria-label','Move to '+next[1]);
  }
  nextControl.addEventListener('click',()=>apply(nextControl.dataset.next));

  function syncRelationshipHeaderHeight(){
    const header=document.getElementById('topbar');
    if(header) document.documentElement.style.setProperty('--relationship-header-px',header.getBoundingClientRect().height+'px');
  }
  window.addEventListener('resize',syncRelationshipHeaderHeight);
  syncRelationshipHeaderHeight();

  const apply = (id, updateUrl = true) => {
    syncRelationshipHeaderHeight();
    if (!valid.has(id)) return;
    selected = id;
    document.body.dataset.c5iView = id;
    updateNext(id);
    const nextHost = nextHosts[id];
    if (nextHost) {
      // Capabilities is a flex row containing the heading and six cards.
      // Appending the next button inside it shrinks those cards.
      // Place the next button AFTER the row instead, preserving its layout.
      if (id === 'capabilities') {
        nextHost.insertAdjacentElement('afterend', nextRow);
      } else if (nextRow.parentElement !== nextHost) {
        nextHost.appendChild(nextRow);
      }
    }
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
  // Home hero CTA uses the same single-section router as the main navigation.
  // Capture before the legacy scroll handler, otherwise Relationship Summary
  // can remain hidden while the URL changes.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('#home .hero-actions a[href="#relationship"]');
    if (!link) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    apply('relationship');
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

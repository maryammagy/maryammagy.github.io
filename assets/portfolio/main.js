(() => {
  'use strict';

  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('#nav-links');
  const navigationLinks = [...document.querySelectorAll('.nav-links a')];
  const mobile = window.matchMedia('(max-width: 640px)');

  const closeMenu = () => {
    if (!menu || !links) return;
    menu.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  };

  if (menu && links) {
    menu.hidden = false;
    menu.addEventListener('click', () => {
      const isOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('is-open', !isOpen);
    });
    links.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.navigation')) closeMenu();
    });
    mobile.addEventListener('change', closeMenu);
  }

  const progress = document.querySelector('.scroll-progress');
  const sections = [...document.querySelectorAll('main > section[id]')];
  let ticking = false;
  const updateScrollState = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;

    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 160) current = section.id;
    }
    if (distance > 0 && window.scrollY >= distance - 8) current = sections.at(-1)?.id;
    for (const link of navigationLinks) {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    ticking = false;
  };
  const scheduleUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollState);
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  updateScrollState();

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  const printButton = document.querySelector('[data-print]');
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }
})();

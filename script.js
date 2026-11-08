const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

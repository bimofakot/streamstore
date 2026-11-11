/* app.js — Perilaku halaman: tahun footer, navbar, menu mobile, FAQ, reveal. */

/* ----- Year in footer ----- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ----- Navbar scroll effect ----- */
const navbar = document.getElementById('navbar');
function onScrollNavbar() {
  if (window.scrollY > 20) {
    navbar.classList.add('shadow-2xl', 'shadow-black/50');
  } else {
    navbar.classList.remove('shadow-2xl', 'shadow-black/50');
  }
}
window.addEventListener('scroll', onScrollNavbar);

/* ----- Mobile menu toggle ----- */
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const icon = mobileBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const icon = mobileBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

/* ----- FAQ accordion ----- */
document.querySelectorAll('.faq-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const panel = toggle.nextElementSibling;
    const icon = toggle.querySelector('.fa-chevron-down');
    const isOpen = !panel.classList.contains('hidden');
    // Close all
    document.querySelectorAll('.faq-panel').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.faq-toggle .fa-chevron-down').forEach(i => i.classList.remove('rotate-180'));
    // Toggle current
    if (!isOpen) {
      panel.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
  });
});

/* ----- Scroll reveal animation (IntersectionObserver) ----- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

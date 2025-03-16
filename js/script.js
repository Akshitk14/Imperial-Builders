document.addEventListener('DOMContentLoaded', function() {
  // Sticky header effect on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navUl = document.querySelector('nav ul');
  mobileNavToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });

  // FAQ toggle functionality (if present)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});

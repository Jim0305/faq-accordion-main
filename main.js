const accordianButtons = document.querySelectorAll('.accordian-btn');

accordianButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const accordianContent =
      e.target.parentNode.nextElementSibling.closest('.accordian-content');
    const isOpen = btn.getAttribute('aria-expanded');

    if (isOpen === 'true') {
      btn.setAttribute('aria-expanded', 'false');
      accordianContent.setAttribute('aria-hidden', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      accordianContent.setAttribute('aria-hidden', 'false');
    }
  });
});

/* ==========================================================================
   BLACKLINE DETAILING - FAQ ACCORDION LOGIC
   ========================================================================== */

export function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(questionBtn => {
    questionBtn.addEventListener('click', () => {
      const faqItem = questionBtn.closest('.faq-item');
      const isOpen = questionBtn.getAttribute('aria-expanded') === 'true';

      // Close all other open accordion items
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.closest('.faq-item')?.classList.remove('open');
      });

      // Toggle current item
      if (!isOpen) {
        questionBtn.setAttribute('aria-expanded', 'true');
        faqItem.classList.add('open');
      }
    });
  });
}

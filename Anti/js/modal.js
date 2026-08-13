/* ==========================================================================
   BLACKLINE DETAILING - BOOKING MODAL LOGIC
   ========================================================================== */

export function initModal() {
  const modal = document.getElementById('bookingModal');
  const openButtons = document.querySelectorAll('.js-open-modal');
  const closeButtons = document.querySelectorAll('.js-close-modal');
  const form = document.getElementById('bookingForm');
  const successState = document.getElementById('modalSuccessState');

  if (!modal) return;

  function openModal(serviceName = null) {
    if (serviceName) {
      const serviceSelect = document.getElementById('modalServiceSelect');
      if (serviceSelect) serviceSelect.value = serviceName;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset state after transition
    setTimeout(() => {
      if (form) {
        form.style.display = 'block';
        form.reset();
      }
      if (successState) {
        successState.style.display = 'none';
      }
    }, 400);
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.dataset.service;
      openModal(service);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Form submission handling
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Надсилання...
        `;
      }

      // Simulate API network request delay
      setTimeout(() => {
        form.style.display = 'none';
        if (successState) {
          successState.style.display = 'block';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Підтвердити запис';
        }
      }, 1200);
    });
  }
}

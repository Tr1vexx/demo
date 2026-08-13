/* ==========================================================================
   BLACKLINE DETAILING - BEFORE / AFTER SLIDER LOGIC
   ========================================================================== */

export function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterSlider');
  if (!container) return;

  const afterImage = container.querySelector('.slider-image-after');
  const handle = container.querySelector('.slider-handle');
  let isDragging = false;

  function updateSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let positionPercentage = ((x - rect.left) / rect.width) * 100;
    
    // Clamp between 0% and 100%
    if (positionPercentage < 0) positionPercentage = 0;
    if (positionPercentage > 100) positionPercentage = 100;

    afterImage.style.width = `${positionPercentage}%`;
    handle.style.left = `${positionPercentage}%`;
  }

  // Mouse Events
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  // Touch Events for Mobile & Tablet
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updateSliderPosition(e.touches[0].clientX);
  });

  // Click anywhere on container to jump slider
  container.addEventListener('click', (e) => {
    if (e.target.closest('.slider-handle')) return;
    updateSliderPosition(e.clientX);
  });
}

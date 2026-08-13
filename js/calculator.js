/* ==========================================================================
   BLACKLINE DETAILING - COST CALCULATOR LOGIC
   ========================================================================== */

export function initCalculator() {
  const carTypeCards = document.querySelectorAll('.car-type-card');
  const calcServiceItems = document.querySelectorAll('.calc-service-item');
  const gradeCards = document.querySelectorAll('.grade-card');
  const totalPriceElement = document.getElementById('calcTotalPrice');
  const totalTimeElement = document.getElementById('calcTotalTime');
  const bookWithQuoteBtn = document.getElementById('bookWithQuoteBtn');

  // Base state
  let selectedCarMultiplier = 1.0;
  let selectedCarName = 'Седан / Хетчбек';
  let selectedGradeMultiplier = 1.0;
  let selectedGradeName = 'Standard';
  let selectedServices = [
    { id: 'ppf_front', name: 'Антигравійна плівка (Front Zone)', price: 28000, time: 2 },
    { id: 'ceramic_3layers', name: 'Кераміка 9H (3 шари)', price: 14000, time: 1 }
  ];

  function calculateTotal() {
    let basePriceTotal = 0;
    let baseTimeTotal = 0;

    selectedServices.forEach(srv => {
      basePriceTotal += srv.price;
      baseTimeTotal += srv.time;
    });

    if (selectedServices.length === 0) {
      totalPriceElement.textContent = '0 ₴';
      totalTimeElement.textContent = 'Оберіть хоча б одну послугу';
      return;
    }

    const finalPrice = Math.round((basePriceTotal * selectedCarMultiplier * selectedGradeMultiplier) / 500) * 500;
    const finalDays = Math.ceil(baseTimeTotal);

    // Format currency Ukrainian format
    totalPriceElement.textContent = `${finalPrice.toLocaleString('uk-UA')} ₴`;
    totalTimeElement.textContent = `Орієнтовний час виконання: ${finalDays} ${finalDays === 1 ? 'день' : finalDays < 5 ? 'дні' : 'днів'}`;
  }

  // 1. Car Type Selection
  carTypeCards.forEach(card => {
    card.addEventListener('click', () => {
      carTypeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedCarMultiplier = parseFloat(card.dataset.multiplier || 1.0);
      selectedCarName = card.dataset.name || 'Автомобіль';
      calculateTotal();
    });
  });

  // 2. Services Checkbox Toggle
  calcServiceItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      const serviceId = item.dataset.id;
      const serviceName = item.dataset.name;
      const servicePrice = parseInt(item.dataset.price, 10);
      const serviceTime = parseFloat(item.dataset.time);

      if (item.classList.contains('selected')) {
        if (!selectedServices.some(s => s.id === serviceId)) {
          selectedServices.push({ id: serviceId, name: serviceName, price: servicePrice, time: serviceTime });
        }
      } else {
        selectedServices = selectedServices.filter(s => s.id !== serviceId);
      }
      calculateTotal();
    });
  });

  // 3. Material Grade Selection
  gradeCards.forEach(card => {
    card.addEventListener('click', () => {
      gradeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedGradeMultiplier = parseFloat(card.dataset.multiplier || 1.0);
      selectedGradeName = card.dataset.name || 'Standard';
      calculateTotal();
    });
  });

  // 4. Book with Quote Button Click -> Auto-fill modal
  if (bookWithQuoteBtn) {
    bookWithQuoteBtn.addEventListener('click', () => {
      const modal = document.getElementById('bookingModal');
      const serviceSelect = document.getElementById('modalServiceSelect');
      const carInput = document.getElementById('modalCarInput');

      if (carInput && selectedCarName) {
        carInput.value = selectedCarName;
      }

      if (serviceSelect && selectedServices.length > 0) {
        const summaryText = selectedServices.map(s => s.name).join(', ') + ` (${selectedGradeName})`;
        // Create custom option if needed
        let customOpt = serviceSelect.querySelector('option[data-custom="true"]');
        if (!customOpt) {
          customOpt = document.createElement('option');
          customOpt.dataset.custom = 'true';
          serviceSelect.appendChild(customOpt);
        }
        customOpt.value = summaryText;
        customOpt.textContent = `Розрахунок з калькулятора: ${totalPriceElement.textContent}`;
        serviceSelect.value = summaryText;
      }

      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Initial calculation run
  calculateTotal();
}

/* ==========================================================================
   BLACKLINE DETAILING - BUNDLED APPLICATION SCRIPT
   All modules combined into a single IIFE for file:// compatibility
   ========================================================================== */

;(function () {
  'use strict'

  /* ========================================================================
     1. CENTRALIZED BUSINESS DATA (SINGLE SOURCE OF TRUTH)
     ======================================================================== */

  const studioData = {
    info: {
      name: "BLACKLINE Detailing",
      tagline: "Преміальний дітейлінг та захист авто у Києві",
      phone: "+38 (044) 999-88-77",
      phoneRaw: "+380449998877",
      address: "м. Київ, вул. Велика Васильківська, 100",
      workHours: "Пн - Сб: 09:00 - 20:00 (Нд: за записом)",
      instagram: "@blackline_detailing_kyiv",
      telegram: "@blackline_booking",
      mapLocationUrl: "https://maps.google.com",
      stats: [
        { number: "500+", label: "Захищених авто" },
        { number: "10 років", label: "Гарантії на PPF" },
        { number: "9H", label: "Сапфірова кераміка" },
        { number: "24/7", label: "Онлайн-відео боксів" }
      ]
    },

    services: [
      {
        id: "ppf",
        badge: "Топ захист від сколів",
        title: "Антигравійна Плівка (PPF)",
        subtitle: "Офіційні матеріали SunTek & STEK",
        description: "Повне або зонне обклеювання кузова преміальною поліуретановою плівкою з технологією самовідновлення (Top Coat). 100% захист від гравію, піску та дрібних ДТП.",
        price: "від 28,000 ₴",
        priceSub: "/ Зона ризику",
        image: "assets/images/ppf-application.jpg",
        features: [
          "100% захист від камінців, гравію та хімічних реагентів",
          "Технологія самовідновлення подряпин від тепла сонця",
          "Офіційна гарантія від пожовтіння та відшарування 10 років"
        ]
      },
      {
        id: "ceramic",
        badge: "Дзеркальний глянець",
        title: "Нанокераміка 9H & Гідрофоб",
        subtitle: "Багатошаровий захист кузова",
        description: "Багатошарове нанесення нанокерамічного покриття 9H (Gyeon / ServFaces) для створення дзеркального блиску, глибини кольору та водовідштовхувального ефекту.",
        price: "від 14,000 ₴",
        priceSub: "/ 3 шари",
        image: "assets/images/ceramic-beading.jpg",
        features: [
          "Захист від UV-випромінювання та вигорання фарби",
          "Потужний гідрофобний ефект (кут краплі 115°)",
          "Легкість у мийці авто — бруд не вмивається в лак"
        ]
      },
      {
        id: "polishing",
        badge: "Відновлення лаку",
        title: "Детейлінг Полірування",
        subtitle: "Корекція ЛФП 95%+",
        description: "Багатоетапне відновлювальне полірування кузова з видаленням павутинки, голограм та глибоких подряпин без потоншення заводського лаку.",
        price: "від 9,000 ₴",
        priceSub: "/ Кузов",
        image: "assets/images/paint-after.jpg",
        features: [
          "Видалення 95%+ подряпин та слідів від мийок",
          "Усунення голограм та підвищення чіткості відображення",
          "Використання полірувальників RUPES BigFoot"
        ]
      },
      {
        id: "interior",
        badge: "Догляд за салоном",
        title: "Детейлінг Салону & Шкіра",
        subtitle: "Очищення та консервація",
        description: "Глибока хімчистка салону парою, догляд за шкіряними елементами зволожувальними кремами Colourlock, захист тканини гідрофобом та озонування.",
        price: "від 8,000 ₴",
        priceSub: "/ Салон",
        image: "assets/images/interior-leather.jpg",
        features: [
          "Очищення кожної пори шкіри, алькантари та пластику",
          "Консервація шкіри матовим кремом від вигорання",
          "Повне озонування та дезінфекція системи кондиціонування"
        ]
      }
    ],

    advantages: [
      {
        icon: "cleanroom",
        title: "Чистий бокс ISO Standard",
        description: "Окреме приміщення з підвищеним тиском, знепиленням та точною температурою 21°C для ідеального обклеювання."
      },
      {
        icon: "certified",
        title: "Сертифікований персонал",
        description: "Майстри пройшли акредитацію у навчальних центрах SunTek (США) та STEK (Південна Корея)."
      },
      {
        icon: "infrared",
        title: "Інфрачервона сушка",
        description: "Запікання керамічних покриттів ІК-сушками Scangrip при 60°C для кристалізації на молекулярному рівні."
      },
      {
        icon: "guarantee",
        title: "Гарантія до 10 років",
        description: "Офіційний гарантійний талон з можливістю безкоштовного щорічного інспекційного огляду."
      },
      {
        icon: "video",
        title: "24/7 Відеоспостереження",
        description: "Власник отримує приватне посилання на HD-стрім із камери боксу для спостереження за ходом робіт."
      },
      {
        icon: "insurance",
        title: "Страхування відповідальності",
        description: "Автомобіль перебуває під повною охороною та застрахований на весь період перебування у студії."
      }
    ],

    portfolio: [
      {
        id: "p1",
        category: "ppf",
        categoryName: "Плівка PPF",
        title: "Porsche 911 GT3 RS",
        description: "Повне обклеювання в матовий поліуретан STEK DynoMatte",
        image: "assets/images/hero-supercar.jpg"
      },
      {
        id: "p2",
        category: "ceramic",
        categoryName: "Кераміка 9H",
        title: "BMW M8 Competition",
        description: "3 шари нанокераміки Gyeon Q2 Flash + Гідрофоб",
        image: "assets/images/ceramic-beading.jpg"
      },
      {
        id: "p3",
        category: "interior",
        categoryName: "Детейлінг Салону",
        title: "Mercedes-AMG G63",
        description: "Реставрація коньячної шкіри Colourlock + озонування",
        image: "assets/images/interior-leather.jpg"
      },
      {
        id: "p4",
        category: "ppf",
        categoryName: "Плівка PPF",
        title: "McLaren 720S",
        description: "Захист зони ризику та карбонового обвасу SunTek Ultra",
        image: "assets/images/ppf-application.jpg"
      },
      {
        id: "p5",
        category: "polishing",
        categoryName: "Полірування",
        title: "Audi RS6 Avant",
        description: "Двохетапне відновлювальне полірування ЛФП",
        image: "assets/images/paint-after.jpg"
      }
    ],

    packages: [
      {
        name: "Essential Protection",
        tagline: "Базовий захист нового авто",
        price: "24,000 ₴",
        recommended: false,
        features: [
          "Трьохфазна мийка та деконтамінація",
          "Обклеювання передньої оптики та фар PPF",
          "Полірування кузова (1 етап)",
          "Нанокераміка 9H (1 шар)",
          "Антидощ на лобове скло"
        ]
      },
      {
        name: "Premium Ceramic & PPF",
        tagline: "Популярний комплекс для щоденного використання",
        price: "42,000 ₴",
        recommended: true,
        badge: "Найпопулярніший",
        features: [
          "Обклеювання Зони Ризику PPF (Капот, бампер, крила, фари)",
          "Багатоетапне відновлювальне полірування",
          "Нанокераміка 9H (3 шари на решту кузова)",
          "Водовідштовхувальний гідрофобний топ",
          "Детейлінг прибирання салону в подарунок",
          "Гарантія 5 років"
        ]
      },
      {
        name: "Blackline Flagship Armor",
        tagline: "Бескомпромісний максимальний захист",
        price: "85,000 ₴",
        recommended: false,
        features: [
          "Повне обклеювання кузова PPF STEK DynoShield",
          "Кераміка поверх плівки (Hydrophobic Top)",
          "Повний дітейлінг салону та кераміка шкіри",
          "Обробка колісних дисків та супортів керамікою",
          "Захист усіх стекол Антидощ 360°",
          "Пожиттєва гарантія та 2 річних ТО"
        ]
      }
    ],

    processSteps: [
      {
        step: "01",
        title: "Онлайн Запис & Консультація",
        desc: "Залишаєте заявку або телефонуєте. Старший технолог узгоджує деталі та бронює персональне місце у боксі."
      },
      {
        step: "02",
        title: "Інспекційна Діагностика",
        desc: "Прийом авто під інспекційним світлом Scangrip. Складаємо детальний акт огляду та вимірюємо товщину лаку."
      },
      {
        step: "03",
        title: "Детейлінг & Контроль Якості",
        desc: "Виконання робіт у знепиленому чистому боксі. Проміжний перевірочний контроль на кожному етапі."
      },
      {
        step: "04",
        title: "Урочиста Видача Авто",
        desc: "ІК-запікання, фінальний огляд і передача авто господарю разом із сертифікатом та гарантійним талоном."
      }
    ],

    reviews: [
      {
        name: "Олександр К.",
        car: "Porsche 911 Turbo S",
        stars: 5,
        text: "Заганяв свій Porsche 911 на повний комплект PPF від STEK та кераміку салону. Хлопці зробили все ідеально, підвернули всі краї плівки під елементи — її взагалі не видно!"
      },
      {
        name: "Вадим М.",
        car: "BMW M8 Competition",
        stars: 5,
        text: "Після мийок на чорному лаку була суцільна паутинка. В BLACKLINE зробили відновлювальне полірування та нанесли 3 шари кераміки 9H. Машина сяє краще ніж у автосалоні!"
      },
      {
        name: "Дмитро П.",
        car: "Mercedes-AMG G63",
        stars: 5,
        text: "Робив дітейлінг салону та реставрацію шкіряного керма на G-Class. Результат вражає — шкіра знову матова та приємна на дотик, як у день купівлі. Сервіс 10/10."
      }
    ],

    faq: [
      {
        question: "Скільки часу триває повне обклеювання авто захисною плівкою PPF?",
        answer: "Стандартне обклеювання Зони Ризику триває 2 дні. Повне обклеювання кузова займе 4–5 робочих днів, оскільки ми знімаємо навісні елементи (ручки, логотипи) для підвороту краї плівки."
      },
      {
        question: "Чи дійсно подряпини на плівці PPF зникають самі?",
        answer: "Так! Преміальні поліуретанові плівки SunTek та STEK мають верхній шар Top Coat з ефектом пам'яті. Дрібні подряпини та павутинка затягуються під дією теплої води або сонячного тепла."
      },
      {
        question: "Яка різниця між керамічним покриттям та поліруванням?",
        answer: "Полірування усуває подряпини та повертає лаку гладкість, але залишає його відкритим для зовнішнього середовища. Кераміка — це захисний шар, який кристалізується на лаку, захищаючи від солі, пташиного посліду та вигорання."
      },
      {
        question: "Як правильно мити автомобіль після нанесення кераміки чи плівки?",
        answer: "Ми надаємо кожному клієнту детальний чек-лист. Головне правило — трьохфазна мийка з нейтральним pH-шампунем та використання чистих мікрофібр."
      },
      {
        question: "Які гарантії надає студія BLACKLINE?",
        answer: "На антигравійну плівку ми надаємо офіційну гарантію від 5 до 10 років (від пожовтіння, відшарування та пухирів). На керамічне покриття — від 1 до 3 років."
      }
    ]
  }

  /* ========================================================================
     2. DYNAMIC UI RENDER ENGINE
     ======================================================================== */

  function renderApplicationData() {
    renderServices()
    renderAdvantages()
    renderPortfolio()
    renderPackages()
    renderProcessSteps()
    renderReviews()
    renderFAQ()
    bindStudioInfo()
  }

  // Bind Studio Information
  function bindStudioInfo() {
    const phones = document.querySelectorAll('.js-bind-phone')
    phones.forEach(function (el) {
      const textSpan = el.querySelector('.phone-text')
      if (textSpan) {
        textSpan.textContent = studioData.info.phone
      } else {
        el.textContent = studioData.info.phone
      }
      if (el.tagName === 'A') el.href = 'tel:' + studioData.info.phoneRaw
    })

    const addresses = document.querySelectorAll('.js-bind-address')
    addresses.forEach(function (el) { el.textContent = studioData.info.address })

    const hours = document.querySelectorAll('.js-bind-hours')
    hours.forEach(function (el) { el.textContent = studioData.info.workHours })
  }

  // Render Services Bento Grid
  function renderServices() {
    const container = document.getElementById('servicesBentoGrid')
    if (!container) return

    container.innerHTML = studioData.services.map(function (srv, idx) {
      const colClass = idx === 0 ? 'col-7' : idx === 1 ? 'col-5' : idx === 2 ? 'col-5' : 'col-7'
      return '<div class="glass-card bento-card ' + colClass + ' reveal-on-scroll delay-' + ((idx % 3) + 1) + '">' +
        '<div class="bento-card-bg"><img src="' + srv.image + '" alt="' + srv.title + '"></div>' +
        '<div class="bento-content">' +
          '<span class="badge" style="margin-bottom: 12px;">' + srv.badge + '</span>' +
          '<h3 class="service-title">' + srv.title + '</h3>' +
          '<p class="service-desc">' + srv.description + '</p>' +
          '<ul class="service-features">' +
            srv.features.map(function (f) {
              return '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ' + f + '</li>'
            }).join('') +
          '</ul>' +
        '</div>' +
        '<div class="service-footer">' +
          '<div class="price-tag">' + srv.price + ' <span>' + srv.priceSub + '</span></div>' +
          '<button class="btn btn-secondary js-open-modal" data-service="' + srv.title + '">Замовити</button>' +
        '</div>' +
      '</div>'
    }).join('')
  }

  // Render Studio Advantages Grid
  function renderAdvantages() {
    const container = document.getElementById('advantagesGrid')
    if (!container) return

    const svgMap = {
      cleanroom: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"></path></svg>',
      certified: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
      infrared: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>',
      guarantee: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
      video: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
      insurance: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'
    }

    container.innerHTML = studioData.advantages.map(function (adv, idx) {
      return '<div class="glass-card advantage-card reveal-on-scroll delay-' + ((idx % 3) + 1) + '">' +
        '<div class="advantage-icon">' + (svgMap[adv.icon] || svgMap.guarantee) + '</div>' +
        '<h3 class="advantage-title">' + adv.title + '</h3>' +
        '<p class="advantage-desc">' + adv.description + '</p>' +
      '</div>'
    }).join('')
  }

  // Render Portfolio Gallery
  function renderPortfolio() {
    const container = document.getElementById('portfolioGrid')
    if (!container) return

    container.innerHTML = studioData.portfolio.map(function (item) {
      return '<div class="portfolio-item glass-card reveal-on-scroll" data-category="' + item.category + '">' +
        '<div class="portfolio-image-wrap">' +
          '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy">' +
          '<div class="portfolio-overlay">' +
            '<span class="badge" style="margin-bottom: 8px;">' + item.categoryName + '</span>' +
            '<h4 class="portfolio-item-title">' + item.title + '</h4>' +
            '<p class="portfolio-item-sub">' + item.description + '</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    }).join('')
  }

  // Render Pricing Packages
  function renderPackages() {
    const container = document.getElementById('packagesGrid')
    if (!container) return

    container.innerHTML = studioData.packages.map(function (pkg, idx) {
      return '<div class="glass-card package-card ' + (pkg.recommended ? 'recommended' : '') + ' reveal-on-scroll delay-' + ((idx % 3) + 1) + '">' +
        (pkg.badge ? '<div class="package-badge">' + pkg.badge + '</div>' : '') +
        '<h3 class="package-name">' + pkg.name + '</h3>' +
        '<p class="package-tagline">' + pkg.tagline + '</p>' +
        '<div class="package-price">' + pkg.price + '</div>' +
        '<ul class="package-features">' +
          pkg.features.map(function (f) {
            return '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ' + f + '</li>'
          }).join('') +
        '</ul>' +
        '<button class="btn ' + (pkg.recommended ? 'btn-primary' : 'btn-secondary') + ' js-open-modal" data-service="Пакет: ' + pkg.name + '" style="width: 100%;">Обрати пакет</button>' +
      '</div>'
    }).join('')
  }

  // Render Process Steps
  function renderProcessSteps() {
    const container = document.getElementById('processStepsGrid')
    if (!container) return

    container.innerHTML = studioData.processSteps.map(function (step, idx) {
      return '<div class="process-step-card reveal-on-scroll delay-' + (idx + 1) + '">' +
        '<div class="step-number-watermark">' + step.step + '</div>' +
        '<div class="process-icon">' +
          '<span style="font-family: var(--font-display); font-weight: 800; color: var(--accent-gold);">' + step.step + '</span>' +
        '</div>' +
        '<h3 class="process-title">' + step.title + '</h3>' +
        '<p class="process-desc">' + step.desc + '</p>' +
      '</div>'
    }).join('')
  }

  // Render Reviews
  function renderReviews() {
    const container = document.getElementById('reviewsGridContainer')
    if (!container) return

    container.innerHTML = studioData.reviews.map(function (rev, idx) {
      var initials = rev.name.split(' ').map(function (n) { return n[0] }).join('')
      return '<div class="glass-card review-card reveal-on-scroll delay-' + (idx + 1) + '">' +
        '<div>' +
          '<div class="review-stars">★★★★★</div>' +
          '<p class="review-quote">"' + rev.text + '"</p>' +
        '</div>' +
        '<div class="review-author">' +
          '<div class="author-avatar">' + initials + '</div>' +
          '<div>' +
            '<div class="author-name">' + rev.name + '</div>' +
            '<div class="author-car">' + rev.car + '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    }).join('')
  }

  // Render FAQ Accordion
  function renderFAQ() {
    const container = document.getElementById('faqAccordionContainer')
    if (!container) return

    container.innerHTML = studioData.faq.map(function (item) {
      return '<div class="faq-item glass-card reveal-on-scroll">' +
        '<button class="faq-question" aria-expanded="false">' +
          '<span>' + item.question + '</span>' +
          '<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
        '</button>' +
        '<div class="faq-answer">' +
          '<div class="faq-answer-inner">' + item.answer + '</div>' +
        '</div>' +
      '</div>'
    }).join('')
  }

  /* ========================================================================
     3. BEFORE / AFTER SLIDER LOGIC
     ======================================================================== */

  function initBeforeAfterSlider() {
    const container = document.getElementById('beforeAfterSlider')
    if (!container) return

    const afterImage = container.querySelector('.slider-image-after')
    const handle = container.querySelector('.slider-handle')
    let isDragging = false

    function updateSliderPosition(x) {
      const rect = container.getBoundingClientRect()
      let positionPercentage = ((x - rect.left) / rect.width) * 100

      if (positionPercentage < 0) positionPercentage = 0
      if (positionPercentage > 100) positionPercentage = 100

      afterImage.style.width = positionPercentage + '%'
      handle.style.left = positionPercentage + '%'
    }

    handle.addEventListener('mousedown', function (e) {
      isDragging = true
      e.preventDefault()
    })
    window.addEventListener('mouseup', function () { isDragging = false })
    window.addEventListener('mousemove', function (e) {
      if (!isDragging) return
      updateSliderPosition(e.clientX)
    })

    handle.addEventListener('touchstart', function () { isDragging = true })
    window.addEventListener('touchend', function () { isDragging = false })
    window.addEventListener('touchmove', function (e) {
      if (!isDragging || !e.touches[0]) return
      updateSliderPosition(e.touches[0].clientX)
    })

    container.addEventListener('click', function (e) {
      if (e.target.closest('.slider-handle')) return
      updateSliderPosition(e.clientX)
    })
  }

  /* ========================================================================
     4. COST CALCULATOR LOGIC
     ======================================================================== */

  function initCalculator() {
    const carTypeCards = document.querySelectorAll('.car-type-card')
    const calcServiceItems = document.querySelectorAll('.calc-service-item')
    const gradeCards = document.querySelectorAll('.grade-card')
    const totalPriceElement = document.getElementById('calcTotalPrice')
    const totalTimeElement = document.getElementById('calcTotalTime')
    const bookWithQuoteBtn = document.getElementById('bookWithQuoteBtn')

    let selectedCarMultiplier = 1.0
    let selectedCarName = 'Седан / Хетчбек'
    let selectedGradeMultiplier = 1.0
    let selectedGradeName = 'Standard'
    let selectedServices = [
      { id: 'ppf_front', name: 'Антигравійна плівка (Front Zone)', price: 28000, time: 2 },
      { id: 'ceramic_3layers', name: 'Кераміка 9H (3 шари)', price: 14000, time: 1 }
    ]

    function calculateTotal() {
      let basePriceTotal = 0
      let baseTimeTotal = 0

      selectedServices.forEach(function (srv) {
        basePriceTotal += srv.price
        baseTimeTotal += srv.time
      })

      if (selectedServices.length === 0) {
        totalPriceElement.textContent = '0 ₴'
        totalTimeElement.textContent = 'Оберіть хоча б одну послугу'
        return
      }

      const finalPrice = Math.round((basePriceTotal * selectedCarMultiplier * selectedGradeMultiplier) / 500) * 500
      const finalDays = Math.ceil(baseTimeTotal)

      totalPriceElement.textContent = finalPrice.toLocaleString('uk-UA') + ' ₴'
      totalTimeElement.textContent = 'Орієнтовний час виконання: ' + finalDays + ' ' + (finalDays === 1 ? 'день' : finalDays < 5 ? 'дні' : 'днів')
    }

    carTypeCards.forEach(function (card) {
      card.addEventListener('click', function () {
        carTypeCards.forEach(function (c) { c.classList.remove('selected') })
        card.classList.add('selected')
        selectedCarMultiplier = parseFloat(card.dataset.multiplier || 1.0)
        selectedCarName = card.dataset.name || 'Автомобіль'
        calculateTotal()
      })
    })

    calcServiceItems.forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('selected')
        const serviceId = item.dataset.id
        const serviceName = item.dataset.name
        const servicePrice = parseInt(item.dataset.price, 10)
        const serviceTime = parseFloat(item.dataset.time)

        if (item.classList.contains('selected')) {
          if (!selectedServices.some(function (s) { return s.id === serviceId })) {
            selectedServices.push({ id: serviceId, name: serviceName, price: servicePrice, time: serviceTime })
          }
        } else {
          selectedServices = selectedServices.filter(function (s) { return s.id !== serviceId })
        }
        calculateTotal()
      })
    })

    gradeCards.forEach(function (card) {
      card.addEventListener('click', function () {
        gradeCards.forEach(function (c) { c.classList.remove('selected') })
        card.classList.add('selected')
        selectedGradeMultiplier = parseFloat(card.dataset.multiplier || 1.0)
        selectedGradeName = card.dataset.name || 'Standard'
        calculateTotal()
      })
    })

    if (bookWithQuoteBtn) {
      bookWithQuoteBtn.addEventListener('click', function () {
        const modal = document.getElementById('bookingModal')
        const serviceSelect = document.getElementById('modalServiceSelect')
        const carInput = document.getElementById('modalCarInput')

        if (carInput && selectedCarName) carInput.value = selectedCarName

        if (serviceSelect && selectedServices.length > 0) {
          const summaryText = selectedServices.map(function (s) { return s.name }).join(', ') + ' (' + selectedGradeName + ')'
          let customOpt = serviceSelect.querySelector('option[data-custom="true"]')
          if (!customOpt) {
            customOpt = document.createElement('option')
            customOpt.dataset.custom = 'true'
            serviceSelect.appendChild(customOpt)
          }
          customOpt.value = summaryText
          customOpt.textContent = 'Розрахунок з калькулятора: ' + totalPriceElement.textContent
          serviceSelect.value = summaryText
        }

        if (modal) {
          modal.classList.add('active')
          document.body.style.overflow = 'hidden'
        }
      })
    }

    calculateTotal()
  }

  /* ========================================================================
     5. GALLERY FILTER LOGIC
     ======================================================================== */

  function initGallery() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn')
    const portfolioItems = document.querySelectorAll('.portfolio-item')

    if (!filterBtns.length || !portfolioItems.length) return

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active') })
        btn.classList.add('active')

        const category = btn.dataset.filter

        portfolioItems.forEach(function (item) {
          const itemCategory = item.dataset.category

          if (category === 'all' || itemCategory === category) {
            item.style.display = 'block'
            setTimeout(function () {
              item.style.opacity = '1'
              item.style.transform = 'scale(1)'
            }, 50)
          } else {
            item.style.opacity = '0'
            item.style.transform = 'scale(0.95)'
            setTimeout(function () {
              item.style.display = 'none'
            }, 300)
          }
        })
      })
    })
  }

  /* ========================================================================
     6. FAQ ACCORDION LOGIC
     ======================================================================== */

  function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question')

    faqQuestions.forEach(function (questionBtn) {
      questionBtn.addEventListener('click', function () {
        const faqItem = questionBtn.closest('.faq-item')
        const isOpen = questionBtn.getAttribute('aria-expanded') === 'true'

        // Close all other open accordion items
        document.querySelectorAll('.faq-question').forEach(function (btn) {
          btn.setAttribute('aria-expanded', 'false')
          var parentItem = btn.closest('.faq-item')
          if (parentItem) parentItem.classList.remove('open')
        })

        // Toggle current item
        if (!isOpen) {
          questionBtn.setAttribute('aria-expanded', 'true')
          faqItem.classList.add('open')
        }
      })
    })
  }

  /* ========================================================================
     7. BOOKING MODAL LOGIC
     ======================================================================== */

  function initModal() {
    const modal = document.getElementById('bookingModal')
    const form = document.getElementById('bookingForm')
    const successState = document.getElementById('modalSuccessState')

    if (!modal) return

    function openModal(serviceName) {
      if (serviceName) {
        const serviceSelect = document.getElementById('modalServiceSelect')
        if (serviceSelect) serviceSelect.value = serviceName
      }
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    }

    function closeModal() {
      modal.classList.remove('active')
      document.body.style.overflow = ''
      setTimeout(function () {
        if (form) {
          form.style.display = 'block'
          form.reset()
        }
        if (successState) successState.style.display = 'none'
      }, 400)
    }

    // Bind open buttons — use event delegation to catch dynamically rendered buttons
    document.addEventListener('click', function (e) {
      const openBtn = e.target.closest('.js-open-modal')
      if (openBtn) {
        e.preventDefault()
        openModal(openBtn.dataset.service || null)
      }
    })

    document.querySelectorAll('.js-close-modal').forEach(function (btn) {
      btn.addEventListener('click', closeModal)
    })

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal()
    })

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal()
    })

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault()

        const submitBtn = form.querySelector('button[type="submit"]')
        if (submitBtn) {
          submitBtn.disabled = true
          submitBtn.innerHTML = '<svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path></svg> Надсилання...'
        }

        setTimeout(function () {
          form.style.display = 'none'
          if (successState) successState.style.display = 'block'
          if (submitBtn) {
            submitBtn.disabled = false
            submitBtn.textContent = 'Підтвердити запис'
          }
        }, 1200)
      })
    }
  }

  /* ========================================================================
     8. MAIN INITIALIZATION (DOMContentLoaded)
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Dynamic Rendering Engine
    renderApplicationData()

    // 2. Initialize Sub-Modules
    initBeforeAfterSlider()
    initCalculator()
    initGallery()
    initFAQ()
    initModal()

    // 3. Sticky Header & Scroll Progress Indicator
    const header = document.querySelector('.header')
    const progressBar = document.querySelector('.scroll-progress-bar')

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY

      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }

      if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        progressBar.style.width = scrolled + '%'
      }
    })

    // 4. Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle')
    const mobileDrawer = document.getElementById('mobileDrawer')
    const drawerOverlay = document.getElementById('drawerOverlay')
    const drawerClose = document.getElementById('drawerClose')
    const drawerLinks = document.querySelectorAll('.drawer-link')

    function openDrawer() {
      mobileDrawer.classList.add('active')
      drawerOverlay.classList.add('active')
      document.body.style.overflow = 'hidden'
    }

    function closeDrawer() {
      mobileDrawer.classList.remove('active')
      drawerOverlay.classList.remove('active')
      document.body.style.overflow = ''
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer)
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer)
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer)
    drawerLinks.forEach(function (link) { link.addEventListener('click', closeDrawer) })

    // 5. Scroll Reveal Animations (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal-on-scroll')

    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
      }

      const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      revealElements.forEach(function (el) { revealObserver.observe(el) })
    } else {
      revealElements.forEach(function (el) { el.classList.add('is-visible') })
    }

    // 6. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')

    window.addEventListener('scroll', function () {
      let currentSectionId = ''
      const scrollPosition = window.scrollY + 180

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id')
        }
      })

      navLinks.forEach(function (link) {
        link.classList.remove('active')
        if (link.getAttribute('href') === '#' + currentSectionId) {
          link.classList.add('active')
        }
      })
    })
  })

})()

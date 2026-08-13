/* ==========================================================================
   BLACKLINE DETAILING - DYNAMIC UI RENDER ENGINE
   ========================================================================== */

import { studioData } from './data.js';

export function renderApplicationData() {
  renderServices();
  renderAdvantages();
  renderPortfolio();
  renderPackages();
  renderProcessSteps();
  renderReviews();
  renderFAQ();
  bindStudioInfo();
}

// 1. Bind Studio Information
function bindStudioInfo() {
  const phones = document.querySelectorAll('.js-bind-phone');
  phones.forEach(el => {
    const textSpan = el.querySelector('.phone-text');
    if (textSpan) {
      textSpan.textContent = studioData.info.phone;
    } else {
      el.textContent = studioData.info.phone;
    }
    if (el.tagName === 'A') el.href = `tel:${studioData.info.phoneRaw}`;
  });

  const addresses = document.querySelectorAll('.js-bind-address');
  addresses.forEach(el => el.textContent = studioData.info.address);

  const hours = document.querySelectorAll('.js-bind-hours');
  hours.forEach(el => el.textContent = studioData.info.workHours);
}

// 2. Render Services Bento Grid
function renderServices() {
  const container = document.getElementById('servicesBentoGrid');
  if (!container) return;

  container.innerHTML = studioData.services.map((srv, idx) => {
    const colClass = idx === 0 ? 'col-7' : idx === 1 ? 'col-5' : idx === 2 ? 'col-5' : 'col-7';
    return `
      <div class="glass-card bento-card ${colClass} reveal-on-scroll delay-${(idx % 3) + 1}">
        <div class="bento-card-bg">
          <img src="${srv.image}" alt="${srv.title}">
        </div>
        <div class="bento-content">
          <span class="badge" style="margin-bottom: 12px;">${srv.badge}</span>
          <h3 class="service-title">${srv.title}</h3>
          <p class="service-desc">${srv.description}</p>
          <ul class="service-features">
            ${srv.features.map(f => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${f}
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="service-footer">
          <div class="price-tag">${srv.price} <span>${srv.priceSub}</span></div>
          <button class="btn btn-secondary js-open-modal" data-service="${srv.title}">Замовити</button>
        </div>
      </div>
    `;
  }).join('');
}

// 3. Render Studio Advantages Grid
function renderAdvantages() {
  const container = document.getElementById('advantagesGrid');
  if (!container) return;

  const svgMap = {
    cleanroom: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"></path></svg>`,
    certified: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    infrared: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`,
    guarantee: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    video: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
    insurance: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
  };

  container.innerHTML = studioData.advantages.map((adv, idx) => `
    <div class="glass-card advantage-card reveal-on-scroll delay-${(idx % 3) + 1}">
      <div class="advantage-icon">
        ${svgMap[adv.icon] || svgMap.guarantee}
      </div>
      <h3 class="advantage-title">${adv.title}</h3>
      <p class="advantage-desc">${adv.description}</p>
    </div>
  `).join('');
}

// 4. Render Portfolio Gallery
function renderPortfolio() {
  const container = document.getElementById('portfolioGrid');
  if (!container) return;

  container.innerHTML = studioData.portfolio.map(item => `
    <div class="portfolio-item glass-card reveal-on-scroll" data-category="${item.category}">
      <div class="portfolio-image-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="portfolio-overlay">
          <span class="badge" style="margin-bottom: 8px;">${item.categoryName}</span>
          <h4 class="portfolio-item-title">${item.title}</h4>
          <p class="portfolio-item-sub">${item.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 5. Render Pricing Packages
function renderPackages() {
  const container = document.getElementById('packagesGrid');
  if (!container) return;

  container.innerHTML = studioData.packages.map((pkg, idx) => `
    <div class="glass-card package-card ${pkg.recommended ? 'recommended' : ''} reveal-on-scroll delay-${(idx % 3) + 1}">
      ${pkg.badge ? `<div class="package-badge">${pkg.badge}</div>` : ''}
      <h3 class="package-name">${pkg.name}</h3>
      <p class="package-tagline">${pkg.tagline}</p>
      <div class="package-price">${pkg.price}</div>
      <ul class="package-features">
        ${pkg.features.map(f => `
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${f}
          </li>
        `).join('')}
      </ul>
      <button class="btn ${pkg.recommended ? 'btn-primary' : 'btn-secondary'} js-open-modal" data-service="Пакет: ${pkg.name}" style="width: 100%;">
        Обрати пакет
      </button>
    </div>
  `).join('');
}

// 6. Render Process Steps
function renderProcessSteps() {
  const container = document.getElementById('processStepsGrid');
  if (!container) return;

  container.innerHTML = studioData.processSteps.map((step, idx) => `
    <div class="process-step-card reveal-on-scroll delay-${idx + 1}">
      <div class="step-number-watermark">${step.step}</div>
      <div class="process-icon">
        <span style="font-family: var(--font-display); font-weight: 800; color: var(--accent-gold);">${step.step}</span>
      </div>
      <h3 class="process-title">${step.title}</h3>
      <p class="process-desc">${step.desc}</p>
    </div>
  `).join('');
}

// 7. Render Reviews
function renderReviews() {
  const container = document.getElementById('reviewsGridContainer');
  if (!container) return;

  container.innerHTML = studioData.reviews.map((rev, idx) => `
    <div class="glass-card review-card reveal-on-scroll delay-${idx + 1}">
      <div>
        <div class="review-stars">★★★★★</div>
        <p class="review-quote">"${rev.text}"</p>
      </div>
      <div class="review-author">
        <div class="author-avatar">${rev.name.split(' ').map(n=>n[0]).join('')}</div>
        <div>
          <div class="author-name">${rev.name}</div>
          <div class="author-car">${rev.car}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// 8. Render FAQ Accordion
function renderFAQ() {
  const container = document.getElementById('faqAccordionContainer');
  if (!container) return;

  container.innerHTML = studioData.faq.map((item, idx) => `
    <div class="faq-item glass-card reveal-on-scroll">
      <button class="faq-question" aria-expanded="false">
        <span>${item.question}</span>
        <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${item.answer}</div>
      </div>
    </div>
  `).join('');
}

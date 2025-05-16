let swiperInstance = null;

function initSwiperOnMobile() {
    const container = document.querySelector('.comment_container');
    const cards = document.querySelectorAll('.review_card');

    if (!container || !cards.length) return;

    if (swiperInstance) {
        swiperInstance.destroy();
        swiperInstance = null;
      }

      container.innerHTML = '';

    if (window.innerWidth <= 767) {
      const slidesHTML = Array.from(cards)
        .map(card => `
          <div class="swiper-slide">
            ${card.outerHTML}
          </div>
        `).join('');
        const swiperHTML = `
        <div class="swiper" id="reviewsSwiper">
          <div class="swiper-wrapper">
            ${slidesHTML}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      `;
      container.innerHTML = swiperHTML;
      new Swiper('#reviewsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    } else {
        container.innerHTML = '';
        cards.forEach(card => container.appendChild(card));
      }
    }
    window.addEventListener('load', initSwiperOnMobile);
    window.addEventListener('resize', initSwiperOnMobile);
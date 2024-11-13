// js/modules/swiperConfig.js
export function initSwipers() {
    // Swiper untuk upcoming events (lebih dari satu event) homepage
    var swiperProduk = new Swiper(".swiperProduk", {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });
}

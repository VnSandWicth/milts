// Responsive Gallery Configuration
const initGallery = function() {
    const gallerySwiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: true,
                loop: true,
                speed: 500
            },
            769: {
                slidesPerView: 3,
                centeredSlides: false,
                loop: false
            }
        }
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
} else {
    initGallery();
}
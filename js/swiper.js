const swiper = new Swiper('.first-screen__carousel .swiper', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,

    navigation: {
        nextEl: '.first-screen__carousel .swiper-button-next',
        prevEl: '.first-screen__carousel .swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },

        1300: {
            slidesPerView: 4,
        }
    }
});

const swiper2 = new Swiper('.events__carousel .swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: '.events__carousel .swiper-button-next',
        prevEl: '.events__carousel .swiper-button-prev',
    },

    pagination: {
        el: '.events__carousel .swiper-pagination',
        type: 'fraction',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});
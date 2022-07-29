import Swiper from '../imports/import-swiper';

export default () => {
    // swiper();
    const sliderBanner = document.querySelectorAll('[data-slider-banner]');
    sliderBanner.forEach(slider => {
        let sliderInit = slider.querySelector('.swiper-container');
        // let sliderBtnPrev = slider.querySelector('.btn_slider_prev');
        // let sliderBtnNext = slider.querySelector('.btn_slider_next');
        let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 1,
            speed: 500,
            parallax: true,
            // slidesPerGroup: 4,
            // spaceBetween: 30,
            watchOverflow: true,
            loop: true,
            // autoHeight: true,
            // loopFillGroupWithBlank: true,

            // simulateTouch: false,
            // watchOverflow: true,
            // longSwipes: true,
            // touchMoveStopPropagation: true,
            // loop: true,
            // loopFillGroupWithBlank: true,
            // observeParents: true,
            // observeSlideChildren: true,
            // observer: true,
            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: sliderPagination,
                clickable: true,
            },
            // navigation: {
            //     nextEl: sliderBtnNext,
            //     prevEl: sliderBtnPrev,
            // },
            // breakpoints: {
            //     1199: {
            //         slidesPerView: 4,
            //         spaceBetween: 30,
            //     },
            //     767: {
            //         slidesPerView: 3,
            //         spaceBetween: 30,
            //     },
            //     0: {
            //         slidesPerView: 2,
            //         spaceBetween: 15,
            //     },
            // }
        });
    });

    // slider 2
    const sliderImgOne = document.querySelectorAll('[data-slide-img-one]');
    sliderImgOne.forEach(slider => {
        let sliderInit = slider.querySelector('.swiper-container');
        let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 1,
            speed: 500,
            watchOverflow: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: sliderPagination,
                clickable: true,
            },
        });
    });

    // slider 3
    const sliderCardsThree = document.querySelectorAll('[data-slider-card-three]');
    sliderCardsThree.forEach(slider => {
        let sliderInit = slider.querySelector('.swiper-container');
        let sliderBtnPrev = slider.querySelector('.btn_slider_prev');
        let sliderBtnNext = slider.querySelector('.btn_slider_next');
        let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 3,
            speed: 500,
            watchOverflow: true,
            pagination: {
                el: sliderPagination,
                clickable: true,
            },
            navigation: {
                nextEl: sliderBtnNext,
                prevEl: sliderBtnPrev,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }
        });
    });

}

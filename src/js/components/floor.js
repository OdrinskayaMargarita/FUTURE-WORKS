import Swiper from 'swiper/bundle';
import gsap from 'gsap';
import idx from '../helpers/idx';
import classToggle from '../helpers/classToggle';

export default () => {
    const parent = 'floor';


    let popup = document.querySelector(`.${parent}`);
    let tabs = document.querySelectorAll('.floor__tab');
    let btns = document.querySelectorAll('.floor__button');
    let closeBtn = document.querySelector(`.${parent}__close`);

    if (btns.length) {
        btns.forEach(function (btn) {
            btn.addEventListener('click', (e) => {
                let i = idx(btn)
                classToggle(btns, btn, 'floor__button--active');
                classToggle(tabs, tabs[i], 'floor__tab--visible');
            });
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            popup.classList.remove('floor--visible');
        });
    }

    if (tabs.length) {
        tabs.forEach(function (tab) {
            let gallery = tab.querySelector(`.${parent}__slider`);

            let gallerySlider = new Swiper(gallery, {
                wrapperClass: `${parent}__slider-wrapper`,
                slideClass: `${parent}__slide`,
                slideActiveClass: `${parent}__slide--active`,
                slidesPerView: 1,
                speed: 400,
                allowTouchMove: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            });


            let textSlider = tab.querySelector(`.${parent}__text-slider`);
            if (textSlider) {
                let textSliderSwiper = new Swiper(textSlider, {
                    wrapperClass: `${parent}__text-slider-w`,
                    slideClass: `${parent}__text-slide`,
                    slideActiveClass: `${parent}__text-slide--active`,
                    slidesPerView: 1,
                    allowTouchMove: false,
                    speed: 400,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                });

                gallerySlider.controller.control = textSliderSwiper;
            }

            let slider = tab.querySelector('.floor__slider');
            let select = tab.querySelector('.select');

            let currentVal = tab.querySelector('.select__current');
            let newVal = tab.querySelector('.select__new-label');

            if (slider && select) {
                select.addEventListener('click', (e) => {
                    select.classList.toggle('select--expanded');
                });

                let options = select.querySelectorAll('.select__item');
                let list = select.querySelectorAll('.select__list');
                list.forEach(function (listItem) {
                    options.forEach(function (option) {
                        option.addEventListener('click', (e) => {
                            let optionVal = option.innerText;

                            if (optionVal !== currentVal.innerText) {
                                console.log(optionVal)
                                newVal.innerText = optionVal;

                                let index = idx(option);
                                gallerySlider.slideTo(index);

                                let tl = gsap.timeline({
                                    onComplete: () => {
                                        currentVal.innerText = optionVal;
                                        newVal.innerText = '';

                                        gsap.set(currentVal, {
                                            y: '0%',
                                        });

                                        gsap.set(newVal, {
                                            y: '-110%',
                                        });
                                    }
                                });

                                let direction;

                                parseInt(currentVal.innerText) > parseInt(optionVal) ? direction = 0 : direction = 1;

                                tl.to(currentVal, {
                                    y: direction === 1 ? '100%' : '-100',
                                    duration: 0.5
                                }, 0);

                                tl.fromTo(newVal, {
                                    y: direction === 1 ? '-100%' : '100%',
                                }, {
                                    y: '0%',
                                    duration: 0.5,
                                }, 0);
                            }
                        });
                    });
                })
            }
        });
    }
}

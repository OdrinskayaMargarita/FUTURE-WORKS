import Swiper from 'swiper/bundle';


export default () => {
  const sliderPrefix = 'news__';
  let sliderEl = document.querySelector(`.${sliderPrefix}slider`);

  if (sliderEl) {
    let slider = new Swiper(sliderEl, {
      wrapperClass: `${sliderPrefix}slider-wrapper`,
      slideClass: `${sliderPrefix}slide`,
      slideActiveClass: `${sliderPrefix}slide--active`,
      // slidesPerView: 2.65,
      slidesPerView: 'auto',
      centeredSlides: true,
      speed: 300,
      spaceBetween: 30,
      loop: true,
      
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        768: {
          spaceBetween: 55,
        },
        
      },
    });
  }
}
import Swiper from 'swiper/bundle';

export default ()=> {
  const sliderClass = 'gallery';
  let galleries = document.querySelectorAll(`.${sliderClass}`);

  if (galleries.length) {
    galleries.forEach(function(gallery) {
      let pagination = gallery.querySelector('.pagination');

      let slider = new Swiper(gallery, {
        wrapperClass: `${sliderClass}__wrapper`,
        slideClass: `${sliderClass}__slide`,
        slideActiveClass: `${sliderClass}__slide--active`,
        slidesPerView: 1,
        speed: 600,
        loop: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: pagination,
          type: 'bullets',
          bulletClass: 'pagination__bullet',
          bulletActiveClass: 'pagination__bullet--active',
          clickable: true
        },

        breakpoints: {
          // 767: {
            
          // },
        },
      });
    });
  }
}
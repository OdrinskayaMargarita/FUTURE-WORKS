import barba from '@barba/core';
import gsap from 'gsap';
import Header from './components/Header';
import headerColor from './components/header-color';
import swiperSlider from './components/sliders';
import tabs from './components/tab';
import deco from './components/deco';
import news from './components/news';
import accordion from './components/accordion';
import video from './components/video';
import selectChoise from './components/select';
import svg from './components/svg';
import circle from './components/circle';
import customScroll from './components/customScroll';
import gallery from './components/gallery';
import floor from './components/floor';
import popupFeedback from './components/popup-feedback';

export default () => {

  barbaInit();

  const header = new Header();
  header.init();
  runCommonScripts();
  headerColor();

  function runCommonScripts() {
    swiperSlider();
    tabs();
    deco();
    news();
    accordion();
    video();
    selectChoise();
    svg();
    circle();
    gallery();
    floor();
    popupFeedback();
    customScroll();
  }

  function barbaInit() {
    const TIMING_TRANSITION = 1;
    const headerElem = document.querySelector('#header');
    const hiroTabsElem = document.querySelector('#hiro-tabs');

    const HIRO_TABS = {
      defaultPage: '',
      pagesPage: '',
      homePage: '',
      availabilityPage: 'open',
      availabilityTwoPage: 'open',
      availabilityThreePage: 'open',
      buildingPage: ''
    };

    barba.init({
      // debug: true,
      cacheIgnore: true,
      transitions: [{

        leave(data) {
          const done = this.async();
          header.hideMenu();

          gsap.to(
            data.current.container,
            {
              opacity: 0,
              ease: 'power1',
              duration: TIMING_TRANSITION
            }).eventCallback('onComplete', function(){
              done();
            }
          );
        },

        beforeEnter(data) {
          data.current.container.remove();
          window.scrollTo(0,0);
          runCommonScripts();

          if (window.triggers && window.triggers.length) {
            window.triggers.forEach(function(st) {
              st.kill();
            });
            triggers.length = 0;
          }

          for (let page in HIRO_TABS) {
            if (HIRO_TABS[page]) {
                hiroTabsElem.classList.remove(HIRO_TABS[page]);
            }
          }

          let namespace = data.next.namespace;

          if (HIRO_TABS[namespace]) {
            hiroTabsElem.classList.add(HIRO_TABS[namespace]);
          }
        },

        enter(data) {
          window.scrollTo(0,0);
          headerColor();
          const done = this.async();

          gsap.fromTo(
            data.next.container,
            {
              opacity: 0
            },
            {
              ease: 'power1',
              opacity: 1,
              duration: TIMING_TRANSITION
            }
            )
          .eventCallback('onComplete', function(){
            done();
          });
        },

      }]
    });

  }
}

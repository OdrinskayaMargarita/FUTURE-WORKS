import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  let header = document.querySelector('.header');
  const DARK = 'header--dark';

  if (header) {
    let hero = document.querySelector('.home-hero, .bl-banner');

    if (hero) {
      header.classList.remove(DARK);
      let st = ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "bottom 40px",
        onLeave: () => {
          header.classList.add(DARK);
        },
        onEnterBack: () => {
          header.classList.remove(DARK);
        }
      });
      if(!Array.isArray(window.triggers)) {
        window.triggers = [];
      }
      window.triggers.push(st);
    } else {
      header.classList.add(DARK);
    }
  }
}
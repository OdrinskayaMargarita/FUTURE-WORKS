import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  console.log('1')

  let items = document.querySelectorAll('.deco');
  const ANGLE = 50;

  if (items.length) {
    items.forEach(function(deco) {
      let images = deco.querySelectorAll('.deco__img');

      if (images.length) {

        gsap.to(deco, {
          opacity: 1,
          duration: 0.3
        });

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: deco,
            start: "top 110%",
            end: "bottom -30%",
            scrub: true,
            onUpdate: (self) => {
              
            }
          }
        });

        images.forEach((image, index) => {
          tl.to(image, {
            rotate: index % 2 === 0 ? ANGLE : -ANGLE
          }, 0)
        });
      }
    });
  }
}
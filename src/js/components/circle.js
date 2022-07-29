import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  gsap.registerPlugin(ScrollTrigger);

  let items = document.querySelectorAll('.talent__circle');
  const DURATION = 0.7;

  if (items.length) {
    let tl = gsap.timeline({
      scrollTrigger: {
          trigger: items[0],
          start: 'top 80%', 
          end: 'top 20%',
          // scrub: true,
          // markers: true,
          once: true,
        }
    });

    items.forEach(function(item, index) {
      const svg = item.querySelector('svg');
      const circle = item.querySelector('circle');

      if (svg && circle) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        gsap.to(svg, {
          opacity: 1,
          duration: 0.3
        });
        
        tl.to(circle, {
          strokeDashoffset: circumference*((items.length - (index+1))/items.length),
          duration: DURATION+((DURATION*(index+1))/3),
          ease: 'power1.out',
        }, `-=${DURATION*0.3}`)
      }
    });
  }
}
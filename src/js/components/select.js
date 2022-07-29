import gsap from 'gsap';
import selectChoices from "choices.js";

export default () => {
    const defaultSelect = document.querySelectorAll(".select-st");
    defaultSelect.forEach(element => {
        const select = new selectChoices(element, {
            searchEnabled: false,
            maxItemCount: 12,
            shouldSort: false,
        })
    });



    // connectivity map calc
    let stationSelect = document.querySelector('.grid-calc .select-st');
    let timer = document.querySelector('.js-time-count');

    if (stationSelect && timer) {
        stationSelect.addEventListener('change', (e) => {
            let newTime = +e.target.value;
            let oldTime = +timer.innerText
            let dummy = {val: oldTime};
            
            gsap.to(dummy, {
                val: newTime,
                duration: 0.6,
                onUpdate: (self) => {
                    timer.innerText = Math.round(dummy.val);
                }
            })
        });
    }
}

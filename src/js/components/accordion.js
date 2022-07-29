export default () => {
    const accElem = document.querySelectorAll('.acc-bl');

    accElem.forEach(elem => {
        let btn = elem.querySelector('.acc-bl__head');
        let allBlocks = document.querySelectorAll('.acc-bl');
        let classHidden = '_close';
        btn.addEventListener('click', ()=> {
            elem.classList.toggle(classHidden);
            allBlocks.forEach(all => {
                if(elem !== all){
                    all.classList.add(classHidden);
                }
            });
        })
    });


    const activeElementTabs = document.querySelectorAll('#hiro-tabs .card-st');
    activeElementTabs.forEach(item => {
        item.addEventListener('click', ()=> {

            activeElementTabs.forEach(function (item) {
                item.classList.remove("_active");
            });
            item.classList.add("_active");
        })
    });

}



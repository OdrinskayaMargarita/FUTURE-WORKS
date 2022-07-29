export default (function() {
  let popup = document.querySelector('.popup-feedback');
  const POPUP_VISIBLE = 'popup-feedback--visible';
  let grid = document.querySelector('.card-contact-grid');
  const GRID_UNLOCKED = 'is-unlocked';
  let form = document.querySelector('.popup-feedback__form');

  if (popup && grid && form) {
    let btnClose = popup.querySelector('.popup-feedback__btn-close');
    if (btnClose) {
      btnClose.addEventListener('click', (e) => {
        popup.classList.remove(POPUP_VISIBLE);
      });
    }

    let items = grid.querySelectorAll('.card-dwnld');

    items.forEach(function(item) {
      item.addEventListener('click', (e) => {
        if (!grid.classList.contains(GRID_UNLOCKED)) {
          e.preventDefault();
          popup.classList.add(POPUP_VISIBLE);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      popup.classList.remove(POPUP_VISIBLE);
      grid.classList.add(GRID_UNLOCKED);
    });
  }
})
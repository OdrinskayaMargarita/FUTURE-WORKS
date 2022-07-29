export default class {
  constructor() {
    this.header = document.getElementById('header');
    this.burger = this.header.querySelector('.header__burger');
    this.menu = document.getElementById('menu');
  }

  init() {
    this.toggleMenu();
  }

  toggleMenu() {
    this.burger.addEventListener('click', () => {
      this.header.classList.toggle('header--open');
      this.menu.classList.toggle('menu--open');
      document.body.classList.toggle('no-overflow');
    })
  }

  showMenu() {
    this.header.classList.add('header--open');
    this.menu.classList.add('menu--open');
    document.body.classList.add('no-overflow');
  }

  hideMenu() {
    this.header.classList.remove('header--open');
    this.menu.classList.remove('menu--open');
    document.body.classList.remove('no-overflow');
  }

}

import './index.css';

class Collapse {
  constructor(buttonElement) {
    this._button = buttonElement;
    this._content = this._button
      .closest('.collapse-widget')
      .querySelector('.card');

    this._onButtonClick = this._onButtonClick.bind(this);

    this._init();
  }

  _init() {
    this._button.addEventListener('click', this._onButtonClick);
  }

  _onButtonClick() {
    this._content.classList.toggle('show');
  }
}

const collapseButtons = document.querySelectorAll('.collapse-button');

collapseButtons.forEach((button) => {
  new Collapse(button);
});
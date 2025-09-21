export class Card {
  constructor({ title, subtitle, price, img, classes = [] }) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.img = img;
    this.classes = Array.isArray(classes) ? classes : classes.split(" ");
  }
  

  // Метод для создания DOM-элемента карточки
  render() {
    const li = document.createElement('li');
    li.classList.add('main__right-item', ...this.classes);

    li.innerHTML = `
      <div class="main__img-container">
        <img class="main__img load" src="${this.img}" alt="${this.subtitle}" loading="lazy">
      </div>
      <div class="main__right-container">
        <h3 class="main__item-title">${this.title}</h3>
        <p class="main__item-subtitle">${this.subtitle}</p>
        <span class="main__item-price">${this.price}</span>
      </div>
      <div class="main__buttons">
        <button class="main__buy-button" data-title="${this.title}">В корзину</button>
      </div>
    `;


    return li;
  }
}


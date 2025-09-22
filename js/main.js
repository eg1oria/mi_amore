import { Card } from "./flowersCard.js";
import { cardsData } from "./flowersMassive.js";
import { btnFunc } from "./buttonsCatalog.js";
import { basketActive, renderBasket } from "./basket.js";
import { renderPayPage } from "./pay.js";


document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.main__right-list');
  if (list) {
    cardsData.forEach(data => {
      const card = new Card(data);
      list.append(card.render());
    });
    btnFunc();
  }

  // корзина
  const basket = document.querySelector('.basket');
  if (basket) {
    basketActive();
    renderBasket();
  }

  // страница оплаты
  const payList = document.querySelector('.pay__list');
  if (!payList) {
    renderPayPage();
    
  }
});




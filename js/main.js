import { Card } from "./flowersCard.js";
import { cardsData } from "./flowersMassive.js";
import { btnFunc } from "./buttonsCatalog.js";
import { basketActive, renderBasket } from "./basket.js";


document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.main__right-list');

  cardsData.forEach(data => {
    const card = new Card(data);
    list.append(card.render());
  });

  btnFunc()
  basketActive()
  renderBasket()
});




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

  function addToBasket(title, price, imgSrc) {
  const basketList = document.querySelector(".basket__list");
  const emptyBlock = document.querySelector(".basket__empty-block");

  // читаем текущую корзину из localStorage (или пустой массив)
  let basket = JSON.parse(localStorage.getItem("basket")) || [];

  // создаём объект товара
  const item = { title, price, imgSrc };

  // добавляем в массив
  basket.push(item);

  // сохраняем обратно
  localStorage.setItem("basket", JSON.stringify(basket));

  // обновляем интерфейс
  renderBasket();
}
});







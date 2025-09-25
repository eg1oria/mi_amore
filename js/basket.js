import { getItems, setItems } from "./storage.js";

export function basketActive() {
  const basketBtn = document.querySelector('.header__search-button')
  const basketCont = document.querySelector('.header__basket')

  basketBtn.addEventListener('click', (event) => {
    basketCont.classList.toggle('basket--active');
  });

  basketCont.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  window.addEventListener('click', (event) => {
    if (!basketBtn.contains(event.target) && !basketCont.contains(event.target)) {
      basketCont.classList.remove('basket--active');
    }
  });
}

export function renderBasket() {
  const basket = document.querySelector(".basket");
  const basketList = basket.querySelector(".basket__list");
  const emptyBlock = basket.querySelector(".basket__empty-block");
  const linkBtn = basket.querySelector(".basket__link");

  basketList.innerHTML = ""; // очищаем перед рендером

  const savedItems = getItems();

  if (savedItems.length > 0) {
    linkBtn.style.display = "flex";
    emptyBlock.style.display = "none";
    savedItems.forEach(item => addToBasket(item.title, item.price, item.imgSrc, item.count, false));
  } else {
    linkBtn.style.display = "none";
    emptyBlock.style.display = "block";
  }

  document.querySelectorAll(".main__buy-button").forEach((btn) => {
    const card = btn.closest(".main__right-item");
    if (!card) return;

    const minusBtn = card.querySelector(".main__minus");
    const plusBtn = card.querySelector(".main__plus");
    const mainCount = card.querySelector(".main__count");

    let count = 0;

    plusBtn.addEventListener("click", () => {
      count++;
      mainCount.textContent = count;
    });

    minusBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        mainCount.textContent = count;
      }
    });

    btn.addEventListener("click", () => {
      if (count === 0) {
        alert("Сначала выберите количество!");
        return;
      }

      const titleEl = card.querySelector(".main__item-title");
      const priceEl = card.querySelector(".main__item-price");
      const imgEl = card.querySelector(".main__img");

      const title = titleEl ? titleEl.textContent : "Без названия";
      const price = priceEl ? priceEl.textContent : "0 ₸";
      const imgSrc = imgEl ? imgEl.getAttribute("src") : "images/placeholder.png";

      const items = getItems();
      const newItem = { title, price, imgSrc, count };
      items.push(newItem);
      setItems(items);

      btn.textContent = "В корзине";
      btn.classList.add("added");
      btn.disabled = true;

      addToBasket(title, price, imgSrc, count);
      count = 0;
      mainCount.textContent = count;
    });
  });

  function addToBasket(title, price, imgSrc, count = 1, save = true) {
    emptyBlock.style.display = "none";
    linkBtn.style.display = "flex";

    const li = document.createElement("li");
    li.classList.add("basket__item");

    li.innerHTML = `
      <div class="basket__img">
        <img src="${imgSrc}" alt="${title}" height="60" width="60">
      </div>
      <span class="basket__name">${title}</span>
      <span class="basket__count">x${count}</span>
      <span class="basket__price">${price.replace(/\D/g, '') * count} ₸</span>
      <button class="basket__item-close" type="button">
        <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="images/sprite.svg#icon-close"></use>
        </svg>
      </button>
    `;

    li.querySelector(".basket__item-close").addEventListener("click", () => {
      li.remove();

      let items = getItems();
      items = items.filter(item => !(item.title === title && item.price === price && item.imgSrc === imgSrc));
      setItems(items);

      const btn = document.querySelector(`.main__buy-button[data-title="${title}"]`);
      if (btn) {
        btn.textContent = "В корзину";
        btn.classList.remove("added");
        btn.disabled = false;
      }

      if (basketList.children.length === 0) {
        emptyBlock.style.display = "block";
        linkBtn.style.display = "none";
      }
    });

    basketList.appendChild(li);

    if (save) {
      const items = getItems();
      items.push({ title, price, imgSrc, count });
      setItems(items);
    }
  }

  updateButtonsState();

  function updateButtonsState() {
    const items = getItems();
    items.forEach(item => {
      const btn = document.querySelector(`.main__buy-button[data-title="${item.title}"]`);
      if (btn) {
        btn.textContent = "В корзине";
        btn.classList.add("added");
        btn.disabled = true;
      }
    });
  }
}

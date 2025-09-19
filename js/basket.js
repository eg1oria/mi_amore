export function basketActive() {
    const basketBtn = document.querySelector('.header__search-button')
    const basketCont = document.querySelector('.header__basket')

    basketBtn.addEventListener('click', () => {
        basketCont.classList.toggle('basket--active')
    })
}

export function renderBasket() {
    const basket = document.querySelector(".basket");
    const basketList = basket.querySelector(".basket__list");
    const emptyBlock = basket.querySelector(".basket__empty-block");

    document.querySelectorAll(".main__buy-button").forEach((btn) => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".main__right-item");
            if (!card) return;

    const titleEl = card.querySelector(".main__item-title");
    const priceEl = card.querySelector(".main__item-price");
    const imgEl = card.querySelector(".main__img");

    const title = titleEl ? titleEl.textContent : "Без названия";
    const price = priceEl ? priceEl.textContent : "0 ₸";
    const imgSrc = imgEl ? imgEl.getAttribute("src") : "images/placeholder.png";

            addToBasket(title, price, imgSrc);
        });
    });

    function addToBasket(title, price, imgSrc) {
        emptyBlock.style.display = "none";

        const li = document.createElement("li");
        li.classList.add("basket__item");

        li.innerHTML = `
      <div class="basket__img">
        <img src="${imgSrc}" alt="${title}" height="60" width="60">
      </div>
      <span class="basket__name">${title}</span>
      <span class="basket__price">${price}</span>
      <button class="basket__item-close" type="button">
        <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="images/sprite.svg#icon-close"></use>
        </svg>
      </button>
    `;

        li.querySelector(".basket__item-close").addEventListener("click", () => {
            li.remove();
            if (basketList.children.length === 0) {
                emptyBlock.style.display = "block";
            }
        });

        basketList.appendChild(li);
    }
}


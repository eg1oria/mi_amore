import { getItems, setItems } from "./storage.js";

export function renderPayPage() {
    const payList = document.querySelectorAll(".pay__list");
    const payCount = document.querySelector('.pay__right-count');
    const paySumm = document.querySelector(".pay__right-summ")
    let summ = 0;
    if (!payList) return;

    const savedItems = getItems();

    if (savedItems.length === 0) {
        payList.innerHTML = "<li>Корзина пуста</li>";
        return;
    }

    savedItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("pay__item");

        li.innerHTML = `
            <div class="pay__img">
                <img src="${item.imgSrc}" alt="${item.title}" height="120" width="120">
            </div>
            <span class="pay__name">${item.title}</span>
            <span class="pay__price">${item.price}</span>
        `;
            if (savedItems.length === 0) {
                payList.innerHTML = "<li>Корзина пуста</li>";
                
            } 

        let total = 0;

savedItems.forEach(item => {
    let priceNum = Number(item.price.replace(/\D/g, ''));
    priceNum += summ;
    item.price = `${priceNum} ₸`;
    total += priceNum;
});

if (paySumm) {
    paySumm.textContent = `Общая сумма: ${total} ₸`;
}
        payCount.textContent = `Товаров: ${savedItems.length}`;
        
        payList.forEach(list => list.append(li));
    });
}

document.addEventListener("DOMContentLoaded", renderPayPage);

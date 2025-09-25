

export function btnFunc() {
const roseBtn = document.querySelector("#roseBtn")
const toulBtn = document.querySelector("#toulBtn")
const sunflBtn = document.querySelector("#sunflBtn")
const irisBtn = document.querySelector("#irisBtn")

const allBtn = document.querySelector("#all")

const listCont = document.querySelectorAll('.main__right-item')

const loadMoreBtn = document.querySelector("#loadMore");




    listCont.forEach(item => {
        if (!item.classList.contains("more")) {
            item.style.display = "none";
        }
    });

roseBtn.addEventListener('click', () => {
    listCont.forEach(item => {
        item.style.display = "flex";
    });
    listCont.forEach(item => {
        if (!item.classList.contains("rose")) {
            item.style.display = "none";
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = "Это всё ("
        }
    });
});

irisBtn.addEventListener('click', () => {
    listCont.forEach(item => {
        item.style.display = "flex";
    });
    listCont.forEach(item => {
        if (!item.classList.contains("iris")) {
            item.style.display = "none";
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = "Это всё ("
        }
    });
});

sunflBtn.addEventListener('click', () => {
    listCont.forEach(item => {
        item.style.display = "flex";
    });
    listCont.forEach(item => {
        if (!item.classList.contains("sunfl")) {
            item.style.display = "none";
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = "Это всё ("
        }
    });
});

toulBtn.addEventListener('click', () => {
    listCont.forEach(item => {
        item.style.display = "flex";
    });
    listCont.forEach(item => {
        if (!item.classList.contains("toul")) {
            item.style.display = "none";
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = "Это всё ("
        }
    });
});

let itemsToShow = 6;

function showItems() {
    for (let i = 0; i < itemsToShow && i < listCont.length; i++) {
        listCont[i].style.display = "flex";
    }
}

showItems();

loadMoreBtn.addEventListener("click", () => {
    itemsToShow += 3;
    showItems();
    if (itemsToShow >= listCont.length) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "Это всё ("
    }
});

allBtn.addEventListener('click', () => {
    listCont.forEach(item => {
        item.style.display = "flex";
    });
    itemsToShow = 6
    listCont.forEach(item => {
        if (!item.classList.contains("more")) {
            item.style.display = "none";
            loadMoreBtn.disabled = false;
            loadMoreBtn.textContent = "Показать ещё"
        }
    });
});


}
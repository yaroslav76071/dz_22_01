const URL = "http://localhost:3000/PRODUCTS";
let data = 0;
let i = 1;
const BTN = document.querySelector('.button');
const LIST = document.querySelector('.container');
const getData = async (url) => {
    const res = await fetch(url);
    data = await res.json();
    return data
}

const fillList = (list, data) => {
     for (let key in data) {
         list.insertAdjacentHTML(`beforeend`, `
            <div class="product${i}">
                <div class="img"><img src="${data[key]["img"]}" alt=""></div>
                <div class="name"><span>${data[key]["name"]}</span></div>
                <div class="price"><span>${data[key]["price"]}</span></div>
                <div class="number">${data[key]["number"]}</div>
            </div>
        `);
        i++;
     }
}

BTN.addEventListener('click', async () => {
     let data2 = await getData(URL)
     fillList(LIST, data2)
})   
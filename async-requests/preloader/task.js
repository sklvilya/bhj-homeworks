let valute;
let valuteContanier = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        valute = xhr.response.response.Valute
        console.log(valute);
        console.log(typeof (valute));

        loader.classList.toggle('loader_active');

        for (let valueItem in valute) {
            valuteContanier.insertAdjacentHTML('afterbegin', `<div class="item">
            <div class="item__code">
                ${valute[valueItem].CharCode}
            </div>
            <div class="item__value">
                ${valute[valueItem].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
            `);
        }

    }
}
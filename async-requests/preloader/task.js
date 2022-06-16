let valute = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener("load", () => {
	if (xhr.readyState === 4 && xhr.status == 200) {
		loader.classList.remove("loader_active");

		const valutes = JSON.parse(xhr.responseText).response.Valute;
		console.log(valutes);

		for (valute in valutes) {
			const item = document.createElement("div");
			item.classList.add("item");
			item.innerHTML = `<div class="item__code">
            ${valutes[valute].CharCode}
        </div>
        <div class="item__value">
            ${valutes[valute].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>`;
			items.appendChild(item);
		}
	}
});


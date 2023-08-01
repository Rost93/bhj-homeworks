// task.js
const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function showLoader() {
    loader.classList.add('loader_active');
}

function hideLoader() {
    loader.classList.remove('loader_active');
}

function renderCurrencyItem(currency) {
    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = currency.CharCode;

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = currency.Value;

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';

    const item = document.createElement('div');
    item.classList.add('item');
    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);

    itemsContainer.appendChild(item);
}

function loadCurrencyData() {
    showLoader();

    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            hideLoader();

            const valute = data.response.Valute;
            for (const currency in valute) {
                renderCurrencyItem(valute[currency]);
            }
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
            hideLoader();
        });
}

loadCurrencyData();

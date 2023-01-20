let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEuro = 4.6659;
let rateDollar = 4.3935;
let rateFunt = 5.3030;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "Euro":
            result = amount * rateEuro;
            break
        case "Dolar amerykanski":
            result = amount * rateDollar;
            break
        case "Funt":
            result = amount * rateFunt;
            break
    }

    resultElement.innerText = result.toFixed(2);
})
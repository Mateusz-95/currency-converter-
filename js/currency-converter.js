const calculateResult = (amount, currency) => {

    const rateEuro = 4.6659;
    const rateDollar = 4.3935;
    const rateFunt = 5.3030;

    switch (currency) {
        case "Euro":
            return amount * rateEuro;
        case "Dolar amerykanski":
            return amount * rateDollar;
        case "Funt":
            return amount * rateFunt;
    }
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const resultElement = document.querySelector(".js-result");
    const currencyElement = document.querySelector(".js-currency");

    const result = calculateResult(+amountElement.value, currencyElement.value);

    resultElement.innerText = result.toFixed(2);
    const amountElement = document.querySelector(".js-amount");
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};


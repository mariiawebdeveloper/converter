function formatNumber(number) {
    return number.toFixed(4);
}

function calculateAmount(amount, rate1, rate2) {
    return formatNumber(amount * rate2 / rate1);
}

function getRates(data) {
    let rates = {};
    data.forEach((item) => (rates[item.cc] = item.rate));
    return rates;
}

export { formatNumber, calculateAmount, getRates };
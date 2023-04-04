import {useEffect, useState} from "react";

export function useCurrencyConverter() {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("EUR");
    const [rates, setRates] = useState([]);

    function getRates(data) {
        let rates = {};
        data.forEach((item) => (rates[item.cc] = item.rate));
        return rates;
    }

    useEffect(() => {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then((res) => res.json())
            .then((response) => {
                let rates = getRates(response);
                setRates(rates);
            });
    }, []);

    useEffect(() => {
        if (!!rates) {
            function init() {
                handleAmount1Change(1);
            }
            init();
        }
    }, [rates]);

    function format(number) {
        return number.toFixed(4);
    }

    function handleAmount1Change(amount1) {
        setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
        setCurrency2(currency2);
    }

    return {
        amount1,
        amount2,
        currency1,
        currency2,
        rates,
        handleAmount1Change,
        handleAmount2Change,
        handleCurrency1Change,
        handleCurrency2Change,
    };
}
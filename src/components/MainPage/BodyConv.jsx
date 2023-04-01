import '../../App.css';
import CurrencyInput from "./CurrencyInput";
import {useEffect, useState} from "react";
import axios from "axios";

function Body() {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [rates, setRates] = useState([]);

    function getRates(data) {
        let rates = {}
        data.forEach((item) => rates[item.cc] = item.rate)
        return rates
    }

    useEffect(() => {
        axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(response => {

                setRates(getRates(response.data));
                console.log("rates", rates)
            })
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
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }


    return (
        <div>
            <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1}/>
            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2}/>
        </div>
    );
}

export default Body;
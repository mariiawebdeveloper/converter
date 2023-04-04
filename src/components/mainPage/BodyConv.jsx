import "../../App.css";
import CurrencyInput from "./CurrencyInput";
import {useCurrencyConverter} from "../../services/useCurrencyConverter";


function Body() {
    const {
        amount1,
        amount2,
        currency1,
        currency2,
        rates,
        handleAmount1Change,
        handleAmount2Change,
        handleCurrency1Change,
        handleCurrency2Change,
    } = useCurrencyConverter();

    return (
        <div>
            <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1}
            />
            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2}
            />
        </div>
    );
}

export default Body;
import { useState, useEffect } from "react";

function useCurrencyExchange() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.filter((item) => item.cc === "EUR" || item.cc === "USD"));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    return {
        error,
        isLoaded,
        items,
    };
}

export default useCurrencyExchange;
import React from "react";
import useCurrencyExchange from "../customHooks/useCurrencyExchange";


function CurrencyExchange() {
    const { error, isLoaded, items } = useCurrencyExchange();

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (  <div className={'header'}>
                <div> Latest update: {items[0].exchangedate}</div>
                <div className={'items'} >

                    {items.map(item => (
                        <>
                            <div key={item.r030}> Ratio  {item.cc} to the UAH: {item.rate}</div>
                        </>
                    ))}
                </div>
            </div>
        );
    }
}

export default CurrencyExchange;
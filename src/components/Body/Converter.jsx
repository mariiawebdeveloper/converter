import React, {Component} from 'react';
import arrow from '../img/Arrow.png'
import ConverterInput from "./ConverterInput";

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies:[
                {name: 'UAH', rate: '1'},
                {name: 'EUR', rate: '36.5686'},
                {name: 'USD', rate: '38.7426'},


            ]
        }
    }
    render() {
        return (
            <div>
                <ConverterInput/>
                <div><img src={arrow} width={35} height={35}/></div>
                <ConverterInput/>

            </div>
        );
    }
}

export default Converter;
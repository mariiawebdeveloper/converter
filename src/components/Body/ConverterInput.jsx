import React, {Component} from 'react';


class ConverterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [
                {name: 'UAH', rate: '1'},
                {name: 'EUR', rate: '36.5686'},
                {name: 'USD', rate: '38.7426'},


            ]
        }
    }

    render() {
        return (<div>
                <input value={`${this.state.currencies.rate}`}/>
                <select>{this.state.currencies.map((options) => (
                    <option>{options.name}</option>
                ))}
                </select>
            </div>
        );
    }
}

export default ConverterInput;
import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []

        }
    }


    componentDidMount() {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result.filter((item) => item.cc === "EUR" || item.cc === "USD")

                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error

                    })
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div key={item.r030}>{item.txt}{item.rate}</div>
                    ))}
                </div>
            );
        }

    }
}

export default Header;
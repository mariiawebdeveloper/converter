import React, {Component} from 'react';
import './About.css'
import AboutPhoto from '../../img/aboutart.jpg'


class About extends Component {
    render() {
        return (
            <div>
                <div className='flex-preMain'>
                    <div><h2>Welcome to the "About Us" </h2><h2>page of our currency converter!</h2></div>

                </div>
                <div className={'text-location'}>

                    <div className={'description-location'}><p>We are glad to welcome you to our website, which allows
                        you to quickly and conveniently
                        convert currencies at the current exchange rate. Our service is designed for those who want to
                        carry out financial transactions without additional costs for bank commissions and exchange
                        points.</p></div>

                    <div className={'container'}>
                        <div><img src={AboutPhoto} width={500} height={500} /></div>
                        <div className={'description-location'}><p className={' text-about'}>We are working to provide our users with up-to-date
                            and accurate information on exchange rates, so we regularly update data using reliable
                            sources. We also provide a wide selection of currencies for conversion so that our users can
                            easily and quickly select the desired currency.
                            Our goal is to provide our customers with the highest level of service and satisfaction from
                            using our currency converter. </p></div>
                    </div>
                    <div><h2>Thank you for using our service,  </h2><h2>and we hope it will help you in your financial transactions.</h2></div>


                </div>
            </div>
        );
    }
}

export default About;
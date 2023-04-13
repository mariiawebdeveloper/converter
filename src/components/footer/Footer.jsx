import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Footer.css'


class Footer extends Component {

    render() {
        return (<>
                <div className={'logo'}><img width={200} height={120} src={'./image/Lantern.png'}/></div>
                <div className={'footer-location'}>
                    <div>
                        <div><p>Location</p></div>
                        <div><p>Street 11 city country</p></div>
                    </div>
                    <div>
                        <div><p>Open Hours</p></div>
                        <div> <p> 11 am - 3 am</p></div>
                    </div>
                    <div>
                    <div><Link to={'/'} className={'links'}>Home</Link></div>
                    <div><Link to={'/about'} className={'links'}>About us</Link></div>
                    <div><Link to={'/about'} className={'links'}>Our menu</Link></div>
                    </div>
                    <div>
                    <div><Link to={'/about'} className={'links'}>Pages</Link></div>
                    <div><Link to={'/about'} className={'links'}>Blog</Link></div>
                    <div><Link to={'/about'} className={'links'}>Contact us</Link></div>
                    </div>
                    <div>
                        <div><p>+777777</p></div>
                        <div><p>gmailgmail@gmail.com</p></div>
                    </div>
                    <div>
                        <div><img src={"./image/insta.svg"}/></div>
                        <div><img src={"./image/logos_facebook.svg"}/></div>
                        <div><img src={"./image/logos_telegram.svg"}/></div>
                    </div>

                </div>
            </>

        );
    }
}

export default Footer;
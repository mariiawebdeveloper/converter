import React, {Component} from 'react';
import './Header.css'
import {Link} from "react-router-dom";


class Header extends Component {

    render() {
        return (<>

            <div className={'header-location'}>
                <div className={'logo'}> <img width={200} height={120} src={'./image/Lantern.png'}/></div>
                <div><Link to={'/'} className={'links'}>Home</Link></div>
                <div><Link to={'/about'} className={'links'}>About us</Link></div>
                <div><Link to={'/about'} className={'links'}>Our menu</Link></div>
                <div><Link to={'/about'} className={'links'}>Pages</Link></div>
                <div><Link to={'/about'} className={'links'}>Blog</Link></div>
                <div><Link to={'/about'} className={'links'}>Contact us</Link></div>
            </div>
            </>

        );
    }
}

export default Header;
import React, {Component} from 'react';
import './Header.css'
import logo from '../img/conv.png'
import {Link} from "react-router-dom";


class Preheader extends Component {
    render() {
        return (
            <div className={'preheader'}>
                <div className={'location-preheader'}>
                    <div className={'logo'}>
                        <div><img src={logo} width={50} height={50}/></div>
                        <div className={'text-logo-location'}>
                        <div style={{fontSize: "25px", color: "white"}}>Modern currency converter</div>
                        <div style={{fontSize: "15px", color: "white"}}>Your money- your choice</div>
                        </div>
                    </div>


                    <div><Link to={'/'} className={'links'}>HOME</Link></div>
                    <div><Link to={'/about'} className={'links'}>ABOUT US</Link></div>
                </div>


            </div>
        );
    }
}

export default Preheader;
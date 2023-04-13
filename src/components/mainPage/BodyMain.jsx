import "./BodyMain.css";
import Slider from "./Slider";
import React from "react";


function Body() {

    return (
        <div>

            <div className={'intro-location'}>
                <div><p>The people & drinks, food</p><p>For good friends & you</p></div>
                <div className={'lines-location'}>
                    {/*<svg width="50%" height="100%">*/}
                    {/*    <line x1="50%" y1="0" x2="50%" y2="100%" stroke=" #B40000" strokeWidth="2"/>*/}
                    {/*    <line x1="0" y1="90%" x2="100%" y2="90%" stroke="#269926" strokeWidth="2"/>*/}
                    {/*</svg>*/}
                </div>
                <div className={"image-intro-location"}>
                    <div><img width="500" height="500" src={"./image/inside1.jpg"}/></div>
                    <div><img width="400" height="400" src={"./image/drinkwhite.jpg"}/></div>
                </div>


            </div>
            <div className={'info-location'}>
                <div className={'info-block'}>
                    <div><p>Location</p></div>
                    <div><p>Address</p></div>
                    <div><p>Street 11 city country</p></div>
                </div>
                <div className={'info-block'}>
                    <div><p>Open Hours</p></div>
                    <div><p>11 am - 3 am</p></div>
                </div>
                <div className={'info-block'}>
                    <div><p>Location</p></div>
                    <div><p>Address</p></div>
                    <div><p>Street 11 city country</p></div>
                </div>
            </div>
            <div className={'photo-attachment'}></div>
            <div className={'drinks-offer-location'}>
                <div>
                    <div className={'offer'}>Offer</div>
                    <div className={'drinks'}>Drinks</div>
                    <div className={'discount-text'}>sometimes we make good discounts
                        on our drinks</div>
                </div>
                <div className={'block-offer-location'}>
                    <div className={'discount-text-number'}> Best offer!</div>
                    <div><img className={'drinks-offer-photo'} width={500} src={'./image/promo.png'}/></div>
                </div>
                <div className={'block-offer-location'}>
                    <div><img className={'drinks-offer-photo'} width={300} src={'./image/promo2.jpg'}/></div>
                    <div className={'discount-text-number'}>Best offer!</div>
                </div>
            </div>

            <div><Slider/></div>

        </div>
    );
}

export default Body;
import React from "react";
import footer_img_1 from './footer_img_1.png';
import footer_img_2 from './footer_img_2.png';
import logo from './icons8-facebook.svg';


export default function () {

    return <div className="footer">
            <img src={footer_img_1} alt="palm_image" className="footer_img_1"/>
            <img src={footer_img_2} alt="palm_image" className="footer_img_2"/>
            <div className="bottom_footer">
                <p>LA BUVETTE RIVE BLEUE</p>
                <img src={logo} alt="Logo_Facebook" className="facebook_logo"/>
            </div>
    </div>

}
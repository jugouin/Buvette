import React from "react";
import img_palms from './Palms.jpg';
import img_closer_palms from './closer_palms.jpg';
import logo from './icons8-facebook.svg';


export default function () {

    return <div className="footer">
            <img src={img_palms} alt="palm_image" className="img_palms"/>
            <img src={img_closer_palms} alt="palm_image" className="img_closer_palms"/>
            <div className="bottom_footer">
                <p>LA BUVETTE RIVE BLEUE</p>
                <img src={logo} alt="Logo_Facebook" className="facebook_logo"/>
            </div>
    </div>

}
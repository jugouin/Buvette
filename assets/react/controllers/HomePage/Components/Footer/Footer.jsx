import React from "react";
import footer_img_1 from './footer_img_1.png';
import footer_img_2 from './footer_img_2.png';
import Footer from "../../../Footer/Footer";

export default function () {

    return <div className="footer_homepage">
            <img src={footer_img_1} alt="palm_image" className="footer_img_1"/>
            <img src={footer_img_2} alt="palm_image" className="footer_img_2"/>
            <Footer/>
    </div>

}
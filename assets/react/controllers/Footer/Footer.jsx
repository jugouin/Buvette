import React from "react";
import fb_logo from './icons8-facebook.svg';
import insta_logo from './instagram.svg';
import login from './login.svg';
import "./footer.css";


export default function () {

    return <div className="footer_container">
        <p><a href="#">LA BUVETTE RIVE BLEUE</a></p>
        <div className="social_network_link">
            <a href="https://www.facebook.com/buvetteducamping">
                <img src={fb_logo} alt="Logo_Facebook" className="fb_logo"/>
            </a>
            <a href="https://www.instagram.com/buvetteducamping">
                <img src={insta_logo} alt="Logo_Instagram" className="insta_logo"/>
            </a>
            <a href="">
                <img src={login} alt="Login" className="login"/>
            </a>
        </div>
    </div>
}
import React from "react";
import image from './img_croissant.jpeg';

export default function () {

    return <div className="oppening_container">
        <div className="line line_oppening"></div>
        <div className="containt">
            <div className="left_text">
                <div>
                    <h3>Ouverture</h3>
                    <p className="border_style">Tous les jours de 8h à 22h<br/>
                    Soirée spéciale tous les vendredis</p>
                </div>
                <div>
                    <h3>Localisation</h3>
                    <p className="border_style">Route de la plage 125<br/>
                    1897 Port-Valais, Suisse</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p className="border_style">
                        Stéfanie Palmisano<br/>
                        <a href="tel:+41 24 481 35 35">+41 24 481 35 35</a><br/>
                        <a href="mailto:stefanie.palmisano@gmail.com">stefanie.palmisano@gmail.com</a>
                    </p>
                </div>
            </div>
            <img src={image} alt="Image" className='image_croissant' />
        </div>
    </div>
}
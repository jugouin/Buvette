import React from "react";
import image from './img_croissant.png';

export default function () {

    return <div className="oppening_container">
        <img src={image} alt="Image" className='oppening_img' />
        <div className="oppening_text_section">
            <div className="oppening_text_element animated-oppening-text">
                <h3 className="oppening_text_title">Ouverture</h3>
                <p className="oppening_text">Tous les jours de 8h à 22h<br/>
                Soirée spéciale tous les vendredis</p>
            </div>
            <div className="oppening_text_element animated-oppening-text">
                <h3 className="oppening_text_title">Localisation</h3>
                <p className="oppening_text">Route de la plage 3<br/>
                1897 Port-Valais, Suisse</p>
            </div>
            <div className="oppening_text_element animated-oppening-text">
                <h3 className="oppening_text_title">Contact</h3>
                <p className="oppening_text">
                    Stéfanie Palmisano<br/>
                    <a href="tel:+41 24 481 35 35">+41 24 481 35 35</a><br/>
                    <a href="mailto:stefanie.palmisano@gmail.com">stefanie.palmisano@gmail.com</a>
                </p>
            </div>
        </div>
        
    </div>
}
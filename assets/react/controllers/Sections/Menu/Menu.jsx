import React from "react";
import image from './img_cocktail.png';

export default function () {

    return <div>
        <div className="union_line"></div>
        <div className="menu_container">
            <div className="article">
                <h4>Rafraîchissez-vous</h4>
                <p>Découvrez notre sélection de boissons rafraîchissantes, cocktails, vins et bières de la région, accompagnées d'un choix de snacks savoureux et croquants. Parfait pour un moment détente au bord du lac Léman.</p>
            </div>
            <img src={image} alt="Image" className='img_cocktail' />
        </div>
    </div>
        
}
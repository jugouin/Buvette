import React from "react";
import image from './description_img.png';

export default function () {
    const images = [];

    for (let i = 0; i < 5; i++) {
      images.push(
        <img key={i} src={image} alt={`Image ${i}`} className='description_img' />
      );
    }

    return <div className="description">
        <div className="img_container">
            {images}
        </div>
        <div className="description_container">
            <h3 className="description_title">Bienvenue à la Buvette !</h3>
            <p className="description_text">Située au bord du lac Léman, notre établissement famillial et détendu vous permettra de déguster des vins locaux tout en profitant de notre terrasse les pieds dans l’eau. Avec une vue imprenable sur le lac, notre ambiance décontractée est parfaite pour une escapade relaxante en famille ou entre amis. Venez paratger des moments mémorables dans ce cardre idyllique. À très vite à la Buvette du camping !</p>
        </div>
    </div>
}
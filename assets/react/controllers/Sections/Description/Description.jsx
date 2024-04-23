import React from "react";
import image from './dw21-mynt-05.jpg';

export default function () {
    const images = [];

    for (let i = 0; i < 5; i++) {
      images.push(
        <img key={i} src={image} alt={`Image ${i}`} className='image_cocktail' />
      );
    }

    return <div>
        <div className="image_container">
            {images}
        </div>
        <div className="description_text border_style">
            <h3>Bienvenue à la Buvette !</h3>
            <p>Située au bord du lac Léman, notre établissement famillial et détendu vous permettra de déguster des vins locaux tout en profitant de notre terrasse les pieds dans l’eau. Avec une vue imprenable sur le lac, notre ambiance décontractée est parfaite pour une escapade relaxante en famille ou entre amis. Venez paratger des moments mémorables dans ce cardre idyllique. À très vite à la Buvette du lac Léman !</p>
        </div>
    </div>
}
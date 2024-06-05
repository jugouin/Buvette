import React from "react";
import image from './img_lake.png';

export default function () {

    return <div className="evening_container">
        <div className="responsive_line"></div>
        <img src={image} alt="Image" className='image_lake' />
        <div className="evening_text">
            <article>
                <h4 className="evening_title">Soirées estivales</h4>
                <p>Venez déguster les menus du vendredi soir, puis laissez-vous emporter par les rythmes envoûtants d'un groupe de musique live surprise. Réservez dès maintenant pour ne pas manquer cette expérience unique !</p>
            </article>
            <article className="reversed_article">
            <h4 className="evening_title evening_reversed_title">Soirées estivales</h4>
                <p>Venez déguster les menus du vendredi soir, puis laissez-vous emporter par les rythmes envoûtants d'un groupe de musique live surprise. Réservez dès maintenant pour ne pas manquer cette expérience unique !</p>
            </article>
            <div className="evening_button">
                <a href="https://labuvetterivebleue-9a5a3f22297e.herokuapp.com/reservation" className="button">Réserver</a>
            </div>
        </div> 
    </div>
}
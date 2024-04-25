import React from "react";
import image from './img_lake.jpeg';

export default function () {

    return <div className="evenings_container">
            <div className="responsive_line"></div>
            <img src={image} alt="Image" className='image_lake' />
            <div className="right_text">
                <div className="articles">
                    <article>
                        <h4>Soirées estivales</h4>
                        <p>Venez déguster les menus du vendredi soir, puis laissez-vous emporter par les rythmes envoûtants d'un groupe de musique live surprise. Réservez dès maintenant pour ne pas manquer cette expérience unique !</p>
                    </article>
                    <article className="reversed_article">
                        <h4>Soirées estivales</h4>
                        <p>Venez déguster les menus du vendredi soir, puis laissez-vous emporter par les rythmes envoûtants d'un groupe de musique live surprise. Réservez dès maintenant pour ne pas manquer cette expérience unique !</p>
                    </article>
                </div>
                <div className="button_container">
                        <button className="button">Réserver</button>
                </div>
            </div>
        </div>
}
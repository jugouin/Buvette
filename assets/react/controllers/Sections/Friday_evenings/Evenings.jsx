import React from "react";
import image from './img_lake.jpeg';

export default function () {

    return <div className="evenings_container">
            <div className="responsive_line"></div>
            <img src={image} alt="Image" className='image_lake' />
            <div className="right_text">
                <div className="articles">
                    <article>
                        <h3>Title Something</h3>
                        <p>Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </article>
                    <article className="reversed_article">
                        <h3>Title Something</h3>
                        <p>Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>  
                    </article>
                </div>
                <div className="button_container">
                        <button className="button">Réserver</button>
                </div>
            </div>
        </div>
}
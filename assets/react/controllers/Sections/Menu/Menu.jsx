import React from "react";
import image from './img_cocktail.png';

export default function () {

    return <div>
        <div className="union_line"></div>
        <div className="menu_container">
            <div className="article">
                <h4>Title Something</h4>
                <p>Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <img src={image} alt="Image" className='img_cocktail' />
        </div>
    </div>
        
}
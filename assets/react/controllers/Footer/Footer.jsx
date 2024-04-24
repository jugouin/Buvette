import React from "react";
import image from "./img_footer.jpg";


export default function () {

    return <div className="footer">
            <img src={image} alt="Image" className='img_footer' />
            <div className="bottom_footer">
                <p>LA BUVETTE RIVE BLEUE</p>
            </div>
    </div>

}
import React from 'react';
import image from './dw21-mynt-06.jpg'

export default function () {
// animation slide de droite à gauche
    return <div className='header'>
            <h1>LA BUVETTE RIVE BLEUE</h1>
            <img src={image} alt="Image" className='image_header' />
            <div className='subtitles'>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <div className="line line_header"></div>
            </div>
        </div>;
}

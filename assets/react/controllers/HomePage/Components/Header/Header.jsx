import React from 'react';
import image from './dw21-mynt-06.png';

export default function () {

    return <div className='header'>
            <h1>LA BUVETTE RIVE BLEUE</h1>
            <img src={image} alt="Image" className='image_header' />
            <div className='subtitles'>
                <p className='subtitle_header animated-subtitle'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header animated-subtitle'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header animated-subtitle'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header animated-subtitle'>LA BUVETTE RIVE BLEUE</p>
                <div className="line_header"></div>
            </div>
        </div>
}

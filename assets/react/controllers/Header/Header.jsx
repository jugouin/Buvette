import React from 'react';
import image from './dw21-mynt-06.jpg'

export default function () {

    return <div className='header'>
            <h1>LA BUVETTE RIVE BLEUE</h1>
            <div className='subtitles'>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
                <p className='subtitle_header'>LA BUVETTE RIVE BLEUE</p>
            </div>
            <img src={image} alt="Image" className='image' />
        </div>;
}

import React from 'react';
import image from './background.png';
import Header from './Header/Header';
import Oppening from './Sections/Oppening/Oppening';
import Description from './Sections/Description/Description';
import Evenings from './Sections/Friday_evenings/Evenings';
import Menu from './Sections/Menu/Menu';
import Footer from './Footer/Footer';

export default function () {

    /** Faire une bloucle pour les subtitles */
    return <div>
        <img src={image} alt="backgroundImage" className='background_img' />
            <Header/>
            <Oppening/>
            <Description/>
            <Evenings/>
            <Menu/>
            <Footer/>
        </div>
}

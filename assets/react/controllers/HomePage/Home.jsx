import React from 'react';
import image from '../../../styles/background.png';
import Header from './Components/Header/Header';
import Oppening from './Components/Oppening/Oppening';
import Description from './Components/Description/Description';
import Evenings from './Components/Friday_evenings/Evenings';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import "./homepage.css";

export default function () {

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

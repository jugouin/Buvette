import React from 'react';
import Header from './Header/Header';
import Oppening from './Sections/Oppening/Oppening';
import Description from './Sections/Description/Description';
import Evenings from './Sections/Friday_evenings/Evenings';

export default function () {

    /** Faire une bloucle pour les subtitles */
    return <div>
            <Header/>
            <Oppening/>
            <Description/>
            <Evenings/>
        </div>
}

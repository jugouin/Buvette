import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './react/controllers/Header/Header.css';
import './react/controllers/Sections/Oppening/Oppening.css';
import './react/controllers/Sections/Description/Description.css';
import './react/controllers/Sections/Friday_evenings/Evenings.css';
import './react/controllers/Sections/Menu/Menu.css';
import './react/controllers/Footer/Footer.css'

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
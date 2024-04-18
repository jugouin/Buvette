import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="home" attribute will cause
 * this controller to be executed. The name "home" comes from the filename:
 * home_controller.js -> "home"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {
        this.element.textContent = 'Home Stimulus! Edit me in assets/controllers/home_controller.js';
    }
}

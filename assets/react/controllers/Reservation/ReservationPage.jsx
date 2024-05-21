import React from "react";
import ReservationForm from "./FormReservation";
import Footer from "../Footer/Footer";
import image from "../../../styles/background.png";
import "./reservation.css";


export default function () {
  return <div>
    <h3>Réserver votre table</h3>
    <img src={image} alt="backgroundImage" className='background_img' />
    <ReservationForm/>
    <Footer/>
  </div>
}
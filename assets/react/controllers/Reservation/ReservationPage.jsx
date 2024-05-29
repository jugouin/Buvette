import React, {useState} from "react";
import ReservationForm from "./FormReservation";
import Footer from "../Footer/Footer";
import image from "../../../styles/background.png";
import "./reservation.css";


export default function (props) {

  const eveningsObject = Object.entries(props);
  const [evening, setEvenings] = useState(JSON.parse(eveningsObject[0][1]));

  return <div className="reservationPage">
    <img src={image} alt="backgroundImage" className='background_img' />
    <h3>Réserver votre table</h3>
    <ReservationForm evening={evening}/>
    <Footer/>
  </div>
}
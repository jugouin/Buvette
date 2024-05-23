import React, {useState} from "react";
import Footer from "../Footer/Footer";
import image from "../../../styles/background.png";
import Table from "./TableReservation/TableReservation";


export default function Admin(props) {

    const reservationssObject = Object.entries(props);
    const [reservations, setReservations] = useState(JSON.parse(reservationssObject[0][1]));
    
    console.log(reservations)
    
  return <div>
    <h3>Bonjour Stéfanie !</h3>
    <Table reservations={reservations} />
    <img src={image} alt="backgroundImage" className='background_img' />
    <Footer/>
  </div>
}

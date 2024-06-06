import React, {useState} from "react";
import Footer from "../Footer/Footer";
import image from "../../../styles/background.png";
import Table from "./TableReservation/TableReservation";


export default function Admin(props) {

    const reservationsObject = Object.entries(props);
    const [reservations, setReservations] = useState(JSON.parse(reservationsObject[0][1]));
    
  return <div>
    <h3>Bonjour Stéfanie !</h3>
    <div class="d-flex justify-content-end">
      <a href="/home" class="btn btn-outline-secondary my-4">Retour</a>
    </div>
    <Table reservations={reservations} />
    <img src={image} alt="backgroundImage" className='background_img' />
    <Footer/>
  </div>
}

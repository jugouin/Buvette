import React from "react";
import Footer from "../Footer/Footer";
import image from "../../../styles/background.png";
import Table from "./TableReservation/TableReservation";
import "./admin.css";

export default function () {
  return <div className="AdminPage">
    <h3>Bonjour Stéfanie !</h3>
    <Table className="reservationTable"/>
    <img src={image} alt="backgroundImage" className='background_img' />
    <Footer/>
  </div>
}
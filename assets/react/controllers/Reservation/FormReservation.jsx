import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from '../Calendar/Calendar';

const ReservationForm = ({ evening }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [personNb, setPersonNb] = useState(0); // For handling nb menu regarding the number of person
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        date: '',
        adults: 0,
        children: 0,
        menu: 0,
        remarks: ''
    });

    useEffect(() => {
        const adults = parseInt(formData.adults || 0);
        const children = parseInt(formData.children || 0);
        setPersonNb(adults + children);
    }, [formData.adults, formData.children]);

    const adultsNb = [];
    for (let i = 0; i <= 20; i++) {
        adultsNb.push(<option key={i} value={i}>{i}</option>);
    }

    const childrenNb = [];
    for (let i = 0; i <= 10; i++) {
        childrenNb.push(<option key={i} value={i}>{i}</option>);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'adults' || name === 'children' || name === 'menu' ? parseInt(value, 10) : value
        });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setFormData({
        ...formData,
        date: date = new Date(date)
        });
    };

        const menuNb = [];
        for (let i = 0; i <= personNb; i ++) {
            menuNb.push(<option key={i} value={i}>{i}</option>);
        }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        axios
            .post(`/reservation/add`, formData)
            .then((res) => {
                alert('Merci de votre réservation');
                window.location = '/';
            })
            .catch((err) => {
                console.log(err);
            });
    }

  return (
    <form onSubmit={submitForm} className='form_reservation'>
      <div className='form_content'>
        <div className='form_left'>
          <div className="form_element">
            <label>
              Nom :
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form_element">
            <label>
              Prénom :
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form_element">
            <label>
              Numéro de téléphone :
              <input
                type="tel"
                name="phone"
                placeholder='+41'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form_element">
            <label>
              Nombre d'adulte(s):
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                required>
                <option value="">--</option>
                {adultsNb}
              </select>
            </label>
          </div>
          <div className="form_element">
            <label>
              Nombre d'enfant(s):
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                required>
                <option value="">--</option>
                {childrenNb}
              </select>
            </label>
          </div>
        </div>
        <div className='form_right'>
          <input type="text" value={selectedDate || ''} readOnly style={{ display: 'none' }} />
          <Calendar evening={evening} onDateChange={handleDateChange} />
          <div className="form_element">
            <label>
              Nombre de menu(s):
              <select
                name="menu"
                value={formData.menu}
                onChange={handleChange}
                required>
                <option value="">--</option>
                {menuNb}
              </select>
            </label>
          </div>
          <div className="form_element">
            <label>
              Remarques :
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
        </div>
        <div className='submit_btn'>
          <button className="button" type="submit">Réserver</button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;

import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Ici, vous pouvez ajouter votre logique pour traiter les données du formulaire, par exemple envoyer les données à un serveur.
  };

  return (
    <form onSubmit={handleSubmit} className='form_reservation'>
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
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
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
            <div className='submit_btn'>
                <button className="button" type="submit">Réserver</button>
            </div>
        </div>
        <div className='form_right'>
            <Calendar/>
        </div>
    </form>
  );
};

export default ReservationForm;

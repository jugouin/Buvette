import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    adults: '',
    children: '',
    menu: '',
    remarks: ''
  });

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
                <Calendar/>
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

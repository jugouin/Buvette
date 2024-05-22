import React, { useState } from 'react';

const FormWithSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traiter les données du formulaire ici
    console.log('Option sélectionnée:', selectedOption);
  };

  const options = [];
  for (let i = 1; i <= 20; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez une option:
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Sélectionnez une option</option>
          {options}
        </select>
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default FormWithSelect;
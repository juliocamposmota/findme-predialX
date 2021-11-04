import React, { useState } from "react";
import './styles/ClientForm.css';

function ClientForm() {
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  // const handleSubmit = async () => {
  //   const END_POINT = 'http://localhost:3001/clients/';
  //   const REQUEST_OPTIONS = {
  //     method: 'POST',
  //     form: { name },
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   };

  //   await fetch(END_POINT, REQUEST_OPTIONS)
  //     .then(data => console.log(`${data} adicionado com sucesso!`));
  // };

  return (
    <div className="form-container">
      <form className="client-form">
        <label className="form-label" htmlFor="name">
          Nome:

          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <input
          className="form-button"
          type="submit"
          value="Adicionar"
        />
      </form>
    </div>
  );
}

export default ClientForm;

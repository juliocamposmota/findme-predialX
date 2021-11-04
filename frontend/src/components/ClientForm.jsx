import React from "react";
import './styles/ClientForm.css';

function ClientForm() {
  return (
    <div className="form-container">
      <form className="client-form">
        <label className="form-label">
          Nome:

          <input className="form-input" type="text" />
        </label>
        <input className="form-button" type="submit" value="Adicionar" />
      </form>
    </div>
  );
}

export default ClientForm;

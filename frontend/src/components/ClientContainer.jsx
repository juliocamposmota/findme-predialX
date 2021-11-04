import React from "react";
import './styles/ClientContainer.css';

function ClientContainer({ clients }) {
  return (
    <div className="client-container">
      {
        clients.map(({ name }) => (
          <div className="client-card">
            <p>{ name }</p>
            <button className="details">
              detalhes
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default ClientContainer;

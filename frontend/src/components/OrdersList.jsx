import React from "react";
import './styles/OrdersList.css';

function OrdersList({ orders }) {
  return (
    <div className="order-container">
      {
        orders.map(({ client_id, employer_id, deadline }) => (
          <div className="order-card">
            <div className="input-card">
              <p>Cliente</p>
              <p>{ client_id }</p>
            </div>
            <div className="input-card">
              <p>Colaborador</p>
              <p>{ employer_id }</p>
            </div>
            <div className="input-card">
              <p>Prazo</p>
              <p>{ deadline }</p>
            </div>

            <button className="details">
              detalhes
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default OrdersList;

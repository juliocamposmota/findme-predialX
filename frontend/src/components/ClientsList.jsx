import React from "react";
import { Link } from "react-router-dom";
import './styles/ClientsList.css';

function ClientList({ clients }) {
  return (
    <div className="client-container">
      {
        clients.map(({ _id, name }) => (
          <div className="client-card" key={ _id }>
            <p>{ name }</p>

            <Link to={ `/clients/${_id}` }>
              <button
                className="details"
                type="button"
              >
                detalhes
              </button>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default ClientList;

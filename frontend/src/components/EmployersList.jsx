import React, { useContext } from "react";
import Context from "../context";
import { Link } from "react-router-dom";
import './styles/EmployersList.css';

function EmployersList({ id }) {
  const { employers } = useContext(Context);

  return (
    <div className="employer-container">
      {
        employers
          .filter(({ client_id }) => client_id === id)
          .map(({ _id, name }) => (
            <div className="employer-card" key={ _id }>
              <p>{ name }</p>

              <Link to={ `/employers/${ _id }` }>
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

export default EmployersList;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context";
import ClientsList from "./ClientsList";
import OrdersList from "./OrdersList";
import './styles/Dashboard.css';

function Dashboard() {
  const { clients, orders } = useContext(Context);

  return (
    <div className="dashboard">
      <h1 className="title">Bem vindo!</h1>

      <div>
        <nav className="nav-dash">
          <h2>Clientes</h2>

          <ul className="list">
            <li className="item">
              <Link to="/clients/add">
                <button type="button">
                  adicionar cliente
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <ClientsList clients={ clients } />
      </div>

      <div>
        <h2>Ordens</h2>

        <div>
          <OrdersList orders={ orders } />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

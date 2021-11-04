import React, { useContext } from "react";
import Context from "../context";
import ClientsList from "./ClientsList";
import OrdersList from "./OrdersList";
import './styles/Dashboard.css';

function Dashboard() {
  const { clientsData, ordersData } = useContext(Context);

  return (
    <div className="dashboard">
      <h1 className="title">Bem vindo!</h1>

      <div>
        <h2>Clientes</h2>

        <ClientsList clients={ clientsData } />
      </div>

      <div>
        <h2>Ordens</h2>

        <div>
          <OrdersList orders={ ordersData } />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

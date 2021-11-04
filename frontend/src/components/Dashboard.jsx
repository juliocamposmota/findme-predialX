import React, { useContext } from "react";
import Context from "../context";
import ClientContainer from "./ClientContainer";
import './styles/Dashboard.css';

function Dashboard() {
  const { clientsData } = useContext(Context);
  console.log(clientsData);

  return (
    <div className="dashboard">
      <h1 className="title">Bem vindo!</h1>

      <div>
        <h2>Clientes</h2>

        <ClientContainer clients={ clientsData } />
      </div>

      <div>
        <h2>Ordens</h2>

        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

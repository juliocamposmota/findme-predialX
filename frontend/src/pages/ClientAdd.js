import React from "react";
import Header from "../components/Header";
import ClientForm from "../components/ClientForm";

function ClientAdd() {
  return (
    <div>
      <Header />

      <h1 className="title">Adicionar novo cliente</h1>

      <div className="dashboard">
        <ClientForm />
      </div>
    </div>
  );
}

export default ClientAdd;

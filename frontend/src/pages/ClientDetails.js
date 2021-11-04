import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import EmployersList from "../components/EmployersList";

function ClientDetails() {
  const params = useParams();
  const [client, setClient] = useState({});
  const [clientError, setClientError] = useState(false);
  
  useEffect(() => {
    const END_POINT = `http://localhost:3001/clients/${ params.id }`;

    const fetchClient = async () => {
      try {
        const response = await fetch(END_POINT);
        const result = await response.json();

        setClient(result);
      } catch (error) {
        console.log(clientError);
        setClientError(true);
      }
    };

    fetchClient();
  }, [clientError, params.id]);

  return (
    <div>
      <Header />

      <div>
        <h1 className="title">{ client.name }</h1>
      </div>

      <div className="dashboard">
        <div>
          <h2>Colaboradores</h2>
        </div>

        <div>
          <EmployersList id={ params.id } />
        </div>
      </div>
    </div>
  );
}

export default ClientDetails;

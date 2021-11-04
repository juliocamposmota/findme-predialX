import React, { useContext, useEffect, useState } from "react";
import Context from "../context";
import { useParams } from "react-router";
import Header from "../components/Header";

function ClientDetails() {
  const { clientsData } = useContext(Context);
  const params = useParams();

  const [client, setClient] = useState({});
  
  useEffect(() => {
    const filteredClient = clientsData.find(({ _id }) => params.id === _id);

    if (filteredClient) setClient(filteredClient);
  }, [clientsData, params.id]);

  return (
    <div>
      <Header />

      <section>
        <h1 className="title">{ client.name }</h1>
      </section>
    </div>
  );
}

export default ClientDetails;

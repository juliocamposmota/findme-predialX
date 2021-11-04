import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Context from ".";

function Provider({ children }) {
  const [clients, setClients] = useState([]);
  const [clientsError, setClientsError] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ordersError, setOrdersError] = useState(false);
  const [employers, setEmployers] = useState([]);
  const [employersError, setEmployersError] = useState(false);

  useEffect(() => {
    const END_POINT = 'http://localhost:3001/clients';

    const fetchClients = async () => {
      try {
        const response = await fetch(END_POINT);
        const results = await response.json();

        setClients(results);
      } catch (error) {
        setClientsError(true);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const END_POINT = 'http://localhost:3001/orders';

    const fetchOrders = async () => {
      try {
        const response = await fetch(END_POINT);
        const results = await response.json();

        setOrders(results);
      } catch (error) {
        setOrdersError(true);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const END_POINT = 'http://localhost:3001/employers';

    const fetchEmployers = async () => {
      try {
        const response = await fetch(END_POINT);
        const results = await response.json();

        setEmployers(results);
      } catch (error) {
        setEmployersError(true);
      }
    };

    fetchEmployers();
  }, []);

  const context = {
    clients,
    clientsError,
    orders,
    ordersError,
    employers,
    employersError,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;

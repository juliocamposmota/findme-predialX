import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Context from ".";

function Provider({ children }) {
  const [clientsData, setClientsData] = useState([]);
  const [clientsDataError, setClientsDataError] = useState(false);
  const [ordersData, setOrdersData] = useState([]);
  const [ordersDataError, setOrdersDataError] = useState(false);

  useEffect(() => {
    const END_POINT = 'http://localhost:3001/clients';

    const fetchClientsData = async () => {
      try {
        const response = await fetch(END_POINT);
        const results = await response.json();

        setClientsData(results);
      } catch (error) {
        setClientsDataError(true);
      }
    };

    fetchClientsData();
  }, []);

  useEffect(() => {
    const END_POINT = 'http://localhost:3001/orders';

    const fetchOrdersData = async () => {
      try {
        const response = await fetch(END_POINT);
        const results = await response.json();

        setOrdersData(results);
      } catch (error) {
        setOrdersDataError(true);
      }
    };

    fetchOrdersData();
  }, []);

  const context = {
    clientsData,
    clientsDataError,
    ordersData,
    ordersDataError,
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

import React, { useState } from "react";
import PropTypes from 'prop-types';
import Context from ".";

function Provider({ children }) {
  const [data, setData] = useState([]);

  const context = {
    data,
    setData,
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

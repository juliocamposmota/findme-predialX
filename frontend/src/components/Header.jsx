import React from "react";
import { Link } from "react-router-dom";
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div>
          <p className="logo">PredialX</p>
        </div>

        <div>
          <ul className="list">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/">Clientes</Link>
            </li>
            <li className="item">
              <Link to="/">Ordens</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

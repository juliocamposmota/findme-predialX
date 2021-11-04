import React from "react";
import { Link } from "react-router-dom";
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <p className="logo">PredialX</p>

        <ul className="list">
          <li className="item">
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { FC } from "react";
import { Link } from "react-router-dom";
export const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper cyan accent-2 px1">
        <Link to="/" className="brand-logo">
          React + TypeScript To-do
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Список дел</Link>
          </li>
          <li>
            <Link to="/about">Информация</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

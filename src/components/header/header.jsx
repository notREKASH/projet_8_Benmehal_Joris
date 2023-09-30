import React from "react";
import "./header.scss";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Logo width={"145px"} height={"47px"} color={"#FF6060"} />
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;

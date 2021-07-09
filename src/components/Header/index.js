import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="WeStudy logo" />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">
                Resgister
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;

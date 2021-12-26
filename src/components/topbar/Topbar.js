import React from "react";
import { Person, Mail } from "@material-ui/icons";

import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            dimitris.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+30 123456789</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>dimitris@dimitris.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Topbar;

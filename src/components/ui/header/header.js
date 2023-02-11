import React from "react";
import classes from "../header/header.module.css";
import Logo from "../../../assets/images/Logo.svg";
import chevron from "../../../assets/images/chevron.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className={classes.main}>
        <header className={classes.header}>
          <div className={classes.logo}>
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <nav>
            <NavLink>Home </NavLink>
            <NavLink>
              Landings
              <img src={chevron} alt="arrow" />
            </NavLink>
            <NavLink>
              Pages
              <img src={chevron} alt="arrow" />
            </NavLink>
            <NavLink>Docs</NavLink>
            <NavLink>Helps</NavLink>
            <NavLink>Login</NavLink>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

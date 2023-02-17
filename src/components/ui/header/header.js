import React from "react";
import classes from "../header/header.module.css";
import Logo from "../../../assets/images/Logo.svg";
import chevron from "../../../assets/images/chevron.svg";
import { NavLink, useLocation, } from "react-router-dom";
import logoBlack from '../../../assets/images/Logo-dark.svg'
const Header = () => {
  const location = useLocation()
  return (
    <>
      <div className={`${classes.main} ${location.pathname === "/contact" && classes.contactColor}`}>
        <header className={classes.header}>
          <div className={classes.logo}>
            <a href="/">
              <img src={location.pathname === "/contact" ? logoBlack : Logo} alt="logo" />
            </a>
          </div>
          <nav>
            <NavLink to="/" className={location.pathname === "/contact" && classes.navColorInContact}>Home </NavLink>
            <NavLink className={location.pathname === "/contact" && classes.navColorInContact}>
              Landings
              <img src={chevron} alt="arrow" />
            </NavLink>
            <NavLink to="/contact" className={location.pathname === "/contact" && classes.navColorInContact}>Pages
              <img src={chevron} alt="arrow" />
            </NavLink>
            <NavLink className={location.pathname === "/contact" && classes.navColorInContact}>Docs</NavLink>
            <NavLink className={location.pathname === "/contact" && classes.navColorInContact}>Helps</NavLink>
            <NavLink className={location.pathname === "/contact" && classes.navColorInContact}>Login</NavLink>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import classes from "../footer/footer.module.css";
import logo from "../../../assets/images/Logo.svg";
import google from "../../../assets/images/google.svg";
import instagram from "../../../assets/images/instagram.svg";
import linked from "../../../assets/images/linked.svg";
import twitter from "../../../assets/images/twitter.svg";
const Footer = () => {
  return (
    <>
      <main className={classes.main}>
        <footer>
          <div className={classes.head}>
            <img src={logo} alt="logo" />
            <p>
              Build a modern and creative <br /> website with crealand
            </p>
            <div className={classes.social}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={google} alt="instagram" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={linked} alt="" />
              </a>
            </div>
          </div>
          <div className={classes.product}>
            <h3>products</h3>
            <a href="#">landingpage</a>
            <a href="#">features</a>
            <a href="#">documentation</a>
            <a href="#">referral program</a>
            <a href="#">pricing</a>
          </div>
          <div className={classes.product}>
            <h3>services</h3>
            <a href="#">documentation</a>
            <a href="#">design</a>
            <a href="#">themes</a>
            <a href="#">illustrations</a>
            <a href="#">uI kit</a>
          </div>
          <div className={classes.product}>
            <h3>company</h3>
            <a href="#">about</a>
            <a href="#">terms</a>
            <a href="#">privacy policy</a>
            <a href="#">careers</a>
          </div>
          <div className={classes.product}>
            <h3>more</h3>
            <a href="#">documentation</a>
            <a href="#">license</a>
            <a href="#">changelog</a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;

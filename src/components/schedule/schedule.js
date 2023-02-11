import React from "react";
import classes from "../schedule/schedule.module.css";
import Check from "../../assets/images/mark.svg";
import Macbook from "../../assets/images/macbook.png";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/arrow3.svg";
const check = [
  {
    image: Check,
    text: "Best Time to Post",
  },
  {
    image: Check,
    text: "Geolocation",
  },
  {
    image: Check,
    text: "User Tag",
  },
  {
    image: Check,
    text: "Others benefit",
  },
];
const Schedule = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.content}>
          <h3>Schedule Your Post Whenever You Want</h3>
          <p>
            Publish your content automatically to ensure that your content
            reaches the right people. Built-in features such as
          </p>
          <div>
            {check.map((item, i) => (
              <li key={i}>
                <img src={item.image} alt="image" />
                <span>{item.text}</span>
              </li>
            ))}
            <Link>
              Learn about scheduled post <img src={Arrow} alt="arrow" />
            </Link>
          </div>
        </div>
        <div className={classes.mac}>
          <img src={Macbook} alt="mac" />
        </div>
      </div>
    </>
  );
};

export default Schedule;

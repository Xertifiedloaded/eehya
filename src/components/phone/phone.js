import React from "react";
import classes from "../phone/phone.module.css";
import phone from "../../assets/images/phone.png";
import angleArrow from '../../assets/images/line.png'
import { Link } from "react-router-dom";
const Phone = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.phoneContainer}>
                    <img src={phone} alt='phone' />
                    <img src={angleArrow} alt='arrow' />
                </div>
                <div className={classes.phoneContent}>
                    <h3>
                        Measure Impressions
                        and Reach Post
                    </h3>
                    <p>Graphs displaying your performance for metrics like follower evolution, average engagement rate per post and reach and impressions to give you the insights.</p>
                    <Link>
                        Learn about graphs <span>&#8594;</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Phone;

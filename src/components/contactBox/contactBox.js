import React from 'react'
import classes from '../contactBox/contactBox.module.css'
import Address from './address/address';
import FormBox from './formBox/formBox';
import Dot  from '../../assets/images/dot.svg'


const ContactBox = () => {
    return (
        <div className={classes.main}>
            <h3>
                Get In Touch
            </h3>
            <div className={classes.formInfo}>
                <FormBox />
                <Address />
                <img src={Dot} className={classes.left} alt="point" />
                <img src={Dot} className={classes.right} alt="point" />
            </div>

        </div>

    )
}

export default ContactBox;
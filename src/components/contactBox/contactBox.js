import React, { useContext, useState } from 'react'
import classes from '../contactBox/contactBox.module.css'
import Address from './address/address';
import FormBox from './formBox/formBox';
import Dot from '../../assets/images/dot.svg'
import { UserContext } from '../../layout/mainLayout';

const ContactBox = () => {
    const { user, count,handledClick } = useContext(UserContext);

    return (
        <div className={classes.main}>
            <h3>
                <h3>{user}</h3>
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
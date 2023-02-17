import React from 'react'
import ContactBox from '../../components/contactBox/contactBox'
import classes from '../contact/contact.module.css'
import Prism from '../../assets/images/prism.png'
import Prism2 from '../../assets/images/prisom2.png'

const Contact = () => {
    return (
        <>
            <div className={classes.main}>
                <ContactBox />
                <img src={Prism} alt="prism" className={classes.blue} />
                <img src={Prism2} alt="prism" className={classes.yellow} />
          </div>
        </>
    )
}

export default Contact;
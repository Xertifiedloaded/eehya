import React from 'react'
import googleImg from '../../assets/images/google1.svg'
import netflix from '../../assets/images/netflix.svg'
import bnb from '../../assets/images/bnb.svg'
import uber from '../../assets/images/uber.svg'
import slack from '../../assets/images/slack.svg'
import classes from '../partner/partner.module.css'
const Partner = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.partners}>
                    <img src={slack} />
                    <img src={netflix} />
                    <img src={googleImg} />
                    <img src={bnb} />
                    <img src={uber} />
                </div>
            </div>
        </>
    )
}

export default Partner
import React from 'react';
import classes from '../growth/growth.module.css'
import Contributor from '../../assets/images/contributor.svg'
import Emoji from '../../assets/images/love.svg'
import { Link } from 'react-router-dom'
const Growth = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.content}>
                    <div className={classes.left}>
                        <h1>
                            Grow your brand
                            presence on social media
                            <img src={Emoji} alt="" />
                        </h1>
                        <p>Join with more 1200+ happy customers</p>
                        <div className={classes.contributor}>
                            <img src={Contributor} alt="faces" />
                            <Link>
                                and others
                            </Link>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <Link>
                            <button>
                                Get your trial now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Growth
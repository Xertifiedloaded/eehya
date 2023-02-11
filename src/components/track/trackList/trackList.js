import React from 'react'
// import growth from '../../../assets/images/growth.svg'
import classes from '../trackList/trackList.module.css'
const TrackList = ({ image, title, paragraph, background }) => {
    return (
        <div className={classes.main}>
            <div className={classes.imageContainer} style={{ backgroundImage: background }}>
                <img src={image} alt="growth" />
            </div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}
export default TrackList;
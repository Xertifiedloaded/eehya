import React from 'react'
import classes from '../carousel/carousel.module.css'
import { ReactComponent as Star } from '../../assets/images/star.svg'
import Quote from '../../assets/images/quote.svg'

const Carousel = ({name,image,role}) => {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.starContent}>
          <div className={classes.image}>
            <img src={Quote} alt="" />
          </div>
          <div className={classes.star}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className={classes.reviewAll}>
          <div className={classes.review}>
            <p>“With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”</p>

          </div>
          <div className={classes.person}>

              <img src={image} alt="" />
         
            <div className={classes.info}>
              <h3>{name}</h3>
              <p>{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;
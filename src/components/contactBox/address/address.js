import React from 'react'
import Location from '../../../assets/images/location1.svg'
import Call from '../../../assets/images/call.svg'
import Tweet from '../../../assets/images/tweet.svg'
import Youtube from '../../../assets/images/Youtube.svg'
import Instagram from '../../../assets/images/insta.svg'
import Facebook from '../../../assets/images/fb.svg'
import Message from '../../../assets/images/message.svg'
import classes from '../address/address.module.css'

const Address = () => {
  return (
    <div className={classes.main}>
      <div className={classes.icons}>
        <p>
          <img src={Location} alt="img" />
          Infomation technologies building,
          Victoria Island, Lagos, Nigeria.
        </p>
        <p>
          <img src={Call} alt="img" />
          +234 081-1236-4568
        </p>
        <p>
          <img src={Message} alt="img" />
          hello@info.com.ng
        </p>
        <div className={classes.social}>
          <img src={Youtube} alt="youtube" srcset="" />
          <img src={Tweet} alt="youtube" srcset="" />
          <img src={Facebook} alt="youtube" srcset="" />
          <img src={Instagram} alt="youtube" srcset="" />
        </div>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.855217964734!2d3.3765232147959976!3d7.142735494842391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b08f0170e29%3A0x7acce266df150aff!2sAFRICA%20TRAINOVATION%20CONSULTING.%20(ATC%20Hub)!5e0!3m2!1sen!2sng!4v1676371924495!5m2!1sen!2sng"
            width="100%"
            height="155"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Address
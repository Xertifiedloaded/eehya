import React from 'react'
import classes from '../hero/hero.module.css'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/Arrow.svg'
import vector from '../../assets/images/Vector.svg'
import hero from '../../assets/images/hero-img.png'
const Hero = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.hero}>
          <div className={classes.heroText}>
            <h1>We help you <br />
              grow your business faster
              <span className={classes.vector}>
                <img src={vector} />
              </span>
            </h1>
            <p>
              Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .
            </p>
            <div className={classes.btn}>
              <Link>
                <button>
                  see how it works
                </button>
              </Link>
              <Link>
                <button>
                  get a free demo <img src={arrow} alt="arrow" />
                </button>
              </Link>
            </div>
          </div>
          <div className={classes.heroImage}>
            <img src={hero} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero;
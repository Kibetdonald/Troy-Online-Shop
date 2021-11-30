import React from 'react'
import Typical from "react-typical"

import './style.css';

/**
* @author
* @function Myheader
**/

const Myheader = (props) => {
  return (
    <div>
      <div className="banner">
        <img src="banner.PNG"/>
      </div>
      <div className="wrapper">

        <ul>

          <li> <p className="leftText"><i class="fa fa-mobile" aria-hidden="true"></i>&nbsp;Download App!</p></li>

          <div className="randomText">
            <Typical
              steps={['Shop with us & get...', 1000,'Exclusive savings/coupons',500, 'Discounted shipping rates',500, 'Free Delivery within Nairobi!', 500, 'Upto 40% off!', 500]}
              loop={Infinity}
              wrapper="p"
            />

          </div>

          <li> <p className="rightText">Help center</p></li>
          <li> <p className="rightText1">Track order</p>
          </li>
        </ul>
      </div>
    </div>
  )

}


export default Myheader;
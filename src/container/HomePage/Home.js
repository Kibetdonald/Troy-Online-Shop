import React from 'react'
import Mycategory from '../../components/category/category.js';
import Slider from '../../components/slider/slider.js';
import Footer from '../../components/footer/footer';
import './style.css';
import { Card } from 'react-bootstrap'
import { CardHeader } from '@material-ui/core';


/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (

    <div>


      {/* Container here */}
      <div className="categoryandslider">
        <div class="row">
          <div class="col-sm-2">
            <Mycategory />
          </div>
          <div class="col-sm-10">
            <Slider />
          </div>
        </div>
      </div>
      <div className="prodOffers">
      <Card>
          <Card.Header style={{backgroundColor: "#0dd9f9"}}>Top selling items</Card.Header>
          <Card.Body>

            <div className="recents">
              <img src="images/1.jpg" width="200px" height="200px" />
              <h4>Samsung Galaxy A12, 6.5", 4GB RAM + 128GB (Dual SIM), 5000mAh - Black</h4>
              <h5>Ksh. 16,799</h5><h6>Ksh. 19,999</h6>

            </div>
          </Card.Body>
        </Card>
        {/* Deals of the week */}
        <Card>
          <Card.Header style={{backgroundColor: "#0dd9f9"}}>Deals of the week</Card.Header>
          <Card.Body>

          <div className="recents">
              <img src="images/blender.jpg" width="200px" height="200px" />
              <h4>Rashnik 2 IN ONE BLENDER</h4>
              <h5>Ksh. 1,799</h5><h6>Ksh. 2,099</h6>

            </div>
          </Card.Body>
        </Card>
         {/* Recently Viewed Items */}
         <Card>
          <Card.Header style={{backgroundColor: "#0dd9f9"}}>Recently Viewed Items</Card.Header>
          <Card.Body>

          <div className="recents">
              <img src="images/hifinit.jpg" width="200px" height="200px" />
              <h4>Hifinit 32 Inch Frameless Digital HD LED TV - Black</h4>
              <h5>Ksh. 16,799</h5><h6>Ksh. 19,999</h6>

            </div>
          </Card.Body>
        </Card>
      </div>
      <div>

        
      </div>
      <Footer />

    </div>
  )
}
export default HomePage
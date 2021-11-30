import React from 'react'
import './style.css';
import './owl.carousel.css'
import './owl.theme.css'
/**
* @author
* @function Slider
**/

const Slider = (props) => {
  return (
    <div class="slider-card">
      <div class="card-body">
        <div id="sliders">
          <div class="full-width">

            <div id="light-slider" class="carousel slide">
              <div id="carousel-area">
                <div id="carousel-slider" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-slider" data-slide-to="1"></li>
                    <li data-target="#carousel-slider" data-slide-to="2"></li>
                    <li data-target="#carousel-slider" data-slide-to="3"></li>
                    <li data-target="#carousel-slider" data-slide-to="4"></li>
                    <li data-target="#carousel-slider" data-slide-to="5"></li>

                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img src="slider/slider_4.jpg" alt="" style={{ height: "400px", width: "100%" }} />                  </div>
                      <div class="carousel-item">
                      <img src="slider/bag.jpg" alt="" style={{ height: "400px", width: "100%" }} />

                    </div>
                    <div class="carousel-item">
                      <img src="slider/slider_five.jpg" alt="" style={{ height: "400px", width: "100%" }} />

                    </div>
                    <div class="carousel-item">
                      <img src="slider/slider_6.jpg" alt="" style={{ height: "400px", width: "100%" }} />
                    </div>
                    <div class="carousel-item">
                      <img src="slider/slider_3.jpg" alt="" style={{ height: "400px", width: "100%" }} />
                    </div>
                    <div class="carousel-item">
                      <img src="slider/slider_one.jpg" alt="" style={{ height: "400px", width: "100%" }} />
                    </div>
                    <div class="carousel-item">
                      <img src="slider/phone.jpg" alt="" style={{ height: "400px", width: "100%" }} />

                    </div>
                   
                  </div>

                  <a class="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
                    <i class="fa fa-chevron-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
                    <i class="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Slider
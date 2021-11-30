import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { getProductsBySlug } from "../../actions";
import { Link } from 'react-router-dom';
import Card from '../../components/Card/index.js'
import { generatePublicUrl } from '../../urlConfig';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from '../../components/products/productdetails.js';
import Mycategory from '../../components/category/category.js';
import Slider from '../../components/slider/slider.js';
import Footer from '../footer/footer';

const ProductsPage = (props) => {
  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (


    <div className="prdContainer">
  
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

      {Object.keys(product.productsByPrice).map((key, index) => {

        return (
          <Card
            headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
            headerRight={
              <button className="btn btn-light">See all <i class="fas fa-arrow-right"></i></button>

            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >

            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "#000",
                    width: "200px"

                  }}

                  className="productContainer"
                >
                  <div className="productcard">

                    <div className="productImgContainer">
                      <img src={generatePublicUrl(product.productPictures[0].img)} alt="error" style={{ width: "200px", height: "220" }} />
                    </div>
                    <div className="productInfo">
                      <div style={{ margin: "10px 0" }}>{product.name}</div>
                      <div>
                        {props.value}


                      </div>
                      <div className="prdPrice">
                        {product.price}
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
           
          </Card>
        );

      })

      }

<Footer/>

    </div>

  )
}
export default ProductsPage
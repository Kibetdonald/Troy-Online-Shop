import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Button from '@material-ui/core/Button';
import { Row, Container, Col, Card,Tab, Tabs, Image} from 'react-bootstrap'
import { generatePublicUrl } from '../../urlConfig';
import { SocialIcon } from 'react-social-icons';
import './style.css'
import Swal from 'sweetalert2'
/**
* @author
* @function ProductDetails
**/

const ProductDetails = (props) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);

    useEffect(() => {
        const { productId } = props.match.params;
        console.log(props);
        const payload = {
            params: {
                productId,
            },
        };
        dispatch(getProductDetailsById(payload));
    }, []);

    if (Object.keys(product.productDetails).length === 0) {
        return null;
    }
    let today = new Date().toLocaleDateString()
    return (

        <div>
        
            <div className="productDetailsContainer">

<br/>
<Container style={{ margin: "auto" }}>
    <div className="breadcrumbs">
        <ul>
            <li>
                <a href="#">Product</a>
                <i class="fa fa-angle-right" aria-hidden="true"></i>

            </li>
            <li>
                <a href="#">Smart Phones</a>
                <i class="fa fa-angle-right" aria-hidden="true"></i>

            </li>

            <li>
                <a href="#">{product.productDetails.name}</a>
            </li>
        </ul>
    </div>
   
    <Row>
        <Col xs={12} md={12}>
            <Card>

                <Row md={2}>
                    <Col md={6}>

                        <div className="productDescImgContainer" >
                            <img
                                src={generatePublicUrl(product.productDetails.productPictures[0].img)}

                                alt={`${product.productDetails.productPictures[0].img}`}
                            />
                        </div>
                        <div className="verticalImageStack">
                            {product.productDetails.productPictures.map((thumb, index) => (
                                <div className="thumbnail">
                                    <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="productDetails">
                            <p className="productTitle">{product.productDetails.name}</p>

                            <span className="ratingNumbersReviews">
                                72 Ratings
                            </span>

                            <div className="extraOffer">
                                Extra
                                4500 off{" "}
                            </div>
                            <hr style={{ borderTop: "1px solid red;" }} />
                            {/* Product price  */}
                            <div className="productprice">
                                <span className="price">

                                    Ksh.{product.productDetails.price}
                                </span>
                                <br />
                                <span className="discount" style={{ textDecoration: "line-through" }}>
                                    Ksh.{product.productDetails.price + 1300}
                                </span>
                                <p className="proddiscount">15% Off</p>

                            </div>



                            <div className="shipmentDiv">
                                <p>+ shipping from KSh 88 to CBD</p>
                            </div>
                            <div className="stock">
                                <p>In stock soon</p>
                            </div>

                            <label>
                                Quantity:
                                <input className="form-control" type="number" min="1">
                                </input>
                            </label>
                            <br />
                            <Button
                                variant="contained"
                                color="secondary"
                                width="200px"
                                onClick={showAlert}
                                startIcon={<i class="fa fa-cart-plus" aria-hidden="true"></i>
                                }
                            > Add to cart
                            </Button>
                        </div>


                    </Col>


                </Row>
                <br />
                <hr />
                <br />
                <p className="shareprod">Share this product:</p>
                <div className="share">
                    <SocialIcon network="google" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
                </div>



            </Card>
        </Col>
       
    </Row>
    <Card>
    <Tabs defaultActiveKey="description" className="justify-content-center"  id="uncontrolled-tab-example" default>
  <Tab eventKey="description" title="Product Description">
  <div className="productDesc">
  {product.productDetails.description}
  {product.productDetails.productPictures.map((thumb, index) => (
                                <div className="thumbnail">
                                    <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                                </div>
                            ))}
  </div>
  </Tab>
  <Tab eventKey="reviews" title="Reviews">
    <div className="reviews">
    <Col>
    &nbsp;&nbsp;
    <i class="fa fa-user-circle" aria-hidden="true" style={{fontSize:"34px"}}></i>
    <h5>John Doe</h5>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <br/>
  {today}
   
    </Col>
    </div>
  </Tab>
  
</Tabs>

        




    <br/>
    <hr/>
    
        </Card>
      


</Container>


</div>
        </div>
    )

}
function showAlert(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item added to cart',
        showConfirmButton: false,
        timer: 1500
      })
  }
export default ProductDetails
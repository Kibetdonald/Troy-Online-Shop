import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './style.css'
import { SocialIcon } from 'react-social-icons';
/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <div className="footerContainer">
            <Row>
                <Col><h3>Shopping Guide</h3>
                    <ul>
                        <li><a href="">How to Register</a></li>
                        <li><a href="">Forgot password?</a></li>

                    </ul>
                </Col>
                <Col> <h3>Help Center</h3>
                    <ul>
                        <li><a href="">After Sale Policy</a></li>
                        <li><a href="">Delivery and Shipping</a></li>
                        <li><a href="">Order</a></li>
                        <li><a href="">Account Settings</a></li>
                        <li><a href="">FAQ Center</a></li>


                    </ul>
                </Col>
                <Col><h3>ABOUT</h3>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Careers</a></li>



                    </ul>
                </Col>
                <Col><h3>Office Address</h3>
                    <ul>
                        <li><a href="">Troy Internations Comp.</a></li>
                        <li><a href="">P.o Box 10100</a></li>
                        <li><a href="">Nairobi, Kenya</a></li>
                        <li><a href="">Cel: +25470000000</a></li>



                    </ul>
                </Col>
                <Col><h3>Social Media</h3>
                    <SocialIcon network="google" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="facebook" style={{ height: 25, width: 25 }} /><br />
                    <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="pinterest" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />

                </Col>

            </Row>
            <div className="Copyright">
                <p>STORE   | TRAVEL   | SELLER   |   MOBILE APP  |   iOS App</p>
                <p>Copyright 2021 Troy, All rights reserved. </p>
            </div>
        </div>
    )

}

export default Footer
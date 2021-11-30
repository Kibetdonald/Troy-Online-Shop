import {React, useState} from 'react'
import { Card, Table, Tabs, Tab } from 'react-bootstrap'
import Footer from '../footer/footer';
import {Link} from 'react-router-dom'
//style
import './style.css';
/**
* @author
* @function CartPage
**/

const CartPage = (props) => {
  return (
    <div className="cartContainer">
      <div className="cart">
        <h4 className="itemQuantity">Cart (1 Item)</h4>
        <Card style={{ background: "#fff !important" }}>
          <Table striped bordered hover size="md">


            <cartHeader style={{ display: "flex", marginRight: "auto" }}></cartHeader>
            <thead>
              <tr>
                <th>Items</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td><img src="images/1.jpg" width="100px" height="100px" /></td>
                <td>Bluetooth Earphones + 2000mAh Battery</td>
                <td width="140px"><input className="qtyinput" type="number" min="1" defaultValue="1" /></td>
                <td>KSh 28,999</td>
                <td style={{ color: "#FFA726" }}>KSh 28,999</td>
              </tr>

            </tbody>
          </Table>
          <cardFooter>
            <div className="subtotal">
              <p>Subtotal:	KSh 28,999</p>
              <p>VAT:	KSh 0</p>
              <hr />
              <p>Total:	KSh 28,999</p>
              <h8>Local delivery fees not included yet</h8>

            </div>
          </cardFooter>

        </Card>
        <div className="btnContainer" >
         <Link to="/product"><button className="checkoutbtn1">Continue Shopping</button> </Link>
         <Link to="/Checkout"> <button className="checkoutbtn2">Proceed to checkout</button></Link>
          
        </div>

      </div>

      <div style={{margin:"40px"}}>
        <Tabs defaultActiveKey="Recently Viewed" className="justify-content-center" id="uncontrolled-tab-example">

          <Tab eventKey="Recently Viewed" title="Recently Viewed">
            <div style={{display:"flex"}}>
            <div className="recents">
              <img src="images/1.jpg" width="200px" height="200px" />
              <h4>Samsung Galaxy A12, 6.5", 4GB RAM + 128GB (Dual SIM), 5000mAh - Black</h4>
              <h5>Ksh. 16,799</h5><h6>Ksh. 19,999</h6>

            </div>
            <div className="recents">
              <img src="images/2.jpg" width="200px" height="200px" />
              <h4>Hifinit 32 Inch Frameless Digital HD LED TV - Black</h4>
              <h5>Ksh. 16,799</h5><h6>Ksh. 19,999</h6>

            </div>
            <div className="recents">
              <img src="images/sneakers.jpg" width="200px" height="200px" />
              <h4>Generic Men's Trend Sports Sneakers -Black&White</h4>
              <h5>Ksh. 13,499</h5><h6>Ksh. 15,999</h6>

            </div>
            <div className="recents">
              <img src="images/4.jpg" width="200px" height="200px" />
              <h4>Fashion Sexiest Mock Neck Ribbed Bodycon Dress (Hips 36-44" Fit)</h4>
              <h5>Ksh. 359</h5><h6>Ksh. 630</h6>

            </div>
            
            <div className="recents">
              <img src="images/hifinit.jpg" width="200px" height="200px" />
              <h4>Hifinit 32 Inch Frameless Digital HD LED TV - Black</h4>
              <h5>Ksh. 16,799</h5><h6>Ksh. 19,999</h6>

            </div>
            <div className="recents">
              <img src="images/blender.jpg" width="200px" height="200px" />
              <h4>Rashnik 2 IN ONE BLENDER</h4>
              <h5>Ksh. 1,799</h5><h6>Ksh. 2,099</h6>

            </div>
            </div>
          </Tab>

        </Tabs>
      </div>
      <Footer/>


    </div>
  )

}

export default CartPage
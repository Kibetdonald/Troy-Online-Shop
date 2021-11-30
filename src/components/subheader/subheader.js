import {React, useState} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import './style.css'
import Badge from '@material-ui/core/Badge';
import { SocialIcon } from 'react-social-icons';
import { DropdownMenu} from "../MaterialUI";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//implimenting login
import { isUserLoggedIn, login } from '../../actions/'

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


/**
* @author
* @function Subheader
**/


const Subheader = (props) => {

  const [modalShow, setModalShow] = useState(false);
  const auth = useSelector((state) => state.auth);
  return (

    <div className="subheader">
      <Link to="/"><h2 className="logo">Troy</h2></Link>
      <form className="d-flex">
        <input className="form-control" style={{ width: "520px" }} type="search" placeholder="Search for products, brands and more" aria-label="Search" />

        <button type="submit" className="submit_btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
      {/* Login modal */}
      {/* {auth.authenticate ? renderLoggedInMenu() :MyVerticallyCenteredModal()} */}
      <Link to="/" onClick={() => setModalShow(true)} className="extraText">{auth.authenticate ? auth.user.firstName : "Login"}<i class="fa fa-sign-in" aria-hidden="true"></i></Link>
      

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="extraText">
      <DropdownMenu
        menu={<a className="moreinfo">More<i class="fa fa-caret-down"></i></a>}
        menus={[
          { label: "Help Center", href: "", icon: null },
          { label: "Wishlist", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: null },
        ]}
      />

      </div>
     <div className="cartdiv">
     <Link to="/cart">
        <Badge className="shoppingCart" badgeContent={4} color="error">
          Cart
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </Badge>
      </Link>
     </div>
    </div>


  )

}
const renderLoggedInMenu = () => {
  // const auth = useSelector((state) => state.auth);
  return (
    <DropdownMenu
      menu={<a className="fullName">Don</a>}
      menus={[
        { label: "My Profile", href: "", icon: null },
        { label: "SuperCoin Zone", href: "", icon: null },
        { label: "Flipkart Plus Zone", href: "", icon: null },
        {
          label: "Orders",
          href: `/account/orders`,
          icon: null,
        },
        { label: "Wishlist", href: "", icon: null },
        { label: "My Chats", href: "", icon: null },
        { label: "Coupons", href: "", icon: null },
        { label: "Rewards", href: "", icon: null },
        { label: "Notifications", href: "", icon: null },
        { label: "Gift Cards", href: "", icon: null },
        { label: "Logout", href: "", icon: null ,onClick: null},
      ]}
    />
  );
};
function MyVerticallyCenteredModal(props) {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    // const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <div className="main-wrapper login-body"> */}
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <h3 className="smartLogo"> Troy Login</h3>

            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Sign Up</h1>


                <form onSubmit={userLogin}>

                  <div className="form-group">
                    <input className="form-control"
                      label="Email"
                      placeholder="Email"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                  </div>
                  <div className="form-group">
                    <input className="form-control"
                      label="Password"
                      placeholder="Password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />


                  </div>
                  <label>
                    <input type="checkbox" />   Show password

                  </label>


                  <center>
                    <div className="form-group mb-0">
                      <button onClick={showAlert} className="signinButton">Sign in</button>
                    </div>
                  </center>
                </form>


                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>


                <div className="social-login">
                  <span>Login with</span>
                  <SocialIcon network="google" style={{ height: 25, width: 25 }} />
                  <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
                  <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />

                </div>

                <div className="modalFooter">
                  <hr />
                  <div className="signupfooter">
                    <p>Not a member? <a href="#" class="blue-text ml-1">
                      Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}


    </Modal>
  );
}

function showAlert(){
  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Login successful',
      showConfirmButton: false,
      timer: 1500
    })
}


export default Subheader
import React from 'react'
import { Col, Row, Container, Card, Modal, Button, Form } from 'react-bootstrap'
import Footer from '../footer/footer';
import './style.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

/**
* @author
* @function Checkout
**/

const Checkout = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="Checkout">

            <Container>
                
                <Row>
                    <Col xs={12} md={8}>
                        <h4>CHECKOUT</h4>
                        <Card>
                            <Card.Header>ADDRESS DETAILS</Card.Header>
                            <Card.Body>

                                <Card.Text>
                                    <h5>John Doe</h5>
                                    <p className="location">Langata West Primary School, located in Ngei I. Langata Road <br />
                                        +254700000000
                                    </p>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        <br />
                        <Col xs={12} md={12}>

                            <Card>
                                <Card.Header>DELIVERY METHOD</Card.Header>
                                <Card.Body>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Pick Up Station
                                        </label>
                                        <br />
                                        <label>Ready to pick your order in the next 3-4 working days</label>
                                        <br />
                                        <button onClick={() => setModalShow(true)} className="picklocation">Select pick up location</button>
                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                    <br />
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Delivery to your home or office
                                        </label>
                                        <br />
                                        <label>
                                            Delivered between Friday 2 Jul and Saturday 3 Jul
                                        </label>
                                    </div>

                                </Card.Body>
                                <button onClick={showAlert} className="paymentbtn">Proceed to payment</button>
                                <br />
                            </Card>
                        </Col>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4>ORDER SUMMARY</h4>
                        <Card>
                            <Card.Header>YOUR ORDER
                                (1 item)</Card.Header>
                            <Card.Body>
                                <Card.Title>

                                </Card.Title>
                                <Card.Text>
                                    <div className="prodsummary">
                                        <Row>
                                            <Col lg="4"><img src="images/1.jpg" width="80px" height="80px" /></Col>
                                            <Col lg="8"><p>Nord N10 5G - 6.49" - 128GB ROM + 6GB RAM - Dual SIM </p>
                                                <h8>KSh 28,999</h8>
                                                <p>Qty: 1</p></Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col>Subtotal</Col>
                                            <Col>KSh 28,999</Col>
                                        </Row>
                                        <Row>
                                            <Col>Vat</Col>
                                            <Col>KSh 0</Col>
                                        </Row>
                                        <Row>
                                            <Col>Total</Col>
                                            <Col>N.A.</Col>
                                        </Row>


                                    </div>

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </div>
    )
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Select Pick up location
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
             <select className="selectPickup">
                        <option selected>Choose location...</option>
                        <option value="1">CBD</option>
                        <option value="2">Langata</option>
                        <option value="3">Kibra</option>
                        <option value="4">Embakasi </option>
                        <option value="5">Roysambu</option>
                        <option value="6">Kamukunji</option>
                    </select>
        
                </Modal.Body>
                <Modal.Footer>
                    
                    <button onClick={props.onHide} type="button" className="btn btn-info">Save location</button>
                </Modal.Footer>
            </Modal>
        );
    }


}
function showAlert(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}

export default Checkout
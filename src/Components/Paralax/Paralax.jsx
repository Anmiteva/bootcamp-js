import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Paralax.scss";

const Paralax = () => {
	return  <Container fluid className="container-paralax">
                <Row>
                    <Col>
                        <div className="content-title">
                            <div className="timetable">
                                <img className="decor" width={150} src="./paralax_img/timetable-decorator.png" alt="alt img" />
                                <h2 className="opening-hours">OPENING HOURS</h2>
                                <img className="decor" width={150} src="./paralax_img/timetable-decorator2.png" alt="alt img" />
                            </div>
                            <p className="red">Call For Reservations</p>
                        </div>
                    </Col>
                </Row>  
                <Row>
                    <Col>
                        <div className="content">
                            <Col lg="4">
                                <div className="description">
                                    <p>Sunday to Tuesday</p>
                                    <span className="span">09:00</span><br />
                                    <span className="span">24:00</span>
                                </div>
                            </Col>
                            <Col lg="4">
                                <img className="separator" src="./paralax_img/column-divider.png" alt="alt img" />
                            </Col>
                            <Col lg="4">
                                <div className="description">
                                    <p>Friday and Saturday</p>
                                    <span className="span">08:00</span><br />
                                    <span className="span">03:00</span>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <p className="reservation">RESERVATION NUMBER: 088-9990030</p>
                    </Col>
                </Row>
            </Container>
            
}

export default Paralax;
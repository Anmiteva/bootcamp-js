import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzasMenu from "./PizzasMenu";
import SaladsMenu from "./SaladsMenu";
import DessertsMenu from "./DessertsMenu";
import "./CompleteMenu.scss";   

const CompleteMenu = () => {
    return  <Container>
                <Row>
                    <Col>
                        <section className="complete-section">
                            <div className="complete-menu">
                                <Row>
                                    <Col md="10" lg="12">
                                        <div className="complete-menu-line">
                                            <img width={400} height={1} className='complete-menu-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                                            <h2>PIZZAS</h2> 
                                            <img width={400} height={1} className='complete-menu-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                                        </div>
                                    </Col>      
                                </Row>
                                <p className="color">Exclusive and delicious pizzas</p>   
                                <img width={450} height={300} src="./menu_img/pizzas.png" alt="alt img" />
                                <Row className="bottom">
                                    <Col>
                                        <div className="complete-menu-item">
                                            <Col className='media1' md="4" lg="4">
                                                <PizzasMenu />
                                            </Col>
                                            <Col className='media2' md="4" lg="4">
                                                <PizzasMenu />
                                            </Col>
                                            <Col className='media3' md="4" lg="4">
                                                <PizzasMenu />
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" lg="12">
                                        <div className="complete-menu-line">
                                            <img width={400} height={1} className='complete-menu-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                                            <h2>SALADS</h2> 
                                            <img width={400} height={1} className='complete-menu-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="color">Exclusive and delicious salads</p>  
                                <img width={450} height={300} src="./menu_img/salads.png" alt="alt img" /> 
                                <Row>
                                    <Col className="bottom">
                                        <div className="complete-menu-item">
                                            <Col className='media1' md="4" lg="4">
                                                <SaladsMenu />
                                            </Col>
                                            <Col className='media2' md="4" lg="4">
                                                <SaladsMenu />
                                            </Col>
                                            <Col className='media3' md="4" lg="4">
                                                <SaladsMenu />
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" lg="12">
                                        <div className="complete-menu-line">
                                            <img width={400} height={1} className='complete-menu-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                                            <h2>DESSERTS</h2> 
                                            <img width={400} height={1} className='complete-menu-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="color">Exclusive and delicious desserts</p>   
                                <img width={450} height={300} src="./menu_img/desserts.png" alt="alt img" />
                                <Row>
                                    <Col className="bottom">
                                        <div className="complete-menu-item">
                                            <Col className='media1' md="4" lg="4">
                                                <DessertsMenu />
                                            </Col>
                                            <Col className='media2' md="4" lg="4">
                                                <DessertsMenu />
                                            </Col>
                                            <Col className='media3' md="4" lg="4">
                                                <DessertsMenu />
                                            </Col>
                                        </div>
                                    </Col>    
                                </Row>
                                <img width={100} height={40} className='ornament' src="./menu_img/ornament.png" alt="alt img" /> 
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
}

export default CompleteMenu;
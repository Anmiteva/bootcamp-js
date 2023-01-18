import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';
import React from 'react';
import './Menu.scss';

const Menu = () => {
    const menus = [
        {name: "GREAT PASTA"},
        {name: "OUR PIZZAS"},
        {name: "DESSERTS"}
    ];
    
    return <div className='main-menu'>
        <Container>
            <Row>
                <Col lg="12">
                    <div className='menu-logo'>
                    <img className='main-logo' src="./menu_img/menu_logo.png" alt="alt img" />
                    <img className='menu-logo1' src="./menu_img/menu_left.jpg" alt="alt img" />
                    <img className='menu-logo2' src="./menu_img/menu_right.jpg" alt="alt img" />
                    </div>
                </Col>
                <Col lg="12">
                    <div className='menu-container'>
                    {menus.map((menu) => <MenuItem name={menu.name} key={menu.name} />)}
                    </div>
                </Col>
                <Col md="6" lg="12">
                    <div className='menu-logo-line'>
                        <img width={420} height={1} className='menu-logo-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                        <Button text={'view complete menu'} />
                        <img width={420} height={1} className='menu-logo-lines' src="./menu_img/menu_title_line.png" alt="alt img" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Menu;
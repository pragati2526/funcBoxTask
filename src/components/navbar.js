import React, { useState } from "react";

import logo from '../images/brand_logo.png';
import home from '../images/home.png';
import about from '../images/about.png';
import shop from '../images/shop.png';
import login from '../images/login.png';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CartButton from '../components/cart_button';
import Popup from "./popup";

// import './App.css';

function Navbar() {
    const [isPaneOpen, setIsPaneOpen] = useState(false);
  return (
    <div>
      <Container> 
        <Row className="">
          <Col xs={2}>
          <Image src={logo} className="" alt="logo" fluid />
          </Col>
          <Col xs={5}></Col>
          <Col xs={1}>
          <Image src={home} className="" alt="home" fluid/>
          </Col>
          <Col xs={1}>
          <Image src={about} className="" alt="about" fluid />
          </Col>
          <Col xs={1}>
          <Image src={shop} className="" alt="shop" fluid/>
          </Col>
          <Col xs={2}>
          <Image src={login} className="" alt="login" fluid/>
          </Col>
            </Row>
        </Container>
        <SlidingPane
          isOpen={isPaneOpen}
          className="slide-pane"
          onRequestClose={() => setIsPaneOpen((prev) => !prev)}
          from="right"
          width="25%"
          hideHeader={true}
        >
        <Popup setIsPaneOpen={setIsPaneOpen}/>
        </SlidingPane>
        <CartButton setIsPaneOpen={setIsPaneOpen}/>
    </div>
  );
}

export default Navbar;
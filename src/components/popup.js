import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import bin from '../images/bin.png'
import add from '../images/add.png';

export default function Popup({ setIsPaneOpen }) {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h2 style={{fontWeight:"bold",textAlign:"center"}}>Cart</h2>
                        <br/>
                    </Col>
                </Row>
                <Row style={{background:"#EDEEFF"}}>
                    <Col xs={6} style={{background: "#F05D6A",borderRadius: "7px",color:"white",textAlign:"center"}}>
                       <h5 style={{lineHeight:"70px"}}> Basic </h5>
                    </Col>
                    <Col xs={2}/>
                    <Col xs={1} style={{lineHeight:'70px'}}>
                        <Image src={bin} alt='bin'/>
                    </Col>
                    <Col xs={1}>
                        <h4 style={{color:"#241663",lineHeight:'70px'}}>1</h4>
                    </Col>
                    <Col xs={1} style={{lineHeight:'70px'}}>
                        <Image src={add} alt='add'/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}/>
                    <Col xs={9}>
                        <br/>
                    <Link to="/pay"><Button style={{background:"#36BFA5",borderRadius:"38px",border:"none",padding:"20px"}} onClick={() => setIsPaneOpen(false)}>
                        <h5>Proceed to pay</h5>
                    </Button>
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

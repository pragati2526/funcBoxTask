import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import truck from '../images/truck.png';
import new1 from '../images/new1.png';
import pause from '../images/pause.png';

export default function Features() {
    return (
        <div>
            <Container fluid style={{marginTop:"40px"}}>
                <Row style={{background: "#FFFCB2",padding:"15px"}}>
                    <Col xs={4}>
                        <Row>
                            <Col xs={4}/>
                            <Col xs={2}>
                                <img src={truck} className="" alt="truck"/>
                            </Col>
                            <Col xs={6}>
                                <h4 style={{textAlign:"center",lineHeight:"70px",color:"#F06F38"}}>Free Shipping</h4>
                            </Col>
                            </Row>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={1}/>
                            <Col xs={2}>
                                <img src={new1} className="" alt="new"/>
                            </Col>
                            <Col xs={9}>
                                <h4 style={{textAlign:"center",lineHeight:"70px",color:"#F06F38"}}>No experience necessary</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={2}>
                                <img src={pause} className="" alt="pause"/>
                            </Col>
                            <Col xs={6}>
                                <h4 style={{textAlign:"center",lineHeight:"70px",color:"#F06F38"}}>Cancel Anytime</h4>
                            </Col>
                            <Col xs={4}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

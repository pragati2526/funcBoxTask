import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Faq() {
    return (
        <div>
            <Container fluid style={{padding:"50px"}}>
                <Row>
                    <Col>
                    <h1 style={{textAlign:"center",marginBottom:"40px"}}>Frequently Asked Questions</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{padding:"20px"}}>
                        <h4 style={{fontWeight:"bold"}}>What age is Funcbox for?</h4>
                    </Col>
                    <Col xs={12} style={{padding:"15px 20px"}}>
                        <h4>Funcbox is designed for kids 6-12 years in age.</h4>
                    </Col>
                    <Col xs={12} style={{padding:"20px"}}>
                        <h4 style={{fontWeight:"bold"}}>What age is Funcbox for?</h4>
                    </Col>
                    <Col xs={12} style={{padding:"15px 20px"}}>
                        <h4>Funcbox is designed for kids 6-12 years in age.</h4>
                    </Col>
                    <Col xs={12} style={{padding:"20px"}}>
                        <h4 style={{fontWeight:"bold"}}>What age is Funcbox for?</h4>
                    </Col>
                    <Col xs={12} style={{padding:"15px 20px"}}>
                        <h4>Funcbox is designed for kids 6-12 years in age.</h4>
                    </Col>
                    <Col xs={12} style={{padding:"20px"}}>
                        <h4 style={{fontWeight:"bold"}}>What age is Funcbox for?</h4>
                    </Col>
                    <Col xs={12} style={{padding:"15px 20px"}}>
                        <h4>Funcbox is designed for kids 6-12 years in age.</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

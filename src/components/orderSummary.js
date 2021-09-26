import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import Link from 'react-router-dom'

export default function OrderSummary() {
    return (
        <div>
            <Container style={{marginTop:"35px"}} fluid>
                <Row>
                    <Col xs={12}>
                        <h2>Order Summary</h2>
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs={6}>
                                Item 1:
                            </Col>
                            <Col xs={2}/>
                            <Col xs={4}>
                                Rs.420.00
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                Item 2:
                            </Col>
                            <Col xs={2}/>
                            <Col xs={4}>
                                Rs.420.00
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <hr></hr>
                            </Col>
                            <Col xs={6} style={{fontSize:"30px",fontWeight:"bold"}}>
                                Total:
                            </Col>
                            <Col xs={2}/>
                            <Col xs={4} style={{fontSize:"30px",fontWeight:"bold"}}>
                                Rs.840.00
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

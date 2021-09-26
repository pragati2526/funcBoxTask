import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import OrderSummary from './orderSummary'
import Form2 from './form2'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Order() {
    return (
        <div>
            <Container style={{marginTop:"30px",padding:"0px 50px"}} fluid>
                <Row>
                    <Col xs={6}>
                        <Row>
                            <Col xs={12}>
                                <h2>Shipping Address</h2>
                            </Col>
                            <Col xs={12}>
                            <h4 style={{color:"#FF5254"}}>Saved Cards</h4>
                            </Col>
                            <Col xs={12}>
                            <p>Sherlock Holmes<br/>xxxx xxxx xxxx 1234<br/>Expiration date: 12/23</p>
                            </Col>
                            <Col xs={12}>
                                <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Enter CVV</Form.Label>
                                    <Col xs={4}>
                                    <Form.Control type="password" />
                                    </Col>
                                </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1}/>
                    <Col xs={5}>
                        <OrderSummary/><br/>
                        <Link to='/congratulations'>
                            <div style={{padding:"15px"}}>
                                <Button style={{background:"#F3EF93",width:"100%",color:"black",border:"none"}}>
                                    Place your Order
                                </Button>
                            </div>   
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form2/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
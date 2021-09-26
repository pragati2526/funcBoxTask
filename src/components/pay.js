import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Form1 from './form1'
import OrderSummary from './orderSummary'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Pay({setIsPaneOpen}) {
    return (
        <div>
            <Container style={{marginTop:"30px"}} fluid>
                <Row>
                    <Col xs={6}>
                        <Form1 title="Shipping Address"></Form1>
                    </Col>
                    <Col xs={1}/>
                    <Col xs={5}>
                        <OrderSummary/>
                        <br/>
                        <Link to='/order'>
                            <div style={{padding:"15px"}}>
                                <Button style={{background:"#F3EF93",width:"100%",color:"black",border:"none"}} >
                                    Proceed to Pay
                                </Button>
                            </div>   
                        </Link>
                        <br/>
                        <Form style={{padding:"25px"}}>
                        <Form.Group>
                                  <Form.Label>Enter Gift cards, Voucher and Promotional codes </Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form1 title="Billing Address"></Form1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

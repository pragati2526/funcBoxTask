import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function Form2() {
    return (
        <div>
            <Container style={{marginTop:"20px"}}>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12}>
                                <h2>Add a new Card</h2>
                            </Col>
                            <Col xs={12}>
                            <Form>
                                <Row>
                                <Col xs={6}>
                                <Form.Group>
                                  <Form.Label>Name on card</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                <Col xs={12}>
                                <Form.Group>
                                  <Form.Label>Card Number</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                </Row>

                                <Row>
                                <Col xs={3}>
                                <Form.Group>
                                  <Form.Label>Expiration Date</Form.Label>
                                  <Form.Control placeholder="MM YY"/>
                                </Form.Group>
                                </Col>
                                <Col xs={12}>
                                <Form.Group>
                                  <Form.Label>CVV</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                <p>Note: cvv will not be saved</p>
                                </Col>
                                </Row>
                            </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

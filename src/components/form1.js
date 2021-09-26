import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function Form1({title}) {
    return (
        <div>
            <Container style={{marginTop:"20px"}}>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12}>
                                <h2>{title}</h2>
                            </Col>
                            <Col xs={12}>
                                <h4 style={{color:"#FF5254"}}>Saved Address</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Sherlock Holmes<br/>211B,<br/>Baker Street, London,<br/>United Kingdom<br/>929290304</p>
                            </Col>
                            <Col xs={12}>
                            <Form>
                                <Row>
                                <Col xs={6}>
                                <Form.Group>
                                  <Form.Label>First Name</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                <Col xs={6}>
                                <Form.Group>
                                  <Form.Label>Second Name</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                </Row>

                                <Row>
                                <Col xs={6}>
                                <Form.Group>
                                  <Form.Label>Apartment/ House number</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                <Col xs={6}>
                                <Form.Group>
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                </Row>
                                
                                <Row>
                                <Col xs={12}>
                                <Form.Group>
                                  <Form.Label>Street/ Locality</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                </Row>

                                <Row>
                                <Col xs={4}>
                                <Form.Group>
                                  <Form.Label>City</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                <Col xs={4}>
                                <Form.Group>
                                  <Form.Label>State</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                <Col xs={4}>
                                <Form.Group>
                                  <Form.Label>Postal Kids</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
                                </Col>
                                </Row>

                                <Row>
                                <Col xs={12}>
                                <Form.Group>
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control/>
                                </Form.Group>
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

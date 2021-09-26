import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import trolley from '../images/trolley.svg'
export default function CartButton({ setIsPaneOpen }) {
    return (
        <div>
            <Container fluid style={{marginTop:"40px"}} onClick={() => {setIsPaneOpen((prev) => !prev);}}>
                <Row>
                    <Col xs={10}/>
                    <Col xs={2} style={{float:"right",background: "#FFFCB2",borderRadius: "35px 0px 0px 35px"}}>
                        <Row>
                            <Col xs={4}>
                                <img src={trolley} className="" alt="trolley"/>
                            </Col>
                            <Col xs={8}>
                                <h4 style={{textAlign:"center",lineHeight:"50px"}}>Go to cart</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Bg from '../images/footerBg.png'
import bell from '../images/bell.png'
import In from '../images/in.png'
import fb from '../images/fb.png'
import ig from '../images/ig.png'

export default function Footer() {
    return (
        <div>
            <Container style={{marginTop:"80px",backgroundImage:`url(${Bg})`,padding:"30px"}}>
                <Row style={{border: "4px solid #FFFFFF",padding:"40px"}}>
                    <Col xs={6}>
                        <h3 style={{color:'#FFFFFF'}}>Get in Touch</h3>
                    </Col>
                    <Col xs={6}>
                        <Row style={{background: "#FFFFFF",borderRadius: "50px"}}>
                            <Col xs={9}>
                                <input style={{border:"none",width:"300px"}}></input>
                            </Col>
                            <Col xs={3}>
                                <Image src={bell} alt='bell' fluid/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{padding:"40px"}}>
                    <Col xs={12} style={{textAlign:"right",color:"white"}}>Join our Team</Col>
                    <Col xs={12} style={{textAlign:"right",color:"white"}}>Terms</Col>
                    <Col xs={12} style={{textAlign:"right",color:"white"}}>Privacy</Col>
                    <Col xs={12} style={{textAlign:"center",color:"white"}}>Made With ❤️ by Team FuncBox</Col>
                </Row>
                <Row style={{margin:"10px 0px"}}>
                    <Col xs={5}/>
                    <Col xs={1} >
                        <Image src={In} alt='linkedin' fluid/>
                    </Col>
                    <Col xs={1} style={{margin:"0px"}}>
                        <Image src={fb} alt='facebook' fluid/>
                    </Col>
                    <Col xs={1} style={{margin:"0px",alignItems:"left"}}>
                        <Image src={ig} alt='instagram' fluid/>
                    </Col>
                    <Col xs={4}/>
                </Row>
            </Container>
        </div>
    )
}

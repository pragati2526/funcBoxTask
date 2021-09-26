import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import box from '../images/ver-box.png';


export default function Plans() {
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Plans</h2>
            <Container fluid style={{marginTop:"40px"}}>
                <Row>
                    <Col xs={4}>

                    </Col>
                    <Col xs={4}>
                        
                   </Col>
                   <Col xs={4}>
                        
                   </Col>
                </Row>
                <Row>
                    <Col xs={2} style={{background: "#FFFCB2",height:"60px",margin:"60px -20px 10px 0px"}}/>    
                    <Col xs={2}>                
                        <Image src={box} alt="box" fluid/>
                    </Col>
                    <Col xs={8} style={{background: "#FFFCB2",height:"60px",margin:"60px 0px 10px -15px"}}>
                        <h4 style={{textAlign:"center",lineHeight:"50px",color:"#F06F38"}}>Searching for a one-time gift or corporate? You're in luck »</h4>
                    </Col>
                </Row>
                {/* <Row style={{background: "#FFFCB2",position:"relative"}}>
                    <Col xs={4}/>
                    <Col xs={2} style={{zIndex:"10",position:"absolute"}}>
                        <Image src={box} alt="box" fluid/>
                    </Col>
                    <Col xs={8} style={{position:"absolute"}}>
                    <h4 style={{textAlign:"center",lineHeight:"50px",color:"#F06F38"}}>Searching for a one-time gift or corporate? You're in luck »</h4>
                    </Col>

                </Row> */}
                {/* <Row style={{zIndex:"10"}}>
                    <Col xs={2}/>
                    <Col xs={2}>
                        <Image src={box} alt="box" fluid/>
                    </Col>
                    <Col xs={8}/>
                </Row> */}
            </Container> 
            
        </div>
    )
}

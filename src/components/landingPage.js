import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import kids from '../images/kids.png'
import Image from 'react-bootstrap/Image'
//import box1 from '../images/box1.png';
import Features from './features'
import Plans from './plans'
import Faq from './faq';
import Schools from './schools' 
import Footer from "./footer";

export default function LandingPage() {
    return (
        <div>
            <Container fluid style={{marginTop:"30px"}}>
                <Row style={{position:"relative"}}>
                    <Col xs={4} style={{zIndex:"4"}}>
                    <Image src={kids} height="500px" width="500px" alt="kids" style={{marginLeft:"30%"}} fluid/>
                    </Col>
                    <Col xs={6} style={{position:"absolute"}}>
                    <div style={{textAlign:"center",background:"#FFF9E7",borderRadius:"30px",width:'150%',height:'70%',marginTop:"10%",marginLeft:"40%",padding:"30px",paddingLeft:"50%"}}>
                        <h5 style={{marginTop:"20px"}}>FuncBox is a box full of surprises which will teach you educational concepts and coding with a revolutionary twist.</h5>
                        
                        <ul>
                            <li><h5> Perfect for age-group 6-12 years.</h5></li>
                            <li> <h5> Build your own fun games.</h5></li>
                            <li><h5> Learn to code and explore.</h5></li>
                            <li><h5> Share your game with your friends</h5></li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Features/>
            <Plans/>
            <Faq/>
            <Schools/>
            
        </div>
    )
}

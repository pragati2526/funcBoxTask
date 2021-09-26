import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import bag from '../images/bagpack.png'
import nbook from '../images/nbook.png'
import teacher from '../images/teacher.png'


export default function Schools() {
    return (
        <div>
            <Container fluid style={{marginTop:"40px"}}>
                <Row style={{margin:"100px 20px"}}>
                    <Col xs={12}>
                        <h1 style={{textAlign:"center",marginBottom:"60px"}}>For Schools</h1>
                    </Col>
                    <Col xs={6} >
                        <Row>
                            <Col xs={4}>
                                <Image src={bag} alt='bagpack' fluid/>
                            </Col>
                            <Col xs={3}></Col>
                            <Col xs={5}>
                                <Image src={teacher} alt='teacher'fluid/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}></Col>
                            <Col xs={4}>
                                <Image src={nbook} alt='notebook' fluid/>
                            </Col>
                            <Col xs={4}></Col>
                        </Row>
                    </Col>
                    <Col xs={6} style={{background:"#F8F8F8"}}>
                        <p style={{margin:"20px",padding:"30px",fontSize:"25px"}}>
                            Yay! FuncBox brings special discount for 
                            all the School Tie-ups. FuncBox can be 
                            easily incorporated in all the school grades.
                            To make your students outperform and 
                            help your institute gain an edge over the
                            others contact our team NOW!
                            <br/><br/><br/>
                            <p style={{fontSize:"25px",color:"#1F86D1"}}>Know More</p>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

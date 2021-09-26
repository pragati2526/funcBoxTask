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
                    <Col xs={4} style={{textAlign:"center"}} className="align-self-center">
                        <div style={{background:"#F05D6A",borderRadius:"9.65216px",width:"70%",color:"white"}}>
                            <h3>Basic</h3>
                            <ul>
                            <li> FuncBox Binder </li>
                            <li>  3 mathematical apps </li>
                            <li>  3 scientific apps</li>
                            <li>  3 game apps</li>
                            <li>  Stickers</li>
                            <li>  Kickstart guide</li>
                            <li>  Interactive website</li>
                            </ul>
                        </div>
                        <div style={{background:"#EDEEFF",borderRadius:"9.65216px",width:"70%"}}>
                       <p style={{color:"#241663"}}> Monthly a/month <br/> <br/>
                        Quarterly a/month<br/> <br/>
                        Half-yearly a/month<br/><br/>
                        Yearly a/month</p>
                        <button style={{color:"#F05D6A",background:"#EDEEFF",border:"none"}}>Add to cart</button>
                        </div>
                    </Col>
                    <Col xs={4} style={{textAlign:"center"}} className="align-self-center">
                    <div style={{background:"#FFD27B",borderRadius:"9.65216px",width:"70%",color:"white"}}>
                            <h3>Standard</h3>
                            <ul>
                            <li> FuncBox Binder </li>
                            <li>  5 mathematical apps </li>
                            <li>  5 scientific apps</li>
                            <li>  5 game apps</li>
                            <li>  Stickers</li>
                            <li>  Mini fun deck</li>
                            <li>  Kickstart guide</li>
                            <li>  Interactive website</li>
                            </ul>
                        </div>
                        <div style={{background:"#EDEEFF",borderRadius:"9.65216px",width:"70%"}}>
                       <p style={{color:"#241663"}}> Monthly a/month <br/> <br/>
                        Quarterly a/month<br/> <br/>
                        Half-yearly a/month<br/><br/>
                        Yearly a/month</p>
                        <button style={{color:"#FFD27B",background:"#EDEEFF",border:"none"}}>Add to cart</button>
                        </div>
                        
                   </Col>
                   <Col xs={4} style={{textAlign:"center"}} className="align-self-center">
                   <div style={{background:"#36BFA5",borderRadius:"9.65216px",width:"70%",color:"white"}}>
                            <h3>Standard</h3>
                            <ul>
                            <li> FuncBox Binder </li>
                            <li>  8 mathematical apps </li>
                            <li>  8 scientific apps</li>
                            <li>  8 game apps</li>
                            <li>  2 Surprise goodies </li>
                            <li>  Mystery toy </li>
                            <li>  Stickers</li>
                            <li>  Mini fun deck</li>
                            <li>  Kickstart guide</li>
                            <li>  Interactive website</li>
                            </ul>
                        </div>
                        <div style={{background:"#EDEEFF",borderRadius:"9.65216px",width:"70%"}}>
                       <p style={{color:"#241663"}}> Monthly a/month <br/> <br/>
                        Quarterly a/month<br/> <br/>
                        Half-yearly a/month<br/><br/>
                        Yearly a/month</p>
                        <button style={{color:"#36BFA5",background:"#EDEEFF",border:"none"}}>Add to cart</button>
                        </div>
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

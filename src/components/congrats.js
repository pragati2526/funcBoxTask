import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import truck from '../images/truck_fin.png'
import { motion } from 'framer-motion';

export default function Congrats() {
    return (
        <div style={{position:"relative"}}>
        <motion.div animate={{
            x: '70vw'    
          }}
          transition={{
            type: 'tween',
            duration: 1
          }}
          style={{marginTop:"20%",display: "block",position:"absolute"}}>
            <Image src={truck} alt='truck'/>
        </motion.div>
        <div style={{width:"30%",textAlign:"center",marginLeft:"33vw",position:"absolute",zIndex:"9",marginTop:"23%",background:"white",fontFamily: "'Sacramento', cursive"}}>
            <h1 style={{lineHeight:"70px",fontWeight:"bold"}}>Congratulations!</h1>
            <h5 style={{lineHeight:"60px"}}>Your order has been placed</h5>
            <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
    )
}

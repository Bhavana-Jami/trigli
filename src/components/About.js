import React from 'react'
import {Container,Col, Row} from 'react-bootstrap'
import '../styles/About.css'
import { RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri'
function About() {
  return (
    <Container className='d-flex justify-content-center align-items-center flex-column w-50' style={{color:"#C70039"}}>
      <Row className='mb-3'><h2>Trigli is about..</h2></Row>
      <Row className='content'>A trigger refers to something that affects your emotional state, often significantly, by causing extreme overwhelm or distress</Row>
      <Row className='content'>Opposite to triggers are glimmers, Glimmers are small moments that spark joy or peace, which can help cue our nervous system to feel safe or calm.</Row>
      <Row className='content'>Here comes Trigli that helps you journal about your triggers and understand yourself better to reduce the effects of those triggers on oneself.</Row>
    <Row><Col><RiLinkedinFill/></Col>
    <Col><RiInstagramFill/></Col>
    <Col><RiYoutubeFill/></Col></Row>
    </Container>
  )
}

export default About
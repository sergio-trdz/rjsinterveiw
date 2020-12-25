import React, { useState } from 'react';
import Nav from '../Layout/Nav/Nav'
import './Resumen.css'
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

function Resumen() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        <Nav />
        <h2 className="Resumen">Resumen</h2>
        <Container>
        <Row className="Datos">
          <Col sm={8}><h4>Datos</h4></Col>
          <Col sm={2}>
            <Row>
              <h4>Resultados</h4>
            </Row>
            <Row>
              <p>Skill</p>
            </Row>
            <Row>
              <p>Javascript</p>
            </Row>
            <Row>
              <p>React</p>
            </Row>
            <Row>
              <p>Node</p>
            </Row>
          </Col>
          <Col sm={2}>
            <Row>
            <p><a href="" onClick={handleShow}>Ver preguntas</a></p> 
            
            </Row>
            <Row>
              <p>Puntaje</p>
            </Row>
            <Row>
              <p>100</p>
            </Row>
            <Row>
              <p>90</p>
            </Row>
            <Row>
              <p>80</p>
            </Row>
          </Col>
        </Row>
        <Row className="Comentarios">
          <Col md={4}>Comentarios</Col>
        </Row>
        <Row>
        <textarea id="" name="" rows="4" cols="50"></textarea>
        </Row>
      </Container>
      </div>
    );
  }
  
  export default Resumen;
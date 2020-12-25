import React, { useState } from 'react';
import Nav from '../Layout/Nav/Nav'
import './Candidato.css'
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

function Candidato() {

  const [show, setShow] = useState(false);
  const [showCandidato, setShowCandidato] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCandidato = () => setShowCandidato(false);
  const handleShowCandidato = () => setShowCandidato(true);

    return (
      <div>
        <Nav />
        <h2 className="Candidato">Candidato</h2>
        <Container className="Agregar" maxWidth="sm">
          <Row>
            <Col md={4}>
              <Button className="Candidato" variant="flat" onClick={handleShowCandidato}>
                  Añadir candidato
              </Button>
              <Modal show={showCandidato} onHide={handleCloseCandidato}>
                <Modal.Header closeButton>
                  <Modal.Title>Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group controlId="formNombre">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el nombre" />
                  </Form.Group>
                  <Form.Group controlId="formCorreo">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el correo electronico " />
                  </Form.Group>
                  <Form.Group controlId="formEID">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el tipo" />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCandidato}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleCloseCandidato}>
                    Guardar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button className="Temas" variant="flat" onClick={handleShow}>
                Skills
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Nuevo Entrevistador</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group controlId="formNombre">
                    <Form.Check type="checkbox" label="Javascript" />
                  </Form.Group>
                  <Form.Group controlId="formId">
                    <Form.Check type="checkbox" label="React" />
                  </Form.Group>
                  <Form.Group controlId="formEID">
                    <Form.Check type="checkbox" label="Node" />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Guardar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
        <Container className="Button" maxWidth="sm">
          <Row>
            <Col md={4}>
              <Button variant="danger">Regresar</Button>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button>Continuar</Button>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Candidato;
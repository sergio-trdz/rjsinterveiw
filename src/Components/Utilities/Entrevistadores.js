import React, { useState } from 'react';
import Nav from '../Layout/Nav/Nav'
import './Entrevistadores.css'
import { Button, Modal, Form, Container } from 'react-bootstrap';

function Entrevistadores() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav />
            <h2 className="Entrevistadores">Entrevistadores</h2>
            <Container>
                <Button className="Añadir" variant="flat" onClick={handleShow}>
                    Añadir entrevistador
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Entrevistador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el nombre" />
                        </Form.Group>
                        <Form.Group controlId="formId">
                            <Form.Label>Id del empleado</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el id del empleado" />
                        </Form.Group>
                        <Form.Group controlId="formEID">
                            <Form.Label>EID</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el eid" />
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
                <div>
                    <Button variant="primary" className="Continuar">Continuar</Button>
                </div>
            </Container>
        </div>
    );
}

  export default Entrevistadores;
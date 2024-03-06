import { Container, Row, Col, Form, FloatingLabel, Button, Alert} from 'react-bootstrap';
import { useState } from 'react';

import '../style/contact.css';
import cv from '../../src/Assets/cv/PrunelleStoessel_cv.pdf'

function Contact() {

    const [validated, setValidated] = useState(false);
    const [formState, setFormState] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setShowSuccess(false);
            setShowFail(true);
            setValidated(true);
        } else {
            window.Email.send(configSmtp).then(() => setShowSuccess(true), setShowFail(false));
            form.reset();
            setFormState({});
            setValidated(false);
        }    
    };

    const inputHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    const configSmtp = {
        SecureToken : "f5139d10-66b0-42ad-bb13-365b1019773b",
        To : 'prunelle.stoessel@gmail.com',
        From : 'prunelle.stoessel@gmail.com',
        Subject : "Message provenant de mon portfolio",
        Body : `${formState.firstName} ${formState.lastName} <br/> Email : ${formState.email} <br/> Objet : ${formState.object} <br/> Message : <br/>${formState.message}`
    }

    return (
        <Container className='mt-3 pt-4 pb-1' id="contact" fluid style={{backgroundColor: "#2b3035"}}>
            <Container className='mb-3'>
                <Row className='mb-3'>
                    <span className='h4 fw-bold text-center' style={{color: "#ffffff" }}>Me contacter</span>
                </Row>

                <Row className='mb-3 justify-content-center' lg={4}>
                    <Alert className='text-center h4' show={showSuccess} variant="success">
                        Message envoyé !
                    </Alert>
                    <Alert className='text-center h4' show={showFail} variant="danger">
                        Echec de l'envoie du message
                    </Alert>
                </Row>

                <Form noValidate validated={validated} onSubmit={handleSubmit} className='justify-content-center'>
                    <Row>
                        <Col >
                            <Form.Group className="mb-3" controlId="formGroupLastname">
                                <FloatingLabel controlId='floatingLastname' label="Nom">
                                    <Form.Control required type='text' name='lastName' placeholder="Nom" onChange={inputHandler}/>
                                    <Form.Control.Feedback type="invalid">Veuillez renseigner votre nom</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupFirstname">
                                <FloatingLabel controlId='floatingFirstname' label="Prénom">
                                    <Form.Control required type='text' name='firstName' placeholder="prénom" onChange={inputHandler}/>
                                    <Form.Control.Feedback type="invalid">Veuillez renseigner votre prénom</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <FloatingLabel controlId='floatingLastname' label="E-mail">
                                <Form.Control required type='email' name='email' placeholder="E-mail" onChange={inputHandler}/>
                                <Form.Control.Feedback type="invalid">Merci de m'indiquer votre adresse e-mail</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3 text-align-start" controlId="formGroupMessage">
                            <Form.Label style={{color: "#ffffff" }} className='h4 fw-bold'>Message</Form.Label>
                            <FloatingLabel className='mb-3' controlId='floatingObject' label="Objet (optionnel)">
                                <Form.Control type='text' name='object' placeholder="Objet" onChange={inputHandler}/>
                            </FloatingLabel>
                            <Form.Control required as="textarea" name='message' rows={6} placeholder="Votre message ici..." onChange={inputHandler}/>
                            +
                            <Form.Control.Feedback type="invalid">Vous n'avez écrit aucun message !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant='success'>Envoyer</Button>                    
                </Form>
            </Container>

            <Col className='text-center'>
                <Row className='justify-content-center'>
                    <Col md={6} >
                        <a href={cv} download="prunelle_stoessel_cv.pdf" class="btn btn-outline-warning">Télécharger mon CV</a>
                    </Col>
                </Row>
                <Row>
                    <Col className='my-3'>
                        <a href='mailto:prunelle.stoessel@gmail.com' className='logo_contact mx-3'><i class="fa-solid fa-envelope fa-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/prunelle-stoessel/" className='logo_contact mx-3 '><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="https://github.com/RedRingRita" className='logo_contact mx-3'><i class="fa-brands fa-github fa-2xl"></i></a>
                    </Col>
                </Row>
            
                <Row className='mb-3'>
                    <span className='mt-2' style={{color: "#ffffff" }}>Prunelle Stoëssel - 2024</span>
                </Row>
            </Col>
        </Container>
    );
}

export default Contact;
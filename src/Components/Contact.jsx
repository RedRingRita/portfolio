import { Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';
import { useState } from 'react';

function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (      

        <Container className='mt-3 pt-4 pb-1' id="contact" fluid style={{backgroundColor: "#2b3035"}}>
            <Container className='mb-3'>
                <Row className='mb-3'>
                    <span className='h4 fw-bold text-center' style={{color: "#ffffff" }}>Me contacter</span>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='justify-content-center'>
                    <Row>
                        <Col >
                            <Form.Group className="mb-3" controlId="formGroupLastname">
                                <FloatingLabel controlId='floatingLastname' label="Nom">
                                    <Form.Control required type='text' placeholder="Nom" />
                                    <Form.Control.Feedback type="invalid">Veuillez renseigner votre nom</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupFirstname">
                                <FloatingLabel controlId='floatingFirstname' label="Prénom">
                                    <Form.Control required type='text' placeholder="prénom"/>
                                    <Form.Control.Feedback type="invalid">Veuillez renseigner votre prénom</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <FloatingLabel controlId='floatingLastname' label="E-mail">
                                <Form.Control required type='email' placeholder="E-mail"/>
                                <Form.Control.Feedback type="invalid">Merci de m'indiquer votre adresse e-mail</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3 text-align-start" controlId="formGroupMessage">
                            <Form.Label style={{color: "#ffffff" }} className='h4 fw-bold'>Message</Form.Label>
                            <Form.Control required as="textarea" rows={6} placeholder="Votre message ici..." />
                            <Form.Control.Feedback type="invalid">Vous n'avez écrit aucun message !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant='success'>Envoyer</Button>
                    
                </Form>
            </Container>

            <Col className='text-center'>
                <Row>
                    <Col className='my-3'>
                        <a href='mailto:prunelle.stoessel@gmail.com' className='link-light mx-3'><i class="fa-solid fa-envelope fa-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/prunelle-stoessel/" className='link-light mx-3'><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="https://github.com/RedRingRita" className='link-light mx-3'><i class="fa-brands fa-github fa-2xl"></i></a>
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
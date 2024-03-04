import { Container, Row, Col} from 'react-bootstrap';

function Contact() {
    return (
        <Container className='mt-3 pt-3 pb-1 text-center' id="contact" fluid style={{backgroundColor: "#2b3035"}}>
            <Col>
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
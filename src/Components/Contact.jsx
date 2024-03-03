import { Container, Stack, Row, Col} from 'react-bootstrap';

function Contact() {
    return (
        <Container className='text-bg-secondary mt-3 pt-3 pb-1' id="contact" fluid>
            <Row>
                <Col>                    
                </Col>

                <Col className='text-center'>
                    <Stack direction='horizontal' gap={3}>
                        <a href='mailto:prunelle.stoessel@gmail.com' className='link-light'><i class="fa-solid fa-envelope fa-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/prunelle-stoessel/" className='link-light'><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="https://github.com/RedRingRita" className='link-light'><i class="fa-brands fa-github fa-2xl"></i></a>
                    </Stack>
                </Col>                    

                <Col >                    
                </Col>
            </Row>
            
            <Row className='text-center'>
                <span className='mt-2'>Prunelle Stoëssel - 2024</span>
            </Row>
        </Container>
    );
}

export default Contact;
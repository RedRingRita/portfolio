import prunelle from '../../src/Assets/Images/prunelle.png';

import { Row, Col, Container, Image } from 'react-bootstrap';

function About() {

    return (
        <Container className='my-5 text-center' id="about">
            <Col className='mt-3'>
                <Row className='text-center' xs={2} md={6}>
                    <Image src={prunelle} alt='Photo de Prunelle' roundedCircle/>
                </Row>
                <Row >
                    <h3>Ancienne manager logistique, j'ai décidé de changer de voie et de m'orienter vers un métier porté vers mes premières passions : la tech. Devenir développeuse web était donc une nouvelle voie toute trouvée.</h3>
                </Row>
            </Col>
        </Container>
    );
}

export default About;
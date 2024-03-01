import Image from 'react-bootstrap/Image';

import { Row, Col, Container } from 'react-bootstrap';

function About() {

    return (
        <Container className='text-bg-primary' id="about">
            <Row className='mt-3'>
                <Col className='text-center'>
                    <Image src="https://picsum.photos/200" alt='Une image random' rounded/>
                </Col>
                <Col className='text-bg-info' >
                    <h3  style={{textAlign: "justify"}} >Ancienne manager logistique, j'ai décidé de changer de voie et de m'orienter vers un métier porté vers mes premières passions : la tech. Devenir développeuse web était donc une nouvelle voie toute trouvée.</h3>
                    <p class="text-end">End aligned text on all viewport sizes.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
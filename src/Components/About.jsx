import prunelle from '../../src/Assets/Images/prunelle.png';

import { Row, Col, Container, Image } from 'react-bootstrap';

function About() {

    return (
        <Container className='my-5 text-center' id="about">
            <Col className='mt-3'>
                <Row className='justify-content-center mb-5' xs={2} md={6}>
                    <Image src={prunelle} alt='Photo de Prunelle' roundedCircle/>
                </Row>
                <Row className='mb-3 h5' >
                    <p>Ancienne manager logistique, j'ai décidé de changer de voie et de m'orienter vers un métier porté vers mes premières passions : la tech. Devenir développeuse web était donc une nouvelle voie toute trouvée.</p>
                </Row>

                <Row className='h5'>
                    <p>En tant que développeuse web passionnée, je mets en œuvre mon expertise technique pour transformer vos visions en réalité numérique. Mon objectif est de créer des sites web qui captivent, engagent et inspirent vos visiteurs. Avec une attention méticuleuse aux détails et une compréhension approfondie des dernières technologies, je m'efforce de fournir des solutions web innovantes et adaptées à vos besoins spécifiques.</p>
                </Row>
            </Col>
        </Container>
    );
}

export default About;
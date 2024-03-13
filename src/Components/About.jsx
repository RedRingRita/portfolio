import prunelle from '../../src/Assets/Images/prunelle.png';

import { Row, Col, Container, Image } from 'react-bootstrap';

function About() {

    return (
        <Container className='my-5 text-center' id="about">
            <Col className='mt-3'>
                <Row className='justify-content-center mb-5' xs={3} md={4} xl={6}>
                    <Image src={prunelle} alt='Photo de Prunelle' roundedCircle/>
                </Row>
                <Row className='mb-3 h5' >
                    <p>Après une carrière enrichissante en tant que manager logistique, j'ai choisi de suivre le doux murmure de mes passions originelles vers un nouveau domaine : la technologie. Guidée par ma curiosité et mon désir d'apprendre, j'ai entrepris une formation en ligne immersive, explorant les arcanes du développement web pour acquérir les compétences essentielles à la création et à la maintenance de sites internet.</p>
                </Row>

                <Row className='h5'>
                    <p>En tant que développeuse web passionnée, je mets en œuvre mon expertise technique pour transformer vos visions en réalité numérique. Mon objectif est de créer des sites web qui captivent, engagent et inspirent vos visiteurs. Avec une attention méticuleuse aux détails et une compréhension approfondie des dernières technologies, je m'efforce de fournir des solutions web innovantes et adaptées à vos besoins spécifiques.</p>
                </Row>
            </Col>
        </Container>
    );
}

export default About;
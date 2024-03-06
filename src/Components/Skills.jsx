import {Container, Col, Row, Image} from 'react-bootstrap';
import html from '../../src/Assets/logos//150px/html.png';
import css from '../../src/Assets/logos//150px/css.png';
import javascript from '../../src/Assets/logos/150px/javascript.png';
import react from '../../src/Assets/logos/150px/react.png';
import nodejs from '../../src/Assets/logos/150px/nodejs.png';
import bootstrap from '../../src/Assets/logos/150px/bootstrap.png';
import photoshop from '../../src/Assets/logos/150px/photoshop.png';

import '../style/skills.css';

function Skills() {
  return (
    <Container>
        <Row className='pt-5'>
            <Col className='h2 fw-bold text-center'>
                <p>Mes compétences :</p>
            </Col>
        </Row>
      <Row className='py-5'>
        <Col>
          <Image src={html} alt='logo html5' className='logo'/>
        </Col>

        <Col>
            <Image src={css} alt='logo css3' className='logo'/>
        </Col>

        <Col>
            <Image src={javascript} alt='logo javascript' className='logo'/>
        </Col>

        <Col>
            <Image src={react} alt='logo react' className='logo'/>
        </Col>

        <Col>
            <Image src={nodejs} alt='logo nodejs' className='logo'/>
        </Col>

        <Col>
            <Image src={bootstrap} alt='logo bootstrap' className='logo'/>
        </Col>

        <Col>
            <Image src={photoshop} alt='logo photoshop' className='logo'/>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
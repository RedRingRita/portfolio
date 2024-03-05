import Header from './Components/Header';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

import project from '../src/database/projects.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Header />
            <section className='about'>
                <About/>
            </section>

            <section className='work' id="work">
                <Container className='text-center py-5'>
                    <span className='h1 fw-bold border-bottom border-danger pb-4' style={{color: "#41353d" }}>Mes réalisations</span>
                </Container>

                <Container className='mt-3' >
                    <Row className='justify-content-center pb-3' xs={1}>
                        <Col className='col-md-4 mb-3'>
                            <Work cover={project[0].cover} title={project[0].title} description={project[0].description} picture={project[0].pictures} techno={project[0].technologies} />
                        </Col>

                        <Col className='col-md-4'>
                            <Work cover={project[1].cover} title={project[1].title} description={project[1].description} picture={project[1].pictures} techno={project[1].technologies} />
                        </Col>
                    </Row>

                    <Row className='justify-content-center' xs={1}>
                        <Col className='col-md-4 mb-3'>
                            <Work cover={project[2].cover} title={project[2].title} description={project[2].description} picture={project[2].pictures} techno={project[2].technologies} />
                        </Col>

                        <Col className='col-md-4'>
                            <Work cover={project[3].cover} title={project[3].title} description={project[3].description} picture={project[3].pictures} techno={project[3].technologies} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Skills />
            </section>
        
            <section className='contact'>
                <Contact/>
            </section>
        </div>
    );
}

export default App;
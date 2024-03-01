import Header from './Components/Header';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
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
            <section className='work'>
                <Container className='mt-3' id="work">
                    <Row className='justify-content-center'>
                        <Col className='col-md-4'>
                            <Work cover={project[0].cover} title={project[0].title} description={project[0].description} picture={project[0].pictures} techno={project[0].technologies} />
                        </Col>

                        <Col className='col-md-4'>
                            <Work cover={project[1].cover} title={project[1].title} description={project[1].description} picture={project[1].pictures} techno={project[1].technologies} />
                        </Col>
                    </Row>

                    <Row className='mt-3 justify-content-center'>
                        <Col className='col-md-4'>
                            <Work cover={project[0].cover} title={project[0].title} description={project[0].description} picture={project[0].pictures} techno={project[0].technologies} />
                        </Col>

                        <Col className='col-md-4'>
                            <Work cover={project[1].cover} title={project[1].title} description={project[1].description} picture={project[1].pictures} techno={project[1].technologies} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='contact'>
                <Contact/>
            </section>
        </div>
    );
}

export default App;
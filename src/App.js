import Header from './Components/Header';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

import projects from '../src/database/projects.json';
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

                <Container className='mt-3'>
                    {projects.map((project, index) => (
                        (index % 2 === 0) && 
                        <Row key={index} className='justify-content-center pb-3' xs={1}>
                            <Col className='col-md-4 mb-3' sm={12} md={8} lg={4}>
                                <Work cover={projects[index].cover} title={projects[index].title} description={projects[index].description} picture={projects[index].pictures} alt={projects[index].alt} techno={projects[index].technologies} leftPic={projects[index].leftPic}/>
                            </Col>

                            {projects[index + 1] &&
                            <Col className='col-md-4' sm={12} md={8} lg={4}>
                                <Work cover={projects[index+1].cover} title={projects[index+1].title} description={projects[index+1].description} picture={projects[index+1].pictures} alt={projects[index+1].alt} techno={projects[index+1].technologies} leftPic={projects[index+1].leftPic}/>
                            </Col>
                            }
                        </Row>
                    ))}
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
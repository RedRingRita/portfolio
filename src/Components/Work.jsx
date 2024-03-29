import { Row, Col, Card, Modal, Button, Image, Badge, Stack, Container} from 'react-bootstrap';
import { useState } from 'react';

import "../../src/style/work.css";

function Work({cover, title, description, picture, alt, techno, leftPic, repo, issue}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const skillColor = {
    "HTML": "primary",
    "CSS": "success",
    "Javascript": "warning",
    "REACT": "info",
    "Express": "secondary",
    "NodeJS": "danger",
    "MongoDB": "success"
  };

  //Fonction d'importation des images
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {return images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../Assets/Images', false));

  return (
    <div>
      <Card className='card'>
        <Card.Img src={images[cover]} alt='cover' onClick={handleShow}/>
      </Card>

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className='pb-3'>
              <Col xs={12} lg={6}>
                <Image className='img-fluid shadow-sm lazy' src={images[leftPic]} alt={alt} ></Image>
              </Col>
              <Col md={6}>
                <Row><h3>{description}</h3></Row>
                <Row>
                    {techno.map((item, index) => ( 
                      <Col className='h4' key={`${item.techno}+${index}`}>
                        <Stack>                          
                          <Badge  bg={skillColor[item]}>{item}</Badge>
                        </Stack>
                      </Col>
                    ))}
                </Row>
                <Row className='h6'>
                  <span className='fw-bold'>Problématiques rencontrées : </span><span>{issue}</span>
                </Row>
                <Row><a href={repo} rel='noreferrer' target='_blank'>Repo GitHub</a></Row>
              </Col>       
            </Row>

            {picture.map((image, index) => (
              <Row key={index} className='pb-3'>
                <Col>
                  <Image className='img-fluid shadow-sm lazy' src={images[picture[index]]} alt={alt} rounded ></Image>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Work;
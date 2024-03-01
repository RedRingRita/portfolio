import { Row, Col, Card, Modal, Button, Image, Badge, Stack} from 'react-bootstrap';
import { useState } from 'react';

function Work({cover, title, description, picture, techno}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const skillColor = {
    "HTML": "primary",
    "CSS": "success",
    "Javascript": "warning",
    "REACT": "info",
  };

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {return images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../Assets/Images', false));

  return (
    <div>
            <Card>
              <Card.Img src={images[cover]} alt='cover' onClick={handleShow}/>
            </Card>

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col><Image className='img-fluid' src={images[picture[0]]}></Image></Col>

            <Col>
              <Row><h3>{description}</h3></Row>
              <Row className='h4'>
                <Stack direction='horizontal' gap={2}>
                  {techno.map((item, index) => (                    
                    <Badge key={`${item.techno}+${index}`} bg={skillColor[item]}
                    >{item}</Badge>
                  ))}
                </Stack>
              </Row>
            </Col>       
          </Row>

          <Row>
            <Col><Image className='img-fluid' src={images[picture[1]]}></Image></Col>
          </Row>
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
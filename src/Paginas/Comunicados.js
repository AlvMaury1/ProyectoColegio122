
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';
import { Container, Row } from 'react-bootstrap';

const Comunicados = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <>
    <NavBar/>
    <Banner texto="Comunicados" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />
      <Container>
        <Row className='py-5 px-5'>
      <Button variant="primary" onClick={handleShow1}>
        Comunicado 1
      </Button>
      </Row>

      <Modal show={show1} onHide={handleClose1}>
      <Modal.Header closeButton>
          <Modal.Title>Comunicado Nro 21/23</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                className="d-block w-100"
                src="comicadosImg/img1.jpeg" 
                alt="Imagen Naval"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className='py-5 px-5'>

      <Button variant="primary" onClick={handleShow2}>
        Comunicado 2
      </Button>
      </Row>
      <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
          <Modal.Title>Comunicado Nro 19/23</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                className="d-block w-100"
                src="comicadosImg/img2.jpeg" 
                alt="Imagen Naval"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className='py-5 px-5'>

      <Button variant="primary" onClick={handleShow3}>
        Comunicado 3
      </Button>
      </Row>
      <Modal show={show3} onHide={handleClose3}>
      <Modal.Header closeButton>
          <Modal.Title>Comunicado Nro 20/23</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                className="d-block w-100"
                src="comicadosImg/img3.jpeg" 
                alt="Imagen Naval"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className='py-5 px-5'>

      <Button variant="primary" onClick={handleShow4}>
        Comunicado 4
      </Button>
      </Row>
      <Modal show={show4} onHide={handleClose4}>
      <Modal.Header closeButton>
          <Modal.Title>Comunicado Nro 18/23</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
                className="d-block w-100"
                src="comicadosImg/img4.png" 
                alt="Imagen Naval"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
      <SecondFooter/>

    </>
  );
};

export default Comunicados;

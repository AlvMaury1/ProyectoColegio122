import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';
import './Historia.css';
const Galeria = () => {
  return (
    <>
    <NavBar/>
    <Banner texto="Galeria" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />
    <Container class="px-5">
          <Row className='pt-4'>
              <Col >        
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg1.jpg" 
                alt="Imagen Naval"/>
            </Col>
              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg2.jpg" 
                alt="Imagen Naval"/>
              </Col>
              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg3.jpg" 
                alt="Imagen Naval"/>
              </Col>
          </Row>
          <Row className='pt-4'>
              <Col >        
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg4.jpg" 
                alt="Imagen Naval"/>
            </Col>

              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg5.jpg" 
                alt="Imagen Naval"/>
              </Col>
              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg6.jpg" 
 
                alt="Imagen Naval"/>
              </Col>
          </Row>
          <Row className='pt-4'>
              <Col>        
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg7.jpg" 
 
                alt="Imagen Naval"/>
            </Col>

              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg8.jpg" 
 
                alt="Imagen Naval"/>
              </Col>
              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg1.jpg" 

                alt="Imagen Naval"/>
              </Col>
          </Row>
          <Row className='py-4'>
              <Col >        
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg10.jpg" 
 
                alt="Imagen Naval"/>
            </Col>

              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg11.jpg" 
 
                alt="Imagen Naval"/>
              </Col>
              <Col>
              <img
                className="d-block w-100"
                src="/GaleriaImg/galeriaimg12.jpg" 

                alt="Imagen Naval"/>
              </Col>
          </Row>
      </Container>
      <SecondFooter/>
      </>
  );
}

export default Galeria;

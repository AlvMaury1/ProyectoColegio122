import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';
import './Historia.css';
import YouTubeVideo from '../components/YoutubeVideo';
const Historia = () => {
  return (
    <>
    <NavBar/>
    <Banner texto="Historia" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />
    <Container class="px-5">
          <Row className='pt-2'>
              <Col className='pt-3'>     
              <YouTubeVideo></YouTubeVideo>   

            </Col>
              <Col>
              <div className='TextoPrincipalHistoria'><h3>Historia</h3></div>
              <div className='TextoSecundarioHistoria'><p>El año de 1975, la entonces Fuerza Naval Boliviana, realizó un estudio de localización y ubicación para la Escuela Naval Militar, existiendo diferentes ideas y sugerencias. Finalmente el 23 de abril de 1976, se efectuó el traslado de los Cadetes de la Fuerza Naval Boliviana, al mando del Cap. Frag. Tomás Orozco Saracho, a las instalaciones de la Ex Estación de Ferrocarriles La Paz-Guaqui, después de que el Ministerio de Educación y el Ministerio de Transportes y Comunicaciones, por parte del Estado, tomarán la decisión de ceder mencionados predios a la Fuerza Naval Boliviana mediante Decreto Supremo N° 16299 de fecha 22 de marzo de 1979.</p></div>
              </Col>
          </Row>
          <Row>
              <Col>
                <div className='TextoPrincipalHistoria'><h3>Historia</h3></div>
                <div className='TextoSecundarioHistoria'><p>El 31 de enero de 2002, se promulga Ley Nº 2324, la misma que otorga la propiedad del inmueble y terrenos de la Ex Estación de Ferrocarriles La Paz-Guaqui a la Escuela Naval Militar, con el único artículo que señala: “Elevase a Rango de Ley el Decreto Supremo Nº 16299 de 22 de marzo de 1979, que autoriza la transferencia, a título gratuito, un terreno municipal con una superficie de 26.791 metros cuadrados, ubicado dentro de la Ex Estación Ferroviaria La Paz–Guaqui de esta ciudad, a favor de la Fuerza Naval Boliviana, para la instalación y funcionamiento de la Escuela Naval Militar, dispuesta mediante Resolución Municipal Nº 1216 de 20 de junio de 1979” y posteriormente el 14 de marzo de 2002, el Presidente de la Honorable Cámara de Senadores de ese entonces Dr. Enrique Toro Tejada, a nombre del Honorable Congreso Nacional, realizó la entrega oficial de la mencionada Ley. En la gestión 2013, la actual Armada Boliviana en cumplimiento de su misión constitucional, con el propósito de cultivar y mantener latente la conciencia marítima en la niñez y juventud, inicia los trámites legales, mediante las instancias pertinentes para que los predios de la Ex Escuela Naval Militar, puedan ser ocupados para la apertura de una Unidad Educativa, enmarcando en la Ley N° 070 Avelino Siñani y Elizardo Pérez y el Subsistema de Educación Regular; sobre la base de la Resolución Administrativa Nº 785/2013 del 21 de noviembre del 2013 emitida por la Dirección Departamental de Educación La Paz y la Resolución Administrativa de la Armada Boliviana 025/2014, se aprueba la apertura y legal funcionamiento de la UNIDAD EDUCATIVA PRIVADA NAVAL “HÉROES DEL PACÍFICO”, dando inicio a las actividades educativas en los niveles de Educación Inicial, Primaria y Secundaria, para así participar activamente en el desarrollo de la Educación Nacional.</p></div>
              </Col>
              <Col className='pt-3'>        

              <img
                className="d-block w-100"
                src="/historiaImg/historia2.jpeg" 
                alt="Imagen Naval"
             />
              </Col>
          </Row>
          <Row className = "pb-2">
              <Col>
              <img
                className="d-block w-100"
                src="/historiaImg/historia3.jpeg" 
                alt="Imagen Naval"
             />
              </Col>
              <Col>
                <div className='TextoPrincipalHistoria'><h3>Mision</h3></div>
                <div className='TextoSecundarioHistoria'><p>

Ser la Unidad Educativa de mayor presencia a nivel nacional, con prestigio internacional y oferta académica en diversas áreas del conocimiento, para el engrandecimiento de nuestra querida Bolivia. Ser la Unidad Educativa de mayor presencia a nivel nacional, Educar a estudiantes de los niveles inicial, primaria y secundaria con una enseñanza aprendizaje que promueva el respeto a la diversidad cultural, que consolide los valores éticos y morales, desarrollando creatividad, pensamiento crítico y reflexivo, concientizado en las capacidades de los espacios acuáticos a fin de contribuir con bachilleres capacitados para iniciar una educación superior y aportar a la transformación de la sociedad y engrandecimiento del Estado con una actitud científica, técnica-tecnológica, productiva y artística.
</p></div>
              </Col>
          </Row>
      </Container>
      <SecondFooter/>
      </>
  );
}

export default Historia;

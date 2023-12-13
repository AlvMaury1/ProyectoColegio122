import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';
import './Historia.css';
const Actividades = () => {
  return (
    <>
    <NavBar/>
    <Banner texto="Actividades" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />
    <Container class="px-5">
          <Row className='pt-2'>
              <Col className='pt-3'>        
              <img
                className="d-block w-100"
                src="/ActividadesImg/actividadImg1.jpg"  
                alt="Imagen Naval"
             />
            </Col>
              <Col>
              <div className='TextoPrincipalHistoria'><h3>Actividades Academicas</h3></div>
              <div className='TextoSecundarioHistoria'><p>En nuestra búsqueda constante de la excelencia académica, ofrecemos diversas actividades que complementan y enriquecen el aprendizaje en el aula. Estas actividades académicas incluyen competiciones, clubes temáticos, tutorías y proyectos de investigación. Participar en estas iniciativas no solo fortalecerá tus habilidades académicas, sino que también te proporcionará oportunidades únicas para el crecimiento intelectual y el desarrollo personal.</p></div>
              </Col>
          </Row>
          <Row>
              <Col>
                <div className='TextoPrincipalHistoria'><h3>Actividades Culturales</h3></div>
                <div className='TextoSecundarioHistoria'><p>Nuestra escuela se enorgullece de ofrecer una amplia gama de actividades culturales que celebran la diversidad y fomentan el entendimiento intercultural. Desde eventos artísticos hasta exposiciones, pasando por representaciones teatrales y festivales, nuestras actividades culturales buscan inspirar el aprecio por las diferentes expresiones artísticas y tradiciones culturales.</p></div>
              </Col>
              <Col className='pt-3'>        

              <img
                className="d-block w-100"
                src="/ActividadesImg/actividadImg2.jpg" 

                alt="Imagen Naval"
             />
              </Col>
          </Row>
          <Row className = "pb-2">
              <Col>
              <img
                className="d-block w-100"
                src="/ActividadesImg/actividadImg3.jpg" 
 
                alt="Imagen Naval"
             />
              </Col>
              <Col>
                <div className='TextoPrincipalHistoria'><h3>Actividades Sociales</h3></div>
                <div className='TextoSecundarioHistoria'><p>La socialización y el trabajo en equipo son aspectos fundamentales de la experiencia escolar. Nuestras actividades sociales están diseñadas para fortalecer los lazos entre los estudiantes, crear un sentido de comunidad y fomentar el compañerismo. Desde eventos deportivos hasta encuentros sociales y proyectos colaborativos, te invitamos a participar y construir relaciones significativas con tus compañeros.</p></div>
              </Col>
          </Row>
      </Container>
      <SecondFooter/>
      </>
  );
}

export default Actividades;

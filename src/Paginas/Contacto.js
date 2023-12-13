import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyForm from '../components/MyForm';
import SocialButtons from '../components/SocialButtons';
import FooterLetter from '../components/FooterLetter';
import GoogleMap from '../components/GoogleMap';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainFooter from '../components/MainFooter';
import Banner from '../components/Banner';

const Contacto = () =>{
  return (
    <><><><nav><NavBar></NavBar></nav>
        <Banner texto="Contacto" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />

          <Container class="my-5 py-5">
              <Row>
                  <Col>
                      <MyForm></MyForm>
                  </Col>
                  <Col>
                      <FooterLetter colorTexto={"#000"} colorSegundoTexto={"#0d6efd"}/>
                      <SocialButtons />
                  </Col>

              </Row>
          </Container></>
          <GoogleMap/></>
          <MainFooter /></>
      
  );
}

export default Contacto;
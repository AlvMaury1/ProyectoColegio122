import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import SecondFooter from '../components/SecondFooter';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

const Autoridades=()=> {
  return (
    
    <> 
    <NavBar/>
    <Banner texto="Autoridades" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />

    <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/AutoridadesImg/img1.jpg" />
              <Card.Body>
                  <Card.Title>VICEALMIRANTE Juan Arnez Salvador</Card.Title>
                  <Card.Text>
                      Comandante General de la Armada
                  </Card.Text>
                  <Button variant="dark"><a style={{ color: 'white', textDecoration: 'none' }} href='https://uenaval.edu.bo/wp-content/uploads/2023/05/almte-Arnes.jpg'>Imagen Completa</a></Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/AutoridadesImg/img2.jpg" />
              <Card.Body>
                  <Card.Title>CONTRALMIRANTE Walker Candia Pinto</Card.Title>
                  <Card.Text>
                      Jefe Depto. VI-ENS E II.NN. del EMGAB
                  </Card.Text>
                  <Button variant="dark"><a style={{ color: 'white', textDecoration: 'none' }} href='https://uenaval.edu.bo/wp-content/uploads/2023/05/calmte-Candia.jpg'>Imagen Completa</a></Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/AutoridadesImg/img3.jpg" />
              <Card.Body>
                  <Card.Title>CN. DAEN. Romel Diaz Misericordia</Card.Title>
                  <Card.Text>
                      Director General de la Unidad Educativa Privada Naval 'Heroes del Pacifico'
                  </Card.Text>
                  <Button variant="dark"><a style={{ color: 'white', textDecoration: 'none' }} href='https://uenaval.edu.bo/wp-content/uploads/2022/03/JEFE_CN-scaled.jpg'>Imagen Completa</a></Button>
              </Card.Body>
          </Card>
      </div>
      <SecondFooter /></>
  );
}

export default Autoridades;
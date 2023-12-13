import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
const MyCarousel = ()=>
{
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 ImgCarousel"
            src="/Instalacionesimg/im1.jpg" 
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Piscina Naval</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ImgCarousel"
            src="/Instalacionesimg/img2.png" 
  
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Salas de Computacion</h3>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100 ImgCarousel"
            src="/Instalacionesimg/img3.png" 
   
            alt="Thirty slide"
          />
          <Carousel.Caption>
            <h3>Sala de Camaras</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ImgCarousel"
            src="/Instalacionesimg/img4.jpg" 
  
            alt="Forty slide"
          />
          <Carousel.Caption>
          <h3>Sala de Reuniones</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ImgCarousel"
            src="/Instalacionesimg/img5.jpg" 
  
            alt="Fifty slide"
          />
          <Carousel.Caption>
          <h3>Salon de Eventos</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
export default MyCarousel;
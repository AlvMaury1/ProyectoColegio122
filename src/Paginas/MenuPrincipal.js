import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';

function MenuPrincipal() {
  return (
    <>
    <NavBar/>
    <Banner texto="Unidad Educativa Naval 'Heroes del Pacifico'" imagenDeFondo={"/img1.jpg"}  parrafo={"Escuela Naval Militar"} />

    <SecondFooter/>

    </>

  );
}

export default MenuPrincipal;
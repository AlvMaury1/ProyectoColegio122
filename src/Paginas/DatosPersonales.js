import Table from 'react-bootstrap/Table';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import SecondFooter from '../components/SecondFooter';
function DatosPersonales() {
  return (
    <>
    <NavBar/>
    <Banner texto="Datos Personales" colorDeFondo={"#1E2856"} parrafo={"Escuela Naval Militar"} />
    <div className='pt-4 w-50 mx-auto' >
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th colSpan={2} style={{textAlign:"center"}}>Datos Personales </th>

        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Nombres: </td>
          <td>Mauricio Alvaro</td>
        </tr>
        <tr>
          <td>Apellidos:  </td>
          <td>Flores Rada</td>
        </tr>
        <tr>
          <td>Carnet de Identidad:  </td>
          <td>9919592</td>
        </tr>
        <tr>
          <td>Paralelo:  </td>
          <td>D</td>
        </tr>

      </tbody>
    </Table>
    </div>
    <SecondFooter/>

    </>

  );
}

export default DatosPersonales;
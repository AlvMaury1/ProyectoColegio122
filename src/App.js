import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipal from './Paginas/MenuPrincipal';
import MuseoNaval from './Paginas/MuseoNaval';
import Historia from './Paginas/Historia';
import Galeria from './Paginas/Galeria';
import Actividades from './Paginas/Actividades';
import Autoridades from './Paginas/Autoridades';
import Comunicados from './Paginas/Comunicados';
import Contacto from './Paginas/Contacto';
import Instalaciones from './Paginas/Instalaciones';
import DatosPersonales from './Paginas/DatosPersonales';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MenuPrincipal />} />
      <Route path="/museo-naval" element={<MuseoNaval />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/actividades" element={<Actividades />} />
      <Route path="/autoridades" element={<Autoridades />} />
      <Route path="/comunicados" element={<Comunicados />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/instalaciones" element={<Instalaciones />} />
      <Route path="/datos-personales" element={<DatosPersonales />} />

      </Routes>
    </Router>
  );
};

export default App;

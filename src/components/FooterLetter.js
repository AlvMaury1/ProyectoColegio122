import React from 'react';
import './FooterLetter.css'

const FooterLetter = ({colorTexto, colorSegundoTexto}) => {

  return (
    <footer className="footer-container pt-5" style={{color:colorTexto}}>
      <p className="footer-title">Unidad Educativa Naval Heroes del Pacífico</p>
      <p>
        Av. Ismael Montes Calle Vicenta J.
        <br />Eguino Nro 400 Zona Central.
        <br />Lado terminal de buses La Paz-Bolivia
      </p>
      <p>Correo:</p>
      <p className="footer-email" style={{color:colorSegundoTexto}}>heroesdelpacifico@uenaval.edu.bo</p>
      <p>Teléfono:</p>
      <p className="footer-phone"style={{color:colorSegundoTexto}}>2281821-2284346</p>
    </footer>
  );
}

export default FooterLetter;
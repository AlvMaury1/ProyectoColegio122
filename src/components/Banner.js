import React from 'react';
import './Banner.css';

const Banner = ({ texto,parrafo, colorDeFondo, imagenDeFondo }) => {
  const estiloBanner = {
    backgroundColor: colorDeFondo,
    backgroundImage: `url(${imagenDeFondo})`,
  };

  return (
    <header>
      <div className="banner-section-bg-container-noB d-flex-noB" style={estiloBanner}>
        <div className="text-center">
          <h1 className="banner-heading-noB">{texto}</h1>
          <p className="banner-parrafo">{parrafo}</p>
        </div>
      </div>
    </header>
  );
}

export default Banner;

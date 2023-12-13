import React from 'react';

const GoogleMap = () => {
  return (
    <iframe class= "mt-3 px-5 py-5"
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15302.883443964316!2d-68.1421032!3d-16.4896661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21ff55479127%3A0xae375db80d5c539b!2sUnidad%20Educativa%20Naval!5e0!3m2!1ses-419!2sbo!4v1702264903850!5m2!1ses-419!2sbo"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default GoogleMap;
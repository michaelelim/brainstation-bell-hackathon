import React from 'react';
import './Gallery.scss';
import photo1 from '../../assets/Images/Photo-gallery-1.png';
import photo2 from '../../assets/Images/Photo-gallery-2.png';
import photo3 from '../../assets/Images/Photo-gallery-3.png';
import photo4 from '../../assets/Images/Photo-gallery-4.png';
import photo5 from '../../assets/Images/Photo-gallery-5.png';
import photo6 from '../../assets/Images/Photo-gallery-6.png';

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Fast Facts</h2>
      <div className="gallery__container">
        <img src={photo1} alt="Fact 1" className="gallery__image"/>
        <img src={photo2} alt="Fact 2" className="gallery__image"/>
        <img src={photo3} alt="Fact 3" className="gallery__image"/>
        <img src={photo4} alt="Fact 4" className="gallery__image"/>
        <img src={photo5} alt="Fact 5" className="gallery__image"/>
        <img src={photo6} alt="Fact 6" className="gallery__image"/>
        {/* <img src={photo7} alt="Colorful facing stage" className="gallery__image"/>
        <img src={photo8} alt="Closeup of DJ at turntables" className="gallery__image"/> */}
        {/* <img src={photo9} alt="Confetti on crowd dancing" className="gallery__image"/> */}
      </div>
  </section>
  );
}

export default Gallery;

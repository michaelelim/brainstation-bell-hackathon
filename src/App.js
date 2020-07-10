import React from 'react';
import './App.css';
import './styles/styles.scss';
import musicians from "./assets/Images/aboutthemusicians.jpg";
import photo1 from "./assets/Images/Photo-gallery-1.png";
import photo2 from "./assets/Images/Photo-gallery-2.png";
import photo3 from "./assets/Images/Photo-gallery-3.png";
import photo4 from "./assets/Images/Photo-gallery-4.png";
import photo5 from "./assets/Images/Photo-gallery-5.jpg";
import photo6 from "./assets/Images/Photo-gallery-6.jpg";
import photo7 from "./assets/Images/Photo-gallery-7.jpg";
import photo8 from "./assets/Images/Photo-gallery-8.jpg";
import photo9 from "./assets/Images/Photo-gallery-9.jpg";
import instagram from "./assets/Icons/SVG/Icon-instagram.svg";
import facebook from "./assets/Icons/SVG/Icon-facebook.svg";
import twitter from "./assets/Icons/SVG/Icon-twitter.svg";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar__header"><a href="./index.html" className="navbar__link">Bell Screentime</a></h1>
        <div className="navbar__nav-links navbar__nav-links--active">The Facts</div>
        <div className="navbar__nav-links"><a href="./pages/shows.html" className="navbar__nav-links">Get Help</a></div>
      </nav>
      <div className="hero">
      <div className="hero__image">
        <div className="hero__overlay">
          <h2 className="hero__text">Let's Talk About Screentime</h2>
        </div>
      </div>
      </div>
      <section className="about-the-musicians">

      <div className="about-the-musicians__quote">"We take better care of our smartphone than ourselves. We know when the battery is depleted and recharge it."</div>
      <div className="about-the-musicians__quote-sig">- Arianna Huffington</div>


      <img src={musicians} alt="Musicians" className="about-the-musicians__image"/>

      <h2 className="about-the-musicians__title">Media Consumption in a Covid-19 World</h2>
      <div className="about-the-musicians__bio-text-container">
      <div className="about-the-musicians__bio-text">Today, more and more parents are giving their children technology at a young age.  In restaurants, you used to see countless children eating with their parents, but sitting on a tablet.  Or sometimes you will see the kids with headphones on, not paying attention to the rest of the world.  The rise of technology and digital media has created a culture where humans can become addicted to being on a device.</div>
      <div className="about-the-musicians__bio-text2">Covid-19 has affected the world more than anything imaginable.  People are staying indoors exorbitantly more and are turning to media as their outlet.  The amount of screen time that is healthy for individuals, whether through video games, YouTube and online movies, is still up for debate.  It is important for everyone to monitor usage of the whole family, and note any changes in mood and behaviour.</div>
  </div>
      </section>
  
  <section className="gallery">
    <h2 className="gallery__title">Fast Facts</h2>
    <div className="gallery__container">
      <img src={photo1} alt="Dancing crowd" className="gallery__image"/>
      <img src={photo2} alt="Woman dancing" className="gallery__image"/>
      <img src={photo3} alt="Crowd hands up" className="gallery__image"/>
      <img src={photo4} alt="Woman back facing stage" className="gallery__image"/>
      {/* <img src={photo5} alt="Colorful effects above crowd" className="gallery__image"/>
      <img src={photo6} alt="Singer holding up four fingers" className="gallery__image"/>
      <img src={photo7} alt="Colorful facing stage" className="gallery__image"/>
      <img src={photo8} alt="Closeup of DJ at turntables" className="gallery__image"/> */}
      {/* <img src={photo9} alt="Confetti on crowd dancing" className="gallery__image"/> */}
    </div>
  </section>

  <footer className="get-in-touch">
    <div className="get-in-touch__top-container">
      <h1 className="get-in-touch__title">Bell Canada</h1>
      
      <div className="get-in-touch__social-container">
        <a href="https://instagram.com"><img src={instagram} alt="Instagram Icon" className="get-in-touch__socials"/></a>
        <a href="https://facebook.com"><img src={facebook} alt="Facebook Icon" className="get-in-touch__socials"/></a>
        <a href="https://twitter.com"><img src={twitter} alt="Twitter Icon" className="get-in-touch__socials"/></a>
      </div>

      <h3 className="get-in-touch__logo">Bell Screentime</h3>
    </div>

    <div className="get-in-touch__company-container">
      <div className="get-in-touch__name-container">
        <h4 className="get-in-touch__name">Kids Help Phone</h4>
        <h5 className="get-in-touch__address">460 King Street West</h5>
        <h5 className="get-in-touch__address">Toronto, Ontario M5V 1L7</h5>
        <h5 className="get-in-touch__email"><a className="get-in-touch__email-link" href="mailto:info@thebeesknees.com">info@thebeesknees.com</a></h5>
      </div>

      <div className="get-in-touch__name-container">
        <h4 className="get-in-touch__name">Canadian Mental Health Association</h4>
        <h5 className="get-in-touch__address">1234 Fake St.</h5>
        <h5 className="get-in-touch__address">US / South America / Japan</h5>
        <h5 className="get-in-touch__email"><a className="get-in-touch__email-link" href="mailto:marsha.vlasic@artistgrp.com">marsha.vlasic@artistgrp.com</a></h5>
      </div>

      <div className="get-in-touch__name-container">
        <h4 className="get-in-touch__name">camh</h4>
        <h5 className="get-in-touch__address">20 Placeholder Way</h5>
        <h5 className="get-in-touch__address">UK / EU / AU</h5>
        <h5 className="get-in-touch__email"><a className="get-in-touch__email-link" href="mailto:RLW@wmeentertainment.com">RLW@wmeentertainment.com</a></h5>
      </div>    
    </div>
    
    <div className="get-in-touch__copyright-container">
      <h5 className="get-in-touch__copyright">Copyright Bell Canada &copy 2020</h5>
      <h5 className="get-in-touch__copyright">All Rights Reserved</h5>
    </div>
  </footer>

  <script src="./javascript/script.js"></script>
    </div>
  );
}

export default App;

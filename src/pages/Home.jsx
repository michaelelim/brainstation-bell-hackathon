import React from 'react';
import Header from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Footer from '../components/Footer/Footer.jsx';
import media from '../assets/Images/aboutthemusicians.jpg';
import stats1 from '../assets/Images/Stats-1.png';
import stats2 from '../assets/Images/Stats-2.png';
import stats3 from '../assets/Images/Stats-3.png';
import photo1 from '../assets/Images/Photo-gallery-1.png';
import photo2 from '../assets/Images/Photo-gallery-2.png';
import photo3 from '../assets/Images/Photo-gallery-3.png';
import photo4 from '../assets/Images/Photo-gallery-4.png';
import '../styles/styles.scss';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Hero/>

        <section className="about-media">
        <div className="about-media__quote">"We take better care of our smartphone than ourselves. We know when the battery is depleted and recharge it."</div>
        <div className="about-media__quote-sig">- Arianna Huffington</div>
        <img src={media} alt="Media" className="about-media__image"/>
        <h2 className="about-media__title">Media Consumption in a Covid-19 World</h2>
        <div className="about-media__bio-text-container">
        <div className="about-media__bio-text">Today, more and more parents are giving their children technology at a young age.  In restaurants, you used to see countless children eating with their parents, but sitting on a tablet.  Or sometimes you will see the kids with headphones on, not paying attention to the rest of the world.  The rise of technology and digital media has created a culture where humans can become addicted to being on a device.</div>
        <div className="about-media__bio-text2">Covid-19 has affected the world more than anything imaginable.  People are staying indoors exorbitantly more and are turning to media as their outlet.  The amount of screen time that is healthy for individuals, whether through video games, YouTube and online movies, is still up for debate.  It is important for everyone to monitor usage of the whole family, and note any changes in mood and behaviour.</div>
        </div>
        </section>
        
        <section className="stats">
          <img src={stats1} alt="Stats 1" className="stats__image"/>
          <img src={stats2} alt="Stats 2" className="stats__image"/>
          <img src={stats3} alt="Stats 3" className="stats__image"/>
        </section>

        <section className="gallery">
          <h2 className="gallery__title">Fast Facts</h2>
          <div className="gallery__container">
            <img src={photo1} alt="Fact 1" className="gallery__image"/>
            <img src={photo2} alt="Fact 2" className="gallery__image"/>
            <img src={photo3} alt="Fact 3" className="gallery__image"/>
            <img src={photo4} alt="Fact 4" className="gallery__image"/>
            {/* <img src={photo5} alt="Colorful effects above crowd" className="gallery__image"/>
            <img src={photo6} alt="Singer holding up four fingers" className="gallery__image"/>
            <img src={photo7} alt="Colorful facing stage" className="gallery__image"/>
            <img src={photo8} alt="Closeup of DJ at turntables" className="gallery__image"/> */}
            {/* <img src={photo9} alt="Confetti on crowd dancing" className="gallery__image"/> */}
          </div>
        </section>

        <Footer/>
      </div>    
    );
  }
}

export default Home;
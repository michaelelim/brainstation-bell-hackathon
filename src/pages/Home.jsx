import React from 'react';
import Header from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Stats from '../components/Stats/Stats';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer.jsx';
import '../styles/styles.scss';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Stats/>
        <Gallery/>
        <Footer/>
      </div>    
    );
  }
}

export default Home;
import React from 'react';
import './About.scss';
import media from '../../assets/Images/aboutthemusicians.jpg';

function About() {
  return (
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
  );
}

export default About;

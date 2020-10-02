import React from 'react';
import './Header.scss';
import Bell from "../../assets/Images/Bell-lets-talk.png"

function Header() {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar__wrapper">
          <img src={Bell} className="navbar__logo" alt=""/>
          <h1 className="navbar__header"><a href="./index.html" className="navbar__link">Screentime</a></h1>
        </div>
        <div className="navbar__wrapper">
          <div className="links-active">The Facts</div>
          {/* <div className="links"><a href="https://letstalk.bell.ca/en/get-help" className="links2">Get Help</a></div> */}
          <a href="https://letstalk.bell.ca/en/get-help" className="links">Get Help</a>
        </div>
      </nav>
    </section>
  );
}

export default Header;

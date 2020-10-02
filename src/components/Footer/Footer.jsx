import React from 'react';
import './Footer.scss';
import instagram from "../../assets/Icons/SVG/Icon-instagram.svg";
import facebook from "../../assets/Icons/SVG/Icon-facebook.svg";
import twitter from "../../assets/Icons/SVG/Icon-twitter.svg";

function Footer() {
  return (
    <section>
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
              <h5 className="get-in-touch__address">Charitable registration number</h5>
              <h5 className="get-in-touch__address">130005846 RR0001</h5>
              {/* <h5 className="get-in-touch__email"><a className="get-in-touch__email-link" href="mailto:info@thebeesknees.com">info@thebeesknees.com</a></h5> */}
            </div>

            <div className="get-in-touch__name-container">
              <h4 className="get-in-touch__name">Canadian Mental Health Association</h4>
              <h5 className="get-in-touch__address">250 Dundas St. West, Suite 500</h5>
              <h5 className="get-in-touch__address">Toronto, ON M5T 2Z5</h5>
              <h5 className="get-in-touch__email"><a className="get-in-touch__email-link" href="mailto:info@cmha.ca">info@cmha.ca</a></h5>
            </div>

            <div className="get-in-touch__name-container">
              <h4 className="get-in-touch__name">camh</h4>
              <h5 className="get-in-touch__address">1001 Queen Street West</h5>
              <h5 className="get-in-touch__address">Toronto ON, M6J 1H4</h5>
              <h5 className="get-in-touch__email"><a className="get-in-touch__email-link" href="mailto:info@camh.ca">info@camh.ca</a></h5>
            </div>    
          </div>
          
          <div className="get-in-touch__copyright-container">
            <h5 className="get-in-touch__copyright">Copyright Bell Canada 2020</h5>
            <h5 className="get-in-touch__copyright">All Rights Reserved</h5>
          </div>
        </footer>
    </section>
  );
}

export default Footer;

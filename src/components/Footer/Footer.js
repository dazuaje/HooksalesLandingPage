import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-scroll";
import shapeFooter from '../../assets/shapeFooter.png'
import "./Footer.scss";
import Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <section className="footer__container">
      <img src={shapeFooter} alt="" className="footer__container--shapeFooter" />
      <div className="footer__container__miniContainer">
        <div className="footer__container__logo">
          <img className="footer__container--logo" src={Logo} alt="Logo" />
          <p className="footer__container--slogan">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, provident! (SLOGAN)
          </p>

          <div className="footer__container__socialMedia__container">
            <AiFillInstagram className="footer__container--socialMediaLogo" />
            <AiFillTwitterCircle className="footer__container--socialMediaLogo" />
            <AiFillFacebook className="footer__container--socialMediaLogo" />
          </div>
        </div>

        <div className="footer__container__siteMap">
          <h3 className="footer__container--title">Site Map</h3>

          <ul className="footer__container__siteMap__container">
            <li className="footer__container__siteMap--li">
              <Link
                to="Navbar"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                Home
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                About Us
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <Link
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                Portfolio
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <Link
                to="FAQ"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                FAQ
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <Link
                to="Features"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                Features
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <Link
                to="Pricing"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                Pricing
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <Link
                to="Testimonial"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="footer__container__siteMap--a"
              >
                Testimonial
              </Link>
            </li>
            <li className="footer__container__siteMap--li">
              <a className="footer__container__siteMap--a">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer__container__contactUs">
          <h3 className="footer__container--title">Contact Us</h3>
          <div className="footer__container__infoContainer">
            <p className="footer__container__siteMap--li  --infoText">Lorem ipsum Dolor</p>
            <p className="footer__container__siteMap--li --infoText">hooksales@contact.com</p>
            <p className="footer__container__siteMap--li --infoText">ESLOGAN</p>
            <p className="footer__container__siteMap--li --infoText">+1 305 3534 2453</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

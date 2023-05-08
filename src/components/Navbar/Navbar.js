import React from "react";
//import logo from "../../assets/logo.svg";
import { Link } from "react-scroll";
import Svg from '../svgviewer-react-output';
import "./Navbar.scss";
const Navbar = () => {
  return (
    <header className="header" id="Navbar">
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li className="header__nav__ul--li"> <Link to="AboutUs" spy={true} smooth={true} offset={0} duration={800} className="header__nav__ul--a">About Us</Link></li>
          <li className="header__nav__ul--li"><Link to="Portfolio" spy={true} smooth={true} offset={0} duration={800} className="header__nav__ul--a">Portfolio</Link></li>
          <li className="header__nav__ul--li"><Link to="Features" style={{marginRight: '80px'}} spy={true} smooth={true} offset={0} duration={800} className="header__nav__ul--a">Features</Link></li>
          
          <Svg className="svg"/>{/*
        <li className="header__nav__ul--li logocontainer">
        <Svg className="header__nav__ul--img" />
        </li>
        <img className="header__nav__ul--img" src={logo} alt="logo" />
      */}

          <li className="header__nav__ul--li"><Link style={{marginLeft: '80px'}} to="Pricing" spy={true} smooth={true} offset={0} duration={800} className="header__nav__ul--a">Pricing</Link></li>
          <li className="header__nav__ul--li"><Link to="Testimonials" spy={true} smooth={true} offset={0} duration={800} className="header__nav__ul--a">Testimonial</Link></li>
          <li className="header__nav__ul--li"><Link to="FAQ" spy={true} smooth={true} offset={0} duration={800} className="header__nav__ul--a">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

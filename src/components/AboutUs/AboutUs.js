import React from "react";
import "./AboutUS.scss";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import Logo from '../../assets/Group 1501.png'
import shapeHooks from '../../assets/shapeHook.png';
import ShapeAboutUs from '../../assets/shapeAboutUs.png';

const AboutUs = () => {
  return (
    <section className="about__container" id="AboutUs">
      <img src={shapeHooks} alt="hook" className="about__container--shapeHooks" />
      <img className="about__container--shapeAboutUs" src={ShapeAboutUs} alt="" />
      <div className="about__container__mini">
        <div className="about__container__content">
          <h4 className="about__container__content--subTitle">Hooksales</h4>

          <h2 className="about__container__content--title">We want people to know you!</h2>
          <p className="about__container__content--p">
             <br/> 
            We provide the best marketing services for your company with the intention of seeing it grow and reach its full potential
            by helping your brand build. <br/> <br/>
            a <b className="blue">Name</b> that will be heard by the audience you are looking for. 
            <br/><br/>
            a <b className="blue">Face</b> in form of a website for your customers to interact with. 
            <br/><br/>
            a <b className="blue">Voice</b> that spreads across social media. 
            <br/><br/>
            … and a <b className="blue">Heart</b>. <br/><br/>
            I bet there are many people who might need your services but don’t know who you are. We want to help you make people see your good intentions.
          </p>
          <CallToActionBtn title="#fff" iconBackground="#fff" iconColor="#4FACFE" backgroundColor="#4FACFE" content="Learn More" />
          {/*
           <button className="about__container__button">Learn More</button>
          */}
        </div>
        <div className="about__container__image">
          <img className="about__container--image" src={Logo} alt="logo" />
        </div>
      </div>

    </section>
  );
};
export default AboutUs;

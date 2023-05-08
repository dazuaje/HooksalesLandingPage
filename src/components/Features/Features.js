import React from "react";
import "./Features.scss";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import logo from "../../assets/Group 1501.png";
const Features = () => {
  return (
    <section className="features__container" id="Features">
      <h1 className="features__container--title">Services</h1>
      <p className="features__container--p">We are committed to delivering exceptional results that exceed your expectations. Explore our services below to find out how we can help you grow your brand and achieve success.</p>
      <div className="features__container__miniContainer">
        <div className="features__container__leftFeatures">
          <div className="features__container__leftFeatures__number__container">
            <div className="features__container__leftFeatures--number features__container--left">01</div>
            <p className="features__container__leftFeatures--numberText">
              Customized Social Media Post
            </p>
          </div>

          <div className="features__container__leftFeatures__number__container">
            <div className="features__container__leftFeatures--number features__container--left">02</div>
            <p className="features__container__leftFeatures--numberText">
              Web Development
            </p>
          </div>

          <div className="features__container__leftFeatures__number__container">
            <div className="features__container__leftFeatures--number features__container--left">03</div>
            <p className="features__container__leftFeatures--numberText">
              Logo Design
            </p>
          </div>
        </div>
        <div className="features__container__image">

        <img className="features__container--image" src={logo} alt="logo" />
        </div>

        <div className="features__container__rightFeatures">
          <div className="features__container__rightFeatures">
            <div className="features__container__rightFeatures__number__container">
              <div className="features__container__rightFeatures--number">
                04
              </div>
              <p className="features__container__rightFeatures--numberText">
                Video Editing
              </p>
            </div>

            <div className="features__container__rightFeatures__number__container">
              <div className="features__container__rightFeatures--number ">
                05
              </div>
              <p className="features__container__rightFeatures--numberText">
                Social Media Marketing Ads
              </p>
            </div>

            <div className="features__container__rightFeatures__number__container">
              <div className="features__container__rightFeatures--number">
                06
              </div>
              <p className="features__container__rightFeatures--numberText">
                UX/UI Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToActionBtn title="#fff" iconBackground="#fff" backgroundColor="#4FACFE" iconColor="#4FACFE" content="Learn More"/>
     {/*
       <button className="features__container--button">Learn More</button>
      */}
    </section>
  );
};

export default Features;

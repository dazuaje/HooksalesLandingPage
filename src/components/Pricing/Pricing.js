import React from "react";
import "./Pricing.scss";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import Logo from "../../assets/Group 1501.png";
const Pricing = () => {

  const basicPlan = "https://buy.stripe.com/test_4gw7uO7GqdTlfnidSF";
  const mediumPlan = "https://buy.stripe.com/test_28o02mgcWaH9grm6qe";
  const premiumPlan = "https://buy.stripe.com/test_eVacP8gcWdTl4IE6qc";
  return (
    <section className="pricing__container" id="Pricing">
      <h1 className="pricing__container--title">PRICING</h1>
      <p className="pricing__container--p">Lorem Ipsum dolor sit</p>
      <div className="pricing__container__cards">
        {/*One*/}
        <div className="pricing__container__miniCard">
          <div className="pricing__container__colorDown"></div>
          <img
            className="pricing__container__miniCard--image"
            src={Logo}
            alt="Pricing"
          />
          <h3 className="pricing__container--titleSecondary">Basic Plan</h3>
          <ul className="pricing__container__checkList">
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
          </ul>
          <CallToActionBtn paymentLink={basicPlan} iconColor="#FFF" iconBackground="#4facfe" background="#FFF" content="View All" />

          {/*
           <button className="pricing__container--button">View All</button>
          */}
        </div>
        {/*Two*/}
        <div
          className="pricing__container__miniCard"
          style={{ height: "480px", marginBottom: "30px" }}
        >
          <img
            className="pricing__container__miniCard--image"
            src={Logo}
            alt="Pricing"
          />
          <h3 className="pricing__container--titleSecondary">Medium Plan</h3>
          <ul className="pricing__container__checkList">
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
          </ul>
          <CallToActionBtn paymentLink={mediumPlan} iconColor="#FFF" iconBackground="#4facfe" background="#FFF" content="View All" />

          {/*
           <button className="pricing__container--button">View All</button>
          */}
        </div>
        {/*Three*/}
        <div className="pricing__container__miniCard">
          <img
            className="pricing__container__miniCard--image"
            src={Logo}
            alt="Pricing"
          />
          <h3 className="pricing__container--titleSecondary">Premium Plan</h3>
          <ul className="pricing__container__checkList">
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
            <li className="pricing__container--li">Lorem IPsum dolor sit</li>
          </ul>
          <CallToActionBtn paymentLink={premiumPlan} iconColor="#FFF" iconBackground="#4facfe" background="#FFF" content="View All" />

          {/*
          <a href="https://buy.stripe.com/test_eVag1k8Ku02vgrm9Cn"></a>
           <button className="pricing__container--button">View All</button>
          */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

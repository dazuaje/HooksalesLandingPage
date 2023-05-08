import React from "react";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import "./Home.scss";
const Home = () => {
  return (
    <section className="home__container" id="Navbar">
      <h1 className="home__container--title">
        HOOK<span className="home__container--highlight">SALES</span>
      </h1>
      <p className="home__container--p">
        We provide customized digital services to help businesses dominate their market and attract more customers. Trust us to get you the right attention and grow your brand
      </p>
      <CallToActionBtn title="#FFF" iconColor="#fff" iconBackground="#4FACFE" border="2px solid #4FACFE" backgroundColor="transparent" content="Order Now" />
    </section>
  );
};
export default Home;

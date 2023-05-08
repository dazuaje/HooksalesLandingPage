import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Pricing from "./components/Pricing/Pricing";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import shapeHome from "./assets/shape1.png";
import shapeHook from "./assets/shapeHook.png";
import Spinner from "./components/Spinner/Spinner";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import ChatForm from './components/ChatForm/ChatForm'
import MultistepForm from "./components/MultistepForm/MultistepForm";
import Multi from './components/MultistepForm/Test';
//import { Router, Switch, Route } from "react-router-dom";
//import Prueba from "./components/Prueba"
import "./App.scss";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])

  return (
    <div className="App">
      {
        loading ?

          <Spinner />
          :

          <>
            <div className="shape1">
              <img className="shape1--img" src={shapeHome} />
              <img className="shape2--img" src={shapeHook} />
              <Navbar />
              <Home />
            </div>
            <AboutUs />
            {/*
            <ChatForm/>
             */}
            <Features />
            
            <Testimonials />
            <Routes>
            <Route path="/MultiStepForm" element={<MultistepForm />} />

            </Routes>
            {/*
      <Prueba/>
    */}
            <Portfolio />
            <div className="shapes">
              <img className="shapes--1" src={shapeHook} alt="" />
              <Pricing />
              <FAQ />
            </div>
            <Footer />
          </>
      }
    </div>
  );
}

export default App;

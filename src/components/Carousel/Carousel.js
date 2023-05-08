import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.scss";
import { AiFillStar } from "react-icons/ai";
//import Arrow from '../../assets/Group 1417.svg'
import Photo1 from "../../assets/photo1.png";
import Photo2 from '../../assets/photo2.png';
import Quote from "../../assets/quote.png";

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={4}
      visibleSlides={0.4}
      isPlaying={true}
      interval={3000}
      infinite={true}
      className="component"
    >
      <Slider className="slider">
        <Slide index={0}>
          <div className="slide">
            <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={Photo1} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="slide">

         <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={Photo2} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Lora Leons, Sea Hawks</h2>
                    <p className="cloud__container--position">Director, ABC</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </Slide>
        <Slide index={2}>
          <div className="slide">

         <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={Photo1} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </Slide>
        <Slide index={3}>
          <div className="slide">

         <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={Photo2} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Lora Leons, Sea Hawks</h2>
                    <p className="cloud__container--position">Director, ABC</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </Slide>
        <Slide index={4}>
          <div className="slide">

         <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={Photo1} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </Slide>
      </Slider>
      <div className="btn">
        <div className="title__container">
          <img className="img" src={Quote} alt="" />
          <h1 className="title">
            {" "}
            <span className="span">WHAT</span> THEY SAY
          </h1>
        </div>
        <div className="btns">
          <ButtonBack className="arrows">
            <svg
              id="Group_1417"
              className="arrows"
              data-name="Group 1417"
              xmlns="http://www.w3.org/2000/svg"
              width="52.154"
              height="33.962"
              viewBox="0 0 52.154 33.962"
            >
              <path
                id="Path_58"
                data-name="Path 58"
                d="M1629.726,2097.021a2.542,2.542,0,0,0,1.83-.777l13.908-14.442a2.538,2.538,0,0,0-.067-3.59h0a2.539,2.539,0,0,0-3.591.068h0L1627.9,2092.72a2.539,2.539,0,0,0,1.829,4.3Z"
                transform="translate(-1627.186 -2077.5)"
                fill="#fff"
              />
              <path
                id="Path_59"
                data-name="Path 59"
                d="M1643.635,2105.55a2.54,2.54,0,0,0,1.828-4.3l-13.906-14.44a2.539,2.539,0,0,0-3.592-.068h0a2.539,2.539,0,0,0-.068,3.591h0l13.908,14.443A2.545,2.545,0,0,0,1643.635,2105.55Z"
                transform="translate(-1627.187 -2071.588)"
                fill="#fff"
              />
              <path
                id="Path_60"
                data-name="Path 60"
                d="M1610.139,2091.19h46.125a2.54,2.54,0,0,0,0-5.08h-46.125a2.54,2.54,0,1,0,0,5.08Z"
                transform="translate(-1606.649 -2071.532)"
                fill="#fff"
              />
            </svg>
          </ButtonBack>
          <ButtonNext className="arrows">
            <svg
              id="Group_1417"
              data-name="Group 1417"
              xmlns="http://www.w3.org/2000/svg"
              width="52.154"
              height="33.962"
              viewBox="0 0 52.154 33.962"
              className=" arrows right"
            >
              <path
                id="Path_58"
                data-name="Path 58"
                d="M1629.726,2097.021a2.542,2.542,0,0,0,1.83-.777l13.908-14.442a2.538,2.538,0,0,0-.067-3.59h0a2.539,2.539,0,0,0-3.591.068h0L1627.9,2092.72a2.539,2.539,0,0,0,1.829,4.3Z"
                transform="translate(-1627.186 -2077.5)"
                fill="#fff"
              />
              <path
                id="Path_59"
                data-name="Path 59"
                d="M1643.635,2105.55a2.54,2.54,0,0,0,1.828-4.3l-13.906-14.44a2.539,2.539,0,0,0-3.592-.068h0a2.539,2.539,0,0,0-.068,3.591h0l13.908,14.443A2.545,2.545,0,0,0,1643.635,2105.55Z"
                transform="translate(-1627.187 -2071.588)"
                fill="#fff"
              />
              <path
                id="Path_60"
                data-name="Path 60"
                d="M1610.139,2091.19h46.125a2.54,2.54,0,0,0,0-5.08h-46.125a2.54,2.54,0,1,0,0,5.08Z"
                transform="translate(-1606.649 -2071.532)"
                fill="#fff"
              />
            </svg>
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;

import React, { useState } from "react";
import "./Portfolio.scss";
//import Image from "../../assets/Group 1501.png";
import networkShape from "../../assets/networkShape.svg";
import { BiRightArrow } from "react-icons/bi";
import dataPortfolio from "../../dataPortfolio";
const Portfolio = () => {
  const [data, setData] = useState(dataPortfolio);
  const [value, setValue] = useState(0);
  //console.log(data);
  const { title, desc } = data[value];
  return (
    <section className="portfolio__container" id="Portfolio">
      <h1 className="portfolio__container--title">PORTFOLIO</h1>
      <img
        src={networkShape}
        alt=""
        className="portfolio__container--networkShape"
      />
      <p className="portfolio__container--p">Lorem ipsum dolor sit</p>
      <div className="portfolio__container__miniContainer">
        <div className="portfolio__container__blueContainer">
          <div className="portfolio__container__card">
            <div className="portfolio__container__numberColumn">
              {data.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`portfolio__container--number ${
                      index === value && "active"
                    }`}
                  >
                    {item.category}
                  </div>
                );
              })}
            </div>

            <div className="portfolio__container__img">
              {/*
              <img className="portfolio__container--img" src={img} />
               */}
            </div>
            <div className="portfolio__container__contentContainer">
              
                <h2 className="portfolio__container__contentContainer--title">
                  {title}
                </h2>
              
              <p className="portfolio__container__contentContainer--description">
                {desc}
              </p>
              <button className="portfolio__container__contentContainer--btn">
                <p>Explore</p>
                <BiRightArrow
                  className="portfolio__container__contentContainer--icon"
                  style={{ color: "#FFF" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
};

export default Portfolio;

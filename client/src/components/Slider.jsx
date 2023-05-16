import React from "react";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="sliderWrapper">
          <div className="sliderItem">
            <img src="./img/air.png" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              AIR FORCE
              <br /> NEW
              <br /> SEASON
            </h1>
            <h2 className="sliderPrice">$119</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src="./img/jordan.png" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              AIR JORDAN
              <br /> NEW
              <br /> SEASON
            </h1>
            <h2 className="sliderPrice">$149</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src="./img/blazer.png" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              BLAZER
              <br /> NEW
              <br /> SEASON
            </h1>
            <h2 className="sliderPrice">$109</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src="./img/crater.png" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            {/* <h1 className="sliderTitle">CRATER<br/> NEW<br/> SEASON<h1/> */}
            <h2 className="sliderPrice">$129</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src="./img/hippie.png" alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">
              HIPPIE
              <br /> NEW
              <br /> SEASON
            </h1>
            <h2 className="sliderPrice">$99</h2>
            <a href="#product">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

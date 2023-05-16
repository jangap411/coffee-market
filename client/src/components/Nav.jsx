import React from "react";
// import { logo } from "../assets/index";
const Nav = () => {
  return (
    <nav id="nav">
      <div className="navTop">
        <div className="navItem">
          <img src={logo} alt="kofi maketples" width="300" height="50" />
        </div>
        <div className="navItem">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
            <img
              src="./img/search.png"
              width="20"
              height="20"
              alt=""
              className="searchIcon"
            />
          </div>
        </div>
        {/* <div className="navItem">
          <span className="limitedOffer">Limited Offer!</span>
        </div> */}
      </div>
      <div className="navBottom">
        <h3 className="menuItem">BUYER</h3>
        <h3 className="menuItem">FARMER</h3>
        <h3 className="menuItem">EXPORTER</h3>
        {/* <h3 className="menuItem">CRATER</h3>
        <h3 className="menuItem">HIPPIE</h3> */}
      </div>
    </nav>
  );
};

export default Nav;

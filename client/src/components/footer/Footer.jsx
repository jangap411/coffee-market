import React from "react";
import { footer_bottom_img } from "../../assets";
import MenuItems from "../header/MenuItems";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top" style={{ width: "100%" }}>
          <div className="container">
            <div className="footer-brand-wrapper">
              <a href="./index.html" className="logo">
                <img
                  src={logo}
                  alt="kofi maketples logo"
                  style={{ height: "5rem" }}
                />
              </a>

              <ul className="footer-list">
                {/* <li>
                  <a href="./index.html" className="footer-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/#" className="footer-link">
                    Movie
                  </a>
                </li>

                <li>
                  <a href="/#" className="footer-link">
                    TV Show
                  </a>
                </li>

                <li>
                  <a href="/#" className="footer-link">
                    Web Series
                  </a>
                </li>

                <li>
                  <a href="/#" className="footer-link">
                    Pricing
                  </a>
                </li> */}
                <MenuItems section={"footer"} />
              </ul>
            </div>

            <div className="divider"></div>

            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <a href="/#" className="quicklink-link">
                    Faq
                  </a>
                </li>

                <li>
                  <a href="/#" className="quicklink-link">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="/#" className="quicklink-link">
                    Terms of use
                  </a>
                </li>

                <li>
                  <a href="/#" className="quicklink-link">
                    Privacy
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="/#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2023 <a href="/#">Kofi Maketples</a>. All Rights Reserved
          </p>

          <img
            src={footer_bottom_img}
            alt="Online banking companies logo"
            className="footer-bottom-img"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { logo } from "../../assets";
import MenuItems from "../header/MenuItems";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-top" style={{ width: "100%" }}>
					<div className="container">
						<div className="footer-brand-wrapper">
							<a href="/" className="logo">
								<img
									src={logo}
									alt="kofi maketples logo"
									style={{ height: "5rem" }}
								/>
							</a>

							<ul className="footer-list">
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
						</div>
					</div>
				</div>
			</footer>
			<div className="footer-bottom">
				<div className="container">
					<p className="copyright">
						&copy; 2023 <a href="/#">Kofi Maketples</a>. All Rights Reserved
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;

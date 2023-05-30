import "./header.css";
import { Link } from "@mui/material";
import MenuItems from "./MenuItems";
import { logo } from "../../assets";

const Header = () => {
	return (
		<>
			<header className="header" data-header>
				<div className="container">
					<div className="overlay" data-overlay></div>

					<a href="/" className="logo">
						<img src={logo} alt="kofi logo" style={{ height: "7rem" }} />
					</a>

					<div className="header-actions">
						<Link
							className="btn btn-primary"
							href="/signin"
							sx={{
								textDecoration: "none",
								color: "white",
							}}
						>
							Sign in
						</Link>
					</div>

					<button className="menu-open-btn" data-menu-open-btn>
						<ion-icon name="reorder-two"></ion-icon>
					</button>

					<nav className="navbar" data-navbar>
						<div className="navbar-top">
							<a href="/" className="logo">
								<img src="./assets/images/logo.svg" alt="Filmlane logo" />
							</a>

							<button className="menu-close-btn" data-menu-close-btn>
								<ion-icon name="close-outline"></ion-icon>
							</button>
						</div>

						{/* Menu items */}
						<ul className="navbar-list">
							<MenuItems section={"navbar"} />
						</ul>

						<ul className="navbar-social-list">
							<li>
								<a href="/#" className="navbar-social-link">
									<ion-icon name="logo-twitter"></ion-icon>
								</a>
							</li>

							<li>
								<a href="/#" className="navbar-social-link">
									<ion-icon name="logo-facebook"></ion-icon>
								</a>
							</li>

							<li>
								<a href="/#" className="navbar-social-link">
									<ion-icon name="logo-pinterest"></ion-icon>
								</a>
							</li>

							<li>
								<a href="/#" className="navbar-social-link">
									<ion-icon name="logo-instagram"></ion-icon>
								</a>
							</li>

							<li>
								<a href="/#" class="navbar-social-link">
									<ion-icon name="logo-youtube"></ion-icon>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;

import React from "react";
import { hero_bg, dry_beans } from "../../assets";

const Upcoming = () => {
	return (
		<>
			<section className="upcoming">
				<div className="container">
					<div className="flex-wrapper">
						<div className="title-wrapper">
							<p className="section-subtitle">Explore</p>

							<h2 className="h2 section-title">What's New Today</h2>
						</div>
					</div>

					<ul className="movies-list  has-scrollbar">
						<li>
							<div className="movie-card">
								<a href="./movie-details.html">
									<figure className="card-banner">
										<img src={hero_bg} alt="New Guinea Arona Coffee" />
									</figure>
								</a>

								<div className="title-wrapper">
									<a href="./movie-details.html">
										<h3 className="card-title">New Guinea Arona Coffee</h3>
									</a>

									<time datetime="2022">2023</time>
								</div>

								<div className="card-meta">
									<div className="badge badge-outline">Green Beans</div>

									<div className="duration">
										<ion-icon name="location"></ion-icon>

										<time datetime="PT137M">Morobe</time>
									</div>

									<div className="rating"></div>
								</div>
							</div>
						</li>

						<li>
							<div className="movie-card">
								<a href="./movie-details.html">
									<figure className="card-banner">
										<img src={dry_beans} alt="New Guinea Arona Coffee" />
									</figure>
								</a>

								<div className="title-wrapper">
									<a href="./movie-details.html">
										<h3 className="card-title">New Guinea Arona Coffee</h3>
									</a>

									<time datetime="2022">2023</time>
								</div>

								<div className="card-meta">
									<div className="badge badge-outline">Dry Roasted</div>

									<div className="duration">
										<ion-icon name="location"></ion-icon>

										<time datetime="PT126M">Highlands</time>
									</div>

									<div className="rating">
										{/* <ion-icon name="star"></ion-icon> */}

										{/* <data>NR</data> */}
									</div>
								</div>
							</div>
						</li>

						<li>
							<div className="movie-card">
								<a href="./movie-details.html">
									<figure className="card-banner">
										<img src={hero_bg} alt="Memory movie poster" />
									</figure>
								</a>

								<div className="title-wrapper">
									<a href="./movie-details.html">
										<h3 className="card-title">New Guinea Arona Coffee</h3>
									</a>

									<time datetime="2022">2023</time>
								</div>

								<div className="card-meta">
									<div className="badge badge-outline">Green Beans</div>

									<div className="duration">
										<ion-icon name="location"></ion-icon>

										<time datetime="">Highlands</time>
									</div>

									<div className="rating">
										{/* <ion-icon name="star"></ion-icon> */}

										{/* <data>NR</data> */}
									</div>
								</div>
							</div>
						</li>

						<li>
							<div className="movie-card">
								<a href="./movie-details.html">
									<figure className="card-banner">
										<img
											src={dry_beans}
											alt="The Unbearable Weight of Massive Talent movie poster"
										/>
									</figure>
								</a>

								<div className="title-wrapper">
									<a href="./movie-details.html">
										<h3 className="card-title">New Guinea Arona Coffee</h3>
									</a>

									<time datetime="2022">2023</time>
								</div>

								<div className="card-meta">
									<div className="badge badge-outline">Dry Roasted</div>

									<div className="duration">
										<ion-icon name="location"></ion-icon>

										<time datetime="PT107M">Highlands</time>
									</div>

									<div className="rating"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Upcoming;

const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<p className="hero-subtitle">Kofi Maketples</p>

						<h1 className="h1 hero-title">
							Your Ultimate <strong>Coffee</strong>, Experience.
						</h1>

						<div className="meta-wrapper">
							<div className="badge-wrapper">
								<div className="badge badge-fill">ARABICA</div>

								<div className="badge badge-outline">HIGHLANDS</div>
							</div>

							<div className="ganre-wrapper">
								<a href="/#">Roast,</a>

								<a href="/#">Dry</a>
							</div>
						</div>

						<button className="btn btn-primary">
							<span>Explore now</span>
							<ion-icon name="play"></ion-icon>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;

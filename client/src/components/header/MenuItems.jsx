const MenuItems = ({ section }) => {
	return (
		<>
			<li>
				<a href="/" className={`${section}-link`}>
					Home
				</a>
			</li>

			<li>
				<a href="/#" className={`${section}-link`}>
					Farmers
				</a>
			</li>

			<li>
				<a href="/#" className={`${section}-link`}>
					Exporters
				</a>
			</li>
			<li>
				<a href="/#" className={`${section}-link`}>
					Pricing
				</a>
			</li>
		</>
	);
};

export default MenuItems;

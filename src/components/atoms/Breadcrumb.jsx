const Breadcrumb = ({ items }) => {
	return (
		<nav className="text-gray-600 text-sm" aria-label="Breadcrumb">
			<ol className="list-none p-0 inline-flex">
				{items.map((item, index) => (
					<li key={item.name} className="flex items-center">
						<a
							href={item.url}
							className={`${
								item.isActive ? 'text-shade_two' : 'text-input_color '
							} font-light text-xs sm:text-sm md:text-base lg:text-base xl:text-base`}
						>
							{item.label}
						</a>
						{index < items.length - 1 && <span className="px-2 text-gray-500">/</span>}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;

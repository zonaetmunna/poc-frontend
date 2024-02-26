const CircleMini = ({ width = '8', height = '8', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			viewBox="0 0 8 8"
			{...props}
			fill="none"
		>
			<circle cx="4" cy="4" r="4" fill="#20BF6B" />
		</svg>
	);
};

export default CircleMini;

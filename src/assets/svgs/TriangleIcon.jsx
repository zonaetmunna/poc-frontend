const TriangleIcon = ({ width = '12', height = '10', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			{...props}
			viewBox="0 0 12 10"
			fill="none"
		>
			<path d="M6 0.5L11.1962 9.5H0.803848L6 0.5Z" fill="#20BF6B" />
		</svg>
	);
};

export default TriangleIcon;

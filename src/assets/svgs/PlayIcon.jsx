const PlayIcon = ({ width = '39', height = '44', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			{...props}
			viewBox="0 0 39 44"
			fill="none"
		>
			<path
				d="M36 16.8038C40 19.1133 40 24.8868 36 27.1962L8.99999 42.7846C4.99999 45.094 -2.19463e-06 42.2073 -1.99273e-06 37.5885L-6.29948e-07 6.41153C-4.28054e-07 1.79273 5 -1.09401 9 1.21539L36 16.8038Z"
				fill="white"
			/>
		</svg>
	);
};

export default PlayIcon;

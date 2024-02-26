const CloseIcon = ({ width = '30', height = '30', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			{...props}
			viewBox="0 0 30 30"
			fill="none"
		>
			<circle cx="15" cy="15" r="15" fill="#EFEFEF" fillOpacity="0.3" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.9415 15L9.21958 10.2781C8.92681 9.98532 8.92681 9.51235 9.21958 9.21958C9.51235 8.92681 9.9853 8.92681 10.2781 9.21958L15 13.9415L19.7219 9.21958C20.0147 8.92681 20.4876 8.92681 20.7804 9.21958C21.0732 9.51235 21.0732 9.98532 20.7804 10.2781L16.0585 15L20.7804 19.7219C21.0732 20.0147 21.0732 20.4876 20.7804 20.7804C20.4876 21.0732 20.0147 21.0732 19.7219 20.7804L15 16.0585L10.2781 20.7804C9.9853 21.0732 9.51235 21.0732 9.21958 20.7804C8.92681 20.4876 8.92681 20.0147 9.21958 19.7219L13.9415 15Z"
				fill="#20BF6B"
			/>
		</svg>
	);
};

export default CloseIcon;

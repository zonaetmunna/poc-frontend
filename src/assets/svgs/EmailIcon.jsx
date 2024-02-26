const EmailIcon = ({ width = '25', height = '25', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			{...props}
			viewBox="0 0 25 25"
			fill="none"
		>
			<g clipPath="url(#clip0_1254_1849)">
				<path
					d="M14.5893 15.3174C13.9673 15.7321 13.2449 15.9513 12.5 15.9513C11.7552 15.9513 11.0327 15.7321 10.4107 15.3174L0.166455 8.4877C0.109903 8.44988 0.0543967 8.41053 0 8.36968L0 19.5609C0 20.844 1.04126 21.8624 2.30142 21.8624H22.6985C23.9816 21.8624 25 20.8211 25 19.5609V8.36963C24.9455 8.41059 24.8898 8.45003 24.8332 8.48789L14.5893 15.3174Z"
					fill="#20BF6B"
				/>
				<path
					d="M0.979005 7.26865L11.2233 14.0984C11.6111 14.357 12.0555 14.4862 12.5 14.4862C12.9444 14.4862 13.3889 14.3569 13.7767 14.0984L24.021 7.26865C24.634 6.8602 25 6.17661 25 5.43882C25 4.17021 23.9679 3.13818 22.6994 3.13818H2.30064C1.03208 3.13823 1.21099e-06 4.17026 1.21099e-06 5.44004C-0.000379092 5.80196 0.0888198 6.15834 0.259642 6.47741C0.430465 6.79648 0.6776 7.06831 0.979005 7.26865Z"
					fill="#20BF6B"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1254_1849">
					<rect width="25" height="25" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default EmailIcon;
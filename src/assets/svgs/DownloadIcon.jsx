const DownloadIcon = ({ width = '30', height = '37', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			fill="none"
			{...props}
		>
			<path
				fill="#20BF6B"
				d="M3 30.5c-1.635 0-3 1.365-3 3s1.365 3 3 3h24c1.635 0 3-1.365 3-3s-1.365-3-3-3H3Zm12.034-3a1.5 1.5 0 0 1-1.174-.525l-9-10.5c-.91-1.064.004-2.685 1.386-2.454l3.514.585a.638.638 0 0 0 .74-.627V5c0-2.467 2.033-4.5 4.5-4.5 2.468 0 4.5 2.033 4.5 4.5v8.979a.636.636 0 0 0 .74.627l3.514-.585c1.38-.23 2.295 1.39 1.386 2.454l-9 10.5a1.5 1.5 0 0 1-1.106.525Z"
			/>
		</svg>
	);
};

export default DownloadIcon;

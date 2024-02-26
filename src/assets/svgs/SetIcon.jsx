const SetIcon = ({ width = '13', height = '10', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			className={className}
			style={style}
			{...props}
		>
			<path
				fill="#22D654"
				fillRule="evenodd"
				d="M4.052 9.76c.325 0 .634-.131.862-.359l7.848-7.994a.83.83 0 0 0 0-1.163.796.796 0 0 0-1.147 0L4.06 7.954l-2.675-2.83a.796.796 0 0 0-1.147 0 .83.83 0 0 0 0 1.163L3.206 9.4c.212.228.52.358.846.358Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default SetIcon;

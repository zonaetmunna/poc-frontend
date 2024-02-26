const PasswordIcon = ({ width = '25', height = '25', className = '', style = {}, ...props }) => {
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
			<g clipPath="url(#clip0_1254_1855)">
				<path
					d="M19.5312 9.375H18.75V6.25C18.75 2.80312 15.9469 0 12.5 0C9.05312 0 6.25 2.80312 6.25 6.25V9.375H5.46875C4.8474 9.37583 4.25174 9.62302 3.81238 10.0624C3.37302 10.5017 3.12583 11.0974 3.125 11.7188V22.6562C3.125 23.949 4.17708 25 5.46875 25H19.5312C20.8229 25 21.875 23.949 21.875 22.6562V11.7188C21.875 10.426 20.8229 9.375 19.5312 9.375ZM8.33333 6.25C8.33333 3.95208 10.2021 2.08333 12.5 2.08333C14.7979 2.08333 16.6667 3.95208 16.6667 6.25V9.375H8.33333V6.25ZM13.5417 17.4187V19.7917C13.5417 20.0679 13.4319 20.3329 13.2366 20.5282C13.0412 20.7236 12.7763 20.8333 12.5 20.8333C12.2237 20.8333 11.9588 20.7236 11.7634 20.5282C11.5681 20.3329 11.4583 20.0679 11.4583 19.7917V17.4187C10.8385 17.0573 10.4167 16.3927 10.4167 15.625C10.4167 14.476 11.351 13.5417 12.5 13.5417C13.649 13.5417 14.5833 14.476 14.5833 15.625C14.5833 16.3927 14.1615 17.0573 13.5417 17.4187Z"
					fill="#20BF6B"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1254_1855">
					<rect width="25" height="25" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default PasswordIcon;

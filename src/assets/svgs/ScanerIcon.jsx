const ScanerIcon = ({ width = '18', height = '18', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			{...props}
			viewBox="0 0 18 18"
			fill="none"
		>
			<g clipPath="url(#clip0_1251_245)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.5386 2.28883C15.1758 2.28883 15.6924 2.80723 15.6924 3.44622V5.2975C15.6876 5.39135 15.702 5.4852 15.7346 5.57334C15.7672 5.66148 15.8174 5.74205 15.8821 5.81018C15.9469 5.8783 16.0248 5.93255 16.1112 5.96962C16.1975 6.00668 16.2905 6.0258 16.3845 6.0258C16.4785 6.0258 16.5715 6.00668 16.6578 5.96962C16.7442 5.93255 16.8221 5.8783 16.8868 5.81018C16.9516 5.74205 17.0018 5.66148 17.0344 5.57334C17.067 5.4852 17.0814 5.39135 17.0766 5.2975V3.44622C17.0775 2.77207 16.8107 2.12514 16.3348 1.64768C15.8588 1.17023 15.2128 0.901337 14.5386 0.900145H12.6927C12.5086 0.900145 12.332 0.973299 12.2018 1.10351C12.0715 1.23373 11.9984 1.41034 11.9984 1.59449C11.9984 1.77864 12.0715 1.95525 12.2018 2.08546C12.332 2.21568 12.5086 2.28883 12.6927 2.28883H14.5386ZM14.5386 15.7113C15.1758 15.7113 15.6924 15.1938 15.6924 14.5539V12.7026C15.6876 12.6088 15.702 12.5149 15.7346 12.4268C15.7672 12.3386 15.8174 12.2581 15.8821 12.1899C15.9469 12.1218 16.0248 12.0676 16.1112 12.0305C16.1975 11.9934 16.2905 11.9743 16.3845 11.9743C16.4785 11.9743 16.5715 11.9934 16.6578 12.0305C16.7442 12.0676 16.8221 12.1218 16.8868 12.1899C16.9516 12.2581 17.0018 12.3386 17.0344 12.4268C17.067 12.5149 17.0814 12.6088 17.0766 12.7026V14.5539C17.0775 15.2281 16.8107 15.875 16.3348 16.3524C15.8588 16.8299 15.2128 17.0988 14.5386 17.1H12.6927C12.5086 17.1 12.332 17.0268 12.2018 16.8966C12.0715 16.7664 11.9984 16.5898 11.9984 16.4056C11.9984 16.2215 12.0715 16.0449 12.2018 15.9147C12.332 15.7844 12.5086 15.7113 12.6927 15.7113H14.5386ZM3.46153 2.28883C3.30978 2.28907 3.15956 2.31919 3.01944 2.37748C2.87933 2.43577 2.75207 2.52109 2.64493 2.62857C2.5378 2.73604 2.45287 2.86356 2.39502 3.00386C2.33716 3.14415 2.30751 3.29446 2.30774 3.44622V5.2975C2.31253 5.39135 2.29818 5.4852 2.26556 5.57334C2.23294 5.66148 2.18274 5.74205 2.118 5.81018C2.05326 5.8783 1.97534 5.93255 1.88898 5.96962C1.80263 6.00668 1.70963 6.0258 1.61565 6.0258C1.52167 6.0258 1.42868 6.00668 1.34232 5.96962C1.25596 5.93255 1.17804 5.8783 1.1133 5.81018C1.04857 5.74205 0.998361 5.66148 0.965741 5.57334C0.933122 5.4852 0.91877 5.39135 0.923558 5.2975V3.44622C0.922602 2.77207 1.18943 2.12514 1.66537 1.64768C2.1413 1.17023 2.78738 0.901337 3.46153 0.900145H5.30741C5.49156 0.900145 5.66817 0.973299 5.79839 1.10351C5.9286 1.23373 6.00176 1.41034 6.00176 1.59449C6.00176 1.77864 5.9286 1.95525 5.79839 2.08546C5.66817 2.21568 5.49156 2.28883 5.30741 2.28883H3.46153ZM3.46153 15.7113C2.82434 15.7113 2.30774 15.1938 2.30774 14.5539V12.7026C2.31253 12.6088 2.29818 12.5149 2.26556 12.4268C2.23294 12.3386 2.18274 12.2581 2.118 12.1899C2.05326 12.1218 1.97534 12.0676 1.88898 12.0305C1.80263 11.9934 1.70963 11.9743 1.61565 11.9743C1.52167 11.9743 1.42868 11.9934 1.34232 12.0305C1.25596 12.0676 1.17804 12.1218 1.1133 12.1899C1.04857 12.2581 0.998361 12.3386 0.965741 12.4268C0.933122 12.5149 0.91877 12.6088 0.923558 12.7026V14.5539C0.922602 15.2281 1.18943 15.875 1.66537 16.3524C2.1413 16.8299 2.78738 17.0988 3.46153 17.1H5.30741C5.49156 17.1 5.66817 17.0268 5.79839 16.8966C5.9286 16.7664 6.00176 16.5898 6.00176 16.4056C6.00176 16.2215 5.9286 16.0449 5.79839 15.9147C5.66817 15.7844 5.49156 15.7113 5.30741 15.7113H3.46153ZM18 9.00006C18.0001 8.90898 17.9823 8.81877 17.9475 8.73459C17.9127 8.6504 17.8617 8.5739 17.7973 8.50946C17.733 8.44501 17.6565 8.39389 17.5724 8.359C17.4883 8.32412 17.3981 8.30617 17.307 8.30617H0.69316C0.509129 8.30617 0.332634 8.37927 0.202504 8.5094C0.0723739 8.63953 -0.000732422 8.81603 -0.000732422 9.00006C-0.000732422 9.18409 0.0723739 9.36059 0.202504 9.49072C0.332634 9.62085 0.509129 9.69395 0.69316 9.69395H17.307C17.3981 9.69395 17.4883 9.676 17.5724 9.64112C17.6565 9.60623 17.733 9.55511 17.7973 9.49066C17.8617 9.42622 17.9127 9.34971 17.9475 9.26553C17.9823 9.18135 18.0001 9.09114 18 9.00006Z"
					fill="#20BF6B"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1251_245">
					<rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default ScanerIcon;
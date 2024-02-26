const SpeedIcon = ({ width = '25', height = '25', isActive = false, className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={{ ...style, fill: isActive ? 'black' : 'white' }}
			{...props}
			viewBox="0 0 25 25"
			fill="none"
		>
			<g clipPath="url(#clip0_1429_2170)">
				<path
					d="M24.8958 11.9135C24.4865 8.76294 22.8929 5.88639 20.4389 3.86859C17.9849 1.85078 14.8546 0.843137 11.6842 1.05047C8.51394 1.2578 5.54154 2.66454 3.3712 4.98477C1.20085 7.305 -0.00455013 10.3646 -1.44132e-05 13.5417C-0.006019 15.2422 0.338588 16.9257 1.01229 18.4871C1.686 20.0485 2.67434 21.4543 3.91561 22.6167C4.86492 23.4956 6.11577 23.9759 7.40936 23.9583H17.5833C18.9499 23.9615 20.263 23.4268 21.2385 22.4698C22.6288 21.1171 23.6836 19.4581 24.3186 17.6252C24.9537 15.7924 25.1513 13.8364 24.8958 11.9135ZM19.7823 20.976C19.1962 21.5535 18.4061 21.8765 17.5833 21.875H7.40936C6.64819 21.8906 5.90987 21.6145 5.34582 21.1031C4.31173 20.1345 3.48834 18.9632 2.92702 17.6622C2.3657 16.3612 2.0785 14.9586 2.08332 13.5417C2.08434 12.0753 2.39454 10.6255 2.99367 9.28709C3.5928 7.94865 4.4674 6.75157 5.5604 5.77396C7.45951 4.06136 9.92815 3.11706 12.4854 3.125C12.894 3.12517 13.3023 3.14812 13.7083 3.19375C15.6621 3.42066 17.5116 4.19642 19.0426 5.43117C20.5737 6.66592 21.7236 8.30914 22.3592 10.1705C22.9948 12.0319 23.0901 14.0352 22.634 15.9485C22.178 17.8618 21.1892 19.6068 19.7823 20.9813V20.976ZM8.13228 18.0052C8.32981 18.1986 8.44243 18.4625 8.44536 18.739C8.44829 19.0154 8.34129 19.2816 8.1479 19.4792C7.95451 19.6767 7.69058 19.7893 7.41416 19.7922C7.13774 19.7952 6.87147 19.6882 6.67394 19.4948C5.49161 18.3366 4.68092 16.8527 4.3452 15.232C4.00949 13.6114 4.16396 11.9274 4.78893 10.3949C5.41389 8.86239 6.48105 7.55067 7.85436 6.62696C9.22767 5.70325 10.8449 5.20939 12.5 5.20834C12.8984 5.20822 13.2962 5.23642 13.6906 5.29271C13.8261 5.31224 13.9563 5.35826 14.074 5.42814C14.1916 5.49803 14.2943 5.59041 14.3763 5.70002C14.4582 5.80962 14.5178 5.93429 14.5515 6.0669C14.5852 6.19952 14.5925 6.33749 14.5729 6.47292C14.555 6.60909 14.51 6.74031 14.4406 6.85884C14.3712 6.97737 14.2788 7.08084 14.1688 7.16314C14.0589 7.24544 13.9336 7.30492 13.8003 7.33809C13.667 7.37125 13.5284 7.37743 13.3927 7.35625C12.089 7.17004 10.7599 7.40038 9.59487 8.01438C8.42988 8.62838 7.4886 9.59468 6.90536 10.7754C6.32212 11.9561 6.12672 13.2908 6.34705 14.5891C6.56737 15.8875 7.19217 17.083 8.13228 18.0052ZM20.7489 12.351C20.8052 12.7454 20.8334 13.1433 20.8333 13.5417C20.8367 14.6517 20.6163 15.7511 20.1853 16.7741C19.7544 17.7971 19.1217 18.7228 18.325 19.4958C18.1272 19.6892 17.8606 19.7961 17.584 19.793C17.3074 19.7899 17.0434 19.677 16.85 19.4792C16.6566 19.2814 16.5497 19.0148 16.5528 18.7382C16.556 18.4616 16.6688 18.1976 16.8667 18.0042C17.5705 17.3182 18.102 16.4753 18.4177 15.5446C18.7334 14.6139 18.8245 13.6216 18.6833 12.649C18.6438 12.3753 18.7146 12.0972 18.8802 11.8758C19.0457 11.6543 19.2925 11.5077 19.5661 11.4682C19.8398 11.4287 20.1179 11.4995 20.3393 11.6651C20.5608 11.8307 20.7074 12.0774 20.7469 12.351H20.7489ZM14.5062 13.0083C14.6316 13.4591 14.6041 13.9387 14.4281 14.3723C14.2521 14.8058 13.9375 15.1688 13.5334 15.4047C13.1293 15.6405 12.6585 15.7359 12.1945 15.6759C11.7305 15.616 11.2993 15.404 10.9685 15.0732C10.6377 14.7423 10.4257 14.3112 10.3657 13.8472C10.3057 13.3831 10.4011 12.9123 10.637 12.5082C10.8728 12.1041 11.2359 11.7895 11.6694 11.6135C12.1029 11.4375 12.5825 11.4101 13.0333 11.5354L16.9719 7.59688C17.0679 7.49739 17.1829 7.41803 17.31 7.36344C17.4371 7.30885 17.5738 7.28011 17.7121 7.27891C17.8504 7.27771 17.9875 7.30406 18.1156 7.35644C18.2436 7.40881 18.3599 7.48616 18.4577 7.58397C18.5555 7.68177 18.6328 7.79807 18.6852 7.92609C18.7376 8.05411 18.7639 8.19128 18.7627 8.32959C18.7615 8.4679 18.7328 8.60459 18.6782 8.73167C18.6236 8.85876 18.5443 8.9737 18.4448 9.06979L14.5062 13.0083Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1429_2170">
					<rect width="25" height="25" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default SpeedIcon;

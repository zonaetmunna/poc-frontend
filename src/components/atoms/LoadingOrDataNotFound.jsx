import PropTypes from 'prop-types';

const LoadingOrDataNotFound = ({ children = '', className, style }) => {
	return (
		<h1
			className={`flex items-center justify-center text-xl sm:text-3xl lg:text-4xl rounded-lg text-text_gray min-[400px]:col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-gray_Bg  ${className}`}
			style={style}
		>
			{children}
		</h1>
	);
};

LoadingOrDataNotFound.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

LoadingOrDataNotFound.defaultProps = {
	className: '',
	style: {},
};

export default LoadingOrDataNotFound;

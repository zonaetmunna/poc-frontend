import PropTypes from 'prop-types';

const BaseText = ({ children = '', className = '', style = {} }) => {
	// for large device lg 16px= text-base
	return (
		<div className={`text-xs sm:text-sm md:text-base lg:text-base xl:text-base ${className}`} style={style}>
			{children}
		</div>
	);
};

BaseText.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

BaseText.defaultProps = {
	children: '',
	className: '',
	style: {},
};

export default BaseText;

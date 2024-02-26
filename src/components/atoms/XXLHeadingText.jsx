/* 
text component
text lg device 60px
*/

import PropTypes from 'prop-types';

const XXLHeadingText = ({ children, className, style }) => {
	return (
		<h1 className={`text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl ${className}`} style={style}>
			{children}
		</h1>
	);
};

XXLHeadingText.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

XXLHeadingText.defaultProps = {
	className: '',
	style: {},
};

export default XXLHeadingText;

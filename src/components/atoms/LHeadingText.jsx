/*
typography component
font for lg device 24px
*/
import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const LHeadingText = ({ children = '', className = '', style = {} }) => {
	return (
		<h1 className={cn('text-xl sm:xl md:text-xl lg:text-2xl xl:text-2xl', className, {})} style={style}>
			{children}
		</h1>
	);
};

LHeadingText.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

LHeadingText.defaultProps = {
	className: '',
	style: {},
};

export default LHeadingText;

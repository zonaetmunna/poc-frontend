/* 
text component
text lg device 36px
*/
import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const XLHeadingText = ({ children = '', className = '', style = {} }) => {
	return (
		<h1 className={cn('text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl', className, {})} style={style}>
			{children}
		</h1>
	);
};

XLHeadingText.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

XLHeadingText.defaultProps = {
	className: '',
	style: {},
};

export default XLHeadingText;

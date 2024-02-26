/* 
text component
text for lg device 16px
*/
import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const XSText = ({ children = '', className = '', style = {} }) => {
	return (
		<p className={cn('text-xs sm:text-sm md:text-base lg:text-base xl:text-[10px]', className, {})} style={style}>
			{children}
		</p>
	);
};

XSText.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

XSText.defaultProps = {
	className: '',
	style: {},
};

export default XSText;

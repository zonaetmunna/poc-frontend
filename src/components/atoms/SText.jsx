/* 
text component
text lg device 12px
*/
import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const SText = ({ children = '', className = '', style = {} }) => {
	return (
		<p className={cn('text-xs sm:text-xs md:text-xs lg:text-xs xl:text-base', className, {})} style={style}>
			{children}
		</p>
	);
};

SText.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

SText.defaultProps = {
	className: '',
	style: {},
};

export default SText;

/* 
typography component
lg device 18px 
*/
import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const MHeading = ({ children = '', className = '', style = {} }) => {
	return (
		<p className={cn('text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg', className, {})} style={style}>
			{children}
		</p>
	);
};

MHeading.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

MHeading.defaultProps = {
	children: '',
	className: '',
	style: {},
};

export default MHeading;

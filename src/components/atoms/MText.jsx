/* 
typography component
lg device 14px
*/
import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const MText = ({ children = '', className = '', style = {} }) => {
	return (
		<h1 className={cn('text-xs md:text-sm lg:text-sm xl:text-sm', className, {})} style={style}>
			{children}
		</h1>
	);
};

MText.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.shape({}),
};

MText.defaultProps = {
	children: '',
	className: '',
	style: {},
};

export default MText;

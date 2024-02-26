import PropTypes from 'prop-types';

import cn from '../../utils/cn';

const Label = ({ htmlFor, children, className }) => {
	return (
		<label htmlFor={htmlFor} className={cn('', className, {})}>
			{children}
		</label>
	);
};

Label.propTypes = {
	htmlFor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Label.defaultProps = {
	className: '',
};

export default Label;

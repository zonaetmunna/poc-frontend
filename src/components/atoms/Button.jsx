import propTypes from 'prop-types';

import cn from '../../utils/cn';

const Button = ({ type = 'button', onClick = null, className = '', children = '', disabled = null }) => {
	return (
		<button type={type} className={cn('', className, {})} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: propTypes.string,
	children: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.node]).isRequired,
	onclick: propTypes.func,
	type: propTypes.oneOf(['button', 'submit']).isRequired,
};

Button.defaultProps = {
	className: '',
	type: 'button',
	disabled: false,
	onClick: null,
	children: '',
};

export default Button;

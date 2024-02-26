/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';

const ButtonMenu = ({ children = '', setToggleMenu }) => {
	return (
		<button
			type="button"
			onClick={() => {
				return setToggleMenu((oldState) => {
					return !oldState;
				});
			}}
			className="flex items-center px-0 transition-all"
		>
			{children}
		</button>
	);
};

ButtonMenu.propTypes = {
	children: propTypes.element,
	setToggleMenu: propTypes.func,
};

export default ButtonMenu;

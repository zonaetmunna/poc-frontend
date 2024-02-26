import PropTypes from 'prop-types';

const RadioInput = ({ className = '', ...props }) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <input className={className} {...props} />;
};

RadioInput.propTypes = {
	className: PropTypes.string,
	props: PropTypes.shape({}),
};

RadioInput.defaultProps = {
	className: '',
	props: {},
};

export default RadioInput;

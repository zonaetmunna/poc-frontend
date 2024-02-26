import PropTypes from 'prop-types';

const ProgressBar = ({ className = '', parentage }) => {
	return (
		<div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${className}`}>
			<div className="bg-secondary h-2.5 rounded-full" style={{ width: `${parentage}%` }} />
		</div>
	);
};

ProgressBar.propsTypes = {
	className: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	style: PropTypes.object,
};

export default ProgressBar;

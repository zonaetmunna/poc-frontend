import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import cn from '../../utils/cn';

const TextAreaInput = ({ className = '', ...props }) => {
	const { t } = useTranslation();
	const [field, meta] = useField(props);

	return (
		<>
			<textarea
				className={cn('', className, {})}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...field}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			/>
			{meta && meta.touched && meta.error ? <div className="text-red-500">{t(meta?.error)}</div> : null}
		</>
	);
};

TextAreaInput.propTypes = {
	className: PropTypes.string,
};

TextAreaInput.defaultProps = {
	className: '',
};

export default TextAreaInput;

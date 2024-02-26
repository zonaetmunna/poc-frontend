import { Field, useField } from 'formik';

import Label from './Label';

const TextInputField = ({
	name = 'textInput',
	label = '',
	placeholder = 'Type here ...',
	className = '',
	...props
}) => {
	const [field, meta] = useField({ name });

	return (
		<div className="flex flex-col rounded-lg w-full pb-3">
			<Label className="text-sm font-medium text-grayDark pb-3 ">{label}</Label>
			<Field
				className={`w-full px-2 py-2 bg-offWhite rounded border border-offWhite focus:outline-primary ${className}`}
				name={name}
				placeholder={placeholder}
				{...field}
				{...props}
			/>

			{meta.touched && meta.error ? (
				<div className="error text-start text-red-600 text-sm mt-1">{meta.error}</div>
			) : null}
		</div>
	);
};

export default TextInputField;

import { Field, useField } from 'formik';

import Label from './Label';

const PasswordInputField = ({ name = 'textInput', placeholder = 'Type here ...', className = '', ...props }) => {
	const [field, meta] = useField({ name });

	return (
		<div className="rounded-lg w-full pb-4">
			<Label className="text-sm font-medium text-grayDark py-2-3">{name}</Label>
			<Field
				type="password"
				className={`rounded-lg  bg-offWhite w-full px-2 py-2 focus:outline-none ${
					meta.touched && meta.active ? 'bg-transparent' : ''
				} ${className}`}
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

export default PasswordInputField;

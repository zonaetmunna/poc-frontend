import { Field, useField } from 'formik';

import Label from './Label';

const TermsCheckboxField = ({ name, className = '', ...props }) => {
	const [field, meta] = useField({ name });

	return (
		<div className="flex justify-start space-x-3 xs:items-start lg:items-center mb-2">
			<Label htmlFor={name} className="font-medium flex gap-4">
				<Field
					{...field}
					type="checkbox"
					id={name}
					name={name}
					{...props}
					className={`w-4 h-4 text-primary focus:ring-primary ${className} checked:bg-primary`}
					checked={field.value}
				/>

				<span>
					<span className="text-dark">Accept</span>
					<span className="text-primary  ml-2">
						terms & conditions, Terms of use, Risk disclosure, privacy & policy, aML Policy
					</span>
				</span>
			</Label>

			{meta.touched && meta.error ? (
				<div className="error text-start text-red-600 text-sm mt-1">{meta.error}</div>
			) : null}
		</div>
	);
};

export default TermsCheckboxField;

import { Field, useField } from 'formik';

const NewsLetterCheckboxField = ({ name, className = '', ...props }) => {
	const [field, meta] = useField({ name });

	return (
		<div className="flex justify-start space-x-3 xs:items-start lg:items-center">
			<label htmlFor={name} className="font-medium flex gap-4">
				<Field
					type="checkbox"
					{...field}
					{...props}
					id={name}
					name={name}
					className={`w-4 focus:ring-primary ${className} checked:bg-primary`}
					checked={field.value}
				/>
				Subscribe to our newsletter upon signup for the latest updates, exclusive offers, and valuable insights!
			</label>

			{meta.touched && meta.error ? (
				<div className="error text-start text-red-600 text-sm mt-1">{meta.error}</div>
			) : null}
		</div>
	);
};

export default NewsLetterCheckboxField;

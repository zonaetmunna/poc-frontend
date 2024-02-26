import { Field, useField } from 'formik';

const CheckboxInput = ({ name, label, className = '', ...props }) => {
	const [field, meta] = useField({ name });

	return (
		<div className="flex justify-start space-x-3 items-center">
			<Field type="checkbox" id={name} name={name} className={`w-4  ${className}`} {...field} {...props} />
			<label htmlFor={name} className="ml-2">
				{label}
			</label>

			{meta.touched && meta.error ? (
				<div className="error text-start text-red-600 text-sm mt-1">{meta.error}</div>
			) : null}
		</div>
	);
};

export default CheckboxInput;

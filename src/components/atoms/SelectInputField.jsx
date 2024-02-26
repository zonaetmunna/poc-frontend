import { Field, useField } from 'formik';
import { useTranslation } from 'react-i18next';

const SelectInputField = ({
	name = 'name',
	label = '',
	options = [],
	selectOptions = { id: '', label: '', value: '' },
	defaultValue = '',
	className = '',
	...props
}) => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField({ name });

	return (
		<>
			{label && (
				<label
					htmlFor={name}
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					aria-controls="Select Category"
				>
					{label}
				</label>
			)}

			<Field
				as="select"
				id={name}
				className={`w-full px-2 py-2 rounded border border-border_color focus:outline-none ${className}`}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...field}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			>
				<option>{t('Select Category')}</option>
				{options?.map((option) => (
					<option
						key={option[selectOptions?.id]}
						value={option[selectOptions?.value]}
						selected={option[selectOptions?.value] === defaultValue}
						defaultValue={option[selectOptions?.value] === defaultValue}
					>
						{option[selectOptions?.label]}
					</option>
				))}
			</Field>

			{meta.touched && meta.error ? (
				<div className="error text-start text-red-600 text-sm mt-1">{t(meta?.error)}</div>
			) : null}
		</>
	);
};

export default SelectInputField;

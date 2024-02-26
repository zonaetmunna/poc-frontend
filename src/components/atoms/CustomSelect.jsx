import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

const CustomSelect = ({
	children = null,
	value,
	name = '',
	handleChange = null,
	onBlur = null,
	className,
	...props
}) => {
	const [field, meta] = useField(name);
	const { t } = useTranslation();
	const errorText = meta.touched && meta.error ? t(meta.error) : null;

	return (
		<>
			<select
				{...field}
				name={name}
				value={value}
				className={className}
				onChange={handleChange}
				onBlur={onBlur}
				{...props}
			>
				{children}
			</select>
			{errorText && (
				<div
					style={{
						maxWidth: '100%',
						marginBottom: '-15px',
					}}
				>
					{t(meta?.error)}
				</div>
			)}
		</>
	);
};

export default CustomSelect;

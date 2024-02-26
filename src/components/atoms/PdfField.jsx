import { Field, useField } from 'formik';
import { useTranslation } from 'react-i18next';

const PdfField = ({
	name = 'pdfInput',
	placeholder = 'Type here ...',
	firstIcon = null,
	lastIcon = null,
	className = '',
	...props
}) => {
	const { t } = useTranslation();
	const [field, meta] = useField({ name });

	return (
		<div className="flex flex-col mb-3 md:mb-4">
			<div className="flex justify-between outline-none border-[1px] border-border_color px-5 rounded-md lg:rounded-[10px] w-full h-10 lg:h-12 xl:h-[60px] text-xs lg:text-sm xl:text-base placeholder:text-xs lg:placeholder:text-sm xl:placeholder:text-base bg-[#E5E5D9]">
				<div className="flex gap-2.5 items-center w-full">
					{firstIcon}
					<Field
						className={`w-full h-full pe-2.5 rounded focus:outline-none ${className}`}
						name={name}
						placeholder={placeholder}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...field}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...props}
					/>
				</div>
				{lastIcon}
			</div>

			{meta.touched && meta.error ? (
				<div className="error text-start text-red-600 text-sm mt-1">{t(meta?.error)}</div>
			) : null}
		</div>
	);
};

export default PdfField;

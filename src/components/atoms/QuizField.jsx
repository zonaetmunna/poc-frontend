import { ErrorMessage, Field } from 'formik';

const QuizField = ({ name, type, placeholder, className }) => {
	// const touched = getIn(form.touched, name, false);
	return (
		<div>
			<Field
				className={`w-full px-4 py-3  rounded-xl border border-border_color text-input_color font-normal text-base font-Open focus:outline-1 focus:outline-border_color mb-2 ${className}`}
				type={type}
				name={name}
				placeholder={placeholder}
			/>

			<ErrorMessage name={name}>{(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}</ErrorMessage>
		</div>
	);
};

export default QuizField;

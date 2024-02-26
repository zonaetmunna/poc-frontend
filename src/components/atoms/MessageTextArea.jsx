import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SendIcon from '../../assets/svgs/SendIcon';

const MessageTextArea = ({ className, handleSubmit }) => {
	const [messageValue, setMessageValue] = useState('');
	const { t } = useTranslation();

	const handleFormSubmit = (event) => {
		if (event.which === 13 && !event.shiftKey) {
			if (!event.repeat) {
				const newEvent = new Event('submit', { cancelable: true });
				event.target.form.dispatchEvent(newEvent);
				handleSubmit(messageValue);
				setMessageValue('');
			}

			event.preventDefault();
		}
	};

	const handleTextArea = (e) => {
		setMessageValue(e.target.value);
	};
	const handleBtnSubmit = () => {
		handleSubmit(messageValue);
		setMessageValue('');
	};

	return (
		<form className={`${className} messageForm`} onKeyDown={handleFormSubmit} onSubmit={(e) => e.preventDefault()}>
			<div className="relative w-full h-full textarea-container">
				<textarea
					onChange={handleTextArea}
					name="message"
					className="h-full w-full appearance-none outline-none resize-none messageTextarea sm:text-[16px] text-sm"
					id=""
					maxLength="2500"
					placeholder={t('Write your message')}
					value={messageValue}
				/>
				<span
					className={`absolute right-0 bottom-0 bg-white sm:block hidden ${
						messageValue?.length === 2500 && 'text-red-600'
					}`}
				>
					{messageValue ? messageValue?.length : '0'}/2500
				</span>
			</div>
			<hr className="border border-border_color h-full w-[1px]" />
			<button type="submit" onClick={handleBtnSubmit}>
				<SendIcon />
			</button>
		</form>
	);
};

export default MessageTextArea;

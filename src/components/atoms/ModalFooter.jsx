import { useTranslation } from 'react-i18next';

import Button from './Button';

const ModalFooter = ({ className = '', handleLoginClick = null, text = '', button = '' }) => {
	const { t } = useTranslation();

	return (
		<div className={`w-full font-semibold text-center mt-[25px] ${className}`}>
			<span className="text-secondaryText text-base font-normal">{t(text)}</span>
			<Button type="button" className="ml-1 font-semibold text-primary" onClick={handleLoginClick}>
				{t(button)}
			</Button>
		</div>
	);
};

export default ModalFooter;

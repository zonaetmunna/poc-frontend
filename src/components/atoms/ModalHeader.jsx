import { useTranslation } from 'react-i18next';

import XLHeading from './XLHeading';

const ModalHeader = ({ text = '' }) => {
	const { t } = useTranslation();

	return (
		<div>
			<XLHeading className="text-shade_two text-center">{t(text)}</XLHeading>

			<hr className="border border-secondary w-[56px] mx-auto mt-[10px] mb-[30px]" />
		</div>
	);
};

export default ModalHeader;

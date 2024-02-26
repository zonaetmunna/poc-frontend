import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ArrowRightGreen from '../../assets/svgs/ArrowRightGreen';
import BaseText from './BaseText';

const UserMenuItem = ({ data }) => {
	const { svg, title, title_ar, path } = data;
	const { i18n } = useTranslation();
	return (
		<Link to={path || '/'} className="border-b-[1px] py-5 border-border_color flex items-center gap-5 group/menuItem">
			{svg}
			<BaseText className="font-semibold group-hover/menuItem:text-primary transition-all duration-200">
				{i18n?.language === 'en' ? title : title_ar}
			</BaseText>
			<ArrowRightGreen className="ml-auto opacity-0 group-hover/menuItem:opacity-100 transition-all duration-200" />
		</Link>
	);
};

export default UserMenuItem;

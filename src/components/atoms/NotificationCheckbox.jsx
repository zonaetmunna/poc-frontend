import { useField } from 'formik';

import cn from '../../utils/cn';
import Label from './Label';

const NotificationCheckbox = ({ label, className = '', ...props }) => {
	const [field] = useField(props);

	return (
		<Label className={cn('flex justify-between items-center', className, {})}>
			<span className="text-[#000] text-lg font-medium ">{label}</span>
			<input type="checkbox" className="w-4 h-4" {...field} {...props} />
		</Label>
	);
};

export default NotificationCheckbox;

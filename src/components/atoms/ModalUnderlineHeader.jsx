import XLHeading from './XLHeading';

const ModalUnderlineHeader = ({ header = '' }) => {
	return (
		<div>
			<XLHeading className="text-shade_two text-center font-normal leading-6">{header}</XLHeading>

			<hr className="mt-[10px] mb-[30px] mx-auto w-[56px] border-t-2 border-secondary" />
		</div>
	);
};

export default ModalUnderlineHeader;

import { format } from 'date-fns';

import { chatUserPlaceholderImage } from '../../utils/constants';
import BaseText from './BaseText';
import MText from './MText';

const Message = ({ data, senderData, receiverData, className }) => {
	return (
		<div className={className}>
			<div className="xl:w-fit w-[70px]">
				<img
					title={data.sender === senderData?.id ? 'Me' : receiverData.user}
					className="h-[45px] w-[45px] rounded-full object-cover object-top"
					src={
						!(data.sender === senderData?.id)
							? `${receiverData?.image || chatUserPlaceholderImage}`
							: `${senderData?.image || chatUserPlaceholderImage}`
					}
					alt={data.sender === senderData?.id ? 'Me' : receiverData.user}
				/>
			</div>

			<div className="ml-[9px]">
				<div className="flex gap-[9px] items-center">
					<BaseText className="font-semibold">{data.sender === senderData?.id ? 'Me' : receiverData.user}</BaseText>

					{data?.created_at ? (
						<span className="text-shade_three text-[10px] mt-1">
							{format(new Date(data?.created_at), 'dd MMM yyyy k:m')}
						</span>
					) : null}
				</div>
				<MText className="text-shade_three max-w-[480px]">{data.text}</MText>
			</div>
		</div>
	);
};

export default Message;

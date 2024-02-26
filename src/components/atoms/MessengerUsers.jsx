import { formatDistance, subDays } from 'date-fns';
import { useState } from 'react';

import StrokeStar from '../../assets/svgs/StrokeStar';
import StrokeStarFilled from '../../assets/svgs/StrokeStarFilled';
import { chatUserPlaceholderImage } from '../../utils/constants';
import BaseText from './BaseText';
import Button from './Button';
import MText from './MText';

const MessengerUsers = ({ friend, handleMessageToggler, setToggleMessages, userId, favoriteUserHandler }) => {
	const [isfavorite, setIsFavorite] = useState(friend?.user_is_favourite);

	const handleTogglerFunctions = () => {
		handleMessageToggler(friend?.receiver?.id);
		setToggleMessages((oldState) => !oldState);
	};

	const toggleFavoriteHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setIsFavorite((old) => {
			if (old) {
				favoriteUserHandler('remove', friend.id);
			} else {
				favoriteUserHandler('add', friend.id);
			}

			return !old;
		});
	};

	return (
		<Button
			onClick={handleTogglerFunctions}
			className={`${
				friend?.receiver?.id === userId ? 'bg-[#007d401a]' : ''
			} sm:px-5 pr-2 w-full border-b-[1px] border-border_color flex items-center hover:bg-[#007d401a] transition-all`}
		>
			<img
				className="object-cover w-[60px] h-[60px] rounded-full object-top my-[12px]"
				src={friend?.receiver?.image ? friend?.receiver?.image : chatUserPlaceholderImage}
				alt={friend?.receiver?.full_name}
			/>
			<div className="ms-[10px] text-left">
				{/* {friend?.receiver?.id} - {userId} */}
				<BaseText className="font-semibold">{friend?.receiver?.full_name || 'Unknown User'}</BaseText>
				<MText className="text-shade_three truncate w-full max-w-[150px] text-sm">{friend?.last_message}</MText>
			</div>

			<div className="ms-auto text-shade_three whitespace-nowrap flex items-end flex-col">
				<div className="text-sm">
					{friend?.last_message_at
						? formatDistance(subDays(new Date(friend?.last_message_at), 3), new Date(), {
								addSuffix: false,
							})
						: null}
				</div>

				<button type="button" onClick={toggleFavoriteHandler} className="ms-2 mt-[7px]">
					{isfavorite ? <StrokeStarFilled fillColor="#F7AB02" /> : <StrokeStar />}
				</button>
			</div>
		</Button>
	);
};

export default MessengerUsers;

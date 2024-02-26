const Card = () => {
	return (
		<div className="w-full max-w-md bg-white  rounded px-8 pt-6 pb-8 mb-4">
			<div className="mb-4">
				<input
					className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="cardName"
					type="text"
					placeholder="Card Name"
				/>
			</div>
			<div className="mb-4">
				<input
					className=" appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="cardNumber"
					type="text"
					placeholder="Card number"
				/>
			</div>
			<div className="mb-4">
				<input
					className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="cardExpiration"
					type="text"
					placeholder="Card Expire Date"
				/>
			</div>

			<div className="mb-4">
				<input
					className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="cardCVC"
					type="text"
					placeholder="Card Secret"
				/>
			</div>
		</div>
	);
};

export default Card;

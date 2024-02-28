import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/atoms/Button';

const SettingPage = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(true); // Set initial state to true for default open

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
		navigate('/poc');
	};

	return (
		<div
			className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 ${isModalOpen ? 'block' : 'hidden'}`}
		>
			<div className="bg-white p-8 rounded-lg w-1/4 flex flex-col justify-center items-center">
				<div className="flex items-center mb-4">
					<span onClick={toggleModal} className="cursor-pointer">
						<ArrowLeftCircleIcon className="h-6 w-6 text-dark" />
					</span>
					<h1 className="text-3xl text-center ml-4">Setting</h1>
				</div>

				<div className="mb-4 text-center">
					<Button
						type="button"
						onClick={toggleModal}
						className={`px-8 py-4 ${isModalOpen ? 'bg-[#EBF1FB] text-[#454F5B] font-semibold border-b-2 border-gray-600' : 'bg-gray-200 font-normal'}`}
					>
						Tax on
					</Button>
					<button type="button" onClick={toggleModal} className={`${isModalOpen ? '' : 'bg-[#EBF1FB] text-[#454F5B]'}`}>
						Tax Type
					</button>
				</div>

				{/* Modal Content */}
				<div className="w-full bg-white  rounded py-5">
					<div className="flex items-center mb-4 space-x-3 text-center">
						<input type="radio" name="taxType" />
						<label className="mr-4 text-[#454F5B] text-lg font-medium">After Discount</label>
					</div>
					<div className="flex items-center space-x-3">
						<input type="radio" name="taxType" />
						<label className="mr-4 text-[#454F5B] text-lg font-medium">Before Discount</label>
					</div>
					<button onClick={toggleModal} className="mt-4 w-full bg-[#3674D9] text-white px-4 py-2 rounded-md">
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default SettingPage;

import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import { products } from '../../constant/product.constant';
import { useCart } from '../../hooks/useCart';
import Button from '../atoms/Button';
import CategorySelectModal from '../organishms/CategorySelectModal';

const Products = () => {
	const { addToCart } = useCart();

	const [searchTerm, setSearchTerm] = useState('');
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

	const [selectedCategory, setSelectedCategory] = useState(null);

	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
	};

	const handleAddToCart = (product) => {
		addToCart(product);
	};

	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === null || product.category === selectedCategory),
	);

	return (
		<div className="border border-gray-300 rounded-md xs:mt-10 sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0">
			<div className="relative bg-white w-full px-6 py-3 ">
				<span className="absolute left-5 top-6 text-gray-400">
					<MagnifyingGlassIcon className="size-6" />
				</span>
				<input
					type="text"
					placeholder="Search products..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full border-none px-5 py-3 pl-10 placeholder-gray-400 rounded-md focus:outline-none"
				/>
				<span className="absolute right-8 top-6 text-gray-400 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M2 5a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM6 4a1 1 0 100 2h8a1 1 0 100-2H6zm-1 5a1 1 0 011-1h10a1 1 0 110 2H6a1 1 0 01-1-1zm1 4a1 1 0 100 2h3a1 1 0 100-2H6zm10-1a1 1 0 110 2H9a1 1 0 110-2h6z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</div>

			<div className="mt-4 px-5">
				<div className="flex mb-2 gap-1">
					<Button
						type="button"
						onClick={() => handleCategorySelect(null)}
						className={`flex justify-center flex-1 items-center  font-semibold text-lg space-x-1 bg-white text-[#A7C2EE] px-4 py-2 border ${selectedCategory === null ? 'border-[#B1C9F0] text-[#A7C2EE]' : ' border-[#6D7C89] text-[#A4AEB6]'} rounded-md`}
					>
						All cateogory
					</Button>
					<Button
						type="button"
						onClick={() => handleCategorySelect('Electronics')}
						className={`flex justify-center flex-1  items-center space-x-1 font-semibold text-lg bg-white  px-3 py-2 rounded-md border 
                            ${selectedCategory === 'Electronics' ? 'border-[#B1C9F0] text-[#A7C2EE]' : ' border-[#6D7C89] text-[#A4AEB6]'}`}
					>
						Electronics
					</Button>

					<Button
						type="button"
						onClick={() => handleCategorySelect('Home Life style')}
						className={`flex justify-center flex-1 items-center space-x-1 font-semibold text-lg bg-white  px-3 py-2 rounded-md border 
                            ${selectedCategory === 'Home life style' ? 'border-[#B1C9F0] text-[#A7C2EE]' : ' border-[#6D7C89] text-[#A4AEB6]'}`}
					>
						Home Life style
					</Button>

					<Button
						type="button"
						onClick={() => handleCategorySelect('Men Fashion')}
						className={`flex justify-center flex-1 items-center space-x-1 font-semibold text-lg bg-white  px-3 py-2 rounded-md border 
                            ${selectedCategory === 'Men Fashion' ? 'border-[#B1C9F0] text-[#A7C2EE]' : ' border-[#6D7C89] text-[#A4AEB6]'}`}
					>
						Men Fashion
					</Button>

					<Button
						type="button"
						onClick={() => handleCategorySelect('Women Fashions')}
						className={`flex justify-center flex-1 items-center space-x-1 font-semibold text-lg bg-white  px-3 py-2 rounded-md border 
                            ${selectedCategory === 'Women Fashions' ? 'border-[#B1C9F0] text-[#A7C2EE]' : ' border-[#6D7C89] text-[#A4AEB6]'}`}
					>
						Women Fashion
					</Button>

					<Button type="button" onClick={toggleFilterModal} className="flex items-center rounded-md">
						<EllipsisVerticalIcon className="size-9  text-[#A4AEB6]" />
					</Button>
				</div>

				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 mt-10">
					{filteredProducts?.map((product) => (
						<div
							key={product.id}
							className={`bg-[#F4F6F8] rounded-lg shadow-md text-center 
		
							`}
							onClick={() => handleAddToCart(product)}
						>
							<img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
							<p className="text-base font-normal py-3 text-[#85919C]">${product.price.toFixed(2)}</p>
							<hr />
							<h2 className="text-lg font-semibold py-3 text-[#85919C]">{product.name}</h2>
						</div>
					))}
				</div>
			</div>

			{isFilterModalOpen && (
				<CategorySelectModal
					setSelectedCategory={setSelectedCategory}
					toggleFilterModal={toggleFilterModal}
					handleCategorySelect={handleCategorySelect}
				/>
			)}
		</div>
	);
};

export default Products;

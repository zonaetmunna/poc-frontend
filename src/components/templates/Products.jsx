import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import { products } from '../../constant/product.constant';
import { useCart } from '../../contexts/CartContextProvider';
import CategorySelectModal from '../organishms/CategorySelectModal';

const Products = () => {
	const { addToCart } = useCart();
	const [searchTerm, setSearchTerm] = useState('');

	// State for filter modal visibility
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

	// State for selected category
	const [selectedCategory, setSelectedCategory] = useState('');

	// Handler for opening/closing filter modal
	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	// Handler for selecting a category
	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
		toggleFilterModal(); // Close modal after selecting category
	};

	// Filter products based on search term and selected category
	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === '' || product.category === selectedCategory),
	);

	return (
		<div className="border border-gray-300 rounded-md min-h-screen">
			<div className="relative bg-gray-200 w-full">
				<span className="absolute left-3 top-3 text-gray-400">
					<MagnifyingGlassIcon className="h-5 w-5" />
				</span>
				<input
					type="text"
					placeholder="Search products..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full border-none p-2 pl-10 placeholder-gray-400 rounded-md focus:outline-none"
				/>
				<span className="absolute right-1 top-3 text-gray-400 cursor-pointer">
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
				<div className="flex mb-2 gap-3">
					<button
						onClick={toggleFilterModal}
						className="flex items-center space-x-1 bg-white text-gray-300 px-3 py-2 border border-gray-300 rounded-md"
					>
						All cateogory
					</button>
					<button
						onClick={toggleFilterModal}
						className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md"
					>
						Electronics
					</button>
					<button
						onClick={toggleFilterModal}
						className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md"
					>
						Home Life style
					</button>
					<button
						onClick={toggleFilterModal}
						className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md"
					>
						Men Fashion
					</button>
					<button
						onClick={toggleFilterModal}
						className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md"
					>
						Women Fashions
					</button>
					<button
						onClick={toggleFilterModal}
						className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md"
					>
						<EllipsisVerticalIcon className="w-5 h-5" />
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-4">
					{products?.map((product) => (
						<div key={product.id} className="bg-white rounded-lg shadow-md p-6" onClick={() => addToCart(product)}>
							<img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
							<h2 className="text-lg font-semibold mb-2">{product.name}</h2>
							<p>${product.price.toFixed(2)}</p>
						</div>
					))}
				</div>
			</div>

			{isFilterModalOpen && (
				<CategorySelectModal toggleFilterModal={toggleFilterModal} handleCategorySelect={handleCategorySelect} />
			)}
		</div>
	);
};

export default Products;

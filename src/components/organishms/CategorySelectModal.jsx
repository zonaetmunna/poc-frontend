import Button from '../atoms/Button';

const CategorySelectModal = ({ handleCategorySelect, toggleFilterModal }) => {
	const prefixes = [
		'Electronics',
		'Fashion',
		'Home',
		'Beauty',
		'Grocery',
		'Furniture',
		'Clothing',
		'Books',
		'Accessories',
		'Home Decor',
		'Toys',
		'Sports',
		'Beauty',
		'Food',
		'Furniture',
		'Grocery',
		'Books',
		'Automobiles',
		'Mobiles',
		'Electronics',
		'Home Appliances',
		'Fragrances',
		'Watches',
		'Footwear',
		'Footwear',
		'Footwear',
		'Footwear',
		'Footwear',
		'Footwear',
	];

	// Generate dynamic category names
	const categories = prefixes.map((prefix, index) => {
		return { name: `${prefix} ${index + 1}` };
	});

	return (
		<div className="fixed top-0 right-0 w-full h-screen flex justify-end items-center bg-black bg-opacity-50 z-50">
			<div className="w-1/2 h-full bg-white shadow-lg p-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">Select Category</h2>
					<span className="close cursor-pointer" onClick={toggleFilterModal}>
						&times;
					</span>
				</div>
				<div>
					{categories.map((category, index) => (
						<Button
							key={index}
							className="cursor-pointer hover:bg-gray-100 p-3 rounded border border-blue-400 text-gray-400 m-2"
							onClick={() => handleCategorySelect(category)}
						>
							{category.name}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategorySelectModal;

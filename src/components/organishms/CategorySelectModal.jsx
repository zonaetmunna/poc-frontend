import Button from '../atoms/Button';

const CategorySelectModal = ({ selectedCategory, handleCategorySelect, toggleFilterModal }) => {
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
	const categories = prefixes.map((prefix) => {
		return { name: `${prefix} ` };
	});

	const handle = (category) => {
		handleCategorySelect(category);

		toggleFilterModal();
	};

	return (
		<div className="fixed top-0 right-0 w-full lg:h-screen flex justify-end items-center bg-black bg-opacity-50 z-50">
			<div className="w-4/12 h-full bg-white shadow-lg p-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">Select Category</h2>
					<span className="close cursor-pointer" onClick={toggleFilterModal}>
						&times;
					</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{categories.map((category, index) => (
						<Button
							key={index}
							className={`flex justify-center  items-center space-x-1 font-semibold text-lg bg-white  px-3 py-2 rounded-md border 
                            ${selectedCategory === category.name ? 'border-[#B1C9F0] text-[#A7C2EE]' : ' border-[#6D7C89] text-[#A4AEB6]'}`}
							onClick={() => handle(category.name)}
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

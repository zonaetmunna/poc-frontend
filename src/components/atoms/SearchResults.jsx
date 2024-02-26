/* eslint-disable prettier/prettier */
import BaseText from './BaseText';
import MText from './MText';

const SearchResults = ({
	className = '',
	sidebar,
	toggleSearch,
	searchData = [],
	searchText,
	handleSearchResult,
}) => {
	return (
		<div className={`bg-white z-50 ${className}`}>
			<div
				className={`bg-white rounded-[10px] absolute overflow-y-auto z-50 top-[100px] transition-all ease-in-out ${
					!toggleSearch && 'scale-0'
				} ${searchData?.length === 0 && 'scale-0'} ${searchText === '' && 'scale-0'} ${
					sidebar
						? 'top-[50px] w-full drop-shadow-none p-0 m-0 h-[calc(100vh-230px)]'
						: 'px-[30px] pt-[10px] drop-shadow-xl min-w-[428px] w-full max-h-[520px]'
				}`}
			>
				{searchData?.length &&
					searchData?.map(({ id, cover_image, title }) => (
						<div
							key={id}
							onClick={() => handleSearchResult(id, title)}
							className="flex gap-3 items-center py-5 border-[#E5E5D9] border-b-[1px] cursor-pointer z-20"
						>
							<img className="w-11 h-11 rounded-[4px]" src={cover_image} alt="" />
							<div>
								<BaseText className="font-semibold">{title.slice(0, 30)}</BaseText>
								<MText className="text-secondaryText">Google</MText>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default SearchResults;

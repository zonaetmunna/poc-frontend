/* eslint-disable prettier/prettier */

import { useState } from 'react';

const FilePreview = ({ imageUrl, altText = '' }) => {
	const [isLoading, setIsLoading] = useState(true);

	const handleImageLoad = () => {
		setIsLoading(false);
	};
	return (
		<div className="relative w-full ">
			{isLoading && <div className="absolute top-0 left-0 w-full h-full rounded-md bg-[#e4b2b2]" />}

			<img
				src={imageUrl}
				alt={altText}
				onLoad={handleImageLoad}
				className={`w-full h-[250px] rounded-md ${isLoading ? 'hidden' : 'block'}`}
			/>
		</div>
	);
};

export default FilePreview;

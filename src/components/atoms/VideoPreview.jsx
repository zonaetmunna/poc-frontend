import { useState } from 'react';

const VideoPreview = ({ videoUrl, altText }) => {
	const [isLoading, setIsLoading] = useState(true);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && <div className="absolute top-0 left-0 w-full bg-gray-300 rounded-md h-full " />}

			<video alt={altText} className="!w-full !h-[250px]" controls>
				<source onLoad={handleImageLoad} src={videoUrl} />
				Your browser does not support the video tag.
			</video>
		</>
	);
};

export default VideoPreview;

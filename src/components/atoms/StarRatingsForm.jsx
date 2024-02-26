/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { useState } from 'react';

const StarRatingForm = ({ height, width, className, style, currentRate = 0, setCurrentRate }) => {
	const [hoveredStar, setHoveredStar] = useState(0);

	const handleCurrentRate = (rate) => {
		setCurrentRate(rate);
	};

	const handleStarHover = (index) => {
		setHoveredStar(index);
	};

	const handleStarLeave = () => {
		setHoveredStar(0);
	};

	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			className={className}
			style={style}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseLeave={() => handleStarLeave()}
		>
			<path
				onMouseEnter={() => handleStarHover(1)}
				onClick={() => handleCurrentRate(1)}
				d="M11.0408 17.1808L4.2178 21L5.74143 13.3306L0 8.02156L7.7652 7.10061L11.0408 0L14.3163 7.10061L22.0815 8.02156L16.3401 13.3306L17.8637 21L11.0408 17.1808Z"
				fill={hoveredStar >= 1 ? '#D0B756' : currentRate >= 1 ? '#D0B756' : '#E0E0DC'}
			/>
			<path
				onMouseEnter={() => handleStarHover(2)}
				onClick={() => handleCurrentRate(2)}
				d="M38.1228 17.1808L31.2998 21L32.8235 13.3306L27.082 8.02156L34.8472 7.10061L38.1228 0L41.3984 7.10061L49.1636 8.02156L43.4221 13.3306L44.9458 21L38.1228 17.1808Z"
				fill={hoveredStar >= 2 ? '#D0B756' : currentRate >= 2 ? '#D0B756' : '#E0E0DC'}
			/>
			<path
				onMouseEnter={() => handleStarHover(3)}
				onClick={() => handleCurrentRate(3)}
				d="M65.2048 17.1808L58.3819 21L59.9055 13.3306L54.1641 8.02156L61.9293 7.10061L65.2048 0L68.4804 7.10061L76.2456 8.02156L70.5042 13.3306L72.0278 21L65.2048 17.1808Z"
				fill={hoveredStar >= 3 ? '#D0B756' : currentRate >= 3 ? '#D0B756' : '#E0E0DC'}
			/>
			<path
				onMouseEnter={() => handleStarHover(4)}
				onClick={() => handleCurrentRate(4)}
				d="M92.2869 17.1808L85.4639 21L86.9875 13.3306L81.2461 8.02156L89.0113 7.10061L92.2869 0L95.5624 7.10061L103.328 8.02156L97.5862 13.3306L99.1098 21L92.2869 17.1808Z"
				fill={hoveredStar >= 4 ? '#D0B756' : currentRate >= 4 ? '#D0B756' : '#E0E0DC'}
			/>
			<path
				onMouseEnter={() => handleStarHover(5)}
				onClick={() => handleCurrentRate(5)}
				d="M119.369 17.1808L112.546 21L114.07 13.3306L108.328 8.02156L116.093 7.10061L119.369 0L122.644 7.10061L130.41 8.02156L124.668 13.3306L126.192 21L119.369 17.1808Z"
				fill={hoveredStar >= 5 ? '#D0B756' : currentRate >= 5 ? '#D0B756' : '#E0E0DC'}
			/>
		</svg>
	);
};

StarRatingForm.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string,
	className: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	style: PropTypes.object,
};

StarRatingForm.defaultProps = {
	height: '21',
	width: '131',
	className: '',
	style: {},
};

export default StarRatingForm;

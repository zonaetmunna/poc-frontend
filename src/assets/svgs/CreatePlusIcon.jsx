const CreatePlusIcon = ({ width = '36', height = '37', className = '', style = {}, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className={className}
			style={style}
			fill="none"
			{...props}
		>
			<path
				fill="#20BF6B"
				fillRule="evenodd"
				d="M18.034.562A17.99 17.99 0 0 0 .063 18.528 18.003 18.003 0 0 0 18.034 36.5a17.99 17.99 0 0 0 17.96-17.972A17.984 17.984 0 0 0 18.034.562Zm-.024 9.778a1.632 1.632 0 0 1 1.65 1.664v4.891h4.893a1.633 1.633 0 1 1 0 3.266H19.66v4.892a1.633 1.633 0 1 1-3.266 0v-4.886h-4.897a1.64 1.64 0 0 1-.173-3.272c.057-.003.115-.003.173 0h4.885v-4.891a1.631 1.631 0 0 1 1.627-1.664Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default CreatePlusIcon;

const IsLoading = ({ className = '' }) => {
	return (
		<div className={`mx-auto text-3xl font-bold text-primary flex justify-center items-center gap-3 ${className}`}>
			<span>Loading</span> <span className="animate-bounce">.</span> <span className="bounce_down">.</span>{' '}
			<span className="animate-bounce">.</span>
		</div>
	);
};

export default IsLoading;

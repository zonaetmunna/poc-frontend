/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import { useRef, useState } from 'react';
import ClosebarIcon from '../../assets/svgs/ClosebarIcon';

const FileUpload = ({
	title = '',
	name = 'document',
	document = null,
	setDocument = null,
	setDocumentError = null,
	className = '',
}) => {
	const [dragActive, setDragActive] = useState(false);
	const inputRef = useRef(null);

	const handleFile = (file) => {
		setDocument(file);
		setDocumentError('');
	};

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			setDocument(e.dataTransfer.files[0]);
			handleFile(e.dataTransfer.files[0]);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			handleFile(e.target.files[0]);
			setDocument(e.target.files[0]);
		}
	};

	const handleFileClear = (e) => {
		e.stopPropagation();
		setDocument(null);
	};

	return (
		<div
			// className="max-w-xl relative"
			className="w-full"
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<label
				className={`flex items-center px-2 py-2 rounded-md transition bg-[#F5F5F0] border border-border_color  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none ${
					dragActive ? 'border border-gray-400 ' : 'border border-gray-300 '
				} ${className}`}
			>
				{document ? (
		
					<div className="w-full text-center flex justify-center items-center">
						<p className="font-medium text-gray-600 w-52 truncate">{document?.name}</p>
						<button type="button" className="" onClick={handleFileClear}>
							<ClosebarIcon className="h-4" color="#FF114A" />
						</button>
					</div>
				) : (
					<div className="w-full text-center text-[#7C7C7C] font-normal text-base font-Open">
						{/* <UploadIcon className="mx-auto" width={24} height={24} /> */}
						<span className="font-medium text-gray-600 ">{title}</span>
					</div>
				)}

				<input onChange={handleChange} type="file" ref={inputRef} name={name} className="hidden" />
			</label>
		</div>
	);
};

export default FileUpload;

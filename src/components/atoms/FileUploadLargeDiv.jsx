/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import { useRef, useState } from 'react';

import ClosebarIcon from '../../assets/svgs/ClosebarIcon';

const FileUploadLargeDiv = ({
	title = '',
	name = 'document',
	document = null,
	setDocument = null,
	setDocumentError = null,
	subTitle = '',
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
			className="w-full"
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<label
				className={` border-2 border-dashed border-border_color rounded-lg  py-16 cursor-pointer flex items-center px-2  transition  appearance-none hover:border-gray-400 focus:outline-none ${
					dragActive ? 'border border-gray-400 ' : 'border border-gray-300 '
				}`}
			>
				{document ? (
					<div className="w-full text-center flex justify-center items-center">
						<p className="font-medium text-gray-600 w-52 truncate">{document?.name}</p>
						<button type="button" className="" onClick={handleFileClear}>
							<ClosebarIcon className="h-4" color="#FF114A" />
						</button>
					</div>
				) : (
					<div className="w-full flex flex-col justify-center items-center text-center text-[#7C7C7C] font-normal text-base font-Open">
						<svg
							className="mb-2"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30.6654 29.3333H27.9987V2.66667H5.33203V0H29.332C30.068 0 30.6654 0.597333 30.6654 1.33333V29.3333Z"
								fill="#D0B756"
							/>
							<path
								d="M23.9987 5.3335H2.66536C1.92936 5.3335 1.33203 5.93083 1.33203 6.66683V30.6668C1.33203 31.4028 1.92936 32.0002 2.66536 32.0002H23.9987C24.7347 32.0002 25.332 31.4028 25.332 30.6668V6.66683C25.332 5.93083 24.7347 5.3335 23.9987 5.3335ZM14.6654 25.3335H6.66536V22.6668H14.6654V25.3335ZM19.9987 20.0002H6.66536V17.3335H19.9987V20.0002ZM19.9987 14.6668H6.66536V12.0002H19.9987V14.6668Z"
								fill="#D0B756"
							/>
						</svg>
						<span className="font-semibold text-shade_two font-Open text-lg">{title}</span>
						<span className="font-normal text-shade_three text-base font-Open">{subTitle}</span>
					</div>
				)}

				<input onChange={handleChange} type="file" ref={inputRef} name={name} className="hidden" />
			</label>
		</div>
	);
};

export default FileUploadLargeDiv;

// <div
//   // className="max-w-xl relative"
//   className={`w-full upload-div border-2 border-dashed border-border_color rounded-lg  lg:py-12 cursor-pointer flex items-center px-2 py-2 transition  appearance-none hover:border-gray-400 focus:outline-none ${dragActive ? 'border border-gray-400 ' : 'border border-gray-300 '}`}
//   onDragEnter={handleDrag}
//   onDragLeave={handleDrag}
//   onDragOver={handleDrag}
//   onDrop={handleDrop}
// >

//   {document ? (
//     // eslint-disable-next-line jsx-a11y/no-static-element-interactions
//     <div className="w-full text-center flex justify-center items-center">
//       <p className="font-medium text-gray-600 w-52 truncate">{document?.name}</p>
//       <button type="button" className="" onClick={handleFileClear}>
//         <ClosebarIcon className="h-4" color="#FF114A" />
//       </button>
//     </div>
//   ) : (
//     <div className="w-full flex flex-col items-center font-normal text-base font-Open">
//       <svg
//         className="mb-2"
//         width="32"
//         height="32"
//         viewBox="0 0 32 32"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M30.6654 29.3333H27.9987V2.66667H5.33203V0H29.332C30.068 0 30.6654 0.597333 30.6654 1.33333V29.3333Z"
//           fill="#D0B756"
//         />
//         <path
//           d="M23.9987 5.3335H2.66536C1.92936 5.3335 1.33203 5.93083 1.33203 6.66683V30.6668C1.33203 31.4028 1.92936 32.0002 2.66536 32.0002H23.9987C24.7347 32.0002 25.332 31.4028 25.332 30.6668V6.66683C25.332 5.93083 24.7347 5.3335 23.9987 5.3335ZM14.6654 25.3335H6.66536V22.6668H14.6654V25.3335ZM19.9987 20.0002H6.66536V17.3335H19.9987V20.0002ZM19.9987 14.6668H6.66536V12.0002H19.9987V14.6668Z"
//           fill="#D0B756"
//         />
//       </svg>
//       <span className="font-semibold text-shade_two font-Open text-lg">{title}</span>
//       <span className="font-normal text-shade_three text-base font-Open">{subTitle}</span>
//     </div>
//   )}

//   <input onChange={handleChange} type="file" ref={inputRef} name={name} className="hidden" />

// </div>

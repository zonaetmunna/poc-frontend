import newQrCodeImage from '../../assets/images/qrCodeImage.png';
import BaseText from './BaseText';
import Button from './Button';

const QrCodeModal = ({ handleQrCodeModal = {}, className = '' }) => {
	return (
		<div
			className={`modal w-full h-screen z-30 flex justify-center items-center absolute bg-[#ebeaea90] top-0 start-0 rounded-lg transition-all ${className}`}
		>
			<div className="bg-white rounded-lg p-10 md:w-[500px] w-fit">
				<BaseText className="text-center w-full pb-8 pt-3 font-medium text-text_gray">
					Get you <span className="text-blue-500 capitalize">class attendance</span> <br /> by scanning the QR code
					below...{' '}
				</BaseText>
				<img
					src={newQrCodeImage}
					className="sm:h-[300px] sm:w-[300px] h-[250px] w-[250px] object-cover block mx-auto"
					alt=""
				/>
				<div className="sm:w-[300px] w-[250px] mx-auto mt-8 flex justify-between">
					<Button className="py-3 px-5 rounded-md bg-primary text-white font-semibold">Print now</Button>
					<Button
						onClick={() => handleQrCodeModal()}
						className="py-3 px-5 rounded-md bg-red-500 text-white font-semibold capitalize"
					>
						cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default QrCodeModal;

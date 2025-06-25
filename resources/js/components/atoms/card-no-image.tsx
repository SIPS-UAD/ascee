interface CardNoImageProps {
    date?: string;
    title?: string;
    organization?: string;
    className?: string;
}

const CardNoImage: React.FC<CardNoImageProps> = ({ date = '14 JUNI 2024', title = 'Pengumuman Penerima ASCEE Grants', organization = 'ASCEE', className = '' }) => {
    return (
        <div className={`border-b border-gray-200 py-2 transition-colors hover:bg-gray-50 w-full bg-gray-200 p-2 rounded-sm ${className}`}>
            <p className=" text-xs text-gray-500">{date}</p>
            <h3 className="text-md font-bold text-black">{title}</h3>
            <p className="text-xs text-gray-600 ">{organization}</p>
        </div>
    );
};

export default CardNoImage;

const CardWithImage = ({
    type = 'EVENT',
    date = '14 JUNI 2024',
    title = 'Pengumuman Penerima ASCEE Grants',
    organization = 'ASCEE',
    imageSrc = '/images/event-placeholder.jpg',
}) => {
    return (
        <div className="group overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
            <div className="relative h-32 overflow-hidden">
                <img src={imageSrc} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className={`text-xs font-bold ${type === 'EVENT' ? 'text-red-600' : 'text-blue-600'}`}>{type}</h2>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
                <h3 className="text-md mb-1 line-clamp-2 font-bold text-black">{title}</h3>
                <p className="text-xs text-gray-500">{organization}</p>
            </div>
        </div>
    );
};

export default CardWithImage;

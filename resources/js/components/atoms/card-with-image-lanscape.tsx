import React from 'react';

interface CardWithImageProps {
    type?: 'EVENT' | 'NEWS' | 'ANNOUNCEMENT';
    date?: string;
    title: string;
    organization?: string;
    imageSrc?: string;
    useRandomImage?: boolean;
    className?: string;
}

const CardWithImageLandscape: React.FC<CardWithImageProps> = ({
    type = 'EVENT',
    date = '14 JUNI 2024',
    title = 'Pengumuman Penerima ASCEE Grants',
    organization = 'ASCEE',
    className = '',
}) => {
    return (
        <div className={`group overflow-hidden rounded-lg border border-gray-100 transition-shadow hover:shadow-md ${className} flex`}>
            <div className="relative h-32 overflow-hidden">
                <img
                    src="astronout.png"
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.src = '/images/event-placeholder.jpg';
                    }}
                />
            </div>
            <div className="p-3 sm:p-4">
                <div className="mb-1 flex items-center gap-1">
                    <h2 className={`text-xs font-bold ${type === 'EVENT' ? 'text-red-600' : 'text-blue-600'}`}>{type}</h2>
                    <div className="text-blue-500 ">|</div>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-bold text-gray-900 sm:text-base">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">{organization}</p>
            </div>
        </div>
    );
};

export default CardWithImageLandscape;

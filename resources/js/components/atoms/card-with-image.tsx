import React, { useEffect, useState } from 'react';

interface CardWithImageProps {
    type?: 'EVENT' | 'NEWS' | 'ANNOUNCEMENT';
    date?: string;
    title: string;
    organization?: string;
    imageSrc?: string;
    useRandomImage?: boolean;
    className?: string;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
    type = 'EVENT',
    date = '14 JUNI 2024',
    title = 'Pengumuman Penerima ASCEE Grants',
    organization = 'ASCEE',
    imageSrc,
    useRandomImage = false,
    className = '',
}) => {
    const [imageUrl, setImageUrl] = useState('/images/event-placeholder.jpg');

    useEffect(() => {
        // If an image is provided, use it
        if (imageSrc) {
            setImageUrl(imageSrc);
            return;
        }

        // For random image if requested
        if (useRandomImage) {
            const randomId = Math.floor(Math.random() * 1000);
            const typeKeyword = type.toLowerCase();
            setImageUrl(`https://source.unsplash.com/300x200/?${typeKeyword},ascee&${randomId}`);
        }
    }, [type, imageSrc, useRandomImage]);

    return (
        <div className={`group overflow-hidden rounded-lg border border-gray-100 transition-shadow hover:shadow-md ${className}`}>
            <div className="relative h-32 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.src = '/images/event-placeholder.jpg';
                    }}
                />
            </div>
            <div className="p-3 sm:p-4">
                <div className="mb-1 flex items-center justify-between">
                    <h2 className={`text-xs font-bold ${type === 'EVENT' ? 'text-red-600' : 'text-blue-600'}`}>{type}</h2>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-bold text-gray-900 sm:text-base">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">{organization}</p>
            </div>
        </div>
    );
};

export default CardWithImage;

import React from 'react';
import { Link } from '@inertiajs/react';

interface CardWithImageProps {
    type?: 'EVENT' | 'NEWS' | 'CAREER' | 'CONFERENCE';
    date?: string;
    title: string;
    description?: string;
    imageSrc?: string;
    useRandomImage?: boolean;
    url?: string;
    className?: string;
}

function CardWithImageLandscape({
    type,
    date,
    title,
    description,
    imageSrc,
    className,
    url,
}: CardWithImageProps) {
    // Helper function to strip HTML tags for clean text truncation
    const stripHtml = (html: string) => {
        return html.replace(/<\/?[^>]+(>|$)/g, "");
    };
    
    // Truncate description text to 50 characters
    const truncateDescription = (desc: string) => {
        const plainText = stripHtml(desc);
        if (plainText.length <= 100) {
            return plainText;
        }
        return plainText.substring(0, 100) + '...';
    };

    const isLogoImage = !imageSrc;

    const cardContent = (
        <div className={`group overflow-hidden rounded-lg border border-gray-100 transition-shadow hover:shadow-md ${className} flex cursor-pointer`}>
            <div className="relative flex-shrink-0 w-40 h-28 sm:w-48 sm:h-32 overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                    src={imageSrc ? `/storage/${imageSrc}` : '/logoascee.png'}
                    alt={title}
                    className={`${isLogoImage ? 'transform scale-80 object-contain' : 'h-auto w-auto object-cover'} transition-transform duration-500 group-hover:scale-105`}
                    onError={(e) => {
                        e.currentTarget.src = '/logoascee.png';
                        e.currentTarget.classList.add('transform', 'scale-80', 'object-contain');
                        e.currentTarget.classList.remove('object-cover');
                    }}
                />
            </div>
            <div className="p-3 sm:p-4 flex-1">
                <div className="mb-1 flex items-center gap-1">
                    <span className="text-xs font-bold text-gray-500">{date}</span>
                    <div className="text-gray-500">|</div>
                    <h2 className="text-xs font-bold text-gray-500">ASCEE</h2>
                </div>
                <h3 className="line-clamp-2 text-sm font-bold text-gray-900 sm:text-base">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">
                    {description ? truncateDescription(description) : ''}
                </p>
            </div>
        </div>
    );

    return url ? (
        <Link href={url} className="block">
            {cardContent}
        </Link>
    ) : cardContent;
}

export default CardWithImageLandscape;

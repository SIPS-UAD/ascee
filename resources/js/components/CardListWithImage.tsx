import { useSharedData } from '@/hooks/useSharedData';
import { Link } from '@inertiajs/react';
import React from 'react';
import CardWithImage from './atoms/card-with-image';
import { formatDate } from '@/lib/formatDate';

interface Item {
    id_news?: number;
    id_events?: number;
    id_conferences?: number;
    id_education?: number;
    date?: string;
    title: string;
    publisher?: string;
    image?: string;
    category?: string;
}

interface CardWithImageProps {
    type?: 'NEWS' | 'EVENTS' | 'CONFERENCES' | 'CAREERS'; // Update types to match
    date?: string;
    title: string;
    organization?: string;
    imageSrc?: string | null; // Allow null
    useRandomImage?: boolean;
    className?: string;
}

interface CardListWithImageProps {
    type?: 'NEWS' | 'EVENTS' | 'CONFERENCES' | 'CAREERS';
    useRandomImage?: boolean;
}

const CardListWithImage: React.FC<CardListWithImageProps> = ({ type = 'NEWS', useRandomImage = false }) => {
    const { news, events, conferences, careers } = useSharedData();

    let items: Item[] = [];
    let category = '';

    switch (type) {
        case 'NEWS':
            items = news || [];
            category = 'news';
            break;
        case 'EVENTS':
            items = events || [];
            category = 'events';
            break;
        case 'CONFERENCES':
            items = conferences || [];
            category = 'conferences';
            break;
        case 'CAREERS':
            items = careers || [];
            category = 'careers';
            break;
    }

    return (
        <>
            {items.slice(0, 4).map((item, index) => (
                <Link
                    key={`${category}-${item.id_news || item.id_events || item.id_conferences || item.id_education || index}`}
                    href={`/${category}/${item.id_news || item.id_events || item.id_conferences || item.id_education}`}
                >
                    <CardWithImage
                        type={type}
                        date={item.date ? formatDate(item.date) : ''}
                        title={item.title}
                        organization={item.publisher || 'ASCEE'}
                        imageSrc={item.image ? `/storage/${item.image}` : undefined} // Change null to undefined
                        useRandomImage={!item.image && useRandomImage}
                    />
                </Link>
            ))}
        </>
    );
};

export default CardListWithImage;

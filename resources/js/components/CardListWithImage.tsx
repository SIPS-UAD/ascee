import { useSharedData } from '@/hooks/useSharedData';
import { Link } from '@inertiajs/react';
import React from 'react';
import CardWithImage from './atoms/card-with-image';

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
    type?: 'NEWS' | 'EVENTS' | 'CONFERENCES' | 'CAREERS';
    date?: string;
    title: string;
    organization?: string;
    imageSrc?: string | null;
    useRandomImage?: boolean;
    className?: string;
}

interface CardListWithImageProps {
    type?: 'NEWS' | 'EVENTS' | 'CONFERENCES' | 'CAREERS';
    useRandomImage?: boolean;
    limit?: number;
}

const CardListWithImage: React.FC<CardListWithImageProps> = ({ 
    type = 'NEWS', 
    useRandomImage = false,
    limit = 4
}) => {
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

    // Get correct ID based on category
    const getItemId = (item: Item) => {
        switch (category) {
            case 'news':
                return item.id_news;
            case 'events':
                return item.id_events;
            case 'conferences':
                return item.id_conferences;
            case 'careers':
                return item.id_education;
            default:
                return item.id_news || item.id_events || item.id_conferences || item.id_education;
        }
    };

    return (
        <>
            {items.slice(0, limit).map((item, index) => {
                const itemId = getItemId(item);
                const detailUrl = itemId ? `/${category}/${itemId}` : '#';
                
                return (
                    <Link
                        key={`${category}-${itemId || index}`}
                        href={detailUrl}
                        className="block"
                    >
                        <CardWithImage
                            type={type}
                            date={item.date }
                            title={item.title}
                            organization={item.publisher || 'ASCEE'}
                            imageSrc={item.image ? `/storage/${item.image}` : undefined}
                            useRandomImage={!item.image && useRandomImage}
                        />
                    </Link>
                );
            })}
        </>
    );
};

export default CardListWithImage;

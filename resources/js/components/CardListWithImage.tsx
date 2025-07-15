import { useSharedData } from '@/hooks/useSharedData';
import { Link } from '@inertiajs/react';
import React from 'react';
import CardWithImage from './atoms/card-with-image';
import { formatDate } from '@/lib/formatDate';

interface CardListWithImageProps {
    type?: 'NEWS' | 'EVENTS' | 'CONFERENCES' | 'CAREERS';
    useRandomImage?: boolean;
}

const CardListWithImage: React.FC<CardListWithImageProps> = ({ type = 'NEWS', useRandomImage = false }) => {
    const { news, events, conferences, careers } = useSharedData();

    let items = [];
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
                        imageSrc={item.image ? `/storage/${item.image}` : null}
                        useRandomImage={!item.image && useRandomImage}
                    />
                </Link>
            ))}
        </>
    );
};

export default CardListWithImage;

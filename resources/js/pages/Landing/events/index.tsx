import React from 'react';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';
import { formatDate } from '@/lib/formatDate';

interface EventItem {
    id_events: number;
    title: string;
    date?: string;
    organization?: string;
    image?: string;
    imageSrc?: string;
    type?: 'EVENT';
}

interface EventsPageProps {
    events: {
        data: EventItem[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
    const items = events.data.map(item => ({
        ...item,
        type: 'EVENT' as const,
        date: item.date ? formatDate(item.date) : formatDate(new Date().toISOString()),
        imageSrc: item.image // Convert 'image' field to 'imageSrc' for frontend components
    }));

    return (
        <PageMainLayout
            nameTag="EVENTS"
            items={items}
            pagination={{
                current_page: events.current_page,
                last_page: events.last_page,
                per_page: events.per_page,
                total: events.total
            }}
            baseUrl="/events"
            itemType="events"
        />
    );
};

export default EventsPage;

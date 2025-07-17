import React from 'react';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';

interface EventItem {
    id_events: number;
    title: string;
    date?: string;
    organization?: string;
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
        date: item.date || new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }));

    return (
        <PageMainLayout
            nameTag="Events"
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

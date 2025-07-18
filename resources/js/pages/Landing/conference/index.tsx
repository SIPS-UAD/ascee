import React from 'react';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';
import { formatDate } from '@/lib/formatDate';

interface ConferenceItem {
    id_conferences: number;
    title: string;
    date?: string;
    organization?: string;
    imageSrc?: string;
    type?: 'EVENT';
}

interface ConferencesPageProps {
    conferences: {
        data: ConferenceItem[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const ConferencesPage: React.FC<ConferencesPageProps> = ({ conferences }) => {
    const items = conferences.data.map(item => ({
        ...item,
        type: 'EVENT' as const,
        date: item.date ? formatDate(item.date) : formatDate(new Date().toISOString())
    }));

    return (
        <PageMainLayout
            nameTag="CONFERENCES"
            items={items}
            pagination={{
                current_page: conferences.current_page,
                last_page: conferences.last_page,
                per_page: conferences.per_page,
                total: conferences.total
            }}
            baseUrl="/conferences"
            itemType="conferences"
        />
    );
};

export default ConferencesPage;

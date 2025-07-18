import React from 'react';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';
import { formatDate } from '@/lib/formatDate';

interface CareerItem {
    id_education: number;
    title: string;
    date?: string;
    organization?: string;
    imageSrc?: string;
    type?: 'ANNOUNCEMENT';
}

interface CareersPageProps {
    careers: {
        data: CareerItem[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const CareersPage: React.FC<CareersPageProps> = ({ careers }) => {
    const items = careers.data.map(item => ({
        ...item,
        type: 'CAREER' as const,
        date: item.date ? formatDate(item.date) : formatDate(new Date().toISOString())
    }));
    

    return (
        <PageMainLayout
            nameTag="CAREERS"
            items={items}
            pagination={{
                current_page: careers.current_page,
                last_page: careers.last_page,
                per_page: careers.per_page,
                total: careers.total
            }}
            baseUrl="/careers"
            itemType="careers"
        />
    );
};

export default CareersPage;

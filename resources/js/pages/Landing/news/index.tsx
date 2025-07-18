import React from 'react';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';
import { formatDate } from '@/lib/formatDate';

interface NewsItem {
    id_news: number;
    title: string;
    date?: string;
    organization?: string;
    imageSrc?: string;
    type?: 'NEWS';
}

interface NewsPageProps {
    news: {
        data: NewsItem[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const NewsPage: React.FC<NewsPageProps> = ({ news }) => {
    const items = news.data.map(item => ({
        ...item,
        type: 'NEWS' as const,
        date: item.date ? formatDate(item.date) : formatDate(new Date().toISOString())
    }));

    return (
        <PageMainLayout
            nameTag="NEWS"
            items={items}
            pagination={{
                current_page: news.current_page,
                last_page: news.last_page,
                per_page: news.per_page,
                total: news.total
            }}
            baseUrl="/news"
            itemType="news"
        />
    );
};

export default NewsPage;

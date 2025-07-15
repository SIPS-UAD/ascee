import DetailLayout from '@/layouts/layout-pages/detail-layout';
import { formatDate } from '@/lib/formatDate';
import { Head } from '@inertiajs/react';

interface NewsDetail {
    id_news: number;
    title: string;
    publisher: string;
    description: string;
    image?: string;
    updated_at: string;
}

interface NewsDetailsProps {
    news: NewsDetail;
    relatedNews: Array<{
        id_news: number;
        title: string;
        publisher: string;
        updated_at: string;
    }>;
}

export default function NewsDetails({ news, relatedNews }: NewsDetailsProps) {
    return (
        <>
            <Head title={news.title} />
            <DetailLayout
                contentType="news"
                title={news.title}
                date={formatDate(news.updated_at)}
                publisher={news.publisher}
                image={news.image ? `/storage/${news.image}` : undefined}
                content={news.description}
                relatedItems={relatedNews.map((item) => ({
                    id: item.id_news,
                    date: formatDate(item.updated_at),
                    title: item.title,
                    publisher: item.publisher,
                }))}
            />
        </>
    );
}

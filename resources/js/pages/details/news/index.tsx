import { Head } from '@inertiajs/react';
import DetailLayout from '@/layouts/layout-pages/detail-layout';

interface NewsDetail {
  id_news: number;
  title: string;
  date: string;
  publisher: string;
  description: string;
  image?: string;
  created_at: string;
}

interface NewsDetailsProps {
  news: NewsDetail;
  relatedNews: Array<{
    id_news: number;
    title: string;
    date: string;
    publisher: string;
  }>;
}

export default function NewsDetails({ news, relatedNews }: NewsDetailsProps) {
  return (
    <>
      <Head title={news.title} />
      <DetailLayout
        contentType="news"
        title={news.title}
        date={news.date}
        publisher={news.publisher}
        image={news.image ? `/storage/${news.image}` : undefined}
        content={news.description}
        relatedItems={relatedNews.map(item => ({
          id: item.id_news,
          date: item.date,
          title: item.title,
          publisher: item.publisher
        }))}
      />
    </>
  );
}
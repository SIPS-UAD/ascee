import { Head } from '@inertiajs/react';
import DetailLayout from '@/layouts/layout-pages/detail-layout';
import { formatDate } from '@/lib/formatDate';

interface CareerDetail {
  id_education: number;
  title: string;
  date: string;
  publisher: string;
  description: string;
  image?: string;
  created_at: string;
  admin: {
    id_admin: number;
    username: string;
    email: string;
  };
}

interface CareerDetailsProps {
  career: CareerDetail;
  relatedCareers: Array<{
    id_education: number;
    title: string;
    date: string;
    publisher: string;
  }>;
}

export default function CareerDetails({ career, relatedCareers }: CareerDetailsProps) {
  return (
    <>
      <Head title={career.title} />
      <DetailLayout
        contentType="careers"
        title={career.title}
        date={formatDate(career.date)}
        publisher={career.publisher}
        image={career.image ? `/storage/${career.image}` : undefined}
        content={career.description}
        relatedItems={relatedCareers.map(item => ({
          id: item.id_education,
          date: formatDate(item.date),
          title: item.title,
          publisher: item.publisher
        }))}
      />
    </>
  );
}
import { Head } from '@inertiajs/react';
import DetailLayout from '@/layouts/layout-pages/detail-layout';
import { formatDate } from '@/lib/formatDate';

interface ConferenceDetail {
  id_conferences: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  created_at: string;
  admin: {
    id_admin: number;
    username: string;
    email: string;
  };
}

interface ConferenceDetailsProps {
  conference: ConferenceDetail;
  relatedConferences: Array<{
    id_conferences: number;
    title: string;
    date: string;
  }>;
}

export default function ConferenceDetails({ conference, relatedConferences }: ConferenceDetailsProps) {
  return (
    <>
      <Head title={conference.title} />
      <DetailLayout
        contentType="conferences"
        title={conference.title}
        date={formatDate(conference.date)}
        publisher={conference.admin.username}
        image={conference.image ? `/storage/${conference.image}` : undefined}
        content={conference.description}
        relatedItems={relatedConferences.map(item => ({
          id: item.id_conferences,
          date: formatDate(item.date),
          title: item.title
        }))}
      />
    </>
  );
}
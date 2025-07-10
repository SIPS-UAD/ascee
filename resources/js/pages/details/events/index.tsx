import { Head } from '@inertiajs/react';
import DetailLayout from '@/layouts/layout-pages/detail-layout';
import { formatDate } from '@/lib/formatDate';

interface EventDetail {
  id_events: number;
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

interface EventDetailsProps {
  event: EventDetail;
  relatedEvents: Array<{
    id_events: number;
    title: string;
    date: string;
  }>;
}

export default function EventDetails({ event, relatedEvents }: EventDetailsProps) {
  return (
    <>
      <Head title={event.title} />
      <DetailLayout
        contentType="events"
        title={event.title}
        date={formatDate(event.date)}
        publisher={event.admin.username}
        image={event.image ? `/storage/${event.image}` : undefined}
        content={event.description}
        relatedItems={relatedEvents.map(item => ({
          id: item.id_events,
          date: formatDate(item.date),
          title: item.title
        }))}
      />
    </>
  );
}
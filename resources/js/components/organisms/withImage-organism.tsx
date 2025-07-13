import { useSharedData } from '@/hooks/useSharedData';
import { formatDate } from '@/lib/formatDate';
import { Link } from '@inertiajs/react';
import CardWithImage from '../atoms/card-with-image';

const WithImageOrganism = () => {
    const { events } = useSharedData();

    // Use events from shared data or fallback to default data if empty
    const displayEvents = events.length > 0 ? events.slice(0, 8) : [];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {displayEvents.map((event, index) => (
                <Link
                    key={`event-${event.id_events || index}`}
                    href={event.id_events ? `/events/${event.id_events}` : '#'}
                    onClick={(e) => !event.id_events && e.preventDefault()}
                    className="flex-shrink-0"
                >
                    <CardWithImage
                        type="EVENT"
                        date={event.date ? formatDate(event.date) : ''}
                        title={event.title || 'Event Title'}
                        organization={event.publisher || 'ASCEE'}
                        imageSrc={event.image ? `/storage/${event.image}` : undefined}
                        useRandomImage={!event.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default WithImageOrganism;

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useSharedData } from '@/hooks/useSharedData';
import { formatDate } from '@/lib/formatDate';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

type ContentItem = {
    id: number;
    title: string;
    date?: string;
    type: 'NEWS' | 'EVENTS' | 'CONFERENCES' | 'CAREERS';
    image?: string;
    publisher?: string;
    path: string;
};

const CardMain = () => {
    const { news, events, conferences, careers } = useSharedData();
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    const getLatestItems = (): ContentItem[] => {
        const items: ContentItem[] = [];

        if (news && news.length > 0) {
            const latestNews = news[0];
            items.push({
                id: latestNews.id_news,
                title: latestNews.title,
                date: latestNews.date,
                type: 'NEWS',
                image: latestNews.image ? `/storage/${latestNews.image}` : 'astronout.png',
                publisher: latestNews.publisher || 'ASCEE',
                path: `/news/${latestNews.id_news}`,
            });
        }

        if (events && events.length > 0) {
            const latestEvent = events[0];
            items.push({
                id: latestEvent.id_events,
                title: latestEvent.title,
                date: latestEvent.date,
                type: 'EVENTS',
                image: latestEvent.image ? `/storage/${latestEvent.image}` : 'astronout.png',
                publisher: latestEvent.admin?.username || 'ASCEE',
                path: `/events/${latestEvent.id_events}`,
            });
        }

        if (conferences && conferences.length > 0) {
            const latestConf = conferences[0];
            items.push({
                id: latestConf.id_conferences,
                title: latestConf.title,
                date: latestConf.date,
                type: 'CONFERENCES',
                image: latestConf.image ? `/storage/${latestConf.image}` : 'astronout.png',
                publisher: latestConf.admin?.username || 'ASCEE',
                path: `/conferences/${latestConf.id_conferences}`,
            });
        }

        if (careers && careers.length > 0) {
            const latestCareer = careers[0];
            items.push({
                id: latestCareer.id_education,
                title: latestCareer.title,
                date: latestCareer.date,
                type: 'CAREERS',
                image: latestCareer.image ? `/storage/${latestCareer.image}` : 'astronout.png',
                publisher: latestCareer.publisher || 'ASCEE',
                path: `/careers/${latestCareer.id_education}`,
            });
        }

        return items;
    };

    const getTypeColor = (type: string): string => {
        switch (type) {
            case 'NEWS':
                return 'bg-blue-600';
            case 'EVENTS':
                return 'bg-green-600';
            case 'CONFERENCES':
                return 'bg-red-600';
            case 'CAREERS':
                return 'bg-orange-600';
            default:
                return 'bg-gray-600';
        }
    };

    const items = getLatestItems();

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                align: 'start',
                loop: true,
            }}
        >
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem key={`${item.type}-${item.id}`}>
                        <Link href={item.path}>
                            <div className="group relative h-80 w-full overflow-hidden rounded-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <div className="mb-4 flex items-center gap-4">
                                            <span className={`rounded-md ${getTypeColor(item.type)} px-3 py-1 text-xs font-bold`}>{item.type}</span>
                                            {item.date && <span className="text-sm font-medium">{formatDate(item.date)}</span>}
                                        </div>
                                        <h1 className="mb-2 text-3xl font-bold">{item.title}</h1>
                                        <h2 className="text-sm font-medium text-gray-300">{item.publisher}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default CardMain;

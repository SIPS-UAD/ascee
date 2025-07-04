import FooterLayout from '@/layouts/layout-pages/footer-layout';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import HomepageMainLayout from '@/layouts/layout-pages/homepage-main-layout';
import { Conference, Event, Journal, News } from '@/types';
import { Head } from '@inertiajs/react';

interface DataProps {
    sharedNews: News[];
    sharedEvents: Event[];
    sharedConferences: Conference[];
    sharedJournals: Journal[];
}

export default function Index({ sharedNews, sharedEvents, sharedConferences, sharedJournals }: DataProps) {
    console.log('News data:', sharedNews);
    console.log('Events data:', sharedEvents);
    console.log('Conferences data:', sharedConferences);
    console.log('Journals data:', sharedJournals);

    return (
        <>
            <Head title="ASCEE" />
            <HeaderLayout />
            <HomepageMainLayout news={sharedNews} events={sharedEvents} conferences={sharedConferences} journals={sharedJournals} />
            <FooterLayout />
        </>
    );
}

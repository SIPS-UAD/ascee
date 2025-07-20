import { usePage } from '@inertiajs/react';
import { News, Journal, Event, Conference, Career, Partners } from '@/types';

interface SharedData {
    sharedNews: News[];
    sharedEvents: Event[];
    sharedConferences: Conference[];
    sharedJournals: Journal[];
    sharedCareers: Career[];
    sharedPartners: Partners[];
    [key: string]: unknown;
}

export function useSharedData() {
    const { props } = usePage<SharedData>();
    
    return {
        news: props.sharedNews || [],
        events: props.sharedEvents || [],
        conferences: props.sharedConferences || [],
        journals: props.sharedJournals || [],
        careers: props.sharedCareers || [],
        partners: props.sharedPartners || [],
    };
}
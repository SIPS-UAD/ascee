import { usePage } from '@inertiajs/react';
import { News, Journal, Event, Conference, Career } from '@/types';

interface SharedData {
    sharedNews: News[];
    sharedEvents: Event[];
    sharedConferences: Conference[];
    sharedJournals: Journal[];
    sharedCareers: Career[];
    [key: string]: unknown;
}

export function useSharedData() {
    const { props } = usePage<SharedData>();
    
    return {
        news: props.sharedNews || [],
        events: props.sharedEvents || [],
        conferences: props.sharedConferences || [],
        journals: props.sharedJournals || [],
        careers: props.sharedCareers || [], // Ensure careers is included     
    };
}
import { usePage } from '@inertiajs/react';
import { News, Journal, Event, Conference } from '@/types';

interface SharedData {
    sharedNews: News[];
    sharedEvents: Event[];
    sharedConferences: Conference[];
    sharedJournals: Journal[];
    [key: string]: unknown; 
}

export function useSharedData() {
    const { props } = usePage<SharedData>();
    
    return {
        news: props.sharedNews || [],
        events: props.sharedEvents || [],
        conferences: props.sharedConferences || [],
        journals: props.sharedJournals || [],     
    };
}
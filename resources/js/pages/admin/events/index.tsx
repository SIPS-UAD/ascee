import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, Calendar, User, MapPin } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface Admin {    id_admin: number;
    email: string;
    username: string;
}

interface Event {
    id_events: number;
    title: string;
    date: string;
    description: string;
    image?: string;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface EventsIndexProps {
    events: {
        data: Event[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        prev_page_url?: string;
        next_page_url?: string;
    };
    success?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Events Management', href: '/events' },
];

export default function EventsIndex({ events, success }: EventsIndexProps) {
    const handleDelete = (event: Event) => {
        if (confirm(`Are you sure you want to delete "${event.title}"?`)) {
            router.delete(`/events/${event.id_events}`);
        }
    };

    const getEventStatus = (eventDate: string) => {
        const today = new Date();
        const eventDay = new Date(eventDate);
        
        if (eventDay < today) return { status: 'past', variant: 'secondary' as const };
        if (eventDay.toDateString() === today.toDateString()) return { status: 'today', variant: 'default' as const };
        return { status: 'upcoming', variant: 'outline' as const };
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Events Management" />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Events Management</h1>
                        <p className="text-muted-foreground">
                            Manage events, conferences, and activities
                        </p>
                    </div>
                    <Link href="/events/create">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Event
                        </Button>
                    </Link>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                        <div className="text-sm text-green-700 dark:text-green-400">{success}</div>
                    </div>
                )}

                {/* Stats */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{events.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">
                                {events.data.filter(event => new Date(event.date) > new Date()).length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Today</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">
                                {events.data.filter(event => 
                                    new Date(event.date).toDateString() === new Date().toDateString()
                                ).length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">With Images</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-600">
                                {events.data.filter(event => event.image).length}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Events Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {events.data.length > 0 ? (
                        events.data.map((event) => {
                            const status = getEventStatus(event.date);
                            return (
                                <Card key={event.id_events} className="overflow-hidden">
                                    {event.image && (
                                        <div className="aspect-video relative overflow-hidden">
                                            <img 
                                                src={`/storage/${event.image}`} 
                                                alt={event.title}
                                                className="object-cover w-full h-full"
                                            />
                                            <Badge 
                                                variant={status.variant} 
                                                className="absolute top-2 right-2 capitalize"
                                            >
                                                {status.status}
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                                            {!event.image && (
                                                <Badge variant={status.variant} className="capitalize shrink-0">
                                                    {status.status}
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {new Date(event.date).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                {event.admin.username}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {event.description}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Link href={`/events/${event.id_events}`}>
                                                <Button variant="ghost" size="sm">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Link href={`/events/${event.id_events}/edit`}>
                                                <Button variant="ghost" size="sm">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleDelete(event)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No events found</h3>
                            <p className="text-gray-500 mb-4">Get started by creating your first event.</p>
                            <Link href="/events/create">
                                <Button>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create Event
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {events.last_page > 1 && (
                    <Card>
                        <CardContent className="flex items-center justify-between pt-6">
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                Showing {((events.current_page - 1) * events.per_page) + 1} to{' '}
                                {Math.min(events.current_page * events.per_page, events.total)} of{' '}
                                {events.total} results
                            </div>
                            <div className="flex gap-2">
                                {events.prev_page_url && (
                                    <Link href={events.prev_page_url}>
                                        <Button variant="outline" size="sm">Previous</Button>
                                    </Link>
                                )}
                                <span className="flex items-center px-4 py-2 text-sm">
                                    Page {events.current_page} of {events.last_page}
                                </span>
                                {events.next_page_url && (
                                    <Link href={events.next_page_url}>
                                        <Button variant="outline" size="sm">Next</Button>
                                    </Link>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
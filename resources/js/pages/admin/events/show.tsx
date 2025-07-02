import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, Calendar, User } from 'lucide-react';

interface Admin {
    id_admin: number;
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

interface EventsShowProps {
    event: Event;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Events Management', href: '/admin/events' },
    { title: 'Event Details', href: '#' },
];

export default function EventsShow({ event }: EventsShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${event.title}"?`)) {
            router.delete(`/admin/events/${event.id_events}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Event: ${event.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/events">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Events
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Event Details</h1>
                            <p className="text-muted-foreground">View event information and activity</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admin/events/${event.id_events}/edit`}>
                            <Button variant="outline">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="destructive" onClick={handleDelete}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Event Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Event Information
                                <Badge variant="outline">#{event.id_events}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this event</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Title</Label>
                                <div className="rounded bg-muted p-2 text-sm">{event.title}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Description</Label>
                                <div className="rounded bg-muted p-2 text-sm whitespace-pre-wrap">{event.description}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Event Date</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(event.date).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Assigned Admin</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {event.admin.username}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Event Image</CardTitle>
                            <CardDescription>Featured image for the event</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {event.image ? (
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={`/storage/${event.image}`}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                                    <p className="text-sm text-muted-foreground">No image available</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Event Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Event Activity</CardTitle>
                        <CardDescription>Creation and modification dates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label className="text-sm font-medium">Created Date</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(event.created_at).toLocaleString()}</div>
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-sm font-medium">Last Updated</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(event.updated_at).toLocaleString()}</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

// Helper component for label
function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`text-sm font-medium ${className}`}>{children}</div>;
}
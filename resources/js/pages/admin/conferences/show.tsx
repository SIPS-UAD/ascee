import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, Edit, Trash2, User } from 'lucide-react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface Conference {
    id_conferences: number;
    title: string;
    date: string;
    description: string;
    image?: string;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface ConferenceShowProps {
    conference: Conference;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Conferences Management', href: '/admin/conferences' },
    { title: 'Conference Details', href: '#' },
];

export default function ConferenceShow({ conference }: ConferenceShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${conference.title}"?`)) {
            router.delete(`/admin/conferences/${conference.id_conferences}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Conference: ${conference.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/conferences">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Conferences
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Conference Details</h1>
                            <p className="text-muted-foreground">View conference information</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admin/conferences/${conference.id_conferences}/edit`}>
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

                {/* Conference Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Conference Information
                                <Badge variant="outline">#{conference.id_conferences}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this conference</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Title</Label>
                                <div className="rounded bg-muted p-2 text-sm">{conference.title}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Description</Label>
                                <div className="rounded bg-muted p-2 text-sm whitespace-pre-wrap">{conference.description}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Conference Date</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(conference.date).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Assigned Admin</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {conference.admin.username}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Conference Image</CardTitle>
                            <CardDescription>Featured image for the conference</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {conference.image ? (
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={`/storage/${conference.image}`}
                                        alt={conference.title}
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
            </div>
        </AppLayout>
    );
}

// Helper component for label
function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`text-sm font-medium ${className}`}>{children}</div>;
}
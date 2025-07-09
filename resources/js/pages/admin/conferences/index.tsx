import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, Calendar, User, Video } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

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

interface ConferencesIndexProps {
    conferences: {
        data: Conference[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        prev_page_url?: string;
        next_page_url?: string;
    };
    stats: {
        total: number;
        thisMonth: number;
        withImages: number;
        admins: number;
    };
    success?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Conferences Management', href: '/admin/conferences' },
];

export default function ConferencesIndex({ conferences, stats, success }: ConferencesIndexProps) {
    const handleDelete = (conference: Conference) => {
        if (confirm(`Are you sure you want to delete "${conference.title}"?`)) {
            router.delete(`/admin/conferences/${conference.id_conferences}`);
        }
    };

    const getConferenceStatus = (conferenceDate: string) => {
        const today = new Date();
        const conferenceDay = new Date(conferenceDate);
        
        if (conferenceDay < today) return { status: 'past', variant: 'secondary' as const };
        if (conferenceDay.toDateString() === today.toDateString()) return { status: 'today', variant: 'default' as const };
        return { status: 'upcoming', variant: 'outline' as const };
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Conferences Management" />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Conferences Management</h1>
                        <p className="text-muted-foreground">
                            Manage online and offline conferences
                        </p>
                    </div>
                    <Link href="/admin/conferences/create">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Conference
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
                            <CardTitle className="text-sm font-medium">Total Conferences</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">This Month</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.thisMonth}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">With Images</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-600">{stats.withImages}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Admins</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{stats.admins}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Conferences Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {conferences.data.length > 0 ? (
                        conferences.data.map((conference) => {
                            const status = getConferenceStatus(conference.date);
                            return (
                                <Card key={conference.id_conferences} className="overflow-hidden">
                                    {conference.image && (
                                        <div className="aspect-video relative overflow-hidden">
                                            <img 
                                                src={`/storage/${conference.image}`} 
                                                alt={conference.title}
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
                                            <CardTitle className="text-lg leading-tight">{conference.title}</CardTitle>
                                            {!conference.image && (
                                                <Badge variant={status.variant} className="capitalize shrink-0">
                                                    {status.status}
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {new Date(conference.date).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                {conference.admin.username}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {conference.description}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Link href={`/admin/conferences/${conference.id_conferences}`}>
                                                <Button variant="ghost" size="sm">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Link href={`/admin/conferences/${conference.id_conferences}/edit`}>
                                                <Button variant="ghost" size="sm">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleDelete(conference)}
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
                            <Video className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No conferences found</h3>
                            <p className="text-gray-500 mb-4">Get started by creating your first conference.</p>
                            <Link href="/admin/conferences/create">
                                <Button>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create Conference
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {conferences.last_page > 1 && (
                    <Card>
                        <CardContent className="flex items-center justify-between pt-6">
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                Showing {((conferences.current_page - 1) * conferences.per_page) + 1} to{' '}
                                {Math.min(conferences.current_page * conferences.per_page, conferences.total)} of{' '}
                                {conferences.total} results
                            </div>
                            <div className="flex gap-2">
                                {conferences.prev_page_url && (
                                    <Link href={conferences.prev_page_url}>
                                        <Button variant="outline" size="sm">Previous</Button>
                                    </Link>
                                )}
                                <span className="flex items-center px-4 py-2 text-sm">
                                    Page {conferences.current_page} of {conferences.last_page}
                                </span>
                                {conferences.next_page_url && (
                                    <Link href={conferences.next_page_url}>
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
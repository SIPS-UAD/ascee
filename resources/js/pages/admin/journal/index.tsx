import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, User, BookOpen } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface Journal {
    id_journal: number;
    title: string;
    image?: string;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface JournalsIndexProps {
    journals: {
        data: Journal[];
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
    { title: 'Journal Management', href: '/journal' },
];

export default function JournalsIndex({ journals, success }: JournalsIndexProps) {
    const handleDelete = (journal: Journal) => {
        if (confirm(`Are you sure you want to delete "${journal.title}"?`)) {
            router.delete(`/journal/${journal.id_journal}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Journal Management" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Journal Management</h1>
                        <p className="text-muted-foreground">
                            Manage journal entries and publications
                        </p>
                    </div>
                    <Link href="/journal/create">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Journal
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
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Journals</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{journals.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">With Images</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-600">
                                {journals.data.filter(journal => journal.image).length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Admins</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">
                                {new Set(journals.data.map(journal => journal.admin.username)).size}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Journals Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {journals.data.length > 0 ? (
                        journals.data.map((journal) => (
                            <Card key={journal.id_journal} className="overflow-hidden">
                                {journal.image && (
                                    <div className="aspect-video relative overflow-hidden">
                                        <img 
                                            src={`/storage/${journal.image}`} 
                                            alt={journal.title}
                                            className="object-cover w-full h-full"
                                        />
                                        <Badge 
                                            variant="default" 
                                            className="absolute top-2 right-2 capitalize"
                                        >
                                            With Image
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <CardTitle className="text-lg leading-tight">{journal.title}</CardTitle>
                                        {!journal.image && (
                                            <Badge variant="secondary" className="capitalize shrink-0">
                                                No Image
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <User className="h-3 w-3" />
                                            {journal.admin.username}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex items-center gap-2">
                                        <Link href={`/journal/${journal.id_journal}`}>
                                            <Button variant="ghost" size="sm">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href={`/journal/${journal.id_journal}/edit`}>
                                            <Button variant="ghost" size="sm">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleDelete(journal)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No journals found</h3>
                            <p className="text-gray-500 mb-4">Get started by creating your first journal entry.</p>
                            <Link href="/journal/create">
                                <Button>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create Journal
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {journals.last_page > 1 && (
                    <Card>
                        <CardContent className="flex items-center justify-between pt-6">
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                Showing {((journals.current_page - 1) * journals.per_page) + 1} to{' '}
                                {Math.min(journals.current_page * journals.per_page, journals.total)} of{' '}
                                {journals.total} results
                            </div>
                            <div className="flex gap-2">
                                {journals.prev_page_url && (
                                    <Link href={journals.prev_page_url}>
                                        <Button variant="outline" size="sm">Previous</Button>
                                    </Link>
                                )}
                                <span className="flex items-center px-4 py-2 text-sm">
                                    Page {journals.current_page} of {journals.last_page}
                                </span>
                                {journals.next_page_url && (
                                    <Link href={journals.next_page_url}>
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
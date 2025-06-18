import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, User } from 'lucide-react';

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

interface JournalShowProps {
    journal: Journal;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Journal Management', href: '/journal' },
    { title: 'Journal Details', href: '#' },
];

export default function JournalShow({ journal }: JournalShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${journal.title}"?`)) {
            router.delete(`/journal/${journal.id_journal}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Journal: ${journal.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/journal">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Journal
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Journal Details</h1>
                            <p className="text-muted-foreground">View journal information and activity</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/journal/${journal.id_journal}/edit`}>
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

                {/* Journal Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Journal Information
                                <Badge variant="outline">#{journal.id_journal}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this journal</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Title</Label>
                                <div className="rounded bg-muted p-2 text-sm">{journal.title}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Assigned Admin</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {journal.admin.username}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Journal Image</CardTitle>
                            <CardDescription>Featured image for the journal</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {journal.image ? (
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={`/storage/${journal.image}`}
                                        alt={journal.title}
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

                {/* Journal Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Journal Activity</CardTitle>
                        <CardDescription>Creation and modification dates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label className="text-sm font-medium">Created Date</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(journal.created_at).toLocaleString()}</div>
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-sm font-medium">Last Updated</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(journal.updated_at).toLocaleString()}</div>
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
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

interface NewsItem {
    id_news: number;
    title: string;
    date: string;
    publisher: string;
    description: string;
    image?: string;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface NewsShowProps {
    news: NewsItem;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'News Management', href: '/admin/news' },
    { title: 'News Details', href: '#' },
];

export default function NewsShow({ news }: NewsShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${news.title}"?`)) {
            router.delete(`/admin/news/${news.id_news}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`News: ${news.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/news">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to News
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">News Details</h1>
                            <p className="text-muted-foreground">View news article information and activity</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admin/news/${news.id_news}/edit`}>
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

                {/* News Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                News Information
                                <Badge variant="outline">#{news.id_news}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this news article</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Title</Label>
                                <div className="rounded bg-muted p-2 text-sm">{news.title}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Publisher</Label>
                                <div className="flex items-center gap-2 rounded bg-muted p-2 text-sm">
                                    <User className="h-4 w-4" />
                                    {news.publisher}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Last Updated</Label>
                                <div className="flex items-center gap-2 rounded bg-muted p-2 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(news.updated_at).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Description</Label>
                                <div className="rounded bg-muted p-2 text-sm whitespace-pre-wrap">{news.description}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Assigned Admin</Label>
                                <div className="flex items-center gap-2 rounded bg-muted p-2 text-sm">
                                    <User className="h-4 w-4" />
                                    {news.admin.username}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>News Image</CardTitle>
                            <CardDescription>Featured image for the news article</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {news.image ? (
                                <div>
                                    <img src={`/storage/${news.image}`} alt={news.title} className="h-auto w-full rounded-lg" />
                                </div>
                            ) : (
                                <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                                    <p className="text-sm text-muted-foreground">No image available</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* News Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>News Activity</CardTitle>
                        <CardDescription>Creation and modification dates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label className="text-sm font-medium">Created Date</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(news.created_at).toLocaleString()}</div>
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-sm font-medium">Last Updated</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(news.updated_at).toLocaleString()}</div>
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

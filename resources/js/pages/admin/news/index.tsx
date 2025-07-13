import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, Plus, Trash2 } from 'lucide-react';

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

interface TotalNews {
    data: NewsItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface NewsIndexProps {
    news: {
        data: NewsItem[];
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
        publishers: number;
    };
    success?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'News Management', href: '/admin/news' },
];

export default function NewsIndex({ news, success, stats }: NewsIndexProps) {
    const handleDelete = (newsItem: NewsItem) => {
        if (confirm(`Are you sure you want to delete "${newsItem.title}"?`)) {
            router.delete(`/admin/news/${newsItem.id_news}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="News Management" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">News Management</h1>
                        <p className="text-muted-foreground">Manage news articles and publications</p>
                    </div>
                    <Link href="/admin/news/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add News
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
                            <CardTitle className="text-sm font-medium">Total News</CardTitle>
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
                            <CardTitle className="text-sm font-medium">Publishers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{stats.publishers}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* News Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>News Articles</CardTitle>
                        <CardDescription>Manage all news articles and publications</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">ID</th>
                                        <th className="px-6 py-3">Title</th>
                                        <th className="px-6 py-3">Publisher</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Admin</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {news.data.length > 0 ? (
                                        news.data.map((newsItem) => (
                                            <tr key={newsItem.id_news} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 font-medium">
                                                    <Badge variant="outline">#{newsItem.id_news}</Badge>
                                                </td>
                                                <td className="px-6 py-4 font-medium">{newsItem.title}</td>
                                                <td className="px-6 py-4">{newsItem.publisher}</td>
                                                <td className="px-6 py-4">{new Date(newsItem.date).toLocaleDateString()}</td>
                                                <td className="px-6 py-4">{newsItem.admin.username}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link href={`/admin/news/${newsItem.id_news}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/admin/news/${newsItem.id_news}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(newsItem)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                                No news articles found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {news.last_page > 1 && (
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Showing {(news.current_page - 1) * news.per_page + 1} to {Math.min(news.current_page * news.per_page, news.total)}{' '}
                                    of {news.total} results
                                </div>
                                <div className="flex gap-2">
                                    {news.prev_page_url && (
                                        <Link href={news.prev_page_url}>
                                            <Button variant="outline" size="sm">
                                                Previous
                                            </Button>
                                        </Link>
                                    )}
                                    <span className="flex items-center px-4 py-2 text-sm">
                                        Page {news.current_page} of {news.last_page}
                                    </span>
                                    {news.next_page_url && (
                                        <Link href={news.next_page_url}>
                                            <Button variant="outline" size="sm">
                                                Next
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

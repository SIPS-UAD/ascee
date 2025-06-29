import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Calendar, Newspaper, Users, Video } from 'lucide-react';

interface DashboardProps {
    counts: {
        news: number;
        events: number;
        conferences: number;
        careers: number;
    };
    recentActivity: Array<{
        id: number;
        email: string;
        full_name: string;
        last_login_at: string;
    }>;
    latestPosts: Array<{
        id: number;
        title: string;
        category: 'news' | 'events' | 'conferences' | 'careers';
        date: string;
        url: string;
    }>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ counts, recentActivity, latestPosts = [] }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Link href="/news" className="no-underline">
                        <Card >
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total News</CardTitle>
                                <Newspaper className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{counts.news}</div>
                                <p className="text-xs text-muted-foreground">Articles and publications</p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/events" className="no-underline">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{counts.events}</div>
                                <p className="text-xs text-muted-foreground">Scheduled events</p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/conferences" className="no-underline">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Conferences</CardTitle>
                                <Video className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{counts.conferences}</div>
                                <p className="text-xs text-muted-foreground">Online and offline conferences</p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/careers" className="no-underline">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Careers</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{counts.careers}</div>
                                <p className="text-xs text-muted-foreground">Total Information of Careers</p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                {/* User Activity Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent User Activity</CardTitle>
                        <p className="text-sm text-muted-foreground">Latest user login activities</p>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">Full Name</th>
                                        <th className="px-6 py-3">Email</th>
                                        <th className="px-6 py-3">Last Login</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentActivity.length > 0 ? (
                                        recentActivity.map((user) => (
                                            <tr key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 font-medium">{user.full_name}</td>
                                                <td className="px-6 py-4">{user.email}</td>
                                                <td className="px-6 py-4">{new Date(user.last_login_at).toLocaleString()}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                                                No recent activity found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Latest Posts Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Latest Posts</CardTitle>
                        <p className="text-sm text-muted-foreground">Recent posts from all categories</p>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">Title</th>
                                        <th className="px-6 py-3">Category</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {latestPosts.length > 0 ? (
                                        latestPosts.map((post) => (
                                            <tr key={`${post.category}-${post.id}`} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 font-medium">{post.title}</td>
                                                <td className="px-6 py-4 capitalize">{post.category}</td>
                                                <td className="px-6 py-4">{new Date(post.date).toLocaleDateString()}</td>
                                                <td className="px-6 py-4">
                                                    <Link 
                                                        href={post.url} 
                                                        className="text-primary hover:underline"
                                                    >
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                                No posts found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

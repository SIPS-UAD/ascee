import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
    created_at: string;
    updated_at: string;
}

interface AdminShowProps {
    admin: Admin;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Admin Management', href: '/admins' },
    { title: 'Admin Details', href: '#' },
];

export default function AdminShow({ admin }: AdminShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete admin ${admin.username}?`)) {
            router.delete(`/admins/${admin.id_admin}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Admin: ${admin.username}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admins">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Admins
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Admin Details</h1>
                            <p className="text-muted-foreground">View administrator information and activity</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admins/${admin.id_admin}/edit`}>
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

                {/* Admin Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Administrator Information
                                <Badge variant="outline">#{admin.id_admin}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this administrator</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Username</Label>
                                <div className="rounded bg-muted p-2 text-sm">{admin.username}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Email Address</Label>
                                <div className="rounded bg-muted p-2 text-sm">{admin.email}</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Account Activity</CardTitle>
                            <CardDescription>Account creation and modification dates</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Created Date</Label>
                                <div className="rounded bg-muted p-2 text-sm">{new Date(admin.created_at).toLocaleString()}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium">Last Updated</Label>
                                <div className="rounded bg-muted p-2 text-sm">{new Date(admin.updated_at).toLocaleString()}</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Admin Statistics */}
                <Card>
                    <CardHeader>
                        <CardTitle>Administrative Statistics</CardTitle>
                        <CardDescription>Overview of content managed by this administrator</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-4">
                            <div className="rounded-lg border p-4 text-center">
                                <div className="text-2xl font-bold text-blue-600">0</div>
                                <div className="text-sm text-muted-foreground">News Articles</div>
                            </div>
                            <div className="rounded-lg border p-4 text-center">
                                <div className="text-2xl font-bold text-green-600">0</div>
                                <div className="text-sm text-muted-foreground">Events</div>
                            </div>
                            <div className="rounded-lg border p-4 text-center">
                                <div className="text-2xl font-bold text-purple-600">0</div>
                                <div className="text-sm text-muted-foreground">Conferences</div>
                            </div>
                            <div className="rounded-lg border p-4 text-center">
                                <div className="text-2xl font-bold text-orange-600">0</div>
                                <div className="text-sm text-muted-foreground">Journal Entries</div>
                            </div>
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

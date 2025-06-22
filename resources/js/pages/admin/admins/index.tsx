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
    created_at: string;
    updated_at: string;
}

interface AdminIndexProps {
    admins: {
        data: Admin[];
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
    { title: 'Admin Management', href: '/admins' },
];

export default function AdminIndex({ admins, success }: AdminIndexProps) {
    const handleDelete = (admin: Admin) => {
        if (confirm(`Are you sure you want to delete admin ${admin.username}?`)) {
            router.delete(`/admins/${admin.id_admin}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Management" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Admin Management</h1>
                        <p className="text-muted-foreground">Manage system administrators and their permissions</p>
                    </div>
                    <Link href="/admins/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Admin
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
                            <CardTitle className="text-sm font-medium">Total Admins</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{admins.total}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Admins Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Administrators</CardTitle>
                        <CardDescription>A list of all administrators in the system</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">ID</th>
                                        <th className="px-6 py-3">Username</th>
                                        <th className="px-6 py-3">Email</th>
                                        <th className="px-6 py-3">Created</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.data.length > 0 ? (
                                        admins.data.map((admin) => (
                                            <tr key={admin.id_admin} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 font-medium">
                                                    <Badge variant="outline">#{admin.id_admin}</Badge>
                                                </td>
                                                <td className="px-6 py-4 font-medium">{admin.username}</td>
                                                <td className="px-6 py-4">{admin.email}</td>
                                                <td className="px-6 py-4">{new Date(admin.created_at).toLocaleDateString()}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link href={`/admins/${admin.id_admin}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/admins/${admin.id_admin}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(admin)}
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
                                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                                No administrators found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {admins.last_page > 1 && (
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Showing {(admins.current_page - 1) * admins.per_page + 1} to{' '}
                                    {Math.min(admins.current_page * admins.per_page, admins.total)} of {admins.total} results
                                </div>
                                <div className="flex gap-2">
                                    {admins.prev_page_url && (
                                        <Link href={admins.prev_page_url}>
                                            <Button variant="outline" size="sm">
                                                Previous
                                            </Button>
                                        </Link>
                                    )}
                                    <span className="flex items-center px-4 py-2 text-sm">
                                        Page {admins.current_page} of {admins.last_page}
                                    </span>
                                    {admins.next_page_url && (
                                        <Link href={admins.next_page_url}>
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

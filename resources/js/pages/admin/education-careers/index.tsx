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

interface EducationCareer {
    id_education: number;
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

interface EducationCareersIndexProps {
    educations: {
        data: EducationCareer[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        prev_page_url?: string;
        next_page_url?: string;
    };
    success?: string;
}

// Ubah breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Careers Management', href: '/careers' }, // Ubah ke /careers
];

export default function EducationCareersIndex({ educations, success }: EducationCareersIndexProps) {
    // Ubah handleDelete
    const handleDelete = (education: EducationCareer) => {
        if (confirm(`Are you sure you want to delete "${education.title}"?`)) {
            router.delete(`/careers/${education.id_education}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Careers Management" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Careers Management</h1>
                        <p className="text-muted-foreground">Manage career content</p>
                    </div>
                    {/* Ubah button Add Career */}
                    <Link href="/careers/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Career
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
                            <CardTitle className="text-sm font-medium">Total Careers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{educations.total}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Educations Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Careers</CardTitle>
                        <CardDescription>A list of all career entries</CardDescription>
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
                                    {educations.data.length > 0 ? (
                                        educations.data.map((education) => (
                                            <tr key={education.id_education} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <td className="px-6 py-4 font-medium">
                                                    <Badge variant="outline">#{education.id_education}</Badge>
                                                </td>
                                                <td className="px-6 py-4 font-medium">{education.title}</td>
                                                <td className="px-6 py-4">{education.publisher}</td>
                                                <td className="px-6 py-4">{new Date(education.date).toLocaleDateString()}</td>
                                                <td className="px-6 py-4">{education.admin.username}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link href={`/careers/${education.id_education}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/careers/${education.id_education}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(education)}
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
                                                No career entries found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {educations.last_page > 1 && (
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Showing {(educations.current_page - 1) * educations.per_page + 1} to{' '}
                                    {Math.min(educations.current_page * educations.per_page, educations.total)} of {educations.total} results
                                </div>
                                <div className="flex gap-2">
                                    {educations.prev_page_url && (
                                        <Link href={educations.prev_page_url.replace('/educations', '/careers')}>
                                            <Button variant="outline" size="sm">
                                                Previous
                                            </Button>
                                        </Link>
                                    )}
                                    {educations.next_page_url && (
                                        <Link href={educations.next_page_url.replace('/educations', '/careers')}>
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
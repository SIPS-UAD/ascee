import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Building2, Edit, Eye, Link as LinkIcon, Plus, Trash2 } from 'lucide-react';

interface Admin {
    id_admin: number;
    username: string;
    email: string;
}

interface Partner {
    id_partner: number;
    name: string;
    logo: string | null;
    website: string | null;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface PartnersIndexProps {
    partners: Partner[];
    stats: {
        total: number;
    };
    success?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Partner Management', href: '/admin/partners' },
];

export default function PartnersIndex({ partners, stats, success }: PartnersIndexProps) {
    const handleDelete = (partner: Partner) => {
        if (confirm(`Are you sure you want to delete "${partner.name}"?`)) {
            router.delete(`/admin/partners/${partner.id_partner}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Partner Management" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Partner Management</h1>
                        <p className="text-muted-foreground">Manage partner organizations and their information</p>
                    </div>
                    <Link href="/admin/partners/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Partner
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
                            <CardTitle className="text-sm font-medium">Total Partners</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats?.total || partners.length}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Partners List */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Partners</CardTitle>
                        <CardDescription>View and manage partner organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-hidden rounded-md border">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Logo</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Website</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Admin</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-card">
                                    {partners.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-4 text-center text-muted-foreground">
                                                No partners found
                                            </td>
                                        </tr>
                                    ) : (
                                        partners.map((partner) => (
                                            <tr key={partner.id_partner} className="border-b">
                                                <td className="px-6 py-4 font-medium">
                                                    <Badge variant="outline">#{partner.id_partner}</Badge>
                                                </td>
                                                <td className="px-6 py-4 font-medium">{partner.name}</td>
                                                <td className="px-6 py-4">
                                                    {partner.logo ? (
                                                        <div className="h-10 w-10 overflow-hidden rounded">
                                                            <img
                                                                src={`/storage/${partner.logo}`}
                                                                alt={partner.name}
                                                                className="h-full w-full object-contain"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <span className="text-muted-foreground">No Logo</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {partner.website ? (
                                                        <a
                                                            href={partner.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center text-blue-600 hover:underline"
                                                        >
                                                            <LinkIcon className="mr-1 h-3 w-3" />
                                                            View
                                                        </a>
                                                    ) : (
                                                        <span className="text-muted-foreground">No Website</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">{partner.admin.username}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link href={`/admin/partners/${partner.id_partner}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/admin/partners/${partner.id_partner}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(partner)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
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

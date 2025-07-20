import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, ExternalLink, Trash2, User } from 'lucide-react';

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

interface PartnerShowProps {
    partner: Partner;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Partner Management', href: '/admin/partners' },
    { title: 'Partner Details', href: '#' },
];

export default function PartnerShow({ partner }: PartnerShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${partner.name}"?`)) {
            router.delete(`/admin/partners/${partner.id_partner}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Partner: ${partner.name}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/partners">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Partners
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Partner Details</h1>
                            <p className="text-muted-foreground">View partner information</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admin/partners/${partner.id_partner}/edit`}>
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

                {/* Partner Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Partner Information
                                <Badge variant="outline">#{partner.id_partner}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this partner</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Name</Label>
                                <div className="rounded bg-muted p-2 text-sm font-medium">{partner.name}</div>
                            </div>

                            <div className="grid gap-2">
                                <Label>Website</Label>
                                {partner.website ? (
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded bg-muted p-2 text-sm text-blue-600 hover:underline"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        {partner.website}
                                    </a>
                                ) : (
                                    <div className="rounded bg-muted p-2 text-sm text-muted-foreground">No website provided</div>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label>Assigned Admin</Label>
                                <div className="flex items-center gap-2 rounded bg-muted p-2 text-sm">
                                    <User className="h-4 w-4" />
                                    {partner.admin.username}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Partner Logo</CardTitle>
                            <CardDescription>Official logo of the partner organization</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {partner.logo ? (
                                <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted">
                                    <img src={`/storage/${partner.logo}`} alt={partner.name} className="max-h-60 max-w-full object-contain" />
                                </div>
                            ) : (
                                <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                                    <p className="text-sm text-muted-foreground">No logo available</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* System Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>System Information</CardTitle>
                        <CardDescription>Creation and modification dates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Created Date</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(partner.created_at).toLocaleString()}</div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Last Updated</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(partner.updated_at).toLocaleString()}</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

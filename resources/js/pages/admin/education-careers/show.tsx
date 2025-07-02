import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, Calendar, User } from 'lucide-react';

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

interface EducationCareersShowProps {
    educationCareer: EducationCareer;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Careers Management', href: '/admin/careers' }, // Ubah ke /careers
    { title: 'Career Details', href: '#' },
];

export default function EducationCareersShow({ educationCareer }: EducationCareersShowProps) {
    // Ubah handleDelete
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${educationCareer.title}"?`)) {
            router.delete(`/admin/careers/${educationCareer.id_education}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Career: ${educationCareer.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/careers">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Careers
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Career Details</h1>
                            <p className="text-muted-foreground">View career entry information and activity</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admin/careers/${educationCareer.id_education}/edit`}>
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

                {/* Education & Career Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Career Information
                                <Badge variant="outline">#{educationCareer.id_education}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this entry</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Title</Label>
                                <div className="rounded bg-muted p-2 text-sm">{educationCareer.title}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Publisher</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {educationCareer.publisher}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Date</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(educationCareer.date).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Description</Label>
                                <div className="rounded bg-muted p-2 text-sm whitespace-pre-wrap">{educationCareer.description}</div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Assigned Admin</Label>
                                <div className="rounded bg-muted p-2 text-sm flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {educationCareer.admin.username}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Entry Image</CardTitle>
                            <CardDescription>Featured image for this entry</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {educationCareer.image ? (
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={`/storage/${educationCareer.image}`}
                                        alt={educationCareer.title}
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

                {/* Entry Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Entry Activity</CardTitle>
                        <CardDescription>Creation and modification dates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Created Date</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(educationCareer.created_at).toLocaleString()}</div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Last Updated</Label>
                            <div className="rounded bg-muted p-2 text-sm">{new Date(educationCareer.updated_at).toLocaleString()}</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

// Helper component for label
function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <span className={`text-sm font-medium ${className}`}>{children}</span>;
}
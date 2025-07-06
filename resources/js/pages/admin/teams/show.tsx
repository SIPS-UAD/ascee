import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, UserCircle, Award, Building2 } from 'lucide-react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface TeamMember {
    id_team: number;
    name: string;
    position: string;
    credentials: string;
    category: string;
    society?: string | null;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface TeamShowProps {
    team: TeamMember;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Team Management', href: '/admin/teams' },
    { title: 'Member Details', href: '#' },
];

export default function TeamShow({ team }: TeamShowProps) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${team.name}"?`)) {
            router.delete(`/admin/teams/${team.id_team}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Team Member: ${team.name}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/teams">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Team
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Team Member Details</h1>
                            <p className="text-muted-foreground">View team member information</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/admin/teams/${team.id_team}/edit`}>
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

                {/* Member Information */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Member Information
                                <Badge variant="outline">#{team.id_team}</Badge>
                            </CardTitle>
                            <CardDescription>Basic information about this team member</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Full Name</Label>
                                <div className="rounded bg-muted p-2 text-sm font-medium">
                                    {team.name} {team.credentials && <span className="font-normal text-muted-foreground">({team.credentials})</span>}
                                </div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>Position</Label>
                                <div className="rounded bg-muted p-2 text-sm">{team.position}</div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>Category</Label>
                                <div className="rounded bg-muted p-2 text-sm">
                                    <Badge variant="secondary" className="capitalize">
                                        {team.category}
                                    </Badge>
                                </div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>Society</Label>
                                <div className="rounded bg-muted p-2 text-sm">{team.society || 'Not Applicable'}</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>System Information</CardTitle>
                            <CardDescription>Management and system details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>Managed By</Label>
                                <div className="rounded bg-muted p-2 text-sm">
                                    {team.admin.username} ({team.admin.email})
                                </div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>Created Date</Label>
                                <div className="rounded bg-muted p-2 text-sm">
                                    {new Date(team.created_at).toLocaleString()}
                                </div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>Last Updated</Label>
                                <div className="rounded bg-muted p-2 text-sm">
                                    {new Date(team.updated_at).toLocaleString()}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Metadata */}
                <Card>
                    <CardHeader>
                        <CardTitle>Organizational Information</CardTitle>
                        <CardDescription>Details about this member's role in the organization</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex items-center gap-3 rounded-lg border p-4">
                                <UserCircle className="h-8 w-8 text-blue-500" />
                                <div>
                                    <p className="font-medium">{team.name}</p>
                                    <p className="text-sm text-muted-foreground">{team.position}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 rounded-lg border p-4">
                                <Award className="h-8 w-8 text-green-500" />
                                <div>
                                    <p className="font-medium">Category</p>
                                    <p className="text-sm text-muted-foreground">{team.category}</p>
                                </div>
                            </div>
                            
                            {team.society && (
                                <div className="flex items-center gap-3 rounded-lg border p-4">
                                    <Building2 className="h-8 w-8 text-purple-500" />
                                    <div>
                                        <p className="font-medium">Society</p>
                                        <p className="text-sm text-muted-foreground">{team.society}</p>
                                    </div>
                                </div>
                            )}
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
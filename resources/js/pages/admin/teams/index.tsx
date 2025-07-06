import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, Plus, Trash2, Users, Award, Briefcase } from 'lucide-react';

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

interface TeamIndexProps {
    team: {
        data: TeamMember[];
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
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Team Management', href: '/admin/teams' },
];

export default function TeamIndex({ team, success }: TeamIndexProps) {
    const handleDelete = (teamMember: TeamMember) => {
        if (confirm(`Are you sure you want to delete "${teamMember.name}"?`)) {
            router.delete(`/admin/teams/${teamMember.id_team}`);
        }
    };

    // Count members by category
    const getCategoryCount = (category: string) => {
        return team.data.filter(member => member.category === category).length;
    };

    // Count members by society
    const getSocietyCount = () => {
        return team.data.filter(member => member.society).length;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Team Management" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Team Management</h1>
                        <p className="text-muted-foreground">Manage team members and organization structure</p>
                    </div>
                    <Link href="/admin/teams/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Team Member
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
                            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{team.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Executive Officers</CardTitle>
                            <Award className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">
                                {getCategoryCount('Executive Officers')}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Society Members</CardTitle>
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-600">{getSocietyCount()}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">
                                {new Set(team.data.map(item => item.category)).size}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Team Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription>Manage all team members and their roles</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">ID</th>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Position</th>
                                        <th className="px-6 py-3">Category</th>
                                        <th className="px-6 py-3">Society</th>
                                        <th className="px-6 py-3">Admin</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {team.data.length > 0 ? (
                                        team.data.map((member) => (
                                            <tr key={member.id_team} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 font-medium">
                                                    <Badge variant="outline">#{member.id_team}</Badge>
                                                </td>
                                                <td className="px-6 py-4 font-medium">
                                                    {member.name}
                                                    {member.credentials && <span className="text-xs text-gray-500 ml-1">({member.credentials})</span>}
                                                </td>
                                                <td className="px-6 py-4">{member.position}</td>
                                                <td className="px-6 py-4">
                                                    <Badge variant="secondary" className="capitalize">
                                                        {member.category}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4">{member.society || '-'}</td>
                                                <td className="px-6 py-4">{member.admin.username}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link href={`/admin/teams/${member.id_team}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/admin/teams/${member.id_team}/edit`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => handleDelete(member)}
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
                                            <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                                                No team members found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {team.last_page > 1 && (
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Showing {(team.current_page - 1) * team.per_page + 1} to{' '}
                                    {Math.min(team.current_page * team.per_page, team.total)} of {team.total} results
                                </div>
                                <div className="flex gap-2">
                                    {team.prev_page_url && (
                                        <Link href={team.prev_page_url}>
                                            <Button variant="outline" size="sm">
                                                Previous
                                            </Button>
                                        </Link>
                                    )}
                                    <span className="flex items-center px-4 py-2 text-sm">
                                        Page {team.current_page} of {team.last_page}
                                    </span>
                                    {team.next_page_url && (
                                        <Link href={team.next_page_url}>
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
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, Calendar, User, Phone, Users } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface User {
    id_user: number;
    email: string;
    full_name: string;
}

interface PencarianMember {
    id_member: number;
    id_address: string;
    name: string;
    date_join: string;
    membership_type: string;
    full_name: string;
    gender: string;
    phone: string;
    birth_date: string;
    user_id: number;
    user: User;
    created_at: string;
    updated_at: string;
}

interface PencarianMemberIndexProps {
    members: {
        data: PencarianMember[];
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
    { title: 'Member Management', href: '/pencarian-members' },
];

export default function PencarianMemberIndex({ members, success }: PencarianMemberIndexProps) {
    const handleDelete = (member: PencarianMember) => {
        if (confirm(`Are you sure you want to delete member "${member.name}"?`)) {
            router.delete(`/pencarian-members/${member.id_member}`);
        }
    };

    const getMembershipBadgeVariant = (type: string) => {
        switch (type.toLowerCase()) {
            case 'premium': return 'default';
            case 'gold': return 'secondary';
            case 'silver': return 'outline';
            default: return 'outline';
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Member Management" />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Member Management</h1>
                        <p className="text-muted-foreground">
                            Manage member registrations and profiles
                        </p>
                    </div>
                    <Link href="/pencarian-members/create">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Member
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
                            <div className="text-2xl font-bold">{members.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Male Members</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">
                                {members.data.filter(member => member.gender === 'male').length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Female Members</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-pink-600">
                                {members.data.filter(member => member.gender === 'female').length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">This Month</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">
                                {members.data.filter(member => 
                                    new Date(member.created_at).getMonth() === new Date().getMonth()
                                ).length}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Members Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Members Directory</CardTitle>
                        <CardDescription>
                            A comprehensive list of all registered members
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">Member</th>
                                        <th className="px-6 py-3">Contact</th>
                                        <th className="px-6 py-3">Membership</th>
                                        <th className="px-6 py-3">Joined</th>
                                        <th className="px-6 py-3">User Account</th>
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.data.length > 0 ? (
                                        members.data.map((member) => (
                                            <tr key={member.id_member} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="font-medium">{member.name}</div>
                                                        <div className="text-xs text-gray-500">
                                                            Full Name: {member.full_name}
                                                        </div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Badge variant={member.gender === 'male' ? 'default' : 'secondary'}>
                                                                {member.gender}
                                                            </Badge>
                                                            <span className="text-xs text-gray-400">
                                                                #{member.id_address}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1">
                                                        <Phone className="h-3 w-3" />
                                                        <span className="text-sm">{member.phone}</span>
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Born: {new Date(member.birth_date).toLocaleDateString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge variant={getMembershipBadgeVariant(member.membership_type)}>
                                                        {member.membership_type}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {new Date(member.date_join).toLocaleDateString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm">
                                                        <div className="font-medium">{member.user.full_name}</div>
                                                        <div className="text-xs text-gray-500">{member.user.email}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link href={`/pencarian-members/${member.id_member}`}>
                                                            <Button variant="ghost" size="sm">
                                                                <Eye className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/pencarian-members/${member.id_member}/edit`}>
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
                                            <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                                No members found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {members.last_page > 1 && (
                            <div className="flex items-center justify-between mt-6">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Showing {((members.current_page - 1) * members.per_page) + 1} to{' '}
                                    {Math.min(members.current_page * members.per_page, members.total)} of{' '}
                                    {members.total} results
                                </div>
                                <div className="flex gap-2">
                                    {members.prev_page_url && (
                                        <Link href={members.prev_page_url}>
                                            <Button variant="outline" size="sm">Previous</Button>
                                        </Link>
                                    )}
                                    <span className="flex items-center px-4 py-2 text-sm">
                                        Page {members.current_page} of {members.last_page}
                                    </span>
                                    {members.next_page_url && (
                                        <Link href={members.next_page_url}>
                                            <Button variant="outline" size="sm">Next</Button>
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
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { FormEventHandler } from 'react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface TeamCreateProps {
    admins: Admin[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Team Management', href: '/admin/teams' },
    { title: 'Create Team Member', href: '/admin/teams/create' },
];

export default function TeamCreate({ admins }: TeamCreateProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        position: '',
        credentials: '',
        category: '',
        society: '',
        admin_id: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/teams');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Team Member" />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/admin/teams">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Team
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Create Team Member</h1>
                        <p className="text-muted-foreground">Add a new member to the organization</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Member Information</CardTitle>
                            <CardDescription>Fill in the details for this team member</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid gap-4">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Enter member's full name"
                                            className={errors.name ? 'border-red-500' : ''}
                                        />
                                        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    {/* Position */}
                                    <div className="space-y-2">
                                        <Label htmlFor="position">Position</Label>
                                        <Input
                                            id="position"
                                            type="text"
                                            value={data.position}
                                            onChange={(e) => setData('position', e.target.value)}
                                            placeholder="Enter member's position"
                                            className={errors.position ? 'border-red-500' : ''}
                                        />
                                        {errors.position && <p className="text-sm text-red-600">{errors.position}</p>}
                                    </div>

                                    {/* Credentials */}
                                    <div className="space-y-2">
                                        <Label htmlFor="credentials">Credentials (Optional)</Label>
                                        <Input
                                            id="credentials"
                                            type="text"
                                            value={data.credentials}
                                            onChange={(e) => setData('credentials', e.target.value)}
                                            placeholder="MD, Ph.D., etc."
                                            className={errors.credentials ? 'border-red-500' : ''}
                                        />
                                        {errors.credentials && <p className="text-sm text-red-600">{errors.credentials}</p>}
                                    </div>

                                    {/* Category */}
                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category</Label>
                                        <Select value={data.category} onValueChange={(value) => setData('category', value)}>
                                            <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Executive Officers">Executive Officers</SelectItem>
                                                <SelectItem value="Sections">Sections</SelectItem>
                                                <SelectItem value="Branches and Chapters">Branches and Chapters</SelectItem>
                                                <SelectItem value="Staff">Staff</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.category && <p className="text-sm text-red-600">{errors.category}</p>}
                                    </div>

                                    {/* Society */}
                                    <div className="space-y-2">
                                        <Label htmlFor="society">Society (Optional)</Label>
                                        <Input
                                            id="society"
                                            type="text"
                                            value={data.society}
                                            onChange={(e) => setData('society', e.target.value)}
                                            placeholder="Enter society name if applicable"
                                            className={errors.society ? 'border-red-500' : ''}
                                        />
                                        {errors.society && <p className="text-sm text-red-600">{errors.society}</p>}
                                    </div>

                                    {/* Admin Selection */}
                                    <div className="space-y-2">
                                        <Label htmlFor="admin_id">Assigned Admin</Label>
                                        <Select value={data.admin_id} onValueChange={(value) => setData('admin_id', value)}>
                                            <SelectTrigger className={errors.admin_id ? 'border-red-500' : ''}>
                                                <SelectValue placeholder="Select an admin" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {admins.map((admin) => (
                                                    <SelectItem key={admin.id_admin} value={admin.id_admin.toString()}>
                                                        {admin.username} ({admin.email})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.admin_id && <p className="text-sm text-red-600">{errors.admin_id}</p>}
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex items-center gap-4 pt-4">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Creating...' : 'Create Team Member'}
                                    </Button>
                                    <Link href="/admin/teams">
                                        <Button variant="outline" type="button">
                                            Cancel
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
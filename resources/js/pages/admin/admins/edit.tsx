import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { FormEventHandler } from 'react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
    created_at: string;
    updated_at: string;
}

interface AdminEditProps {
    admin: Admin;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Admin Management', href: '/admin/admins' },
    { title: 'Edit Admin', href: '#' },
];

export default function AdminEdit({ admin }: AdminEditProps) {
    const { data, setData, put, processing, errors } = useForm({
        email: admin.email,
        username: admin.username,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(`/admins/${admin.id_admin}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Admin: ${admin.username}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/admin/admins">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Admins
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Edit Admin</h1>
                        <p className="text-muted-foreground">Update administrator information</p>
                    </div>
                </div>

                {/* Form */}
                <Card className="max-w-2xl">
                    <CardHeader>
                        <CardTitle>Admin Information</CardTitle>
                        <CardDescription>Update the administrator details. Leave password fields empty to keep current password.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-4">
                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="admin@example.com"
                                        className={errors.email ? 'border-red-500' : ''}
                                    />
                                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                                </div>

                                {/* Username */}
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                        placeholder="admin_username"
                                        className={errors.username ? 'border-red-500' : ''}
                                    />
                                    {errors.username && <p className="text-sm text-red-600">{errors.username}</p>}
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="password">New Password (optional)</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Leave empty to keep current password"
                                        className={errors.password ? 'border-red-500' : ''}
                                    />
                                    {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="password_confirmation">Confirm New Password</Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="Confirm new password"
                                        className={errors.password_confirmation ? 'border-red-500' : ''}
                                    />
                                    {errors.password_confirmation && <p className="text-sm text-red-600">{errors.password_confirmation}</p>}
                                </div>
                            </div>

                            {/* Admin Info */}
                            <div className="rounded-lg border bg-muted/30 p-4">
                                <h3 className="mb-2 font-medium">Account Information</h3>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                    <p>
                                        <strong>Admin ID:</strong> #{admin.id_admin}
                                    </p>
                                    <p>
                                        <strong>Created:</strong> {new Date(admin.created_at).toLocaleDateString()}
                                    </p>
                                    <p>
                                        <strong>Last Updated:</strong> {new Date(admin.updated_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex items-center gap-4 pt-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update Admin'}
                                </Button>
                                <Link href="/admin/admins">
                                    <Button variant="outline" type="button">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

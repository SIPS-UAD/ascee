import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Users, Mail, Save } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { FormEventHandler } from 'react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface AboutUsItem {
    id_about: number;
    overview: string;
    vision: string;
    mission: string;
    corporate_offices: string;
    section: string;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface AboutUsIndexProps {
    aboutUs?: AboutUsItem;
    admins: Admin[];
    success?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'About Us Management', href: '/admin/about-us' },
];

export default function AboutUsIndex({ aboutUs, admins, success }: AboutUsIndexProps) {
    const { data, setData, post, processing, errors } = useForm({
        overview: aboutUs?.overview || '',
        vision: aboutUs?.vision || '',
        mission: aboutUs?.mission || '',
        corporate_offices: aboutUs?.corporate_offices || '',
        admin_id: aboutUs?.admin_id?.toString() || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/about-us');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About Us Management" />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">About Us Management</h1>
                        <p className="text-muted-foreground">
                            {aboutUs ? 'Update' : 'Create'} the about us page information
                        </p>
                    </div>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                        <div className="text-sm text-green-700 dark:text-green-400">{success}</div>
                    </div>
                )}

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>About Us Information</CardTitle>
                                <CardDescription>
                                    {aboutUs ? 'Update the about us page content' : 'Create the about us page content'}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid gap-4">
                                        {/* Overview */}
                                        <div className="space-y-2">
                                            <Label htmlFor="overview">Overview</Label>
                                            <textarea
                                                id="overview"
                                                value={data.overview}
                                                onChange={(e) => setData('overview', e.target.value)}
                                                placeholder="Enter company overview"
                                                rows={4}
                                                className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.overview ? 'border-red-500' : ''}`}
                                            />
                                            {errors.overview && (
                                                <p className="text-sm text-red-600">{errors.overview}</p>
                                            )}
                                        </div>

                                        {/* Vision */}
                                        <div className="space-y-2">
                                            <Label htmlFor="vision">Vision</Label>
                                            <textarea
                                                id="vision"
                                                value={data.vision}
                                                onChange={(e) => setData('vision', e.target.value)}
                                                placeholder="Enter company vision"
                                                rows={3}
                                                className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.vision ? 'border-red-500' : ''}`}
                                            />
                                            {errors.vision && (
                                                <p className="text-sm text-red-600">{errors.vision}</p>
                                            )}
                                        </div>

                                        {/* Mission */}
                                        <div className="space-y-2">
                                            <Label htmlFor="mission">Mission</Label>
                                            <textarea
                                                id="mission"
                                                value={data.mission}
                                                onChange={(e) => setData('mission', e.target.value)}
                                                placeholder="Enter company mission"
                                                rows={3}
                                                className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.mission ? 'border-red-500' : ''}`}
                                            />
                                            {errors.mission && (
                                                <p className="text-sm text-red-600">{errors.mission}</p>
                                            )}
                                        </div>

                                        {/* Corporate Offices */}
                                        <div className="space-y-2">
                                            <Label htmlFor="corporate_offices">Corporate Offices</Label>
                                            <textarea
                                                id="corporate_offices"
                                                value={data.corporate_offices}
                                                onChange={(e) => setData('corporate_offices', e.target.value)}
                                                placeholder="Enter corporate office locations"
                                                rows={3}
                                                className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.corporate_offices ? 'border-red-500' : ''}`}
                                            />
                                            {errors.corporate_offices && (
                                                <p className="text-sm text-red-600">{errors.corporate_offices}</p>
                                            )}
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
                                            {errors.admin_id && (
                                                <p className="text-sm text-red-600">{errors.admin_id}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <Button type="submit" disabled={processing}>
                                            <Save className="h-4 w-4 mr-2" />
                                            {processing ? 'Saving...' : (aboutUs ? 'Update Information' : 'Create Information')}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Information Panel */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Information</CardTitle>
                                <CardDescription>
                                    About the about us page management
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {aboutUs && (
                                    <>
                                        <div className="flex items-start gap-3">
                                            <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-medium">Current Status</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Information exists and can be updated
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-medium">Created By</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {aboutUs.admin.username}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <Mail className="h-5 w-5 text-purple-500 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-medium">Last Updated</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {new Date(aboutUs.updated_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <p className="text-xs text-blue-700 dark:text-blue-400">
                                        <strong>Note:</strong> This page manages a single about us information that will be displayed on the website.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

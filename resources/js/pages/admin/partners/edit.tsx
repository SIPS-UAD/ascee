import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface Partner {
    id_partner: number;
    name: string;
    logo: string | null;
    website: string | null;
    admin_id: number;
    admin: Admin;
    created_at: string;
    updated_at: string;
}

interface PartnerEditProps {
    partner: Partner;
    admins: Admin[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Partner Management', href: '/admin/partners' },
    { title: 'Edit Partner', href: '#' },
];

export default function PartnerEdit({ partner, admins }: PartnerEditProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(partner.logo ? `/storage/${partner.logo}` : null);

    const { data, setData, post, processing, errors } = useForm({
        name: partner.name,
        website: partner.website || '',
        logo: null as File | null,
        admin_id: partner.admin_id.toString(),
        _method: 'PUT',
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('logo', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('logo', null);
        setImagePreview(null);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/admin/partners/${partner.id_partner}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Partner: ${partner.name}`} />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/admin/partners">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Partners
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Edit Partner</h1>
                        <p className="text-muted-foreground">Update partner information</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Partner Information</CardTitle>
                                <CardDescription>Update the details of this partner</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid gap-4">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Partner Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Enter partner name"
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                                        </div>

                                        {/* Website */}
                                        <div className="space-y-2">
                                            <Label htmlFor="website">Website URL (Optional)</Label>
                                            <Input
                                                id="website"
                                                type="url"
                                                value={data.website}
                                                onChange={(e) => setData('website', e.target.value)}
                                                placeholder="https://example.com"
                                                className={errors.website ? 'border-red-500' : ''}
                                            />
                                            {errors.website && <p className="text-sm text-red-600">{errors.website}</p>}
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

                                    {/* Partner Info */}
                                    <div className="rounded-lg border bg-muted/30 p-4">
                                        <h3 className="mb-2 font-medium">Partner Information</h3>
                                        <div className="space-y-1 text-sm text-muted-foreground">
                                            <p>
                                                <strong>Partner ID:</strong> #{partner.id_partner}
                                            </p>
                                            <p>
                                                <strong>Created:</strong> {new Date(partner.created_at).toLocaleDateString()}
                                            </p>
                                            <p>
                                                <strong>Last Updated:</strong> {new Date(partner.updated_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Submit Buttons */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <Button type="submit" disabled={processing}>
                                            {processing ? 'Updating...' : 'Update Partner'}
                                        </Button>
                                        <Link href="/admin/partners">
                                            <Button variant="outline" type="button">
                                                Cancel
                                            </Button>
                                        </Link>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Logo Upload */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Partner Logo</CardTitle>
                                <CardDescription>Update the logo for this partner (optional)</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {!imagePreview ? (
                                        <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 dark:border-gray-700">
                                            <div className="text-center">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                <div className="mt-4">
                                                    <Label htmlFor="logo" className="cursor-pointer">
                                                        <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                                            Click to upload logo
                                                        </span>
                                                        <span className="mt-1 block text-xs text-gray-500">PNG, JPG, GIF up to 2MB</span>
                                                    </Label>
                                                    <Input id="logo" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <img src={imagePreview} alt="Preview" className="h-48 w-full rounded-lg object-contain" />
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="sm"
                                                onClick={removeImage}
                                                className="absolute top-2 right-2"
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    )}
                                    {errors.logo && <p className="text-sm text-red-600">{errors.logo}</p>}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

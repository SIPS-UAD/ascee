import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { FormEventHandler, useState } from 'react';

interface Admin {
    id_admin: number;
    email: string;
    username: string;
}

interface Journal {
    id_journal: number;
    title: string;
    image?: string;
    link: string | null; // Change this to be explicit about null
    admin_id: number;
    created_at: string;
    updated_at: string;
}

interface JournalEditProps {
    journal: Journal;
    admins: Admin[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Journal Management', href: '/admin/journal' },
    { title: 'Edit Journal', href: '#' },
];

export default function JournalEdit({ journal, admins }: JournalEditProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(
        journal.image ? `/storage/${journal.image}` : null
    );

    const { data, setData, post, processing, errors } = useForm({
        title: journal.title,
        image: null as File | null,
        link: journal.link ?? '', // Add this line to include existing link
        admin_id: journal.admin_id.toString(),
        _method: 'PUT',
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('image', null);
        setImagePreview(null);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/admin/journal/${journal.id_journal}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Journal: ${journal.title}`} />
            
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/admin/journal">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Journal
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Edit Journal</h1>
                        <p className="text-muted-foreground">Update journal information</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Journal Information</CardTitle>
                                <CardDescription>Update the journal details</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid gap-4">
                                        {/* Title */}
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Title</Label>
                                            <Input
                                                id="title"
                                                type="text"
                                                value={data.title}
                                                onChange={(e) => setData('title', e.target.value)}
                                                placeholder="Enter journal title"
                                                className={errors.title ? 'border-red-500' : ''}
                                            />
                                            {errors.title && (
                                                <p className="text-sm text-red-600">{errors.title}</p>
                                            )}
                                        </div>

                                        {/* Link */}
                                        <div className="space-y-2">
                                            <Label htmlFor="link">Journal Link</Label>
                                            <Input
                                                id="link"
                                                type="url"
                                                value={data.link || ''}
                                                onChange={(e) => setData('link', e.target.value)}
                                                placeholder="https://journal-link.com"
                                            />
                                            {errors.link && (
                                                <p className="text-sm text-red-600">{errors.link}</p>
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

                                    {/* Submit Buttons */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <Button type="submit" disabled={processing}>
                                            {processing ? 'Updating...' : 'Update Journal'}
                                        </Button>
                                        <Link href="/admin/journal">
                                            <Button variant="outline" type="button">
                                                Cancel
                                            </Button>
                                        </Link>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Image Upload */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Featured Image</CardTitle>
                                <CardDescription>
                                    Update the journal image (optional)
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {!imagePreview ? (
                                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6">
                                            <div className="text-center">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                <div className="mt-4">
                                                    <Label htmlFor="image" className="cursor-pointer">
                                                        <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                                                            Click to upload image
                                                        </span>
                                                        <span className="mt-1 block text-xs text-gray-500">
                                                            PNG, JPG, GIF up to 2MB
                                                        </span>
                                                    </Label>
                                                    <Input
                                                        id="image"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        className="hidden"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-48 object-cover rounded-lg"
                                            />
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
                                    {errors.image && (
                                        <p className="text-sm text-red-600">{errors.image}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
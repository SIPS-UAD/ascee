import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import Link from '@tiptap/extension-link';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FileText, Mail, Save, Users } from 'lucide-react';
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

// Create a reusable RichTextEditor component
function RichTextEditor({
    value,
    onChange,
    placeholder,
    className,
    error = false,
}: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    error?: boolean;
}) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            Link.configure({
                openOnClick: false,
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: `focus:outline-none min-h-[150px] ${className}`,
                placeholder: placeholder,
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className={`rounded-md border ${error ? 'border-red-500' : 'border-input'}`}>
            <div className="flex flex-wrap gap-2 border-b p-2">
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className={`rounded p-1 hover:bg-gray-100 ${editor?.isActive('bold') ? 'bg-gray-100' : ''}`}
                >
                    Bold
                </button>
                <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    className={`rounded p-1 hover:bg-gray-100 ${editor?.isActive('italic') ? 'bg-gray-100' : ''}`}
                >
                    Italic
                </button>
                <button
                    type="button"
                    onClick={() => {
                        editor?.chain().focus().toggleBulletList().run();
                        console.log('Bullet list toggled:', editor?.isActive('bulletList'));
                    }}
                    className={`rounded p-1 hover:bg-gray-100 ${editor?.isActive('bulletList') ? 'bg-gray-100' : ''}`}
                >
                    Bullet List
                </button>
                <button
                    type="button"
                    onClick={() => {
                        editor?.chain().focus().toggleOrderedList().run();
                        console.log('Ordered list toggled:', editor?.isActive('orderedList'));
                    }}
                    className={`rounded p-1 hover:bg-gray-100 ${editor?.isActive('orderedList') ? 'bg-gray-100' : ''}`}
                >
                    Ordered List
                </button>
            </div>
            <EditorContent editor={editor} className="p-3" />
        </div>
    );
}

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
                        <p className="text-muted-foreground">{aboutUs ? 'Update' : 'Create'} the about us page information</p>
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
                                <CardDescription>{aboutUs ? 'Update the about us page content' : 'Create the about us page content'}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid gap-4">
                                        {/* Overview */}
                                        <div className="space-y-2">
                                            <Label htmlFor="overview">Overview</Label>
                                            <RichTextEditor
                                                value={data.overview}
                                                onChange={(value) => setData('overview', value)}
                                                placeholder="Enter company overview"
                                                className="min-h-[200px]"
                                                error={!!errors.overview}
                                            />
                                            {errors.overview && <p className="text-sm text-red-600">{errors.overview}</p>}
                                        </div>

                                        {/* Vision */}
                                        <div className="space-y-2">
                                            <Label htmlFor="vision">Vision</Label>
                                            <RichTextEditor
                                                value={data.vision}
                                                onChange={(value) => setData('vision', value)}
                                                placeholder="Enter company vision"
                                                className="min-h-[150px]"
                                                error={!!errors.vision}
                                            />
                                            {errors.vision && <p className="text-sm text-red-600">{errors.vision}</p>}
                                        </div>

                                        {/* Mission */}
                                        <div className="space-y-2">
                                            <Label htmlFor="mission">Mission</Label>
                                            <RichTextEditor
                                                value={data.mission}
                                                onChange={(value) => setData('mission', value)}
                                                placeholder="Enter company mission"
                                                className="min-h-[150px]"
                                                error={!!errors.mission}
                                            />
                                            {errors.mission && <p className="text-sm text-red-600">{errors.mission}</p>}
                                        </div>

                                        {/* Corporate Offices */}
                                        <div className="space-y-2">
                                            <Label htmlFor="corporate_offices">Corporate Offices</Label>
                                            <RichTextEditor
                                                value={data.corporate_offices}
                                                onChange={(value) => setData('corporate_offices', value)}
                                                placeholder="Enter corporate office locations"
                                                className="min-h-[150px]"
                                                error={!!errors.corporate_offices}
                                            />
                                            {errors.corporate_offices && <p className="text-sm text-red-600">{errors.corporate_offices}</p>}
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

                                    {/* Submit Button */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <Button type="submit" disabled={processing}>
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing ? 'Saving...' : aboutUs ? 'Update Information' : 'Create Information'}
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
                                <CardDescription>About the about us page management</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {aboutUs && (
                                    <>
                                        <div className="flex items-start gap-3">
                                            <FileText className="mt-0.5 h-5 w-5 text-blue-500" />
                                            <div>
                                                <h4 className="text-sm font-medium">Current Status</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">Information exists and can be updated</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Users className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="text-sm font-medium">Created By</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">{aboutUs.admin.username}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Mail className="mt-0.5 h-5 w-5 text-purple-500" />
                                            <div>
                                                <h4 className="text-sm font-medium">Last Updated</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {new Date(aboutUs.updated_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="mt-6 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
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

import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Building2,
    Calendar,
    Folder,
    GraduationCap,
    BookOpen as Journal,
    LayoutGrid,
    Newspaper,
    Users,
    UserSearch,
    Video,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Admin Management',
        href: '/admins',
        icon: Users,
    },
    {
        title: 'About Us',
        href: '/about-us',
        icon: Newspaper,
    },
    {
        title: 'News',
        href: '/news',
        icon: Newspaper,
    },
    {
        title: 'Journal',
        href: '/journal',
        icon: Journal,
    },
    {
        title: 'Events',
        href: '/events',
        icon: Calendar,
    },
    {
        title: 'Conferences',
        href: '/conferences',
        icon: Video,
    },
    {
        title: 'Education & Careers',
        href: '/education-careers',
        icon: GraduationCap,
    },
    {
        title: 'Members',
        href: '/pencarian-members',
        icon: UserSearch,
    },
    {
        title: 'Partners',
        href: '/jenis-mitra',
        icon: Building2,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

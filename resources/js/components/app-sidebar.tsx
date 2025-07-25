import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, GraduationCap, BookOpen as Journal, LayoutGrid, Newspaper, Users, Video, UserCircle } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Admin Management',
        href: '/admin/admins',
        icon: Users,
    },
    {
        title: 'About Us',
        href: '/admin/about-us',
        icon: Newspaper,
    },
    {
        title: 'News',
        href: '/admin/news',
        icon: Newspaper,
    },
    {
        title: 'Journal',
        href: '/admin/journal',
        icon: Journal,
    },
    {
        title: 'Events',
        href: '/admin/events',
        icon: Calendar,
    },
    {
        title: 'Conferences',
        href: '/admin/conferences',
        icon: Video,
    },
    {
        title: 'Careers',
        href: '/admin/careers',
        icon: GraduationCap,
    },
    {
        title: 'Team',
        href: '/admin/teams',
        icon: UserCircle,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin/dashboard" prefetch>
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
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, GraduationCap, BookOpen as Journal, LayoutGrid, Newspaper, Users, Video } from 'lucide-react';
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
        title: 'Careers',
        href: '/careers', // Tetap /careers
        icon: GraduationCap,
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
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

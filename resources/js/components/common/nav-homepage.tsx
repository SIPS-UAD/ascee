import NavButton from '@/components/atoms/nav-button';
import NavLink from '@/components/atoms/nav-link';
import NavLogo from '@/components/atoms/nav-logo';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const NavHomepage = () => {
    const { url } = usePage();
    const { auth } = usePage<SharedData>().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'EVENTS', href: '/events' },
        { name: 'CAREERS', href: '/careers' },
        { name: 'CONFERENCE', href: '/conference' },
        { name: 'JOURNALS', href: '/journals' },
    ];

    const CrownIcon = () => <img src="/mdi_crown.svg" alt="Crown icon" className="h-4 w-4" />;

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 w-full bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <img src="/sidebar-menu.svg" alt="Menu" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Left navigation - hidden on mobile */}
                    <div className="hidden lg:flex">
                        {navigation.map(
                            (item, index) =>
                                index < 6 && (
                                    <NavLink key={item.name} href={item.href} active={url === item.href}>
                                        {item.name}
                                    </NavLink>
                                ),
                        )}
                    </div>

                    {/* Logo (center) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <NavLogo />
                    </div>

                    {/* Placeholder for left nav on mobile to ensure centering */}
                    <div className="w-8 md:hidden"></div>

                    {/* Right navigation */}
                    <div className="flex items-center space-x-4">
                        {/* Search icon - always visible */}
                        {/* <button className="p-1">
                            <img src="/search.svg" alt="Search" className="h-5 w-5" />
                        </button> */}

                        {/* Login / User Menu - visible on all sizes */}
                        {auth?.user ? (
                            //  (
                            //     <Link href={route('dashboard')} className="text-sm font-medium text-gray-700 hover:text-cyan-500 lg:text-tiny">
                            //         Dashboard
                            //     </Link>
                            // )
                            <>
                                <div className="hidden space-x-5 lg:flex">
                                    <Link
                                        href={route('login')}
                                        className="m-auto mx-4 text-tiny font-medium text-gray-700 hover:text-cyan-500 lg:text-sm"
                                    >
                                        LOG IN
                                    </Link>
                                    <NavButton href={route('register')} icon={<CrownIcon />}>
                                        MEMBERSHIP
                                    </NavButton>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="hidden space-x-5 lg:flex">
                                    <Link
                                        href={route('login')}
                                        className="m-auto mx-4 text-tiny font-medium text-gray-700 hover:text-cyan-500 lg:text-sm"
                                    >
                                        LOG IN
                                    </Link>
                                    <NavButton href={route('register')} icon={<CrownIcon />}>
                                        MEMBERSHIP
                                    </NavButton>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute right-0 left-0 z-10 bg-white py-2 shadow-lg">
                    {auth?.user ? (
                        <Link
                            href={route('dashboard')}
                            className="block px-4 py-2 text-tiny text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <div className="px-4 py-2">
                                <NavButton href={route('register')} icon={<CrownIcon />} onClick={() => setIsMobileMenuOpen(false)}>
                                    MEMBERSHIP
                                </NavButton>
                            </div>
                            <Link
                                href={route('login')}
                                className="block px-4 py-2 text-tiny text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                LOG IN
                            </Link>
                        </>
                    )}
                    <div className="my-2 border-t border-gray-100"></div>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-2 text-tiny ${url === item.href ? 'text-cyan-500' : 'text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavHomepage;

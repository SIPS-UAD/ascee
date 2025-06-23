import { Link } from '@inertiajs/react';
import React from 'react';

interface NavLinkProps {
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active = false, children }) => {
    return (
        <Link
            href={href}
            className={`text-tiny px-2 py-2 lg:text-sm font-medium transition-colors hover:text-cyan-500 ${active ? 'text-cyan-500' : 'text-gray-700'}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;

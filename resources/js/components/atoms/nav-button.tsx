import { Link } from '@inertiajs/react';
import React from 'react';

interface NavButtonProps {
    href: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ href, icon, children, variant = 'primary', onClick }) => {
    const baseClasses = 'inline-flex items-center px-4 py-1.5 lg:text-sm font-medium rounded text-tiny ';
    const variantClasses = variant === 'primary' ? 'bg-yellow-500 text-white hover:bg-yellow-400' : 'bg-transparent text-gray-700 hover:bg-gray-100';

    return (
        <Link href={href} className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </Link>
    );
};

export default NavButton;

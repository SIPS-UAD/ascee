import { Link } from '@inertiajs/react';

const NavLogo = () => {
    return (
        <Link href="/" className="flex items-center justify-center">
            <img src="/logoascee.png" alt="ASCEE Logo" className="h-6" />
        </Link>
    );
};

export default NavLogo;

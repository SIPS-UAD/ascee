import NavHomepage from '@/components/common/nav-homepage';
import { Head } from '@inertiajs/react';
import React from 'react';

interface HomepageHeaderLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const HomepageHeaderLayout: React.FC<HomepageHeaderLayoutProps> = ({
    children,
    title = 'ASCEE - Association for Scientific Computing Electronics',
}) => {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen flex-col">
                <header className="bg-white shadow">
                    <NavHomepage />
                </header>
                <main className="flex-grow">{children}</main>
            </div>
        </>
    );
};

export default HomepageHeaderLayout;

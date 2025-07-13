import NavHomepage from '@/components/common/nav-homepage';
import { Head } from '@inertiajs/react';
import React from 'react';



const HeaderLayout = () => {
    return (
        <>
            <Head/>
            <header className="shadow">
                <NavHomepage />
            </header>
        </>
    );
};

export default HeaderLayout;

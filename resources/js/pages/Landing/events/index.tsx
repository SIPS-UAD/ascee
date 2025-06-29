import HeaderLayout from '@/layouts/layout-pages/header-layout';

import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="ASCEE" />
            <HeaderLayout />
            <div className="h-svh w-full bg-green-700 flex justify-center">
                <h1 className="m-auto text-white text-xl">EVENTS</h1>
            </div>
        </>
    );
}

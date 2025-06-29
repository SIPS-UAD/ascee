
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import HomepageMainLayout from '@/layouts/layout-pages/homepage-main-layout';
import { Head } from '@inertiajs/react';

export default function AppPage() {
    return (
        <>
            <Head title="ASCEE" />
            <HeaderLayout />
            <HomepageMainLayout />
        </>
    );
}

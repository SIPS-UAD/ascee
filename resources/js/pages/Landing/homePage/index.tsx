import FooterLayout from '@/layouts/layout-pages/footer-layout';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import HomepageMainLayout from '@/layouts/layout-pages/homepage-main-layout';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="ASCEE" />
            <HeaderLayout />
            <HomepageMainLayout />
            <FooterLayout />
        </>
    );
}

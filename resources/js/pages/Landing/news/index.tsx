import FooterLayout from '@/layouts/layout-pages/footer-layout';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="NEWS" />
            <HeaderLayout />
            <PageMainLayout nameTag='NEWS' />
            <FooterLayout />
        </>
    );
}

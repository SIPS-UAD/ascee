import FooterLayout from '@/layouts/layout-pages/footer-layout';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import PageMainLayout from '@/layouts/layout-pages/page-main-layout';
import { Head } from '@inertiajs/react';

interface DataProps {
    nameTag: string;
}

export default function Index({ nameTag }: DataProps) {
    return (
        <>
            <Head title="DETAIL" />
            <HeaderLayout />
            <PageMainLayout nameTag={nameTag} />
            <FooterLayout />
        </>
    );
}

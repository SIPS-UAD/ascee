import HeaderLayout from '@/layouts/layout-pages/header-layout';
import HomepageMainLayout from '@/layouts/layout-pages/homepage-main-layout';
import FooterLayout from '@/layouts/layout-pages/footer-layout';
import { Head } from '@inertiajs/react';
import { News } from '@/types';

interface DataProps{
    news : News[];
}

export default function Index({news}:DataProps) {
    console.log(news);
    return (
        <>
            <Head title="ASCEE" />
            <HeaderLayout />
            <HomepageMainLayout />
            <FooterLayout/>
        </>
    );
}

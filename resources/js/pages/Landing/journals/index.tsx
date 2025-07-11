import FooterLayout from '@/layouts/layout-pages/footer-layout';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import JournalPageMainLayout from '@/layouts/layout-pages/journal-page-main-layout';

import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="JOURNALS" />
            <HeaderLayout />
            <JournalPageMainLayout/>
            <FooterLayout />
        </>
    );
}

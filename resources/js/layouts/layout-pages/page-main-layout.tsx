import NameTag from '@/components/atoms/name-tag';
import ListItemsPage from '@/components/organisms/list-items-page';
import SideSearchPage from '@/components/organisms/side-search-page';
import { NameTagProvider } from '@/contexts/NameTagContext';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import FooterLayout from '@/layouts/layout-pages/footer-layout';
import { Head } from '@inertiajs/react';
import React from 'react';

interface PageMainLayoutProps {
    nameTag: string;
    items?: Array<{
        id?: number;
        id_news?: number;
        id_events?: number;
        id_conferences?: number;
        id_education?: number;
        title: string;
        date?: string;
        description?: string;
        organization?: string;
        imageSrc?: string;
        type?: 'EVENT' | 'NEWS'|'CAREER' | 'CONFERENCE';
    }>;
    pagination?: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    baseUrl?: string;
    itemType?: 'news' | 'events' | 'careers' | 'conferences';
}

const PageMainLayout: React.FC<PageMainLayoutProps> = ({ 
    nameTag, 
    items = [], 
    pagination, 
    baseUrl = '',
    itemType = 'news'
}) => {
    
    return (
        <>
            <Head title={nameTag.toUpperCase()} />
            <HeaderLayout />
            <main>
                <section className="m-auto max-w-7xl bg-white pt-20 pb-8 sm:pt-22 sm:pb-12 lg:pt-24 lg:pb-16">
                    <div className="px-5">
                        <NameTagProvider name={nameTag} >
                            <NameTag />
                        </NameTagProvider>
                    </div>
                    
                    <div className="py-10 flex flex-col lg:flex-row gap-5 px-5">
                        <ListItemsPage 
                            items={items}
                            pagination={pagination}
                            baseUrl={baseUrl}
                            itemType={itemType}
                        />
                        <div className="hidden lg:flex lg:w-1/3">
                            <SideSearchPage />
                        </div>
                    </div>
                </section>
            </main>
            <FooterLayout />
        </>
    );
};

export default PageMainLayout;

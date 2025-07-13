import NameTag from '@/components/atoms/name-tag';
import ListItemsPage from '@/components/organisms/list-items-page';
import SideSearchPage from '@/components/organisms/side-search-page';
import { NameTagProvider } from '@/contexts/NameTagContext';
import React from 'react';

const JournalPageMainLayout = () => {
    return (
        <main>
            <section className="m-auto max-w-7xl bg-white pt-20 pb-8 sm:pt-22 sm:pb-12 lg:pt-24 lg:pb-16">
                <NameTagProvider name="JOURNALS">
                    <NameTag />
                </NameTagProvider>
                <div className="flex gap-5 py-10">
                    <ListItemsPage />
                    <SideSearchPage />
                </div>
            </section>
        </main>
    );
};

export default JournalPageMainLayout;

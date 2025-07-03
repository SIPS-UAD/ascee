import NameTag from '@/components/atoms/name-tag';
import { NameTagProvider } from '@/contexts/NameTagContext';
import React from 'react';

interface PageMainLayoutProps {
    nameTag: string;
}

const PageMainLayout: React.FC<PageMainLayoutProps> = ({ nameTag }) => {
    return (
        <main>
            <section className="m-auto h-screen max-w-7xl bg-white pt-20 pb-8 sm:pt-22 sm:pb-12 lg:pt-24 lg:pb-16">
                <NameTagProvider name={nameTag}>
                    <NameTag />
                </NameTagProvider>
                <div></div>
            </section>
        </main>
    );
};

export default PageMainLayout;

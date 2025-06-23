import React from 'react';

interface HomepageMainLayoutProps {
    children: React.ReactNode;
}

const HomepageMainLayout: React.FC<HomepageMainLayoutProps> = ({ children }) => {
    return (
        <main className="flex-grow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
    );
};

export default HomepageMainLayout;

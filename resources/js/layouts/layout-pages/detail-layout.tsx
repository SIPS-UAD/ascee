import CardListNoImage from '@/components/molecules/CardListNoImage'; // Updated import path
import React from 'react';
import FooterLayout from './footer-layout';
import HeaderLayout from './header-layout';
import { formatDate } from '@/lib/formatDate';

interface RelatedContentItem {
    id: number;
    date: string;
    title: string;
    publisher?: string;
}

interface DetailLayoutProps {
    contentType: 'news' | 'conferences' | 'careers' | 'events';
    title: string;
    date: string;
    publisher?: string;
    image?: string;
    content: string;
    relatedItems?: RelatedContentItem[];
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ contentType = 'news', title, date, publisher, image, content, relatedItems = [] }) => {
    // Configure display properties based on contentType
    const contentTypeConfig = {
        news: {
            category: 'NEWS',
            sidebarTitle: 'MORE NEWS',
            sidebarLinkPath: '/news',
            sidebarLinkText: 'See More News →',
            detailPath: '/news',
        },
        conferences: {
            category: 'CONFERENCES',
            sidebarTitle: 'MORE CONFERENCES',
            sidebarLinkPath: '/conferences', // Fixed: changed from /conference to /conferences
            sidebarLinkText: 'See More Conferences →',
            detailPath: '/conferences', // Fixed: changed from /conference to /conferences
        },
        events: {
            category: 'EVENTS',
            sidebarTitle: 'MORE EVENTS',
            sidebarLinkPath: '/events',
            sidebarLinkText: 'See More Events →',
            detailPath: '/events',
        },
        careers: {
            category: 'CAREERS',
            sidebarTitle: 'MORE CAREERS',
            sidebarLinkPath: '/careers',
            sidebarLinkText: 'See More Careers →',
            detailPath: '/careers',
        },
    };

    const config = contentTypeConfig[contentType];

    // Transform relatedItems to match CardListNoImage expected format
    const transformedItems = relatedItems.map((item) => {
        // Ensure date is in a valid format
        let formattedDate = item.date;
        
        // Try to standardize the date format if its notalready ISO format
        if (item.date && !isNaN(new Date(item.date).getTime())) {
            // Date is valid - format it using formatDate utility
            formattedDate = formatDate(item.date);
        } else {
            // Date is invalid - provide a fallback
            formattedDate = formatDate(new Date().toISOString());
        }
        
        return {
            id: item.id,
            date: formattedDate,
            title: item.title,
            publisher: item.publisher || 'ASCEE',
            category: contentType, // Adding this so the CardListNoImage component can create proper links
        };
    });

    return (
        <>
            <HeaderLayout />

            <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 pt-24 lg:flex-row">
                {/* Main Content Area */}
                <div className="flex-1">
                    {/* Category Tag */}
                    <div className="flex w-auto bg-white">
                        <div className="mr-3 h-8 w-1 bg-blue-500"></div>
                        <h1 className="text-lg font-bold">{config.category}</h1>
                    </div>

                    {/* Article Title */}
                    <h1 className="mb-2 pt-10 text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h1>

                    {/* Publication Info */}
                    <div className="mb-6 text-sm text-gray-500">
                        {date} {publisher && `| ${publisher}`}
                    </div>

                    {/* Featured Image */}
                    {image && (
                        <div className="mb-6">
                            <img src={image} alt={title} className="h-auto w-full rounded-md object-cover" />
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full flex-shrink-0 space-y-8 lg:w-80">
                    {/* Use CardListNoImage component */}
                    <CardListNoImage
                        sectionTitle={config.sidebarTitle}
                        moreLinkText={config.sidebarLinkText}
                        moreLinkUrl={config.sidebarLinkPath}
                        items={transformedItems}
                        accentColor="blue-500"
                    />
                </div>
            </main>

            <FooterLayout />
        </>
    );
};

export default DetailLayout;

import { formatDate } from '@/lib/formatDate';
import React from 'react';

interface Item {
    date?: string|undefined;
    title?: string;
    publisher?: string;
}

interface CardListNoImagePro {
    sectionTitle: string;
    moreLinkText: string;
    moreLinkUrl?: string;
    items?: Item[];
    accentColor?: string;
}

const CardListNoImage: React.FC<CardListNoImagePro> = ({ sectionTitle, moreLinkText, moreLinkUrl, items = [], accentColor = 'blue-500' }) => {
    const defaultItems = [
        { date: '14 JUNI 2024', title: 'Pengumuman Penerima ASCEE Grants', publisher: 'ASCEE' },
        { date: '10 JUNI 2024', title: 'Call for Papers: ASCEE Conference 2024', publisher: 'ASCEE' },
        { date: '5 JUNI 2024', title: 'Workshop: Research Methodology', publisher: 'ASCEE' },
        { date: '1 JUNI 2024', title: 'New Partnership Announcement', publisher: 'ASCEE' },
        { date: '25 MAY 2024', title: 'ASCEE Community Meeting', publisher: 'ASCEE' },
        { date: '20 MAY 2024', title: 'Publication Guidelines Update', publisher: 'ASCEE' },
    ];

    const displayItems = items.length > 0 ? items : defaultItems;

    return (
        <div className="bg-white">
            <div className="flex flex-col gap-2">
                {/* Accent line */}
                <div className={`border-b-4 border-${accentColor}`}></div>

                {/* Section header */}
                <h2 className="sm:text-md text-lg font-bold text-black">{sectionTitle}</h2>

                {/*  items */}
                <div className="flex w-full flex-col gap-1 rounded-lg">
                    {displayItems.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full rounded-sm border-b border-gray-200 bg-gray-200 p-2 py-2 transition-colors hover:bg-gray-50 ${index >= 3 ? 'hidden lg:block' : ''}`}
                        >
                            <p className="text-xs text-gray-500">{item.date ? formatDate(item.date) : ''}</p>
                            <h3 className="text-md font-bold text-black">{item.title}</h3>
                            <p className="text-xs text-gray-600">{item.publisher}</p>
                        </div>
                    ))}
                </div>

                {/* More link */}
                <a href={moreLinkUrl} className="self-end text-sm font-medium text-blue-600 hover:underline">
                    {moreLinkText}
                </a>
            </div>
        </div>
    );
};

export default CardListNoImage;

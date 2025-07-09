import { Link } from '@inertiajs/react';

interface Journal {
    id: number;
    title: string;
    image: string;
    category?: string;
}

interface JournalSectionMainProps {
    journals?: Journal[];
}

const JournalSectionMain = ({ journals = [] }: JournalSectionMainProps) => {
    // Default journals if no data is provided
    const defaultJournals = [
        {
            id: 1,
            title: 'International Journal of Translational Science',
            image: '/journal-1.jpg',
            category: 'Translational Science',
        },
        {
            id: 2,
            title: 'Structure',
            image: '/journal-2.jpg',
            category: 'Structural Biology',
        },
        {
            id: 3,
            title: 'Future Design',
            image: '/journal-3.jpg',
            category: 'Design Science',
        },
        {
            id: 4,
            title: 'Structure',
            image: '/journal-4.jpg',
            category: 'Materials Science',
        },
        {
            id: 5,
            title: 'Translational Medicine',
            image: '/journal-5.jpg',
            category: 'Medical Research',
        },
    ];

    const displayJournals = journals.length > 0 ? journals : defaultJournals;

    return (
        <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">JOURNALS</h2>
                    <div className="mx-auto h-1 w-20 bg-blue-500"></div>
                </div>

                {/* Journal Grid */}
                <div className="relative">
                    {/* Journal Cards Container */}
                    <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4">
                        {displayJournals.map((journal) => (
                            <div
                                key={journal.id}
                                className="w-48 flex-none rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
                            >
                                {/* Journal Cover Image */}
                                <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                                    <img
                                        src={journal.image}
                                        alt={journal.title}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        onError={(e) => {
                                            // Fallback placeholder if image fails to load
                                            e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="260" viewBox="0 0 200 260">
                          <rect width="200" height="260" fill="#f3f4f6"/>
                          <text x="100" y="130" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="14">Journal Cover</text>
                        </svg>
                      `)}`;
                                        }}
                                    />
                                </div>

                                {/* Journal Info */}
                                <div className="p-4">
                                    <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900">{journal.title}</h3>
                                    {journal.category && <p className="mb-3 text-xs text-gray-600">{journal.category}</p>}

                                    {/* Action Button */}
                                    <button className="w-full rounded bg-blue-500 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-blue-600">
                                        View Journal
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More Journals Link */}
                    <div className="mt-6 text-right">
                        <Link href="/journals" className="text-sm font-medium text-blue-500 hover:text-blue-600">
                            More Journals →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default JournalSectionMain;

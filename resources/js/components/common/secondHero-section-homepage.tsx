import { useSharedData } from '@/hooks/useSharedData';
import { Link } from '@inertiajs/react';
import CardListNoImage from '../CardListNoImage';
import WithImageOrganism from '../organisms/withImage-organism';

const SecondHeroSectionHomepage = () => {
    const { conferences } = useSharedData();

    return (
        <section className="bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
            <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
                <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
                    <div className="w-full lg:w-2/3">
                        <div className="border-b-4 border-blue-500"></div>
                        <h2 className="sm:text-md py-2 text-lg font-bold text-black">EVENTS</h2>
                        <WithImageOrganism />
                        <div className="mt-6 text-right">
                            <Link href="/events" className="text-sm font-medium text-blue-500 hover:text-blue-600">
                                More Events →
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <CardListNoImage
                            items={conferences.map((item) => ({
                                id: item.id_conferences,
                                date: item.date,
                                title: item.title,
                                category: 'conferences', // Changed to plural to match route pattern
                            }))}
                            sectionTitle="Conferences"
                            moreLinkText="More Conferences →"
                            moreLinkUrl="/conferences"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondHeroSectionHomepage;

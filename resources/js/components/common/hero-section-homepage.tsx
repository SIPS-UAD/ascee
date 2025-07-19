import { useSharedData } from '@/hooks/useSharedData';
import CardMain from '../atoms/card-main';
import CardListNoImage from '../molecules/CardListNoImage';
import CardListWithImage from '../molecules/CardListWithImage';
import { formatDate } from '@/lib/formatDate'; // Add this import

const HeroSectionHomepage = () => {
    const { news } = useSharedData();
    return (
        <section className="bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
            <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
                <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col gap-4 sm:gap-4">
                            {/* Main hero card */}
                            <CardMain />

                            {/* Cards grid */}
                            <div className="grid grid-cols-2 gap-3 pb-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <CardListWithImage type="CAREERS" useRandomImage={true} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <CardListNoImage
                            items={
                                news?.map((item) => ({
                                    id: item.id_news,
                                    date: item.formatted_date || formatDate(item.created_at || new Date().toISOString()),
                                    title: item.title,
                                    publisher: item.publisher || 'ASCEE',
                                    category: 'news',
                                })) || []
                            }
                            sectionTitle="NEWS"
                            moreLinkText="More News →"
                            moreLinkUrl="/news"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionHomepage;

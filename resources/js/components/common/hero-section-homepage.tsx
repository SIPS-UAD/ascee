import { useSharedData } from '@/hooks/useSharedData';
import HeroOrganism from '../organisms/hero-organism';
import CardListNoImage from '../CardListNoImage';

const HeroSectionHomepage = () => {
    const { news } = useSharedData();
    return (
        <section className="bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
            <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
                <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
                    <div className="w-full lg:w-2/3">
                        <HeroOrganism />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <CardListNoImage items={news} sectionTitle="NEWS" moreLinkText="More News" moreLinkUrl="/news" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionHomepage;

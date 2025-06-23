import HeroOrganism from '../organisms/hero-organism';
import NewsOrganism from '../organisms/news-organism';

const HeroSectionHomepage = () => {
    return (
        <section className="bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
            <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
                {/* On mobile: Stack vertically with less gap, On desktop: Side by side with more gap */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
                    {/* Hero section - Full width on mobile, 2/3 width on desktop */}
                    <div className="w-full lg:w-2/3">
                        <HeroOrganism />
                    </div>

                    {/* News section - Full width on mobile, 1/3 width on desktop */}
                    <div className="w-full lg:w-1/3">
                        <NewsOrganism />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionHomepage;

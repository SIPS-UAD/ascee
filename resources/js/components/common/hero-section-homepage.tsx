import HeroOrganism from '../organisms/hero-organism';
import NewsOrganism from '../organisms/news-organism';

const HeroSectionHomepage = () => {
    return (
        <section className="bg-white flex py-8 sm:py-12 lg:py-16">
            <div className="pt-4 pb-12 w-2/3">
                <HeroOrganism />
            </div>
            <NewsOrganism />
        </section>
    );
};

export default HeroSectionHomepage;

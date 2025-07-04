// import
import Quotes from '@/components/atoms/quotes';
import HeroSectionHomepage from '../../components/common/hero-section-homepage';
// import
import SecondHeroSectionHomepage from '../../components/common/secondHero-section-homepage';

const HomepageMainLayout = () => {
    return (
        <main>
            <HeroSectionHomepage />
            <Quotes />
            <SecondHeroSectionHomepage />
        </main>
    );
};

export default HomepageMainLayout;

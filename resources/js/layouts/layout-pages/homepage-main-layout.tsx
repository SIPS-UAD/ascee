// import
import Quotes from '@/components/atoms/quotes';
import HeroSectionHomepage from '../../components/common/hero-section-homepage';
// import
import SecondHeroSectionHomepage from '../../components/common/secondHero-section-homepage';
import JournalSectionMain from '@/components/organisms/journal-section-main';

const HomepageMainLayout = () => {
    return (
        <main>
            <HeroSectionHomepage />
            <Quotes />
            <SecondHeroSectionHomepage />
            <JournalSectionMain/>
        </main>
    );
};

export default HomepageMainLayout;

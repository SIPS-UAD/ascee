// import
import Quotes from '@/components/atoms/quotes';
import HeroSectionHomepage from '../../components/common/hero-section-homepage';
// import
import SecondHeroSectionHomepage from '../../components/common/secondHero-section-homepage';
import JournalSectionMain from '@/components/organisms/journal-section-main';
import { useSharedData } from '@/hooks/useSharedData';

const HomepageMainLayout = () => {
    const { journals } = useSharedData()    
    return (
        <main>
            <HeroSectionHomepage />
            <Quotes />
            <SecondHeroSectionHomepage />
            <JournalSectionMain journals={journals} />
        </main>
    );
};

export default HomepageMainLayout;

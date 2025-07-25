// import
import Quotes from '@/components/atoms/quotes';
import HeroSectionHomepage from '../../components/common/hero-section-homepage';
// import
import SecondHeroSectionHomepage from '../../components/common/secondHero-section-homepage';
import JournalSectionMain from '@/components/organisms/journal-section-main';
import { useSharedData } from '@/hooks/useSharedData';
import PartnerSection from '@/components/organisms/partner-section';

const HomepageMainLayout = () => {
    const { journals } = useSharedData()    
    return (
        <main>
            <HeroSectionHomepage />
            <Quotes />
            <SecondHeroSectionHomepage />
            <JournalSectionMain journals={journals} />
            <PartnerSection />
        </main>
    );
};

export default HomepageMainLayout;

import HeroSectionHomepage from '@/components/common/hero-section-homepage';
import HomepageHeaderLayout from '@/layouts/homepages/homepage-header-layout';
import HomepageMainLayout from '@/layouts/homepages/homepage-main-layout';
import { Head } from '@inertiajs/react';

export default function HomePage() {
    return (
        <>
            <Head title="Welcome to ASCEE" />

            {/* Header Layout with Navigation */}
            <HomepageHeaderLayout>
                {/* Main Content Layout */}
                <HomepageMainLayout>
                    {/* Hero Section */}
                    <HeroSectionHomepage />

                    {/* Additional homepage sections can be added here */}
                    {/* <NewsSection /> */}
                    {/* <EventsSection /> */}
                    {/* <PartnersSection /> */}
                </HomepageMainLayout>
            </HomepageHeaderLayout>
        </>
    );
}

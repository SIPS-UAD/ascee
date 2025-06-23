import HomepageHeaderLayout from '@/layouts/homepage/homepage-header-layout';

export default function LandingPage() {
    return (
        <HomepageHeaderLayout title="Welcome to ASCEE">
            {/* Your landing page content goes here */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-4xl font-bold">Welcome to ASCEE</h1>
                    {/* More content... */}
                </div>
            </div>
        </HomepageHeaderLayout>
    );
}

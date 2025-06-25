import NoImageOrganism from '../organisms/noImage-organism';
import WithImageOrganism from '../organisms/withImage-organism';

const SecondHeroSectionHomepage = () => {
    return (
        <section className="bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
            <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
                <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
                    <div className="w-full lg:w-2/3">
                        <div className="border-b-4 border-blue-500"></div>
                        <h2 className="sm:text-md text-lg font-bold text-black py-2">EVENTS</h2>
                        <WithImageOrganism />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <NoImageOrganism title="CONFERENCE" moreTitle="More Events" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondHeroSectionHomepage;

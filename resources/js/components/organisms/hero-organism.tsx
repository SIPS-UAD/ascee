import CardMain from '../atoms/card-main';
import CardWithImage from '../atoms/card-with-image';

const HeroOrganism = () => {
    return (
        <div className="flex flex-col gap-4 sm:gap-4">
            {/* Main hero card */}
            <CardMain />

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-3 pb-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }, (_, index) => (
                    <CardWithImage key={index} type="NEWS" useRandomImage={true} />
                ))}
            </div>
        </div>
    );
};

export default HeroOrganism;

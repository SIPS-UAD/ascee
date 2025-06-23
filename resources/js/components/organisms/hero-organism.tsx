import CardMain from '../atoms/card-main';
import ContainerCardsWithImage from '../containers/container-cards-with-image';

const HeroOrganism = () => {
    return (
        <div className="flex flex-col gap-4 sm:gap-4">
            {/* Main hero card */}
            <CardMain />

            {/* Cards grid */}
            <ContainerCardsWithImage />
        </div>
    );
};

export default HeroOrganism;

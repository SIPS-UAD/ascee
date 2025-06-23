import CardMain from '../atoms/card-main';
import ContainerCardsWithImage from '../containers/container-cards-with-image';

const HeroOrganism = () => {
    return (
        <div className="mx-auto flex flex-col gap-4 w-auto max-w-7xl  px-2 py-8 sm:px-4 lg:px-4">
            <CardMain />
            <ContainerCardsWithImage />
        </div>
    );
};

export default HeroOrganism;

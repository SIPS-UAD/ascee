import CardNoImage from '../atoms/card-no-image';

const ContainerCardsNoImage = () => {
    return (
        <div className="flex w-full flex-col gap-1 rounded-lg">
            <CardNoImage />
            <CardNoImage />
            <CardNoImage />
            <CardNoImage className="hidden lg:block" />
            <CardNoImage className="hidden lg:block" />
            <CardNoImage className="hidden lg:block" />
        </div>
    );
};

export default ContainerCardsNoImage;

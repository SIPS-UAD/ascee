import CardWithImage from '../atoms/card-with-image';

const ContainerCardsWithImage = () => {
    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 pb-2">
            <CardWithImage type="EVENT" useRandomImage={true} />
            <CardWithImage type="NEWS" useRandomImage={true} />
            <CardWithImage type="NEWS" useRandomImage={true}  />
            <CardWithImage type="NEWS" useRandomImage={true}  />
        </div>
    );
};

export default ContainerCardsWithImage;

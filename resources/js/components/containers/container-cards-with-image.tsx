import CardWithImage from '../atoms/card-with-image';

const ContainerCardsWithImage = () => {
    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardWithImage type="EVENT" useRandomImage={true} />
            <CardWithImage type="WEBINAR" useRandomImage={true} />
            <CardWithImage type="WEBINAR" useRandomImage={true}  />
            <CardWithImage type="WEBINAR" useRandomImage={true}  />
        </div>
    );
};

export default ContainerCardsWithImage;

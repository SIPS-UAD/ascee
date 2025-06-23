import CardWithImage from '../atoms/card-with-image';

const ContainerCardsWithImage = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CardWithImage type="EVENT" imageSrc="/images/event-image.jpg" />
            <CardWithImage type="WEBINAR" imageSrc="/images/webinar1-image.jpg" />
            <CardWithImage type="WEBINAR" imageSrc="/images/webinar2-image.jpg" />
            <CardWithImage type="WEBINAR" imageSrc="/images/webinar3-image.jpg" />
        </div>
    );
};

export default ContainerCardsWithImage;

import CardNoImage from '../atoms/card-no-image';

const ContainerCardsNoImage = () => {
    return (
        <div className="flex flex-col rounded-lg  w-full gap-1">    
         
            <CardNoImage />
            <CardNoImage />
            <CardNoImage />
            <CardNoImage />
            <CardNoImage />
            <CardNoImage />
        </div>
    );
};

export default ContainerCardsNoImage;

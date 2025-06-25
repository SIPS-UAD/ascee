
import ContainerCardsNoImage from '../containers/container-cards-no-image';

interface NoImageOrganismProps {
    title: string;
    moreTitle: string;
}

const NoImageOrganism = ({ title, moreTitle }: NoImageOrganismProps) => {
    return (
        <div className="bg-white">
            <div className="flex flex-col gap-2">
                {/* Accent line */}
                <div className="border-b-4 border-blue-500"></div>

                {/* News header with "More News" link */}
                <h2 className="sm:text-md text-lg font-bold text-black">{title}</h2>
                {/* News items */}
                <ContainerCardsNoImage />
                <a href="/news" className="self-end text-sm font-medium text-blue-600 hover:underline">
                    {moreTitle}
                </a>
            </div>
        </div>
    );
};

export default NoImageOrganism;

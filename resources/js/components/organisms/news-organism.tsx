import ContainerCardsNoImage from '../containers/container-cards-no-image';

const NewsOrganism = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col gap-2">
                {/* Accent line */}
                <div className="border-b-4 border-blue-500"></div>

                {/* News header with "More News" link */}
                <h2 className="text-lg font-bold text-black sm:text-md">NEWS</h2>
                {/* News items */}
                <ContainerCardsNoImage />
                <a href="/news" className="text-sm font-medium text-blue-600 hover:underline self-end">
                    More News
                </a>
            </div>
        </div>
    );
};

export default NewsOrganism;

import ContainerCardsNoImage from '../containers/container-cards-no-image';

const NewsOrganism = () => {
    return (
        <div className="w-md  py-12">
            <div className="mx-auto  px-4 sm:px-4 lg:px-4 flex flex-col gap-1">
                {/* line */}
                <div className="border-b-4 border-blue-400 mb-4"></div>
                
                {/* News Section */}
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-md font-bold text-black">NEWS</h2>
                </div>
                <ContainerCardsNoImage />
                <a href="/news" className="text-sm text-blue-600 hover:underline  self-end">
                    More News
                </a>
            </div>
        </div>
    );
};

export default NewsOrganism;

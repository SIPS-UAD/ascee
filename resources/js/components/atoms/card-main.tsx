const CardMain = () => {
    return (
        <div className="group relative h-80 w-full overflow-hidden rounded-xl">
            <img
                src="/images/conference.jpg"
                alt="ASCEE Conference"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                    <div className="mb-4 flex items-center gap-4">
                        <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-bold">WEBINAR</span>
                        <span className="text-sm font-medium">14 JUNI 2024</span>
                    </div>
                    <h1 className="mb-2 text-3xl font-bold">ASCEE Conference in Japan</h1>
                    <h2 className="text-sm font-medium text-gray-300">ASCEE</h2>
                </div>
            </div>
        </div>
    );
};

export default CardMain;

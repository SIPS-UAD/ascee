const Quotes = () => {
    return (
        <div className="mx-auto w-full lg:max-w-7xl px-6 py-12 text-center bg-gray-100 rounded-xl">
            {/* Quote Text */}
            <blockquote className="mb-8 text-2xl leading-relaxed font-light text-gray-800 italic md:text-5xl font-quote">
                "We read to know we're not alone."
            </blockquote>

            {/* Author */}
            <footer className="text-gray-600">
                <cite className="font-medium text-red-600">William Nicholson</cite>
                <div className="mt-1 text-sm">Shadowlands: A Play</div>
            </footer>
        </div>
    );
};

export default Quotes;

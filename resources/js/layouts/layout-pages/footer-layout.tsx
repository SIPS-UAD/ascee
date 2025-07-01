const FooterLayout = () => {
    return (
        <footer className="w-full border-t-gray-200 border-t-30 bg-[#00A0FF] text-white">
            {/* Main footer content */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Social Media */}
                    <div>
                        <h3 className="mb-6 text-center font-bold sm:text-left">FOLLOW US</h3>
                        <div className="mb-4 flex justify-center space-x-4 sm:justify-start">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#00A0FF]"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#00A0FF]"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#00A0FF]"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </a>
                        </div>
                        <div className="mb-6 flex justify-center space-x-4 sm:justify-start">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#00A0FF]"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#00A0FF]"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3-4c1.93 0 3.5 1.57 3.5 3.5S11.93 14 10 14s-3.5-1.57-3.5-3.5S8.07 7 10 7zm5 0c-.83 0-1.5.67-1.5 1.5S14.17 10 15 10s1.5-.67 1.5-1.5S15.83 7 15 7zm3 4c-.83 0-1.5.67-1.5 1.5S17.17 14 18 14s1.5-.67 1.5-1.5S18.83 11 18 11z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#00A0FF]"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex justify-center sm:justify-start">
                            <button className="rounded border border-white px-6 py-2 transition-colors hover:bg-white hover:text-[#00A0FF]">
                                EMAIL UPDATE
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="mb-6 text-center font-bold sm:text-left">USEFUL LINKS</h3>
                        <ul className="space-y-3 text-center sm:text-left">
                            <li>
                                <a href="#" className="hover:underline">
                                    DATA SCIENCE WEEKEND
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    2017 3RD ICSITECH
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    UTM BIG DATA CENTRE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    IWBDA
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: About */}
                    <div>
                        <h3 className="mb-6 text-center font-bold sm:text-left">ABOUT</h3>
                        <ul className="space-y-3 text-center sm:text-left">
                            <li>
                                <a href="#" className="hover:underline">
                                    ABOUT ASCEE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    TEAM
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: ASCEE Logo and Info */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="mb-4 flex items-center">
                            <div className="mr-2 h-5 w-5 rotate-45 bg-white"></div>
                            <h2 className="text-3xl font-bold">ASCEE</h2> 
                        </div>
                        <p className="text-center text-sm lg:text-left">
                            Association for Scientific
                            <br />
                            Computing Electronics and
                            <br />
                            Engineering
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div className="border-t border-blue-400 bg-white text-gray-400">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 md:flex-row">
                    <p className="text-sm">Copyright © ASCEE {new Date().getFullYear()}. All right reserved.</p>
                    <div className="mt-4 flex space-x-4 md:mt-0 ">
                        {/* Placeholder for partner logos */}
                        <div className="flex h-8 w-24 items-center justify-center rounded bg-white/10 text-xs"><img src="/BDClogo.png" alt="" /></div>
                        <div className="flex h-8 w-16 items-center justify-center rounded bg-white/10 text-xs"><img src="/logoascee.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterLayout;

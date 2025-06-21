import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function LandingPage() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome to ASCEE">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header with navigation */}
                <header className="w-full px-6 py-6 sm:px-8 lg:px-12">
                    <nav className="flex justify-end">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link
                                    href={route('login')}
                                    className="rounded-md border border-gray-300 px-6 py-2 transition-colors hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </nav>
                </header>

                {/* Main content */}
                <main className="flex flex-grow items-center justify-center p-6">
                    <div className="w-full max-w-4xl text-center">
                        {/* Logo/Icon */}
                        <div className="mb-10">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                                    <path d="M2 17L12 22L22 17"></path>
                                    <path d="M2 12L12 17L22 12"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Main heading */}
                        <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">Welcome to ASCEE</h1>

                        {/* Subheading */}
                        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
                            Your comprehensive platform for academic collaboration, research sharing, and professional networking.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href={route('register')}
                                className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-indigo-700"
                            >
                                Get Started
                            </Link>
                            <Link
                                href={route('login')}
                                className="rounded-md border border-gray-300 px-8 py-4 text-lg font-medium transition-colors hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
                            >
                                Sign In
                            </Link>
                        </div>

                        {/* Features section */}
                        <div className="mt-24 grid gap-8 md:grid-cols-3">
                            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-100 dark:bg-indigo-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold dark:text-white">Research Sharing</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Share your academic research and collaborate with peers across the globe.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-100 dark:bg-indigo-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold dark:text-white">Community Building</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Connect with colleagues and build your professional network with like-minded academics.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-100 dark:bg-indigo-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold dark:text-white">Events & Conferences</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Stay updated with upcoming events and academic conferences in your field.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-gray-200 py-8 dark:border-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} ASCEE. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

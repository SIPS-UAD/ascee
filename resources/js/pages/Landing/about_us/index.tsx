import HeaderLayout from '@/layouts/layout-pages/header-layout';
import FooterLayout from '@/layouts/layout-pages/footer-layout';
import { Head } from '@inertiajs/react';
import { NameTagProvider } from '@/contexts/NameTagContext';
import NameTag from '@/components/atoms/name-tag';

export default function Index({ aboutUs }: { aboutUs: any }) {
    console.log(aboutUs);
    let offices = aboutUs?.corporate_offices;
    if (typeof offices === 'string') {
        try {
            offices = JSON.parse(offices);
        } catch {
            offices = [];
        }
    }
    return (
        <>
            <Head title="ABOUT US" />
            <HeaderLayout />
            
            <main className="max-w-5xl mx-auto px-6 py-20 mt-16 space-y-12">
                <NameTagProvider name='ABOUT US'>
                    <NameTag />
                </NameTagProvider>
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#00A0FF]">Overview</h2>
                    {aboutUs?.overview && (() => {
                        const [intro, ...listLines] = aboutUs.overview.split(/\n\s*\d+\.\s/);
                        const listItems = aboutUs.overview.match(/\d+\.\s(.+)/g);
                        return (
                            <>
                                <p className="text-gray-800 mb-4">{intro.trim()}</p>
                                {listItems && (
                                    <ol className="list-decimal list-inside text-gray-800 mb-4 space-y-1">
                                        {listItems.map((item: string, idx: number) => (
                                            <li key={idx}>{item.replace(/^\d+\.\s/, '')}</li>
                                        ))}
                                    </ol>
                                )}
                            </>
                        );
                    })()}
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#00A0FF]">Vision</h2>
                    <p className="text-gray-800 mb-4 whitespace-pre-line">
                        {aboutUs?.vision}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-[#00A0FF]">Mision</h2>
                    <p className="text-gray-800 mb-4 whitespace-pre-line">
                        {aboutUs?.mission}
                    </p>
                </section>

                <section>
                <h2 className="text-2xl font-bold mb-4 text-[#00A0FF]">Corporate Offices</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.isArray(offices)
                        ? offices.map((office: any, idx: number) => (
                            <div key={idx}>
                                <strong>{office.country}</strong>
                                <div className="whitespace-pre-line">{office.address}</div>
                                {Array.isArray(office.email) ? (
                                    office.email.map((mail: string, i: number) => (
                                        <div key={i}>
                                            <a href={`mailto:${mail}`} className="text-[#00A0FF] underline">{mail}</a>
                                        </div>
                                    ))
                                ) : (
                                    <a href={`mailto:${office.email}`} className="text-[#00A0FF] underline">{office.email}</a>
                                )}
                            </div>
                        ))
                        : null
                    }
                </div>
            </section>
            </main>
            <FooterLayout/>
        </>
    );
}

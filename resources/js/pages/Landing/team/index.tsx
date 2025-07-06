import HeaderLayout from '@/layouts/layout-pages/header-layout';
import FooterLayout from '@/layouts/layout-pages/footer-layout';
import { Head } from '@inertiajs/react';
import { NameTagProvider } from '@/contexts/NameTagContext';
import NameTag from '@/components/atoms/name-tag';

interface TeamMember {
    id_team: number;
    name: string;
    position: string;
    credentials: string;
    category: string;
    society?: string | null;
    admin_id: number;
}

interface TeamPageProps {
    team: TeamMember[];
}

export default function Index({ team }: TeamPageProps) {
    // Group team members by category
    const groupedTeam = team.reduce((acc, member) => {
        if (!acc[member.category]) {
            acc[member.category] = [];
        }
        acc[member.category].push(member);
        return acc;
    }, {} as Record<string, TeamMember[]>);

    // Group society members by society type
    const societies = team.filter(member => member.society).reduce((acc, member) => {
        const society = member.society as string;
        if (!acc[society]) {
            acc[society] = { executives: [], members: [] };
        }
        
        if (member.position === 'Executive Committee') {
            acc[society].executives.push(member);
        } else {
            acc[society].members.push(member);
        }
        
        return acc;
    }, {} as Record<string, { executives: TeamMember[], members: TeamMember[] }>);

    return (
        <>
            <Head title="TEAM" />
            <HeaderLayout />
            <main className="max-w-5xl mx-auto px-6 py-20 mt-16 space-y-12">
                <NameTagProvider name='TEAM'>
                    <NameTag />
                </NameTagProvider>

                {/* Executive Officers */}
                {groupedTeam['Executive Officers'] && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Executive Officers</h2>
                        <div className="space-y-6">
                            {/* Chair and Vice-Chair */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {groupedTeam['Executive Officers']
                                    .filter(member => ['Chair', 'Vice-Chair'].includes(member.position))
                                    .map(member => (
                                        <div key={member.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                            <h3 className="font-semibold text-lg">{member.position}</h3>
                                            <p>{member.name}{member.credentials ? `, ${member.credentials}` : ''}</p>
                                        </div>
                                    ))}
                            </div>

                            {/* Secretary and Treasurer */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Group secretaries together */}
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="font-semibold text-lg">Secretary</h3>
                                    {groupedTeam['Executive Officers']
                                        .filter(member => member.position === 'Secretary')
                                        .map((member, idx) => (
                                            <p key={member.id_team}>
                                                {member.name}{member.credentials ? `, ${member.credentials}` : ''}
                                                {idx === 0 && groupedTeam['Executive Officers'].filter(m => m.position === 'Secretary').length > 1 && ' | '}
                                            </p>
                                        ))}
                                </div>

                                {/* Treasurer */}
                                {groupedTeam['Executive Officers']
                                    .filter(member => member.position === 'Treasurer')
                                    .map(member => (
                                        <div key={member.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                            <h3 className="font-semibold text-lg">{member.position}</h3>
                                            <p>{member.name}{member.credentials ? `, ${member.credentials}` : ''}</p>
                                        </div>
                                    ))}
                            </div>

                            <h3 className="text-xl font-semibold mt-8 mb-4">Members</h3>

                            {/* Group directors by position type */}
                            {['Publication Director', 'Research and Development Director', 'Public Relation Director'].map(position => {
                                const directors = groupedTeam['Executive Officers'].filter(member => member.position === position);
                                if (directors.length === 0) return null;
                                
                                return (
                                    <div key={position} className="bg-white p-4 rounded-lg shadow-md mb-4">
                                        <h3 className="font-semibold text-lg">{position}</h3>
                                        <p>
                                            {directors.map((director, idx) => (
                                                <span key={director.id_team}>
                                                    {director.name}{director.credentials ? `, ${director.credentials}` : ''}
                                                    {idx < directors.length - 1 && ' | '}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Sections */}
                {groupedTeam['Sections'] && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Sections</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {groupedTeam['Sections'].map(member => (
                                <div key={member.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="font-semibold text-lg">{member.position}</h3>
                                    <p>{member.name}{member.credentials ? `, ${member.credentials}` : ''}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Branches and Chapters */}
                {groupedTeam['Branches and Chapters'] && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Branches and Chapters</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {groupedTeam['Branches and Chapters'].map(member => (
                                <div key={member.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="font-semibold text-lg">{member.position}</h3>
                                    <p>{member.name}{member.credentials ? `, ${member.credentials}` : ''}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Societies */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Societies</h2>
                    
                    {/* Render each society */}
                    {Object.entries(societies).map(([societyName, { executives, members }]) => (
                        <div key={societyName} className="mb-10">
                            <h3 className="text-xl font-bold mt-6 mb-4">{societyName} Society</h3>
                            
                            {/* Executive Committee */}
                            {executives.length > 0 && (
                                <div className="mb-4">
                                    <h4 className="text-lg font-semibold mb-2">Executive Committee</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {executives.map(exec => (
                                            <div key={exec.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                                <p>{exec.name}{exec.credentials ? `, ${exec.credentials}` : ''}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Members */}
                            {members.length > 0 && (
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Members</h4>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {members.map(member => (
                                            <div key={member.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                                <p>{member.name}{member.credentials ? `, ${member.credentials}` : ''}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* Staff */}
                {groupedTeam['Staff'] && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">ASCEE Staff</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {groupedTeam['Staff'].map(member => (
                                <div key={member.id_team} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="font-semibold text-lg">{member.position}</h3>
                                    <p>{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <FooterLayout/>
        </>
    );
}

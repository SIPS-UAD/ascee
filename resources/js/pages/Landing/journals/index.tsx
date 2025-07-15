import FooterLayout from '@/layouts/layout-pages/footer-layout';
import HeaderLayout from '@/layouts/layout-pages/header-layout';
import Quotes from '@/components/atoms/quotes';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

interface Admin {
  id_admin: number;
  email: string;
  username: string;
}

interface Journal {
  id_journal: number;
  title: string;
  image?: string;
  admin_id: number;
  admin: Admin;
  created_at: string;
  updated_at: string;
}

interface JournalsProps {
  journals: Journal[];
}

export default function Index({ journals }: JournalsProps) {
  // Track failed image loads
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (journalId: number) => {
    setFailedImages(prev => ({
      ...prev,
      [journalId]: true
    }));
  };

  return (
    <>
      <Head title="JOURNALS" />
      <HeaderLayout />
      
      <main>
        <section className="m-auto max-w-7xl bg-white pt-20 pb-8 sm:pt-22 sm:pb-12 lg:pt-24 lg:pb-16">
          {/* JOURNALS header with blue border */}
          <div className="flex w-auto bg-white">
            <div className="mr-3 h-8 w-1 bg-blue-500">
              <h1 className="text-lg font-bold ml-4">JOURNALS</h1>
            </div>          
          </div>

          <div className="py-10 flex flex-col md:flex-row gap-5">
            {/* Left side - Journal grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {journals.map(journal => (
                  <div key={journal.id_journal} className="flex flex-col">
                    <a href="#" className="block overflow-hidden">
                      {!failedImages[journal.id_journal] && journal.image ? (
                        <img 
                          src={`/storage/${journal.image}`}
                          alt={journal.title} 
                          className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300"
                          onError={() => handleImageError(journal.id_journal)}
                        />
                      ) : (
                        <div className="w-full aspect-[3/4] bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                          <div className="text-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs text-gray-500 mt-2">Journal Cover</p>
                          </div>
                        </div>
                      )}
                    </a>
                    <div className="mt-2 text-center">
                      <h3 className="font-bold text-sm">{journal.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Quotes */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <Quotes/>
            </div>
          </div>
        </section>
      </main>
      
      <FooterLayout />
    </>
  );

}

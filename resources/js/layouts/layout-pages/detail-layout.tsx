import React from 'react';
import { Link } from '@inertiajs/react';
import HeaderLayout from './header-layout';
import FooterLayout from './footer-layout';

interface RelatedContentItem {
  id: number;
  date: string;
  title: string;
  publisher?: string;
}

interface DetailLayoutProps {
  contentType: 'news' | 'conferences' | 'careers' | 'events';
  title: string;
  date: string;
  publisher?: string;
  image?: string;
  content: string;
  relatedItems?: RelatedContentItem[];
}

const DetailLayout: React.FC<DetailLayoutProps> = ({
  contentType = 'news',
  title,
  date,
  publisher,
  image,
  content,
  relatedItems = []
}) => {
  // Configure display properties based on contentType
  const contentTypeConfig = {
    news: {
      category: 'NEWS',
      sidebarTitle: 'MORE NEWS',
      sidebarLinkPath: '/news',
      sidebarLinkText: 'See More News',
      detailPath: '/news'
    },
    conferences: {
      category: 'CONFERENCES',
      sidebarTitle: 'MORE CONFERENCES',
      sidebarLinkPath: '/conferences',
      sidebarLinkText: 'See More Conferences',
      detailPath: '/conferences'
    },
    events: {
      category: 'EVENTS',
      sidebarTitle: 'MORE EVENTS',
      sidebarLinkPath: '/events',
      sidebarLinkText: 'See More Events',
      detailPath: '/events'
    },
    careers: {
      category: 'CAREERS',
      sidebarTitle: 'MORE CAREERS',
      sidebarLinkPath: '/careers',
      sidebarLinkText: 'See More Careers',
      detailPath: '/careers'
    }
  };

  const config = contentTypeConfig[contentType];

  return (
    <>
      <HeaderLayout />
      
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 pt-24">
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Category Tag */}
          <div className="flex w-auto bg-white">
            <div className="mr-3 h-8 w-1 bg-blue-500"></div>
            <h1 className="text-lg font-bold">{config.category}</h1>
        </div>
          
          {/* Article Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 pt-10">
            {title}
          </h1>
          
          {/* Publication Info */}
          <div className="text-sm text-gray-500 mb-6">
            {date} {publisher && `| ${publisher}`}
          </div>
          
          {/* Featured Image */}
          {image && (
            <div className="mb-6">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          )}
          
          {/* Article Content */}
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-8">
          {/* Related Content Section */}
          {relatedItems.length > 0 && (
            <div>
              <div className="border-b-4 border-blue-500 mb-4"></div>
              <h2 className="font-bold text-lg mb-4">{config.sidebarTitle}</h2>
              
              <div className="space-y-4">
                {relatedItems.map((item) => (
                  <div key={item.id} className="border-b pb-4">
                    <div className="text-xs text-gray-500 mb-1">{item.date}</div>
                    <h3 className="font-bold text-sm">
                      <Link href={`${config.detailPath}/${item.id}`} className="hover:text-blue-600">
                        {item.title}
                      </Link>
                    </h3>
                    {item.publisher && <div className="text-xs text-gray-500 mt-1">{item.publisher}</div>}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link href={config.sidebarLinkPath} className="text-blue-600 text-sm hover:underline">
                  {config.sidebarLinkText}
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <FooterLayout />
    </>
  );
};

export default DetailLayout;
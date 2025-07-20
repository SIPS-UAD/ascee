import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import CardWithImageLandscape from '../atoms/card-with-image-lanscape';
import React from 'react';

interface ListItemsPageProps {
    items?: Array<{
        id?: number;
        id_news?: number;
        id_events?: number;
        id_conferences?: number;
        id_education?: number;
        title: string;
        date?: string;
        organization?: string;
        imageSrc?: string;
        type?: 'EVENT' | 'NEWS' | 'CAREER' | 'CONFERENCE';
    }>;
    pagination?: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    baseUrl?: string;
    itemType?: 'news' | 'events' | 'careers' | 'conferences';
}

const ListItemsPage: React.FC<ListItemsPageProps> = ({ 
    items = [], 
    pagination, 
    baseUrl = '',
    itemType = 'news'
}) => {
    const getDetailUrl = (item: any) => {
        let itemId: number | undefined;
        
        switch (itemType) {
            case 'news':
                itemId = item.id_news || item.id;
                return itemId ? `/news/${itemId}` : '#';
            case 'events':
                itemId = item.id_events || item.id;
                return itemId ? `/events/${itemId}` : '#';
            case 'careers':
                itemId = item.id_education || item.id;
                return itemId ? `/careers/${itemId}` : '#';
            case 'conferences':
                itemId = item.id_conferences || item.id;
                return itemId ? `/conferences/${itemId}` : '#';
            default:
                itemId = item.id_news || item.id;
                return itemId ? `/news/${itemId}` : '#';
        }
    };

    return (
        <div className="flex w-full lg:w-2/3 flex-col ">
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <CardWithImageLandscape
                        key={item.id || item.id_news || item.id_events || item.id_conferences || item.id_education}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        type={item.type}
                        url={getDetailUrl(item)}
                    />
                ))}
                
            </div>
            
            {pagination && (
                <div className="my-4">
                    <Pagination>
                        <PaginationContent>
                            {pagination.current_page > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious href={`${baseUrl}?page=${pagination.current_page - 1}`} />
                                </PaginationItem>
                            )}
                            
                            {/* Generate page numbers */}
                            {Array.from({ length: pagination.last_page }, (_, i) => i + 1)
                                .filter(page => 
                                    page === 1 || 
                                    page === pagination.last_page || 
                                    Math.abs(page - pagination.current_page) <= 1
                                )
                                .map((page, index, array) => (
                                    <React.Fragment key={page}>
                                        {index > 0 && array[index - 1] !== page - 1 && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                        <PaginationItem>
                                            <PaginationLink 
                                                href={`${baseUrl}?page=${page}`}
                                                isActive={page === pagination.current_page}
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </React.Fragment>
                                ))}
                            
                            {pagination.current_page < pagination.last_page && (
                                <PaginationItem>
                                    <PaginationNext href={`${baseUrl}?page=${pagination.current_page + 1}`} />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
            
        </div>
    );
};

export default ListItemsPage;

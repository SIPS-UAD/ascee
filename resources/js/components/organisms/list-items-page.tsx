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
        id: number;
        title: string;
        date?: string;
        organization?: string;
        imageSrc?: string;
        type?: 'EVENT' | 'NEWS' | 'ANNOUNCEMENT';
    }>;
    pagination?: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    baseUrl?: string;
}

const ListItemsPage: React.FC<ListItemsPageProps> = ({ 
    items = [], 
    pagination, 
    baseUrl = '' 
}) => {
    return (
        <div className="flex w-2/3 flex-col">
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <CardWithImageLandscape
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        organization={item.organization}
                        imageSrc={item.imageSrc}
                        type={item.type}
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

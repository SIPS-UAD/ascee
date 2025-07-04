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

const ListItemsPage = () => {
    return (
        <div className="flex w-2/3 flex-col ">
            <div className="flex flex-col gap-2">
                <CardWithImageLandscape />
                <CardWithImageLandscape />
                <CardWithImageLandscape />
                <CardWithImageLandscape />
                <CardWithImageLandscape />
                <CardWithImageLandscape />
            </div>
            <div className="my-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default ListItemsPage;

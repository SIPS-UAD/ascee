import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useSharedData } from '@/hooks/useSharedData';
import Autoplay from 'embla-carousel-autoplay';
import logoAscee from '../../../../public/logoascee.png';

const PartnerSection = () => {
    const { partners } = useSharedData();

    console.log('Partners:', partners);
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Partners</h2>
                    <p className="text-lg text-gray-600">Trusted by leading organizations worldwide</p>
                </div>

                {/* Partners Carousel */}
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                        }),
                    ]}
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {partners.map((partner) => (
                            <CarouselItem key={partner.id_partner} className="basis-1/2 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5">
                                <div className="p-2">
                                    <Card className="border-0 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                        <CardContent className="flex h-32 items-center justify-center p-8">
                                            <a
                                                href={partner.website || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-full w-full items-center justify-center"
                                            >
                                                <img
                                                    src={logoAscee}
                                                    alt={partner.name}
                                                    className="max-h-full max-w-full object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
                                                    onError={(e) => {
                                                        e.currentTarget.src = '/placeholder-logo.png';
                                                    }}
                                                />
                                            </a>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default PartnerSection;

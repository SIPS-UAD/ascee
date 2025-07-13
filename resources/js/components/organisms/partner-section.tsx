import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const PartnerSection = () => {
  // Partner logos data - you can replace these with your actual partner logos
  const partners = [
    {
      id: 1,
      name: "BDC Logo",
      logo: "/logoascee.png",
      website: "#"
    },
    {
      id: 2,
      name: "ASCEE",
      logo: "/logoascee.png",
      website: "#"
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/logoascee.png",
      website: "#"
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "/logoascee.png",
      website: "#"
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "/logoascee.png",
      website: "#"
    },
    {
      id: 6,
      name: "Partner 6",
      logo: "/logoascee.png",
      website: "#"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">
            Trusted by leading organizations worldwide
          </p>
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
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner) => (
              <CarouselItem 
                key={partner.id} 
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-2">
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex items-center justify-center p-8 h-32">
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                          onError={(e) => {
                            // Fallback if image fails to load
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
import { Phone } from "lucide-react";
interface RelatedPackagesProps {
    onOpenLeadForm: (packageInterest: string) => void;
}

const packages = [
    {
        image: './assets/honeymoon-kerala.dim_600x400.jpg',
        name: 'Kerala Honeymoon',
        duration: '4N / 5D',
        price: '₹16,999',
        highlight: 'Romantic houseboat stay with flower-decorated rooms & candlelit dinners.',
        interest: 'Kerala Honeymoon',
    },
    {
        image: './assets/family-kerala.dim_600x400.jpg',
        name: 'Kerala Family Tour',
        duration: '6N / 7D',
        price: '₹17,999',
        highlight: 'Fun-filled family adventure with wildlife, beaches & backwater cruises.',
        interest: 'Kerala Family Tour',
    },
    {
        image: './assets/luxury-kerala.dim_600x400.jpg',
        name: 'Luxury Kerala',
        duration: '5N / 6D',
        price: '₹27,499',
        highlight: 'Premium resorts, infinity pools & exclusive experiences in God\'s Own Country.',
        interest: 'Luxury Kerala',
    },
    {
        image: './assets/short-kerala.dim_600x400.jpg',
        name: 'Short 3N/4D Getaway',
        duration: '3N / 4D',
        price: '₹7,999',
        highlight: 'Quick escape to Kerala\'s best — tea estates, waterfalls & backwaters.',
        interest: 'Short Kerala Getaway',
    },
];

export default function RelatedPackages({ onOpenLeadForm }: RelatedPackagesProps) {
    return (
        <section
            className="py-16 md:py-24 bg-cream"
            aria-label="Related Kerala packages"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        More Options
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        Related Kerala Packages
                    </h2>
                    <p className="font-body text-gray-500 text-base">
                        Find the perfect Kerala experience for your travel style and budget.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {packages.map((pkg, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-card card-hover border"
                            style={{ borderColor: 'oklch(0.88 0.015 95)' }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[3/2] overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 left-3">
                                    <span
                                        className="font-body text-xs font-bold px-2.5 py-1 rounded-full text-white"
                                        style={{ backgroundColor: 'oklch(0.24 0.1 155)' }}
                                    >
                                        {pkg.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'oklch(0.18 0.02 200)' }}>
                                    {pkg.name}
                                </h3>
                                <p className="font-body text-sm text-gray-500 mb-3 leading-snug">
                                    {pkg.highlight}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-body text-xs text-gray-400 uppercase tracking-wide">Starting from</p>
                                        <p
                                            className="font-display text-xl font-bold"
                                            style={{ color: 'oklch(0.32 0.12 155)' }}
                                        >
                                            {pkg.price}
                                            <span className="font-body text-sm font-normal text-gray-400"> /person</span>
                                        </p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
  {/* Call Now */}
  <a
    href="tel:+918197417772"
    className="flex-1 h-12 flex items-center justify-center gap-2 px-5 rounded-lg text-white text-[15px] font-medium whitespace-nowrap"
    style={{ backgroundColor: "#2E3192" }}
  >
    <Phone size={18} strokeWidth={2.2} />
    Call Now
  </a>

  {/* WhatsApp Now */}
  <a
    href={`https://wa.me/918197417772?text=${encodeURIComponent(
      `Hi IndiaTourPackages, I want to Enquire about the ${pkg.name} (${pkg.duration}) package.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 h-12 flex items-center justify-center gap-2 px-5 rounded-lg text-white text-[15px] font-medium whitespace-nowrap"
    style={{ backgroundColor: "#1FA855" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="18"
      height="18"
      fill="white"
    >
      <path d="M16 .396C7.163.396 0 7.558 0 16.396c0 2.885.76 5.705 2.204 8.188L0 32l7.64-2.162a15.93 15.93 0 0 0 8.36 2.378h.006c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.132a13.07 13.07 0 0 1-6.652-1.82l-.476-.282-4.534 1.284 1.21-4.42-.31-.455A13.06 13.06 0 0 1 2.93 16.4c0-7.21 5.86-13.07 13.07-13.07 7.21 0 13.07 5.86 13.07 13.07 0 7.21-5.86 13.07-13.07 13.07zm7.287-9.822c-.398-.199-2.355-1.162-2.72-1.295-.365-.132-.63-.199-.896.199-.265.398-1.028 1.295-1.26 1.56-.232.265-.465.298-.863.099-.398-.199-1.68-.619-3.2-1.974-1.183-1.055-1.982-2.355-2.214-2.753-.232-.398-.025-.613.174-.812.18-.179.398-.465.597-.697.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.697-.099-.199-.896-2.157-1.228-2.953-.323-.777-.652-.67-.896-.683l-.763-.014c-.265 0-.697.099-1.06.497-.365.398-1.39 1.36-1.39 3.316 0 1.956 1.423 3.848 1.622 4.113.199.265 2.804 4.285 6.8 6.006.952.411 1.695.656 2.274.84.955.304 1.824.261 2.51.158.765-.114 2.355-.962 2.687-1.893.332-.93.332-1.727.232-1.893-.099-.166-.365-.265-.763-.464z"/>
    </svg>
    WhatsApp Now
  </a>
</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seasonal note */}
                <p className="text-center font-body text-sm text-gray-400 italic">
                    ✦ Seasonal offers available for limited departures.
                </p>
            </div>
        </section>
    );
}

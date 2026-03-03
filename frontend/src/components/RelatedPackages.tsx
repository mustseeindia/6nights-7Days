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
                                    <div className="flex gap-2 mt-3">
  {/* Call Now */}
  <a
    href="tel:+918197417772"
    className="flex-1 h-9 flex items-center justify-center gap-1.5 px-3 rounded-md text-white text-[13.5px] font-medium whitespace-nowrap"
    style={{ backgroundColor: "#2E3192" }}
  >
    <Phone size={15} strokeWidth={2.2} />
    Call Now
  </a>

  {/* WhatsApp Now */}
  <a
    href={`https://wa.me/918197417772?text=${encodeURIComponent(
      `Hi IndiaTourPackages, I want to Enquire about the ${pkg.name} (${pkg.duration}) package.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 h-9 flex items-center justify-center gap-1.5 px-3 rounded-md text-white text-[13.5px] font-medium whitespace-nowrap"
    style={{ backgroundColor: "#25D366" }}
  >
    {/* Clean WhatsApp SVG (Properly Centered) */}
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="white"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42zM12.07 21.6a9.67 9.67 0 01-4.93-1.35l-.35-.21-3.74.98 1-3.64-.23-.37a9.66 9.66 0 01-1.5-5.09c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.03 1.01 6.86 2.83a9.63 9.63 0 012.83 6.86c0 5.35-4.35 9.7-9.69 9.7zm5.33-7.25c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.18.29-.73.93-.9 1.12-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.55.15-.18.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.49.07-.75.37-.26.29-1 1-1 2.44 0 1.44 1.03 2.83 1.18 3.03.15.2 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/>
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

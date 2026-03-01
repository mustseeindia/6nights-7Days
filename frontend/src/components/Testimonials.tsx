import { Star } from 'lucide-react';

const testimonials = [
    {
    name: 'Sneha R.',
    city: 'Chennai',
    rating: 5,
    review:
        'This Kerala trip was exactly what we needed for a short romantic getaway. Munnar was beautiful with scenic viewpoints and waterfalls, Thekkady was calm and green, and the houseboat stay was unforgettable. The team was very responsive on WhatsApp and took care of everything. Highly recommended for couples!',
    trip: 'Kerala 4N/5D Package',
},
    {
    name: 'Rohit S.',
    city: 'Bangalore',
    rating: 4,
    review:
        'Traveling from Bangalore with family, we wanted a short and comfortable Kerala trip, and this 4N/5D itinerary was perfect. Munnar scenery was stunning, Thekkady added a nice nature experience, and the houseboat stay was unforgettable for the kids. The team was responsive throughout and there were no hidden charges. Would definitely book again.',
    trip: 'Kerala 4N/5D Package',
},
    {
    name: 'Neha G.',
    city: 'Delhi',
    rating: 5,
    review:
        'We were honestly surprised at how affordable this 4N/5D Kerala package was compared to other quotes we received. Starting around ₹8,599 per person, it was great value for money without compromising on comfort. The hotels were clean, the cab service was punctual, and the houseboat stay was the highlight of our trip. Traveling from Delhi, we wanted everything smooth and hassle-free, and IndiaTourPackages delivered exactly that. Excellent service and support throughout!',
    trip: 'Kerala 4N/5D Package',
},
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'oklch(0.72 0.12 75)' }} />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            className="py-16 md:py-24"
            style={{ backgroundColor: 'white' }}
            aria-label="Customer testimonials"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-xs font-bold tracking-widest uppercase mb-3 font-body px-3 py-1 rounded-full"
                        style={{ color: 'oklch(0.32 0.12 155)', backgroundColor: 'oklch(0.92 0.04 155)' }}
                    >
                        Traveler Reviews
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.18 0.02 200)' }}>
                        What Our Travelers Say
                    </h2>
                    <p className="font-body text-gray-500 text-base">
                        Real experiences from real travelers who explored Kerala with us.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="rounded-2xl p-6 border card-hover shadow-card flex flex-col"
                            style={{ backgroundColor: 'oklch(0.98 0.012 95)', borderColor: 'oklch(0.88 0.015 95)' }}
                        >
                            {/* Quote mark */}
                            <div
                                className="text-4xl font-display leading-none mb-3 -mt-1"
                                style={{ color: 'oklch(0.88 0.08 80)' }}
                            >
                                "
                            </div>

                            <p className="font-body text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                                {t.review}
                            </p>

                            <div className="border-t pt-4" style={{ borderColor: 'oklch(0.88 0.015 95)' }}>
                                <StarRating count={t.rating} />
                                <div className="mt-2">
                                    <p className="font-body font-bold text-sm" style={{ color: 'oklch(0.18 0.02 200)' }}>
                                        {t.name}
                                    </p>
                                    <p className="font-body text-xs text-gray-400">
                                        {t.city} · {t.trip}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

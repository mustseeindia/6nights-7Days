import { Star } from 'lucide-react';

const testimonials = [
    {
    name: 'Priya & Arjun M.',
    city: 'Delhi',
    rating: 5,
    review:
        'We booked the 6N/7D Kerala tour for our anniversary, and it turned out to be one of our best trips ever. Munnar’s tea gardens and cool weather were refreshing, Thekkady’s wildlife experience was unique, and Alleppey houseboat stay was the highlight — peaceful, scenic, and very romantic. Kovalam beaches were clean and relaxing, and the visit to Trivandrum temples added a cultural touch. Hotels were well chosen, the driver was polite and knowledgeable, and the entire trip was smooth without any stress. The team stayed connected on WhatsApp throughout the journey which gave us a lot of confidence. Definitely worth the money and highly recommended for couples and families.'
    ,
    trip: 'Kerala 6N/7D Package',
},
    {
    name: 'Ankit Mehra',
    city: 'Mumbai',
    rating: 5,
    review:
        'We booked the 6N/7D Kerala tour with our family after comparing multiple options, and this was definitely the right choice. From Munnar’s beautiful tea gardens to Thekkady’s greenery and the peaceful Alleppey houseboat stay, every destination was well planned. Kovalam beach was relaxing, and Trivandrum sightseeing was smooth without any rush. The hotels were clean, comfortable, and safe for family travel. Our driver was very polite and always on time, which made the journey stress-free. What really stood out was the team’s responsiveness on WhatsApp and honest pricing — exactly what was promised was delivered. Traveling from Mumbai with kids can be hectic, but this trip was handled professionally from start to finish. Highly recommended for families looking for a reliable Kerala package.'
    ,
    trip: 'Kerala 6N/7D Package',
},
   {
    name: 'Sourav D.',
    city: 'Kolkata',
    rating: 5,
    review:
        'We booked the 4N/5D Kerala package from Kolkata after seeing multiple options online, and this one offered the best value starting around ₹8,599 per person. Honestly, we were a bit unsure initially because the price was lower than other quotes, but the experience exceeded our expectations. Munnar was scenic and peaceful, Thekkady was refreshing, and the Alleppey houseboat stay was absolutely memorable. Hotels were neat, the driver was courteous, and everything went as planned without any hidden costs. The team stayed connected on WhatsApp throughout the trip which gave us a lot of confidence. It was a smooth, well-managed vacation and definitely worth the money. Highly recommended for anyone looking for an affordable Kerala trip.'
    ,
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

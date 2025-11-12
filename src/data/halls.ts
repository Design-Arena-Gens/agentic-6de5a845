export type AvailabilityStatus = "available" | "few-left" | "booked";

export interface HallAvailability {
  date: string;
  price: number;
  status: AvailabilityStatus;
}

export interface HallHighlight {
  icon: string;
  label: string;
  description: string;
}

export interface Hall {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: {
    area: string;
    city: string;
    state: string;
  };
  capacity: {
    seated: number;
    floating: number;
    minimumGuests: number;
  };
  pricing: {
    currency: string;
    weekend: number;
    weekday: number;
  };
  rating: number;
  reviewCount: number;
  coverImage: string;
  gallery: string[];
  description: string;
  features: string[];
  amenities: string[];
  policies: string[];
  highlights: HallHighlight[];
  availability: HallAvailability[];
}

export interface VenueCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export const venueCategories: VenueCategory[] = [
  {
    id: "luxury",
    title: "Luxury Halls",
    icon: "✨",
    description: "Grand ballrooms with premium decor and services.",
  },
  {
    id: "garden",
    title: "Garden Venues",
    icon: "🌿",
    description: "Outdoor spaces with lush landscaping and ambiance.",
  },
  {
    id: "rooftop",
    title: "Rooftop",
    icon: "🌇",
    description: "City skyline views for cocktail weddings and parties.",
  },
  {
    id: "banquet",
    title: "Banquet Suites",
    icon: "🥂",
    description: "Flexible halls ideal for receptions and engagements.",
  },
  {
    id: "budget",
    title: "Budget Friendly",
    icon: "💡",
    description: "Affordable venues with essential amenities included.",
  },
  {
    id: "destination",
    title: "Destination",
    icon: "✈️",
    description: "Scenic getaways for multi-day celebrations.",
  },
];

export const halls: Hall[] = [
  {
    id: "harmony-hall",
    slug: "harmony-hall",
    name: "Harmony Grandeur Hall",
    tagline: "A lakeside ballroom with cascading garden terraces",
    location: {
      area: "Emerald Lake District",
      city: "Austin",
      state: "Texas",
    },
    capacity: {
      seated: 320,
      floating: 500,
      minimumGuests: 120,
    },
    pricing: {
      currency: "USD",
      weekend: 11500,
      weekday: 8900,
    },
    rating: 4.9,
    reviewCount: 218,
    coverImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Harmony Grandeur Hall pairs a crystal-canopied ballroom with cascading terraces that open up to panoramic lake views. The venue includes a private bridal suite, customizable lighting scenes, in-house catering, and a smart AV stack with hybrid streaming support.",
    features: [
      "Dedicated event concierge team",
      "Modular stage with LED backdrop",
      "Hybrid seating layouts for ceremonies and receptions",
      "Complimentary valet for up to 120 vehicles",
    ],
    amenities: [
      "In-house gourmet catering",
      "Lakefront cocktail promenade",
      "Smart climate zones",
      "Bridal and groom lounges",
      "Rain-safe retractable roof",
      "On-site luxury suite block",
      "Advanced lighting design",
    ],
    policies: [
      "Outside catering allowed for desserts",
      "Sound curfew at 1:00 AM",
      "Decor vendors must be pre-approved",
      "Damage deposit refundable within 10 business days",
    ],
    highlights: [
      {
        icon: "🌅",
        label: "Sunset Terrace",
        description: "Ceremonial deck perfectly aligned with golden-hour views.",
      },
      {
        icon: "🎻",
        label: "Live Ensemble Ready",
        description: "Acoustic planning optimised for quartets and DJs alike.",
      },
      {
        icon: "🛰️",
        label: "Hybrid Events",
        description: "Broadcast-ready equipment for virtual guest participation.",
      },
    ],
    availability: [
      { date: "2024-07-05", price: 11200, status: "few-left" },
      { date: "2024-07-12", price: 11500, status: "booked" },
      { date: "2024-07-19", price: 11500, status: "available" },
      { date: "2024-07-26", price: 11800, status: "available" },
    ],
  },
  {
    id: "rosewood-palace",
    slug: "rosewood-palace",
    name: "Rosewood Palace & Gardens",
    tagline: "A regal sanctuary with immersive floral storytelling",
    location: {
      area: "Willow Heights",
      city: "San Francisco",
      state: "California",
    },
    capacity: {
      seated: 250,
      floating: 420,
      minimumGuests: 80,
    },
    pricing: {
      currency: "USD",
      weekend: 9800,
      weekday: 7800,
    },
    rating: 4.8,
    reviewCount: 164,
    coverImage:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Rosewood Palace blends neo-classical architecture with immersive floral design. The glasshouse conservatory flows into a ballroom lined with handcrafted woodwork and programmable chandeliers to match your event palette.",
    features: [
      "Signature floral design atelier",
      "Custom menu curation with Michelin-trained chefs",
      "Immersive projection mapping backdrop",
      "Dedicated cultural ceremony spaces",
    ],
    amenities: [
      "Private garden for ceremonies",
      "In-house mixology bar program",
      "Wedding party spa access",
      "Dedicated kids lounge and nanny services",
      "360-degree photo booth",
      "Vendor-ready load-in bay",
    ],
    policies: [
      "Outside caterers allowed for cultural menus",
      "Quiet hours begin at midnight",
      "Licensed bar service required",
      "Security coverage included for 6 hours",
    ],
    highlights: [
      {
        icon: "🌸",
        label: "Seasonal Blooms",
        description: "Every event includes a bespoke floral storytelling plan.",
      },
      {
        icon: "🎆",
        label: "Lightscapes",
        description: "Dynamic lighting sequences tailored to your entrance moments.",
      },
      {
        icon: "🥂",
        label: "Champagne Library",
        description: "Curated bubbly experiences with tasting notes.",
      },
    ],
    availability: [
      { date: "2024-07-06", price: 9400, status: "available" },
      { date: "2024-07-13", price: 9800, status: "few-left" },
      { date: "2024-07-20", price: 10100, status: "booked" },
      { date: "2024-07-27", price: 9900, status: "available" },
    ],
  },
  {
    id: "skyline-loft",
    slug: "skyline-loft",
    name: "Skyline Nexus Loft",
    tagline: "A rooftop gallery with immersive city panoramas",
    location: {
      area: "Tribeca Arts District",
      city: "New York",
      state: "New York",
    },
    capacity: {
      seated: 180,
      floating: 300,
      minimumGuests: 60,
    },
    pricing: {
      currency: "USD",
      weekend: 8600,
      weekday: 6900,
    },
    rating: 4.7,
    reviewCount: 141,
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Skyline Nexus Loft elevates celebrations with wraparound views, an open-air cocktail lounge, and a gallery-inspired interior. The venue includes projection mapping, bespoke mixology stations, and acoustic tuning for both DJs and live bands.",
    features: [
      "Outdoor rooftop lounge with retractable canopy",
      "Art gallery wall for personalized installations",
      "Digital concierge for guest arrival coordination",
      "Modular lounge furniture",
    ],
    amenities: [
      "High-speed guest Wi-Fi",
      "Commercial kitchen access",
      "Smart lighting scenes",
      "Dedicated vendor prep suites",
      "Automated check-in kiosk",
      "Late-night noise optimized panels",
    ],
    policies: [
      "After-hours events require city permit",
      "Third-party vendors must provide insurance",
      "Pets allowed during ceremony with handler",
      "Smoking limited to designated terrace",
    ],
    highlights: [
      {
        icon: "🌃",
        label: "Skyline Suite",
        description: "Curated backdrops for vow exchanges and first looks.",
      },
      {
        icon: "🕺",
        label: "Nightlife Ready",
        description: "Lighting and sound design inspired by boutique lounges.",
      },
      {
        icon: "🍸",
        label: "Mixology Studio",
        description: "Interactive cocktail classes for pre-event activities.",
      },
    ],
    availability: [
      { date: "2024-07-04", price: 7200, status: "booked" },
      { date: "2024-07-11", price: 7400, status: "few-left" },
      { date: "2024-07-18", price: 7600, status: "available" },
      { date: "2024-07-25", price: 7800, status: "available" },
    ],
  },
];

export const getHallBySlug = (slug: string) =>
  halls.find((hall) => hall.slug === slug);

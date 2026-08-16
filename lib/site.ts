export const site = {
  name: "clean & shine",
  tagline: "Thorough home and office cleaning across Cleveland",
  phoneHref: "tel:+12168349636",
  smsHref: "sms:+12168349636",
  email: "hello@cleanandshine.example",
  emailHref: "mailto:hello@cleanandshine.example",
  hours: "Mon–Sat, 8am–6pm",
  city: "Cleveland",
  owner: {
    name: "Layla",
    role: "Owner",
    photo: "/images/layla.jpg",
  },
  address: {
    street: "142 Clean Ave",
    locality: "Cleveland",
    region: "OH",
    postalCode: "44114",
    country: "US",
  },
  googleBusinessUrl: "https://www.google.com/maps",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Cleveland%2C%20OH&t=&z=12&ie=UTF8&iwloc=&output=embed",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "residential",
    title: "Residential",
    copy: "Weekly or biweekly home cleans that keep kitchens, baths, and living spaces consistently fresh.",
    price: "From $120 / visit",
  },
  {
    slug: "commercial",
    title: "Commercial",
    copy: "After-hours cleaning for offices, studios, and retail so your space is ready for the next day.",
    price: "From $180 / visit",
  },
  {
    slug: "deep-clean",
    title: "Deep clean",
    copy: "A thorough reset for neglected corners, baseboards, appliances, and high-touch surfaces.",
    price: "From $220 / visit",
  },
  {
    slug: "move",
    title: "Move-in / move-out",
    copy: "Detailed turnover cleans that help deposits clear and new spaces feel immediately livable.",
    price: "From $250 / visit",
  },
  {
    slug: "recurring",
    title: "Recurring plans",
    copy: "Set a weekly or biweekly rhythm and lock in priority scheduling with a consistent team.",
    price: "Save 10–15% vs. one-off",
  },
] as const;

export const pricingTiers = [
  {
    name: "Refresh",
    price: "$120+",
    cadence: "per visit",
    bestFor: "Studios & 1-bed homes",
    includes: [
      "Kitchen & bathroom reset",
      "Dust, vacuum, mop",
      "Trash emptied",
      "Surface wipe-down",
    ],
  },
  {
    name: "Standard",
    price: "$165+",
    cadence: "per visit",
    bestFor: "Most 2–3 bed homes",
    includes: [
      "Everything in Refresh",
      "Bedrooms & living areas",
      "Inside microwave",
      "Baseboards spot-clean",
    ],
  },
  {
    name: "Deep",
    price: "$220+",
    cadence: "per visit",
    bestFor: "Seasonal resets & turnovers",
    includes: [
      "Everything in Standard",
      "Inside fridge & oven",
      "Cabinet fronts & detail work",
      "Move-ready finish",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "They show up on time, leave the place sparkling, and somehow never make it feel invasive. We’ve been on a biweekly plan for a year.",
    name: "Maya R.",
    detail: "Ohio City · Recurring home clean",
  },
  {
    quote:
      "Our office looks better every Monday than it did when we cleaned it ourselves. Clear pricing, no surprises.",
    name: "Jordan L.",
    detail: "Downtown · Commercial weekly",
  },
  {
    quote:
      "Move-out clean got our deposit back in full. Detail-oriented without being fussy about the process.",
    name: "Priya S.",
    detail: "Lakewood · Move-out",
  },
  {
    quote:
      "Eco products on request, careful with our kid’s toys, and the kitchen always smells like a fresh start — not chemicals.",
    name: "Chris & Ana",
    detail: "Cleveland Heights · Deep clean",
  },
] as const;

export const serviceAreas = [
  "Downtown",
  "Ohio City",
  "Tremont",
  "Detroit Shoreway",
  "University Circle",
  "Cleveland Heights",
  "Lakewood",
  "Shaker Heights",
  "Parma",
  "West Park",
] as const;

/** Client locations across Cleveland */
export const clientPins = [
  {
    address: "2696 Cranlyn Rd, Shaker Heights, OH 44122",
    area: "Shaker Heights",
    lat: 41.48314,
    lng: -81.51862,
    featured: true,
  },
  {
    address: "2141 W 28th St, Cleveland, OH",
    area: "Ohio City",
    lat: 41.4842,
    lng: -81.7108,
  },
  {
    address: "200 Public Square, Cleveland, OH",
    area: "Downtown",
    lat: 41.4995,
    lng: -81.6944,
  },
  {
    address: "2393 Professor Ave, Cleveland, OH",
    area: "Tremont",
    lat: 41.4768,
    lng: -81.6949,
  },
  {
    address: "14600 Detroit Ave, Lakewood, OH",
    area: "Lakewood",
    lat: 41.4851,
    lng: -81.7982,
  },
  {
    address: "12417 Cedar Rd, Cleveland Heights, OH",
    area: "Cleveland Heights",
    lat: 41.5012,
    lng: -81.5648,
  },
  {
    address: "3400 Fairmount Blvd, Cleveland Heights, OH",
    area: "Cleveland Heights",
    lat: 41.4938,
    lng: -81.5582,
  },
  {
    address: "11150 Euclid Ave, Cleveland, OH",
    area: "University Circle",
    lat: 41.5043,
    lng: -81.6084,
  },
  {
    address: "16708 Chagrin Blvd, Shaker Heights, OH",
    area: "Shaker Heights",
    lat: 41.4648,
    lng: -81.5274,
  },
  {
    address: "5400 Pearl Rd, Parma, OH",
    area: "Parma",
    lat: 41.3912,
    lng: -81.7284,
  },
  {
    address: "15812 Lorain Ave, Cleveland, OH",
    area: "West Park",
    lat: 41.4518,
    lng: -81.8086,
  },
  {
    address: "6501 Detroit Ave, Cleveland, OH",
    area: "Detroit Shoreway",
    lat: 41.4836,
    lng: -81.7324,
  },
  {
    address: "11801 Clifton Blvd, Lakewood, OH",
    area: "Lakewood",
    lat: 41.4902,
    lng: -81.7688,
  },
] as const;

export const trustBadges = [
  { icon: "user-check", label: "Background-checked team" },
  { icon: "star", label: "4.9 average from local reviews" },
] as const;

export const faqs = [
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Not at all. Most clients provide access instructions or a lockbox code, and our background-checked team handles the rest. You'll get a note when the job's done.",
  },
  {
    question: "Do you bring your own supplies and equipment?",
    answer:
      "Yes — standard and eco-friendly options are included in every visit at no extra cost. Just let us know if you have a preference or specific products you'd like us to use.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We ask for 24 hours' notice for reschedules or cancellations. Anything less may incur a small fee to cover the reserved time slot.",
  },
  {
    question: "How do you handle pricing for larger or unusual spaces?",
    answer:
      "The prices listed are starting points for typical spaces. When you request a quote, we'll confirm size and condition and send back a firm number before booking anything.",
  },
  {
    question: "Are you insured if something gets damaged?",
    answer:
      "Yes, we're fully insured and bonded. If anything is ever damaged during a clean, reach out within 48 hours and we'll make it right.",
  },
] as const;

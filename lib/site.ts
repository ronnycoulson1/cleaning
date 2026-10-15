export const site = {
  name: "Shine & Clean",
  tagline: "Thorough home and office cleaning across Cleveland",
  phoneHref: "tel:+12168349636",
  smsHref: "sms:+12168349636",
  email: "hello@shineandclean.example",
  emailHref: "mailto:hello@shineandclean.example",
  hours: "Mon–Sat, 8am–6pm",
  city: "Cleveland",
  owner: {
    name: "Leyla",
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
  { href: "/pricing", label: "Estimate" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustPills = [
  "No contracts, ever",
  "Supplies included",
  "Insured & bonded",
] as const;

export const howWeClean = [
  {
    num: "01",
    title: "High-touch surfaces first",
    copy: "Light switches, doorknobs, handles, and bathroom surfaces get wiped with a sanitizing solution on every visit.",
  },
  {
    num: "02",
    title: "Products you can trust",
    copy: "We bring professional supplies — eco-friendly options available — not a mystery mix from the trunk.",
  },
  {
    num: "03",
    title: "Microfiber mopping",
    copy: "Floors are mopped with microfiber so dirt lifts instead of smearing around.",
  },
] as const;

export const whatWeClean = [
  "Kitchens & appliances",
  "Bathrooms",
  "Bedrooms & living areas",
  "Floors & baseboards",
  "Dusting & high-touch spots",
  "Offices & common areas",
] as const;

export const bookingSteps = [
  {
    num: "01",
    title: "Tell us the space",
    copy: "Size, timing, and what you need cleaned.",
  },
  {
    num: "02",
    title: "Get an estimate",
    copy: "Leyla sends a clear quote before anything is booked.",
  },
  {
    num: "03",
    title: "We clean",
    copy: "On time, careful, and thorough.",
  },
] as const;

export const services = [
  {
    slug: "residential",
    label: "Homes",
    title: "Residential cleaning",
    copy: "Weekly or biweekly home cleans that keep kitchens, baths, and living spaces consistently fresh.",
  },
  {
    slug: "commercial",
    label: "Offices",
    title: "Commercial cleaning",
    copy: "After-hours cleaning for offices, studios, and retail so your space is ready for the next day.",
  },
  {
    slug: "deep-clean",
    label: "Deep clean",
    title: "Deep cleaning",
    copy: "A thorough reset for neglected corners, baseboards, appliances, and high-touch surfaces.",
  },
  {
    slug: "move",
    label: "Move-out",
    title: "Move-in / move-out",
    copy: "Detailed turnover cleans that help deposits clear and new spaces feel immediately livable.",
  },
  {
    slug: "recurring",
    label: "Plans",
    title: "Recurring plans",
    copy: "Set a weekly or biweekly rhythm with a consistent team.",
  },
] as const;

export const values = [
  {
    title: "Local & personal",
    copy: "You work with Leyla and the people she trusts — not a rotating franchise crew.",
  },
  {
    title: "Careful products",
    copy: "Professional supplies with eco-friendly options when you want them.",
  },
  {
    title: "Clear estimates",
    copy: "A free quote before anything is booked. No surprise pricing.",
  },
] as const;

export const estimateFactors = [
  {
    title: "Size of the space",
    copy: "Square footage and number of rooms change the time needed.",
  },
  {
    title: "Condition",
    copy: "A light refresh costs differently than a deep reset or move-out.",
  },
  {
    title: "How often",
    copy: "One-time, weekly, or biweekly — frequency affects the estimate.",
  },
  {
    title: "Extras you need",
    copy: "Inside appliances, cabinets, or special requests are priced into the quote.",
  },
] as const;

/** Real client quotes only — leave empty until Leyla provides them */
export const testimonials: ReadonlyArray<{
  quote: string;
  name: string;
  detail: string;
}> = [];

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

/** Approximate Greater Cleveland service footprint (no street addresses) */
export const serviceAreaPolygon = [
  [41.53, -81.82],
  [41.54, -81.72],
  [41.53, -81.58],
  [41.5, -81.5],
  [41.45, -81.48],
  [41.39, -81.55],
  [41.38, -81.72],
  [41.42, -81.82],
  [41.48, -81.85],
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
    question: "How much does a cleaning cost?",
    answer:
      "Message Leyla with a few details about your space and you’ll get a clear estimate before anything is booked.",
  },
  {
    question: "Are you insured if something gets damaged?",
    answer:
      "Yes, we're fully insured and bonded. If anything is ever damaged during a clean, reach out within 48 hours and we'll make it right.",
  },
] as const;

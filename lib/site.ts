export const site = {
  name: "Saltwater Systems",
  legalName: "SNAPPER MARINE, LLC",
  shortName: "Saltwater Systems",
  tagline: "Aquarium service, installation, and maintenance — saltwater and freshwater",
  domain: "saltwatersystem.net",
  // Temporary public contact address. Change here (and DEFAULT_NOTIFY_TO in
  // app/api/book/route.ts) if the mailbox should be different once it is live.
  email: "jbarnes@saltwatersystem.net",
  serviceAreaSummary: "Broward, Palm Beach, Martin, and St. Lucie counties (Florida)",
  serviceAreas: [
    { name: "Broward County", note: "Florida service area" },
    { name: "Palm Beach County", note: "Florida service area" },
    { name: "Martin County", note: "Florida service area" },
    { name: "St. Lucie County", note: "Florida service area" },
  ],
  fictitiousNameNotice:
    "Saltwater Systems is a fictitious name of Snapper Marine, LLC.",
  sisterBrands: [
    { name: "Snapper Marine", url: "https://snappermarine.com", note: "mobile marine service" },
    { name: "Snapper Marine Charters", url: "https://snappermarinecharters.com", note: "fishing and sightseeing charters" },
  ],
  placeholders: {
    price: "[Price TBD]",
    planDetails: "[Maintenance plan details TBD]",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Request Service" },
] as const;

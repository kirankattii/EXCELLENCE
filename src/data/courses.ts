export type CourseTrack = "diploma" | "certificate" | "award" | "rpl";

export type CourseIconName =
  | "chef"
  | "cake"
  | "ship"
  | "utensils"
  | "hotel"
  | "wine"
  | "award";

export interface CourseProgram {
  id: string;
  level: "CTH Level 2" | "CTH Level 1" | "CTH RPL";
  track: CourseTrack;
  trackLabel: string;
  title: string;
  shortTitle: string;
  eligibility: string;
  duration: string;
  shortDuration: string;
  idealFor: string;
  description: string;
  skills: string[];
  image: string;
  imageAlt: string;
  iconName: CourseIconName;
}

export const COURSE_PROGRAMS: CourseProgram[] = [
  {
    id: "diploma-culinary",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "CTH Level 2 Diploma in Culinary Skills",
    shortTitle: "Diploma in Culinary Skills",
    eligibility: "10th Pass or Equivalent",
    duration: "6 Months (with practical training & assessments)",
    shortDuration: "6 Months",
    idealFor:
      "Aspiring chefs, hotel school graduates, or food enthusiasts seeking international certification",
    description:
      "Comprehensive commercial cookery training: master classical knife work, stocks, mother sauces, butchery, international culinary techniques, kitchen brigade coordination, and HACCP food safety standards.",
    skills: [
      "Classical Sauces & Stocks",
      "Poultry, Meat & Seafood Prep",
      "Fine Dining Plating",
      "Kitchen Safety & Food Hygiene",
    ],
    image: "/images/culinary-hero.jpg",
    imageAlt: "Diploma in Culinary Skills training at Excellence Education Academy",
    iconName: "chef",
  },
  {
    id: "diploma-patisserie",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "CTH Level 2 Diploma in Patisserie and Confectionery Skills",
    shortTitle: "Diploma in Patisserie & Confectionery",
    eligibility: "10th Pass or Equivalent",
    duration: "6 Months (with practical training & assessments)",
    shortDuration: "6 Months",
    idealFor:
      "Future pastry chefs, home bakers, or professionals enhancing bakery knowledge",
    description:
      "Master the delicate art of French pastry, artisan breads, laminated viennoiserie, chocolate tempering, entremets, modern gateaux, and sugar confectioneries in our bakery and pastry lab.",
    skills: [
      "Artisan Viennoiserie & Croissants",
      "Chocolate Tempering & Pralines",
      "Modern Plated Desserts",
      "Bakery & Confectionery Arts",
    ],
    image: "/images/patisserie-skills.jpg",
    imageAlt: "Diploma in Patisserie & Confectionery Skills",
    iconName: "cake",
  },
  {
    id: "diploma-cruise",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "CTH Level 2 Diploma in Cruise Hospitality Services",
    shortTitle: "Diploma in Cruise Hospitality",
    eligibility: "10th Pass or Equivalent",
    duration: "6 Months (with practical training & assessments)",
    shortDuration: "6 Months",
    idealFor: "Aspiring hospitality professionals aiming for the global cruise line industry",
    description:
      "Designed specifically for international cruise liners. Covers maritime hospitality standards, high-volume dining service, cabin & guest relations, and onboard safety awareness.",
    skills: [
      "Cruise Ship F&B Operations",
      "International Guest Protocol",
      "Banqueting & Gala Service",
      "Maritime Hospitality Standards",
    ],
    image: "/images/cruise-hospitality.jpg",
    imageAlt: "Diploma in Cruise Hospitality Services",
    iconName: "ship",
  },
  {
    id: "cert-bartending",
    level: "CTH Level 2",
    track: "certificate",
    trackLabel: "Certification",
    title: "CTH Level 2 Certificate in Professional Bartending Skills",
    shortTitle: "Professional Bartending Skills",
    eligibility: "10th Pass or Equivalent",
    duration: "3 Months (with practical training & assessments)",
    shortDuration: "3 Months",
    idealFor:
      "Bartending learners and professionals aspiring for international certification",
    description:
      "Master classic and craft cocktail mixology, beverage preparation, bar inventory, glassware service, and responsible beverage operations for luxury lounges, hotels, and cruise bars.",
    skills: [
      "Classic & Craft Mixology",
      "Bar Equipment & Service",
      "Beverage Costing & Inventory",
      "Responsible Beverage Service",
    ],
    image: "/images/barista-beverage.jpg",
    imageAlt: "Professional Bartending Skills Certification",
    iconName: "wine",
  },
  {
    id: "cert-front-of-house",
    level: "CTH Level 2",
    track: "certificate",
    trackLabel: "Certification",
    title: "CTH Level 2 Certificate in Professional Restaurant Front of House Service",
    shortTitle: "Restaurant Front of House Service",
    eligibility: "10th Pass or Equivalent",
    duration: "3 Months (with practical training & assessments)",
    shortDuration: "3 Months",
    idealFor: "Food & beverage service staff and restaurant stewards",
    description:
      "Professional front-of-house training covering restaurant operations, luxury dining etiquette, table setting, reservation coordination, and high-touch guest communication.",
    skills: [
      "Fine Dining Table Service",
      "Guest Reception & Reservations",
      "Food & Beverage Pairing Basics",
      "Hospitality Service Standards",
    ],
    image: "/eea-gallary/eea-gallary1.jpg",
    imageAlt: "Professional Restaurant Front of House Service",
    iconName: "hotel",
  },
  {
    id: "award-cookery",
    level: "CTH Level 1",
    track: "award",
    trackLabel: "Foundation Award",
    title: "CTH Level 1 Award in Basic Cookery Skills",
    shortTitle: "Award in Basic Cookery Skills",
    eligibility: "10th Pass or Equivalent",
    duration: "1 Month (with practical training & assessments)",
    shortDuration: "1 Month",
    idealFor:
      "Culinary entrepreneurs, aspiring chefs, food enthusiasts, and students pursuing hospitality careers",
    description:
      "Entry-level foundational program for aspiring cooks and culinary beginners. Focuses on essential knife drills, ingredient prep, kitchen hygiene, and core culinary techniques.",
    skills: [
      "Essential Knife Skills",
      "Basic Vegetable & Meat Prep",
      "Core Stocks & Soups",
      "Commercial Kitchen Hygiene",
    ],
    image: "/eea-gallary/eea-gallary2.jpg",
    imageAlt: "Award in Basic Cookery Skills commercial kitchen lab",
    iconName: "utensils",
  },
  {
    id: "rpl-certification",
    level: "CTH RPL",
    track: "rpl",
    trackLabel: "Working Professionals",
    title: "Recognition of Prior Learning (RPL) British Certification",
    shortTitle: "Recognition of Prior Learning (RPL)",
    eligibility: "Working Hospitality Professionals",
    duration: "Fast-Track Skills Assessment",
    shortDuration: "Fast-Track",
    idealFor:
      "Working chefs, bakers, bartenders, and stewards in Goa seeking UK CTH certification for overseas careers",
    description:
      "Validate your existing commercial kitchen or hospitality experience with an internationally recognized British CTH certification pathway tailored for overseas employment.",
    skills: [
      "Practical Competency Assessment",
      "Portfolio & Experience Mapping",
      "UK CTH-Accredited Credential",
      "Global Cruise & Hotel Readiness",
    ],
    image: "/gallary/gallary1.jpg",
    imageAlt: "CTH UK Recognition of Prior Learning certification at Excellence Education Academy",
    iconName: "award",
  },
];

const COURSE_ALIASES: Record<string, string> = {
  "cert-front-office": "cert-front-of-house",
  "front-of-house": "cert-front-of-house",
  culinary: "diploma-culinary",
  patisserie: "diploma-patisserie",
  bakery: "diploma-patisserie",
  cruise: "diploma-cruise",
  bartending: "cert-bartending",
  cookery: "award-cookery",
  rpl: "rpl-certification",
};

/**
 * Resolves a `?course=` query parameter (slug, legacy alias, or title substring)
 * to a canonical `CourseProgram`, returning `null` if no match exists.
 */
export function resolveCourseParam(param?: string | null): CourseProgram | null {
  if (!param) return null;
  const normalized = param.trim().toLowerCase();
  if (!normalized) return null;

  const canonicalId = COURSE_ALIASES[normalized] ?? normalized;
  const byId = COURSE_PROGRAMS.find((c) => c.id === canonicalId);
  if (byId) return byId;

  return (
    COURSE_PROGRAMS.find(
      (c) =>
        c.title.toLowerCase() === normalized ||
        c.shortTitle.toLowerCase() === normalized,
    ) ?? null
  );
}


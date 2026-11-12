export type GalleryCategory = "kitchens" | "hospitality" | "launch";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  categoryLabel: string;
  tag: string;
  focalPoint?: "top" | "center";
  featured?: boolean;
}

export const GALLERY_CATEGORIES: {
  id: "all" | GalleryCategory;
  label: string;
}[] = [
  { id: "all", label: "All Moments" },
  { id: "kitchens", label: "Kitchens & Labs" },
  { id: "hospitality", label: "Campus & Hospitality" },
  { id: "launch", label: "Inauguration & Launch" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "eea-hot-kitchen",
    src: "/eea-gallary/eea-gallary2.jpg",
    title: "Commercial Hot Kitchen",
    caption:
      "Multi-station commercial gas ranges beneath a full-length stainless steel exhaust hood for brigade-style culinary training.",
    category: "kitchens",
    categoryLabel: "Kitchens & Labs",
    tag: "Hot Kitchen",
    focalPoint: "center",
    featured: true,
  },
  {
    id: "live-dining-service",
    src: "/gallary/gallary9.jpg",
    title: "Live Fine Dining & Beverage Service",
    caption:
      "Students executing white-linen table service and bar operations for distinguished guests in our mock restaurant lounge.",
    category: "hospitality",
    categoryLabel: "Campus & Hospitality",
    tag: "Live Service",
    focalPoint: "top",
    featured: true,
  },
  {
    id: "eea-bakery-ovens",
    src: "/eea-gallary/eea-gallary5.jpg",
    title: "Commercial Deck Ovens & Proofer Suite",
    caption:
      "Dedicated patisserie and artisan baking lab equipped with double-deck ovens, digital proofing cabinets, and dough sheeters.",
    category: "kitchens",
    categoryLabel: "Kitchens & Labs",
    tag: "Bakery Equipment",
    focalPoint: "center",
    featured: true,
  },
  {
    id: "crest-unveiling",
    src: "/gallary/gallary5.jpg",
    title: "Official Academy Crest Unveiling",
    caption:
      "Unveiling the Excellence Education Academy Goa emblem on stage during the milestone campus inauguration ceremony.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Launch Milestone",
    focalPoint: "top",
    featured: true,
  },
  {
    id: "cth-reception-wall",
    src: "/gallary/gallary1.jpg",
    title: "CTH UK Accredited Campus Reception",
    caption:
      "Academy leadership at the reception desk flanked by our official Confederation of Tourism & Hospitality (CTH UK) accreditation plaque.",
    category: "hospitality",
    categoryLabel: "Campus & Hospitality",
    tag: "CTH Accredited",
    focalPoint: "top",
    featured: true,
  },
  {
    id: "lamp-lighting",
    src: "/gallary/gallary8.jpg",
    title: "Traditional Lamp Lighting Ceremony",
    caption:
      "Lighting the ceremonial brass lamp to mark the auspicious beginning of Excellence Education Academy in Alto Porvorim, Goa.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Inauguration",
    focalPoint: "top",
    featured: true,
  },
  {
    id: "eea-pastry-lab",
    src: "/eea-gallary/eea-gallary4.jpg",
    title: "Bakery & Pastry Preparation Lab",
    caption:
      "Spacious climate-controlled pastry studio featuring commercial dough sheeters, stainless prep tables, and chilled storage.",
    category: "kitchens",
    categoryLabel: "Kitchens & Labs",
    tag: "Pastry Lab",
    focalPoint: "center",
  },
  {
    id: "eea-reception-lounge",
    src: "/eea-gallary/eea-gallary1.jpg",
    title: "Academy Reception & Student Lounge",
    caption:
      "Sunlit reception hall and student welcome lounge embodying our motto: Learn by Doing, Lead with Confidence.",
    category: "hospitality",
    categoryLabel: "Campus & Hospitality",
    tag: "Campus Front",
    focalPoint: "center",
  },
  {
    id: "eea-prep-storage",
    src: "/eea-gallary/eea-gallary3.jpg",
    title: "Culinary Prep & Cold Storage Zone",
    caption:
      "Hygienic stainless steel worktables stocked with bakeware, Mise en Place stations, and commercial refrigeration units.",
    category: "kitchens",
    categoryLabel: "Kitchens & Labs",
    tag: "Prep Zone",
    focalPoint: "center",
  },
  {
    id: "eea-workstations",
    src: "/eea-gallary/eea-gallary6.jpg",
    title: "Individual Commercial Kitchen Bays",
    caption:
      "Dual-sided commercial cooking bays giving every student dedicated burner and plating space during practical assessments.",
    category: "kitchens",
    categoryLabel: "Kitchens & Labs",
    tag: "Training Bays",
    focalPoint: "center",
  },
  {
    id: "keynote-address",
    src: "/gallary/gallary2.jpg",
    title: "Inauguration Keynote Address",
    caption:
      "Sharing the academy's hands-on global hospitality training vision with students, parents, and industry guests.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Keynote",
    focalPoint: "top",
  },
  {
    id: "leadership-reception",
    src: "/gallary/gallary3.jpg",
    title: "Leadership Welcome at Campus Front",
    caption:
      "Founding directors welcoming guests at the Excellence Education Academy reception ahead of the inauguration program.",
    category: "hospitality",
    categoryLabel: "Campus & Hospitality",
    tag: "Leadership",
    focalPoint: "top",
  },
  {
    id: "cake-cutting",
    src: "/gallary/gallary7.jpg",
    title: "Celebratory Inauguration Cake Cutting",
    caption:
      "Faculty, dignitaries, and hospitality leaders celebrating the official opening of our Goa culinary and cruise academy.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Celebration",
    focalPoint: "top",
  },
  {
    id: "dignitaries-gathering",
    src: "/gallary/gallary6.jpg",
    title: "Inaugural Dignitaries & Faculty Circle",
    caption:
      "Distinguished hospitality advisors and founding faculty gathered together on stage for the grand launch celebration.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Faculty & Guests",
    focalPoint: "top",
  },
  {
    id: "vision-speech",
    src: "/gallary/gallary4.jpg",
    title: "Learn by Doing — Vision Statement",
    caption:
      "Outlining international CTH UK curriculum standards and direct cruise and luxury hotel placement pathways.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Academy Vision",
    focalPoint: "top",
  },
  {
    id: "guest-felicitation-1",
    src: "/gallary/gallary10.jpg",
    title: "Honoring Industry Partners",
    caption:
      "Presenting a token of appreciation and floral bouquet to distinguished hospitality guests at the launch event.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Felicitation",
    focalPoint: "top",
  },
  {
    id: "advisory-trio",
    src: "/gallary/gallary11.jpg",
    title: "Founding Advisory & Academic Council",
    caption:
      "Academic mentors and directors standing in front of the EEA crest, united by decades of culinary and hotel leadership.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Advisory Board",
    focalPoint: "top",
  },
  {
    id: "guest-of-honour-speech",
    src: "/gallary/gallary12.jpg",
    title: "Guest of Honour Address",
    caption:
      "Distinguished Guest of Honour inspiring incoming students on Goa's growing role in global hospitality talent.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Guest Address",
    focalPoint: "top",
  },
  {
    id: "guest-felicitation-2",
    src: "/gallary/gallary13.jpg",
    title: "Distinguished Guest Felicitation",
    caption:
      "Recognizing hospitality industry leaders and community supporters during the academy's inaugural ceremony.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Recognition",
    focalPoint: "top",
  },
  {
    id: "guest-at-reception",
    src: "/gallary/gallary14.jpg",
    title: "Guest Visit at CTH Reception Desk",
    caption:
      "Visiting dignitary pictured beside the Confederation of Tourism & Hospitality UK wall and academy emblem.",
    category: "hospitality",
    categoryLabel: "Campus & Hospitality",
    tag: "Campus Tour",
    focalPoint: "top",
  },
  {
    id: "community-awards",
    src: "/gallary/gallary15.jpg",
    title: "Launch Ceremony Felicitation & Applause",
    caption:
      "Warm applause as partners and hospitality mentors are felicitated during the Excellence Education Academy launch.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Ceremony",
    focalPoint: "top",
  },
  {
    id: "engaged-audience",
    src: "/gallary/gallary16.jpg",
    title: "Guests & Supporters in Attendance",
    caption:
      "Hospitality professionals, families, and mentors gathered in the Goa campus hall to celebrate the inaugural batch.",
    category: "launch",
    categoryLabel: "Inauguration & Launch",
    tag: "Community",
    focalPoint: "top",
  },
];


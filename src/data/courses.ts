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
  slug: string;
  level: "CTH Level 2" | "CTH Level 1" | "CTH RPL";
  track: CourseTrack;
  trackLabel: string;
  title: string;
  shortTitle: string;
  tagline: string;
  eligibility: string;
  duration: string;
  shortDuration: string;
  awardingBody: string;
  qualificationLevel: string;
  modeOfLearning: string;
  idealFor: string;
  description: string;
  overview: string;
  secondaryOverview?: string;
  skills: string[];
  whatYouWillLearn: string[];
  practicalTraining?: string;
  skillsDeveloped?: string[];
  careerOpportunities: string[];
  careerProgression?: string;
  whoShouldApply: string[];
  whyChooseCourse: string[];
  whyChooseEEA: string;
  coreUnits?: string[];
  assessmentMethods?: string[];
  image: string;
  imageAlt: string;
  iconName: CourseIconName;
}

export const COURSE_PROGRAMS: CourseProgram[] = [
  {
    id: "diploma-culinary",
    slug: "diploma-in-culinary-skills",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "CTH Level 2 Diploma in Culinary Skills",
    shortTitle: "Diploma in Culinary Skills",
    tagline: "Building the Next Generation of Professional Chefs",
    eligibility: "Completion of Class 10 or Class 12",
    duration: "6 Months (Practical + Theory + Industry Exposure)",
    shortDuration: "6 Months",
    awardingBody: "Confederation of Tourism & Hospitality (CTH), UK (Regulated by Ofqual, UK)",
    qualificationLevel: "CTH Level 2 Diploma in Culinary Skills",
    modeOfLearning: "Practical + Theory + Assessments + Industry Exposure",
    idealFor:
      "Aspiring chefs, hotel school graduates, or food enthusiasts seeking an internationally recognised qualification",
    description:
      "Internationally recognised qualification awarded by CTH, UK and regulated by Ofqual (UK). Intensive, hands-on commercial cookery training preparing students for luxury hotels, fine dining restaurants, resorts, and cruise lines worldwide.",
    overview:
      "The CTH Level 2 Diploma in Culinary Skills is an internationally recognised qualification awarded by the Confederation of Tourism & Hospitality (CTH), UK and regulated by Ofqual (Office of Qualifications and Examinations Regulation, UK). The programme has been carefully designed to provide aspiring chefs with the practical skills, technical knowledge and professional attitude required to succeed in the global hospitality industry.",
    secondaryOverview:
      "This intensive, hands-on programme prepares students for careers in hotels, fine dining restaurants, resorts, cruise lines, catering companies and international hospitality establishments. Through extensive practical training, students learn to prepare a wide variety of international dishes while mastering professional kitchen operations, food safety standards and culinary techniques.",
    skills: [
      "Classical Knife Skills & Butchery",
      "Stocks, Mother Sauces & Soups",
      "Meat, Poultry & Seafood Cookery",
      "Fine Dining Plating & Presentation",
    ],
    whatYouWillLearn: [
      "Professional knife skills and food preparation",
      "Cooking methods for meat, poultry, fish and seafood",
      "Preparation of vegetables, grains, pasta and egg dishes",
      "Stocks, soups and sauces",
      "Bakery, pastry and desserts",
      "International cuisines (Continental, Asian, Mediterranean)",
      "Menu planning and food costing",
      "Kitchen organisation and brigade teamwork",
      "Food safety, hygiene and sanitation (HACCP)",
      "Food presentation and modern plating techniques",
      "Professional commercial kitchen operations",
    ],
    practicalTraining:
      "The programme places significant emphasis on practical learning, allowing students to develop confidence in a professional kitchen environment. Learners will participate in regular practical sessions where they prepare a variety of dishes using industry-standard equipment and techniques. Practical assessments ensure students are job-ready and capable of working efficiently under professional kitchen conditions.",
    skillsDeveloped: [
      "Culinary and professional food preparation skills",
      "Creativity and presentation techniques",
      "Time management in high-tempo kitchens",
      "Teamwork and kitchen brigade communication",
      "Professional kitchen discipline",
      "Organisation, mise-en-place and planning",
      "Culinary problem-solving abilities",
      "Confidence in a commercial kitchen environment",
    ],
    careerOpportunities: [
      "Commis Chef",
      "Kitchen Assistant",
      "Line Cook",
      "Pastry Assistant",
      "Hotel Kitchen Associate",
      "Cruise Line Galley Staff",
      "Resort Chef",
      "Catering Assistant",
      "Food Production Associate",
    ],
    careerProgression:
      "With experience and further qualifications, graduates can progress to positions such as Chef de Partie, Sous Chef and Executive Chef.",
    whoShouldApply: [
      "Students who have completed Class 10 or Class 12.",
      "Individuals passionate about cooking and hospitality.",
      "Aspiring chefs seeking an internationally recognized UK qualification.",
      "Those wishing to work in leading hotels in India or overseas.",
      "Individuals looking for a practical, skill-based career.",
    ],
    whyChooseCourse: [
      "Internationally recognised UK qualification",
      "Regulated by Ofqual (UK)",
      "Industry-focused practical training with industry-standard equipment",
      "Experienced faculty and modern kitchen facilities in Goa",
      "Job-oriented curriculum aligned with international hospitality standards",
      "Career opportunities in hotels, restaurants, resorts, cruise ships and catering companies",
      "Progression pathway to higher-level CTH qualifications",
    ],
    whyChooseEEA:
      "At Excellence Education Academy (EEA), Goa, students receive more than just classroom training. They gain industry exposure, personalised mentoring and hands-on practical experience designed to make them employment-ready. Our focus is on developing skilled culinary professionals who possess the confidence, technical expertise and professionalism expected by employers worldwide.",
    image: "/images/courses/culinary-skills.jpg",
    imageAlt: "CTH Level 2 Diploma in Culinary Skills training at Excellence Education Academy Goa",
    iconName: "chef",
  },
  {
    id: "diploma-patisserie",
    slug: "diploma-in-patisserie-and-confectionery-skills",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "CTH Level 2 Diploma in Patisserie & Confectionery Skills",
    shortTitle: "Diploma in Patisserie & Confectionery",
    tagline: "Turn Your Passion for Baking into a Professional Career",
    eligibility: "Completion of Class 10 (or equivalent) | Minimum Age: 16 Years",
    duration: "6 Months (80% Practical Hands-on Training)",
    shortDuration: "6 Months",
    awardingBody: "Confederation of Tourism & Hospitality (CTH), UK (OFQUAL Regulated)",
    qualificationLevel: "CTH Level 2 Diploma in Patisserie & Confectionery Skills",
    modeOfLearning: "80% Practical + Theory + Assessments + Portfolio Building",
    idealFor:
      "Future pastry chefs, home bakers, chocolatiers, cake artists, or entrepreneurs wishing to launch a bakery business",
    description:
      "Internationally recognised, UK OFQUAL-regulated qualification combining 80% intensive practical training with pastry science. Master French viennoiserie, artisan breads, chocolate tempering, entremets, modern gateaux, and cake decoration.",
    overview:
      "The CTH Level 2 Diploma in Patisserie & Confectionery Skills is an internationally recognised, UK OFQUAL-regulated qualification designed for students who aspire to become professional pastry chefs, bakers, chocolatiers, or dessert specialists. This programme combines intensive practical training with essential theoretical knowledge, preparing students for careers in luxury hotels, bakeries, restaurants, cafés, resorts, cruise lines, and the wider hospitality industry.",
    secondaryOverview:
      "Over six months, students develop the technical skills, creativity, and confidence required to produce high-quality pastries, breads, cakes, desserts, chocolates, and confectionery while learning the professional standards expected in commercial kitchens worldwide.",
    skills: [
      "Artisan Viennoiserie & Laminated Doughs",
      "Chocolate Tempering, Pralines & Truffles",
      "Modern Plated Entremets & Desserts",
      "Cake Finishing, Sugar Craft & Presentation",
    ],
    whatYouWillLearn: [
      "Bakery & Kitchen Hygiene and Food Safety",
      "Understanding Ingredients and Their Functions",
      "Bread Making and Fermented Dough Products",
      "Pastries and Viennoiserie (Croissants, Brioche, Danish)",
      "Cakes, Sponges, Biscuits and Cookies",
      "Hot and Cold Desserts & Plating Techniques",
      "Chocolate and Confectionery Techniques (Tempering, Molding, Truffles)",
      "Cake Finishing, Decoration and Presentation",
      "Menu Planning, Cost Control and Kitchen Organisation",
      "Teamwork and Professional Kitchen Operations",
    ],
    practicalTraining:
      "80% of training takes place in our dedicated pastry and baking labs equipped with deck ovens, planetary mixers, marble tempering stations, and commercial refrigeration. Students build a professional portfolio of bakery and pastry creations under the guidance of seasoned pastry masters.",
    skillsDeveloped: [
      "Baking chemistry and ingredient precision",
      "Artistic cake decoration and modern plating aesthetics",
      "Artisan sourdough and enriched dough handling",
      "Temperature-sensitive chocolate tempering and sugarcraft",
      "Bakery inventory, recipe scaling and cost control",
      "Commercial bakery kitchen speed and consistency",
    ],
    careerOpportunities: [
      "Pastry Chef",
      "Bakery Chef",
      "Commis Pastry Chef",
      "Chocolatier",
      "Cake Artist & Decorator",
      "Artisan Baker",
      "Dessert Chef",
      "Bakery & Café Professional",
      "Cruise Line Pastry Staff",
      "Bakery Entrepreneur",
    ],
    careerProgression:
      "Upon successful completion, students can progress to higher-level culinary or patisserie qualifications, specialise in advanced pastry arts, or begin their careers with luxury hotels, restaurants, bakeries, resorts, cafés, and international cruise companies.",
    whoShouldApply: [
      "Students who have completed Class 10 (or equivalent) with a minimum age of 16 years.",
      "Students who enjoy baking and have a creative eye for presentation.",
      "Individuals aspiring to build a career in luxury patisserie, chocolate, and desserts.",
      "Home bakers looking to turn their passion into a commercial enterprise.",
      "Those aiming for pastry chef opportunities in India or internationally.",
    ],
    whyChooseCourse: [
      "Internationally recognised UK qualification regulated by OFQUAL",
      "80% practical, hands-on training in state-of-the-art pastry labs",
      "Learn from experienced pastry professionals and master chocolatiers",
      "Modern training kitchens with industry-standard baking equipment",
      "Develop creativity, precision and artistic presentation skills",
      "Build a professional portfolio of bakery and pastry products",
      "International internship opportunities*",
      "Career guidance and placement assistance",
    ],
    whyChooseEEA:
      "Excellence Education Academy provides students with dedicated pastry laboratory workstations, small batch sizes for direct mentorship, and deep focus on European pastry technique combined with contemporary dessert trends.",
    image: "/images/courses/patisserie-skills.jpg",
    imageAlt: "CTH Level 2 Diploma in Patisserie and Confectionery Skills at Excellence Education Academy",
    iconName: "cake",
  },
  {
    id: "diploma-cruise",
    slug: "diploma-in-cruise-hospitality-services",
    level: "CTH Level 2",
    track: "diploma",
    trackLabel: "Diploma",
    title: "CTH Level 2 Diploma in Cruise Hospitality Services",
    shortTitle: "Diploma in Cruise Hospitality",
    tagline: "Your Passport to an International Career at Sea",
    eligibility: "10th Pass or Equivalent",
    duration: "6 Months (Maritime Service + F&B + Housekeeping)",
    shortDuration: "6 Months",
    awardingBody: "Confederation of Tourism & Hospitality (CTH), UK",
    qualificationLevel: "CTH Level 2 Diploma in Cruise Hospitality Services",
    modeOfLearning: "Practical Training + Theory + Shipboard Hospitality Simulations",
    idealFor:
      "Aspiring hospitality professionals seeking tax-free global careers aboard luxury cruise liners and international resorts",
    description:
      "Internationally recognised qualification awarded by CTH, UK. Equips learners with maritime hospitality operations, luxury customer service, shipboard F&B service, housekeeping, and global cruise line employment standards.",
    overview:
      "The CTH Level 2 Diploma in Cruise Hospitality Services is an internationally recognised qualification designed for individuals who aspire to work on some of the world's leading cruise ships and luxury hospitality establishments. Awarded by the Confederation of Tourism & Hospitality (CTH), UK, this programme equips students with the essential knowledge, practical skills, and professional attitude required to begin a successful career in the global cruise industry. It introduces learners to cruise ship operations, exceptional guest service, food & beverage service, housekeeping, and the standards expected in international hospitality.",
    secondaryOverview:
      "Throughout the programme, students learn how international cruise vessels operate 24/7, mastering international etiquette, multilingual guest interactions, high-volume fine dining service, stateroom management, and maritime emergency awareness.",
    skills: [
      "Cruise Ship F&B Operations & Fine Dining",
      "Maritime Housekeeping & Stateroom Standards",
      "Luxury Guest Experience & Protocol",
      "Health, Maritime Safety & Hygiene Standards",
    ],
    whatYouWillLearn: [
      "Introduction to Cruise Ship Operations",
      "Excellence in Cruise Customer Service",
      "Food & Beverage Service on Board",
      "Enhanced Restaurant Service",
      "Cruise Housekeeping Operations",
      "Luxury Guest Service Standards",
      "Professional Communication and Crew Interaction",
      "Health, Safety and Workplace Practices",
      "Teamwork, Grooming and Professional Conduct",
    ],
    practicalTraining:
      "Simulated shipboard restaurant setups, stateroom mockups, banquet staging, and guest scenario handling. Practical sessions cover silver service, tray handling under motion, buffet management, and high-efficiency turnaround routines.",
    skillsDeveloped: [
      "Maritime hospitality operational competence",
      "Cross-cultural guest relationship management",
      "High-volume banqueting and restaurant service",
      "Stateroom inspection and luxury housekeeping standards",
      "Impeccable personal grooming and professional maritime posture",
      "Stress management and resilience in shipboard schedules",
    ],
    careerOpportunities: [
      "Food & Beverage Attendant",
      "Restaurant Steward",
      "Cabin Steward / Housekeeping Attendant",
      "Guest Service Associate",
      "Buffet Attendant",
      "Bar Utility Staff",
      "Cruise Hospitality Crew Member",
      "Luxury Resort Hospitality Associate",
    ],
    careerProgression:
      "The qualification also provides a strong foundation for further studies in hospitality management and specialised cruise operations, paving the way to Head Waiter, Butler, Guest Services Manager, and Chief Housekeeper roles.",
    whoShouldApply: [
      "School leavers (10th Pass or Equivalent) seeking an international career.",
      "Individuals passionate about travel, sea voyages, and global hospitality.",
      "Students looking to work on international luxury cruise ships or island resorts.",
      "Hospitality professionals wishing to enhance their qualifications with an internationally recognised diploma.",
    ],
    whyChooseCourse: [
      "Internationally Recognised Qualification awarded by CTH, UK",
      "Comprehensive practical and theoretical training tailored for cruise lines",
      "Industry-focused curriculum aligned with global cruise hospitality standards",
      "Training by experienced hospitality professionals with maritime backgrounds",
      "Emphasis on communication, customer service, and international grooming",
      "Preparation for entry-level opportunities with international cruise lines and luxury hospitality establishments",
      "Pathway to higher qualifications and career progression in hospitality worldwide",
    ],
    whyChooseEEA:
      "Located in Goa — India's premier maritime and cruise recruitment hub — Excellence Education Academy has direct access to cruise crew recruitment networks, interview training, and maritime industry veterans who guide students into global careers at sea.",
    image: "/images/courses/cruise-hospitality.jpg",
    imageAlt: "CTH Level 2 Diploma in Cruise Hospitality Services at Excellence Education Academy Goa",
    iconName: "ship",
  },
  {
    id: "cert-bartending",
    slug: "certificate-in-professional-bartending-skills",
    level: "CTH Level 2",
    track: "certificate",
    trackLabel: "Certification",
    title: "CTH Level 2 Certificate in Professional Bartending Skills",
    shortTitle: "Professional Bartending Skills",
    tagline: "An International Qualification for Future Bartenders",
    eligibility: "10th Pass or Equivalent",
    duration: "3 Months (Mixology + Theory + Assessments)",
    shortDuration: "3 Months",
    awardingBody: "CTH, United Kingdom (OFQUAL Regulated)",
    qualificationLevel: "CTH Level 2 Certificate in Professional Bartending Skills",
    modeOfLearning: "Practical Bar Training + Theory + Assessments",
    idealFor:
      "Aspiring bartenders, mixologists, lounge staff, and cruise bar applicants looking for British certification",
    description:
      "British qualification awarded by CTH, UK and developed with leading drinks brands. Combines hands-on cocktail crafting, spirit knowledge, flair bartending basics, bar setup, and responsible alcohol service for luxury venues.",
    overview:
      "The CTH Level 2 Certificate in Professional Bartending Skills is an internationally recognised qualification designed for individuals who wish to build a successful career in the food and beverage industry. Awarded by the Confederation of Tourism & Hospitality (CTH), UK, this programme combines practical bartending techniques with professional customer service standards, preparing students for employment in hotels, restaurants, lounges, clubs, resorts, and cruise lines worldwide. The qualification has been developed in collaboration with leading drinks brands and industry professionals to ensure learners develop skills that meet international hospitality standards.",
    secondaryOverview:
      "Students master the science of distillation, flavor balancing, cocktail chemistry, speed pouring, garnish crafting, and bar station ergonomics under the mentorship of certified beverage professionals.",
    skills: [
      "Classic & Contemporary Mixology",
      "Spirits, Wines, Beers & Liqueurs",
      "Bar Setup, Speed Pouring & Ergonomics",
      "Responsible Alcohol Service & Licensing",
    ],
    whatYouWillLearn: [
      "Introduction to the bartending profession",
      "Bar setup, equipment, and operational procedures",
      "Understanding alcoholic and non-alcoholic beverages",
      "Spirits, wines, beers, liqueurs, and mixers",
      "Cocktail and mocktail preparation techniques",
      "Beverage presentation and garnish preparation",
      "Responsible alcohol service and licensing awareness",
      "Health, hygiene, and workplace safety",
      "Professional customer service and guest interaction",
      "Cash handling, billing, and bar closing procedures",
      "Sustainability and responsible hospitality practices",
    ],
    practicalTraining:
      "Daily practice behind a fully equipped commercial cocktail bar: master jigger technique, Boston shaker handling, straining, muddling, layering, smoked cocktail infusing, ice management, and bar closing routines.",
    skillsDeveloped: [
      "High-speed precision pouring and cocktail execution",
      "Deep spirit classification and sensory tasting vocabulary",
      "Creative garnish carving and visual drink aesthetics",
      "Flair bartending basics and guest engagement",
      "Responsible service, BAC awareness and guest de-escalation",
      "Bar inventory, POS billing and cost margin calculations",
    ],
    careerOpportunities: [
      "Bartender",
      "Mixologist",
      "Bar Steward",
      "Lounge Bartender",
      "Beverage Service Associate",
      "Cruise Ship Bartender",
      "Hotel & Resort Bartender",
      "Restaurant Beverage Service Professional",
    ],
    careerProgression:
      "The qualification also provides a pathway to higher-level CTH hospitality programmes for those wishing to advance into supervisory or Bar Manager and Beverage Director roles.",
    whoShouldApply: [
      "School leavers (10th Pass or Equivalent) seeking an exciting hospitality career.",
      "Aspiring bartenders, cocktail creators, and mixologists.",
      "Hospitality professionals looking to upgrade their skills with a UK certification.",
      "Individuals interested in working abroad, in luxury lounges or on international cruise lines.",
      "Anyone passionate about beverage service, mixology trends, and guest experiences.",
    ],
    whyChooseCourse: [
      "British qualification recognised internationally and regulated by OFQUAL",
      "Strong emphasis on practical, industry-relevant beverage skills",
      "Learn from experienced hospitality professionals and cocktail champions",
      "Develop confidence in beverage preparation and high-touch customer service",
      "Ideal for careers in luxury hotels, restaurants, bars, resorts, and cruise lines",
      "Build employability through internationally benchmarked hospitality training",
    ],
    whyChooseEEA:
      "Excellence Education Academy features dedicated mock bar training facilities in Goa where students learn both classic mixology and modern zero-proof and craft trends directly aligned with international cocktail lounges.",
    image: "/images/courses/bartending-skills.jpg",
    imageAlt: "CTH Level 2 Certificate in Professional Bartending Skills at Excellence Education Academy",
    iconName: "wine",
  },
  {
    id: "cert-front-of-house",
    slug: "certificate-in-restaurant-front-of-house-service",
    level: "CTH Level 2",
    track: "certificate",
    trackLabel: "Certification",
    title: "CTH Level 2 Certificate in Professional Restaurant Front of House Service",
    shortTitle: "Restaurant Front of House Service",
    tagline: "Delivering Exceptional Dining Experiences Through Professional Service",
    eligibility: "Completion of Class 10 or Class 12",
    duration: "3 Months (Front of House + Etiquette + Assessments)",
    shortDuration: "3 Months",
    awardingBody: "Confederation of Tourism & Hospitality (CTH), UK (OFQUAL Regulated)",
    qualificationLevel: "CTH Level 2 Certificate in Professional Restaurant Front of House Service",
    modeOfLearning: "Practical Service Lab + Dining Etiquette + CTH Assessments",
    idealFor:
      "Food & beverage service staff, fine dining servers, banquet stewards, and luxury hotel service candidates",
    description:
      "Globally recognised British OFQUAL-regulated qualification. Prepares learners to deliver world-class guest experiences across fine dining restaurants, luxury hotels, resorts, cafés, and cruise liners.",
    overview:
      "The CTH Level 2 Certificate in Professional Restaurant Front of House Service is a globally recognised qualification designed for individuals who aspire to build a successful career in restaurants, hotels, resorts, cruise lines, cafés, and luxury hospitality establishments. Developed by the Confederation of Tourism & Hospitality (CTH), UK, this programme combines practical service techniques with professional customer care to prepare learners for the modern hospitality industry.",
    secondaryOverview:
      "Students develop the confidence, communication skills, and technical expertise required to deliver memorable guest experiences while maintaining the highest standards of food and beverage service, table setting, wine presentation, and dining etiquette.",
    skills: [
      "Fine Dining Table Setting & Mise-en-Place",
      "Wine Service, Pairing & Non-Alcoholic Drinks",
      "Multi-Course Banquet & Gueridon Service",
      "Guest Communication & Upselling Techniques",
    ],
    whatYouWillLearn: [
      "Professional customer service techniques",
      "Restaurant preparation and mise-en-place",
      "Table setting and dining etiquette",
      "Food and beverage service styles (English, French, Silver Service, American)",
      "Wine knowledge and professional wine service",
      "Coffee, tea and non-alcoholic beverage preparation and service",
      "Cocktail and craft beer knowledge",
      "Upselling and menu recommendation techniques",
      "Handling guest complaints professionally",
      "Food safety, hygiene and workplace health & safety",
      "Creating exceptional dining experiences",
    ],
    coreUnits: [
      "Customer Service Skills",
      "Restaurant & Bar Service 1",
      "Restaurant & Bar Service 2",
      "Wine Knowledge & Service Skills",
      "Knowledge & Service of Non-Alcoholic Drinks",
      "Knowledge & Service of Cocktails & Craft Beers",
      "Enhanced Food & Beverage Service Skills",
    ],
    practicalTraining:
      "Training in simulated restaurant dining halls: mastering silverware placement, napkin origami, plate clearing techniques, order taking, wine decanting, tray balancing, and live customer interaction roleplays.",
    skillsDeveloped: [
      "Impeccable table manners, dining etiquette, and posture",
      "Sommelier-grade wine presentation and glassware pairing",
      "Tactful conflict resolution and complaint de-escalation",
      "Persuasive upselling and menu storytelling",
      "Coordinated banquet and private dining synchronisation",
      "Health and food safety compliance in front-of-house operations",
    ],
    careerOpportunities: [
      "Restaurant Server",
      "Food & Beverage Associate",
      "Fine Dining Service Professional",
      "Banquet Associate",
      "Bar Service Assistant",
      "Café Supervisor",
      "Restaurant Host/Hostess",
      "Cruise Line Food & Beverage Crew",
      "Hotel Restaurant Associate",
      "Guest Service Executive",
    ],
    careerProgression:
      "After successful completion, learners can progress to higher-level CTH hospitality qualifications or advance into Restaurant Supervisor, Banquet Captain, Maître d', and Restaurant Operations Manager roles.",
    whoShouldApply: [
      "Students who have completed Class 10 or Class 12.",
      "Individuals passionate about hospitality and customer service excellence.",
      "Aspiring restaurant and hotel dining professionals.",
      "Career changers seeking rewarding employment in hospitality.",
      "Those aiming for international employment in top restaurants, resorts, or cruise ships.",
    ],
    whyChooseCourse: [
      "British OFQUAL-regulated qualification recognised internationally",
      "Industry-focused practical training with real restaurant simulations",
      "Develops professional restaurant and guest service skills",
      "Ideal pathway to careers in hotels, fine dining restaurants, cafés, bars, resorts, and cruise ships",
      "Learn from experienced hospitality professionals and dining masters",
      "Strong emphasis on customer satisfaction, dining etiquette, and service excellence",
    ],
    whyChooseEEA:
      "EEA Goa provides students with direct exposure to Goa's thriving luxury restaurant and international tourism scene, ensuring students practice service with real-world polish and high international standards.",
    image: "/images/courses/front-of-house.jpg",
    imageAlt: "CTH Level 2 Certificate in Professional Restaurant Front of House Service at EEA Goa",
    iconName: "hotel",
  },
  {
    id: "award-cookery",
    slug: "award-in-basic-cookery-skills",
    level: "CTH Level 1",
    track: "award",
    trackLabel: "Foundation Award",
    title: "CTH Level 1 Award in Basic Cookery Skills",
    shortTitle: "Award in Basic Cookery Skills",
    tagline: "Start Your Culinary Journey with Internationally Recognised Training",
    eligibility: "School leavers (15 years and above) / 10th Pass or Equivalent",
    duration: "1 Month (Foundation Culinary Training + Assessments)",
    shortDuration: "1 Month",
    awardingBody: "Confederation of Tourism & Hospitality (CTH), UK",
    qualificationLevel: "CTH Level 1 Award in Basic Cookery Skills",
    modeOfLearning: "Practical Kitchen Training + Recipe Log + Assessments",
    idealFor:
      "School leavers, culinary beginners, food enthusiasts, home cooks, or anyone building foundational kitchen discipline",
    description:
      "Entry-level CTH qualification introducing beginners to commercial kitchen fundamentals, knife safety, healthy cooking methods, kitchen organisation, and professional cooking discipline.",
    overview:
      "The CTH Level 1 Award in Basic Cookery Skills is an entry-level qualification designed for individuals who are passionate about cooking and want to build a strong foundation in professional culinary skills. Whether you are a school leaver, aspiring chef, home cook, or someone looking to explore a career in hospitality, this course provides the essential knowledge and practical skills needed to begin your journey in the culinary industry.",
    secondaryOverview:
      "This internationally recognised qualification introduces learners to the fundamentals of working in a professional kitchen while developing confidence, discipline, and safe working practices. Students receive hands-on training in a real kitchen environment under experienced chef instructors, preparing them for further culinary education or entry-level employment. The qualification consists of four mandatory units covering food safety, knife skills, healthy cooking, and basic food preparation using a variety of cooking methods.",
    skills: [
      "Essential Knife Safety & Techniques",
      "Basic Vegetable, Poultry & Meat Prep",
      "Core Stocks, Soups & Simple Dishes",
      "Commercial Kitchen Hygiene & Sanitation",
    ],
    whatYouWillLearn: [
      "Professional kitchen hygiene and food safety",
      "Safe handling of knives and kitchen equipment",
      "Basic food preparation techniques",
      "Healthy cooking principles",
      "Preparation and cooking of simple dishes",
      "Understanding different cooking methods (boiling, poaching, steaming, baking)",
      "Kitchen organisation and workplace safety",
      "Recipe planning and presentation skills",
    ],
    practicalTraining:
      "Hands-on foundational drills in our training kitchen under experienced chef supervision. Students practice classical cuts (julienne, brunoise, batonnet), pan handling, temperature control, and hygiene stations.",
    assessmentMethods: [
      "Practical cooking assessments",
      "Recipe log submissions",
      "Theory examination",
      "Observation of practical skills throughout the course",
    ],
    careerOpportunities: [
      "Kitchen Assistant",
      "Kitchen Helper",
      "Trainee Cook",
      "Commis Chef (Trainee)",
      "Food Preparation Assistant",
    ],
    careerProgression:
      "After successfully completing this qualification, learners can smoothly progress to CTH Level 2 Award in Cookery Skills, CTH Level 2 Certificate or Diploma in Culinary Skills, or entry-level kitchen roles.",
    whoShouldApply: [
      "School leavers (15 years and above).",
      "Beginners with no prior commercial culinary experience.",
      "Home cooks wishing to develop professional kitchen skills.",
      "Individuals considering a career in hospitality or food service.",
      "Students preparing for advanced culinary qualifications.",
    ],
    whyChooseCourse: [
      "Internationally recognised CTH (UK) qualification",
      "Practical, hands-on learning in professional kitchen facilities",
      "Industry-standard equipment and chef supervision",
      "Focus on workplace-ready culinary skills",
      "Builds confidence for further studies and employment",
      "Strong emphasis on food safety and professional kitchen practices",
    ],
    whyChooseEEA:
      "At Excellence Education Academy (EEA), students benefit from CTH UK-approved training, experienced chef trainers with industry expertise, practical learning in modern kitchen facilities, small batch sizes for personalised attention, and supportive progression counselling.",
    image: "/images/courses/basic-cookery.jpg",
    imageAlt: "CTH Level 1 Award in Basic Cookery Skills at Excellence Education Academy Goa",
    iconName: "utensils",
  },
  {
    id: "rpl-certification",
    slug: "recognition-of-prior-learning",
    level: "CTH RPL",
    track: "rpl",
    trackLabel: "Working Professionals",
    title: "Recognition of Prior Learning (RPL) British Certification",
    shortTitle: "Recognition of Prior Learning (RPL)",
    tagline: "Fast-Track British CTH Certification for Working Hospitality Professionals",
    eligibility: "Working Hospitality Professionals with Kitchen or F&B Experience",
    duration: "Fast-Track Skills Assessment",
    shortDuration: "Fast-Track",
    awardingBody: "Confederation of Tourism & Hospitality (CTH), UK",
    qualificationLevel: "CTH British Certification via RPL",
    modeOfLearning: "Skills Audit + Practical Trade Test + Portfolio Mapping",
    idealFor:
      "Working chefs, bakers, bartenders, and stewards in Goa seeking UK CTH certification for overseas employment and cruise liners",
    description:
      "Fast-track credential pathway for experienced kitchen and hospitality workers in Goa. Validate your years of hands-on industry experience into an internationally recognized British CTH certificate.",
    overview:
      "Recognition of Prior Learning (RPL) is a specialized certification pathway designed for experienced hospitality professionals who have acquired valuable practical culinary, baking, or service skills on the job. Awarded through CTH UK, RPL converts your real-world work experience into an internationally accredited British qualification without having to start from scratch.",
    secondaryOverview:
      "Ideal for culinary artists, bakers, and service staff in Goa aiming for high-paying positions on international cruise liners, five-star resorts in the Gulf (UAE, Qatar, Saudi Arabia), or Europe, where formal British credentials are an essential visa or employment requirement.",
    skills: [
      "Practical Competency Assessment",
      "Portfolio & Experience Mapping",
      "UK CTH-Accredited Credential",
      "Global Cruise & Hotel Readiness",
    ],
    whatYouWillLearn: [
      "Benchmarking skills against UK CTH Level 2 standards",
      "Formal documentation of culinary/hospitality work experience",
      "International kitchen brigade hierarchy and terminology",
      "HACCP and British commercial hygiene standards compliance",
      "Advanced culinary and service trade testing",
      "Overseas resume and trade test interview preparation",
    ],
    practicalTraining:
      "Intensive trade assessment sessions in our professional kitchen and service labs to evaluate your commercial competencies under the observation of certified CTH assessors.",
    skillsDeveloped: [
      "Official trade validation of hands-on skills",
      "Standardised British culinary vocabulary",
      "HACCP compliance documentation",
      "Cruise line and international hiring interview readiness",
    ],
    careerOpportunities: [
      "Senior Commis Chef (Overseas)",
      "Demi Chef de Partie (Cruise Lines)",
      "Pastry Chef (International Resorts)",
      "Lead Bartender (Gulf & Europe)",
      "Restaurant Captain / Head Waiter",
    ],
    careerProgression:
      "Opens direct doors to international recruitment agencies, cruise line interviews (Carnival, Royal Caribbean, MSC, Viking), and Gulf luxury hotel chains.",
    whoShouldApply: [
      "Working chefs, cooks, and kitchen helpers with at least 1-2 years of commercial kitchen experience.",
      "Bakery and pastry workers seeking formal international certification.",
      "Food & beverage service staff in Goa hotels and restaurants seeking sea-going or Gulf careers.",
      "Hospitality workers needing British credentials for visa and immigration point systems.",
    ],
    whyChooseCourse: [
      "Fast-track route to an authentic British CTH qualification",
      "Saves time by giving credit for your real-world skills and years of work",
      "Directly unlocks international cruise liner and overseas employment opportunities",
      "Supervised by approved CTH evaluators and master chefs",
      "Includes comprehensive interview and trade-test preparation",
    ],
    whyChooseEEA:
      "Excellence Education Academy in Goa is the trusted local bridge between working Goan hospitality talent and international employers, providing fair assessments, supportive portfolio coaching, and direct placement connections.",
    image: "/gallary/gallary1.jpg",
    imageAlt: "CTH UK Recognition of Prior Learning certification at Excellence Education Academy Goa",
    iconName: "award",
  },
];

const COURSE_ALIASES: Record<string, string> = {
  // Slug mappings
  "diploma-in-culinary-skills": "diploma-culinary",
  "diploma-in-patisserie-and-confectionery-skills": "diploma-patisserie",
  "diploma-in-cruise-hospitality-services": "diploma-cruise",
  "certificate-in-professional-bartending-skills": "cert-bartending",
  "certificate-in-restaurant-front-of-house-service": "cert-front-of-house",
  "award-in-basic-cookery-skills": "award-cookery",
  "recognition-of-prior-learning": "rpl-certification",
  // Legacy short aliases
  "cert-front-office": "cert-front-of-house",
  "front-of-house": "cert-front-of-house",
  "culinary": "diploma-culinary",
  "patisserie": "diploma-patisserie",
  "bakery": "diploma-patisserie",
  "cruise": "diploma-cruise",
  "bartending": "cert-bartending",
  "cookery": "award-cookery",
  "rpl": "rpl-certification",
};

/**
 * Resolves a `?course=` query parameter or a URL slug (e.g. "diploma-in-culinary-skills")
 * to a canonical `CourseProgram`, returning `null` if no match exists.
 */
export function resolveCourseParam(param?: string | null): CourseProgram | null {
  if (!param) return null;
  const normalized = param.trim().toLowerCase();
  if (!normalized) return null;

  const canonicalId = COURSE_ALIASES[normalized] ?? normalized;
  const byId = COURSE_PROGRAMS.find((c) => c.id === canonicalId || c.slug === canonicalId);
  if (byId) return byId;

  return (
    COURSE_PROGRAMS.find(
      (c) =>
        c.title.toLowerCase() === normalized ||
        c.shortTitle.toLowerCase() === normalized ||
        c.slug.toLowerCase() === normalized,
    ) ?? null
  );
}

/**
 * Helper to look up a course by exact slug or id
 */
export function getCourseBySlug(slug: string): CourseProgram | null {
  return resolveCourseParam(slug);
}

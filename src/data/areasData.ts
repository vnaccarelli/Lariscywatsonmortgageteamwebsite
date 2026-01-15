export interface AreaData {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  population: string;
  foundedYear: number;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero Content
  heroSubheadline: string;
  heroDescription: string;
  neighborhoods: string[];
  heroImageUrl: string;
  
  // Quick Facts (visible on page + SEO)
  quickFacts: string[];
  
  // Customized Feature Cards
  customFeatures: {
    localExpertise: string;
    countyKnowledge: string;
    experience: string;
  };
}

export const areasData: AreaData[] = [
  {
    slug: "savannah-ga",
    city: "Savannah",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Chatham County",
    population: "147,000+",
    foundedYear: 2015,
    metaTitle: "Savannah, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Expert mortgage services in Savannah, GA. FHA, VA, Conventional, and New Construction loans. Local expertise since 2015.",
    heroSubheadline: "Savannah's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team brings local expertise to every neighborhood in Savannah. Whether you're buying your first home in Ardsley Park, upgrading in Southbridge, or building new in The Islands, we guide you through every step with personalized service and competitive rates.",
    neighborhoods: ["Ardsley Park", "Southbridge", "The Islands", "Wilmington Island", "Downtown Historic District"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/savannah-ga-2.png?raw=true",
    quickFacts: [
      "Historic port city with thriving real estate market",
      "Home to SCAD and strong cultural community",
      "Growing tech and business hub in coastal Georgia"
    ],
    customFeatures: {
      localExpertise: "Expert in Savannah's Diverse Neighborhoods",
      countyKnowledge: "Chatham County Insider Knowledge",
      experience: "Serving Savannah Since 2015"
    }
  },
  {
    slug: "pooler-ga",
    city: "Pooler",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Chatham County",
    population: "25,000+",
    foundedYear: 2015,
    metaTitle: "Pooler, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Fast, reliable mortgage solutions in Pooler, GA. Serving Godley Station, Savannah Quarters, and all Pooler neighborhoods.",
    heroSubheadline: "Pooler's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team specializes in Pooler's fast-growing real estate market. From new construction in Godley Station to established homes in Savannah Quarters, we provide personalized mortgage solutions for your Pooler home purchase.",
    neighborhoods: ["Godley Station", "Savannah Quarters", "West Chatham", "Pooler Parkway"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/pooler-ga.png?raw=true",
    quickFacts: [
      "One of the fastest-growing cities in Georgia",
      "Home to Tanger Outlets and major retail hub",
      "Excellent schools and family-friendly community"
    ],
    customFeatures: {
      localExpertise: "Expert in Pooler's Growing Market",
      countyKnowledge: "Chatham County Insider Knowledge",
      experience: "Serving Pooler Since 2015"
    }
  },
  {
    slug: "richmond-hill-ga",
    city: "Richmond Hill",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Bryan County",
    population: "15,000+",
    foundedYear: 2015,
    metaTitle: "Richmond Hill, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Richmond Hill mortgage experts. FHA, VA, Conventional loans for your Bryan County home.",
    heroSubheadline: "Richmond Hill's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team understands Richmond Hill's unique appeal. Whether you're moving to this charming Bryan County community for its small-town feel or growing opportunities, we'll help you secure the perfect mortgage for your new home.",
    neighborhoods: ["Historic Downtown", "Sterling", "Mulberry Park", "Ford Plantation area"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/richmondhill-ga.png?raw=true",
    quickFacts: [
      "Historic charm meets modern growth",
      "Gateway between Savannah and coastal Georgia",
      "Strong community values and excellent quality of life"
    ],
    customFeatures: {
      localExpertise: "Expert in Richmond Hill's Market",
      countyKnowledge: "Bryan County Insider Knowledge",
      experience: "Serving Richmond Hill Since 2015"
    }
  },
  {
    slug: "guyton-ga",
    city: "Guyton",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Effingham County",
    population: "2,500+",
    foundedYear: 2015,
    metaTitle: "Guyton, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Local mortgage expertise for Guyton, GA. Serving Effingham County with personalized home loan solutions.",
    heroSubheadline: "Guyton's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team brings big-city mortgage expertise to Guyton's small-town community. We understand Effingham County's market and help families achieve homeownership in this peaceful, growing area.",
    neighborhoods: ["Downtown Guyton", "Rural Effingham County", "New subdivisions"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/guyton-ga.png?raw=true",
    quickFacts: [
      "Peaceful small-town living near Savannah",
      "Growing community with affordable housing",
      "Part of Effingham County's strong school system"
    ],
    customFeatures: {
      localExpertise: "Expert in Guyton's Community",
      countyKnowledge: "Effingham County Insider Knowledge",
      experience: "Serving Guyton Since 2015"
    }
  },
  {
    slug: "rincon-ga",
    city: "Rincon",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Effingham County",
    population: "10,000+",
    foundedYear: 2015,
    metaTitle: "Rincon, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Rincon mortgage specialists. Expert guidance for FHA, VA, and Conventional loans in Effingham County.",
    heroSubheadline: "Rincon's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team serves Rincon's thriving community with personalized mortgage solutions. Whether you're buying in established neighborhoods or new developments, we provide the local expertise and competitive rates you need.",
    neighborhoods: ["Oak Level Plantation", "Brighton Park", "Downtown Rincon"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/rincon-ga.png?raw=true",
    quickFacts: [
      "Rapid growth with excellent schools",
      "Perfect balance of suburban comfort and rural charm",
      "Strong Effingham County community"
    ],
    customFeatures: {
      localExpertise: "Expert in Rincon's Growing Market",
      countyKnowledge: "Effingham County Insider Knowledge",
      experience: "Serving Rincon Since 2015"
    }
  },
  {
    slug: "springfield-ga",
    city: "Springfield",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Effingham County",
    population: "3,000+",
    foundedYear: 2015,
    metaTitle: "Springfield, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Springfield mortgage services. FHA, VA, Conventional loans for Effingham County's county seat.",
    heroSubheadline: "Springfield's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team understands Springfield's unique position as Effingham County's seat. We bring local knowledge and personalized service to help you finance your home in this historic, family-oriented community.",
    neighborhoods: ["Downtown Springfield", "Historic District", "County residential areas"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/springfield-ga.png?raw=true",
    quickFacts: [
      "Effingham County seat with rich history",
      "Tight-knit community atmosphere",
      "Growing opportunities near Savannah metro"
    ],
    customFeatures: {
      localExpertise: "Expert in Springfield's Market",
      countyKnowledge: "Effingham County Insider Knowledge",
      experience: "Serving Springfield Since 2015"
    }
  },
  {
    slug: "hinesville-ga",
    city: "Hinesville",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Liberty County",
    population: "35,000+",
    foundedYear: 2015,
    metaTitle: "Hinesville, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Hinesville mortgage experts. VA loans and military family specialists near Fort Stewart.",
    heroSubheadline: "Hinesville's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team proudly serves Hinesville and Fort Stewart's military community. With special expertise in VA loans and military relocations, we make homeownership seamless for service members and their families.",
    neighborhoods: ["Downtown Hinesville", "Liberty County residential", "Areas near Fort Stewart"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/hinesville-ga.png?raw=true",
    quickFacts: [
      "Home to Fort Stewart military installation",
      "Strong military community and support",
      "Growing civilian and veteran population"
    ],
    customFeatures: {
      localExpertise: "Expert in Hinesville's Military Market",
      countyKnowledge: "Liberty County Insider Knowledge",
      experience: "Serving Hinesville Since 2015"
    }
  },
  {
    slug: "tybee-island-ga",
    city: "Tybee Island",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Chatham County",
    population: "3,000+",
    foundedYear: 2015,
    metaTitle: "Tybee Island, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Tybee Island mortgage specialists. Financing for coastal living and vacation properties.",
    heroSubheadline: "Tybee Island's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team understands Tybee Island's unique coastal market. Whether you're buying your beach home, vacation property, or year-round residence, we navigate the complexities of island real estate financing.",
    neighborhoods: ["North Beach", "South End", "Mid-Island residential", "Historic Fort Screven area"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/tybeeisland-ga.png?raw=true",
    quickFacts: [
      "Georgia's beloved beach town and barrier island",
      "Unique coastal lifestyle and vacation market",
      "Strong tourism economy and year-round community"
    ],
    customFeatures: {
      localExpertise: "Expert in Tybee's Coastal Market",
      countyKnowledge: "Chatham County Insider Knowledge",
      experience: "Serving Tybee Island Since 2015"
    }
  },
  {
    slug: "midway-ga",
    city: "Midway",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Liberty County",
    population: "2,000+",
    foundedYear: 2015,
    metaTitle: "Midway, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Midway mortgage solutions. Local expertise for Liberty County homebuyers.",
    heroSubheadline: "Midway's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team serves Midway's historic community with personalized mortgage solutions. We understand Liberty County's market and help families achieve homeownership in this charming coastal Georgia area.",
    neighborhoods: ["Historic Midway", "Rural Liberty County", "Coastal residential areas"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/midway-ga.png?raw=true",
    quickFacts: [
      "Historic roots dating to colonial Georgia",
      "Peaceful coastal community atmosphere",
      "Growing residential opportunities"
    ],
    customFeatures: {
      localExpertise: "Expert in Midway's Market",
      countyKnowledge: "Liberty County Insider Knowledge",
      experience: "Serving Midway Since 2015"
    }
  },
  {
    slug: "pembroke-ga",
    city: "Pembroke",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Bryan County",
    population: "2,500+",
    foundedYear: 2015,
    metaTitle: "Pembroke, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Pembroke mortgage experts. FHA, VA, Conventional loans for Bryan County homes.",
    heroSubheadline: "Pembroke's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team brings personalized service to Pembroke's friendly community. We understand Bryan County's market and help families secure competitive financing for their Pembroke homes.",
    neighborhoods: ["Downtown Pembroke", "Bryan County residential", "Rural areas"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/pembroke-ga.png?raw=true",
    quickFacts: [
      "Bryan County's county seat",
      "Small-town charm with growing opportunities",
      "Close-knit community atmosphere"
    ],
    customFeatures: {
      localExpertise: "Expert in Pembroke's Community",
      countyKnowledge: "Bryan County Insider Knowledge",
      experience: "Serving Pembroke Since 2015"
    }
  },
  {
    slug: "port-wentworth-ga",
    city: "Port Wentworth",
    state: "Georgia",
    stateAbbr: "GA",
    county: "Chatham County",
    population: "10,000+",
    foundedYear: 2015,
    metaTitle: "Port Wentworth, GA Mortgage Services | Lariscy Watson Team",
    metaDescription: "Port Wentworth mortgage specialists. Local expertise for Chatham County homebuyers.",
    heroSubheadline: "Port Wentworth's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team serves Port Wentworth's growing community with expert mortgage solutions. Whether you're buying in established neighborhoods or new developments, we provide the local knowledge and competitive rates you deserve.",
    neighborhoods: ["Rice Hope Plantation", "Downtown Port Wentworth", "New residential developments"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/portwentworth-ga.png?raw=true",
    quickFacts: [
      "Strategic location near Savannah River",
      "Growing industrial and residential hub",
      "Strong Chatham County community"
    ],
    customFeatures: {
      localExpertise: "Expert in Port Wentworth's Market",
      countyKnowledge: "Chatham County Insider Knowledge",
      experience: "Serving Port Wentworth Since 2015"
    }
  },
  {
    slug: "bluffton-sc",
    city: "Bluffton",
    state: "South Carolina",
    stateAbbr: "SC",
    county: "Beaufort County",
    population: "27,000+",
    foundedYear: 2015,
    metaTitle: "Bluffton, SC Mortgage Services | Lariscy Watson Team",
    metaDescription: "Bluffton mortgage experts. FHA, VA, Conventional loans for Beaufort County's fastest-growing town.",
    heroSubheadline: "Bluffton's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team serves Bluffton's booming real estate market. From master-planned communities to historic Old Town, we provide expert mortgage guidance for South Carolina's fastest-growing town.",
    neighborhoods: ["Old Town Bluffton", "Palmetto Bluff", "Sun City", "New River", "Belfair"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/bluffton-sc.png?raw=true",
    quickFacts: [
      "One of America's fastest-growing small towns",
      "Perfect blend of Lowcountry charm and modern amenities",
      "Thriving arts scene and waterfront lifestyle"
    ],
    customFeatures: {
      localExpertise: "Expert in Bluffton's Booming Market",
      countyKnowledge: "Beaufort County Insider Knowledge",
      experience: "Serving Bluffton Since 2015"
    }
  },
  {
    slug: "hilton-head-island-sc",
    city: "Hilton Head Island",
    state: "South Carolina",
    stateAbbr: "SC",
    county: "Beaufort County",
    population: "37,000+",
    foundedYear: 2015,
    metaTitle: "Hilton Head Island, SC Mortgage Services | Lariscy Watson Team",
    metaDescription: "Hilton Head Island mortgage specialists. Expert financing for coastal properties, vacation homes, and primary residences.",
    heroSubheadline: "Hilton Head Island's Trusted Mortgage Experts for FHA | VA | Conventional | New Construction Loans",
    heroDescription: "The Lariscy Watson Mortgage Team understands Hilton Head's premier coastal market. Whether you're buying a primary residence, vacation home, or investment property, we navigate the unique aspects of island financing with expertise and care.",
    neighborhoods: ["Sea Pines", "Palmetto Dunes", "Shipyard", "Port Royal", "Spanish Wells"],
    heroImageUrl: "https://github.com/Lending-Heights/lariscy-watson-mortgage-team/blob/main/images/hiltonheadisland-sc.png?raw=true",
    quickFacts: [
      "World-renowned resort destination and barrier island",
      "Championship golf courses and pristine beaches",
      "Upscale coastal living and strong vacation market"
    ],
    customFeatures: {
      localExpertise: "Expert in Hilton Head's Premier Market",
      countyKnowledge: "Beaufort County Insider Knowledge",
      experience: "Serving Hilton Head Island Since 2015"
    }
  }
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areasData.find(area => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areasData.map(area => area.slug);
}
import {
  AdoraOkolue,
  EmmanuelAdeyeye,
  EmmanuellaAhidjo,
  GloryOlaifa,
  LogoAfricaAgility,
  LogoAltschool,
  LogoComtel,
  LogoCosmoLab,
  LogoEpitech,
  LogoEtriLabs,
  LogoGDG,
  LogoGozem,
  LogoMoniepoint,
  LogoMtn,
  LogoProductDive,
  LogoRightcom,
  LogoSobebra,
  LogoTSAcademy,
  VictoriaOloyede,
} from "#/assets/images";
import { env } from "#/env";

// Static data for partners/sponsors marquee
export const partners = [
  { name: "MTN Benin", slug: "mtn-benin", logo: LogoMtn },
  { name: "Moniepoint", slug: "moniepoint", logo: LogoMoniepoint },
  { name: "Product Dive", slug: "product-dive", logo: LogoProductDive },
  { name: "Sobebra", slug: "sobebra", logo: LogoSobebra },
  { name: "Gozem", slug: "gozem", logo: LogoGozem },
  { name: "CosmoLAB", slug: "cosmolab", logo: LogoCosmoLab },
  { name: "Etrilabs", slug: "etrilabs", logo: LogoEtriLabs },
  { name: "Epitech", slug: "epitech", logo: LogoEpitech },
  { name: "Google Developer Group", slug: "google-developer-group", logo: LogoGDG },
  { name: "Rightcom", slug: "rightcom", logo: LogoRightcom },
  { name: "Comtel Technologies", slug: "comtel", logo: LogoComtel },
  { name: "Africa Agility", slug: "africa-agility", logo: LogoAfricaAgility },
  { name: "TS Academy", slug: "ts-academy", logo: LogoTSAcademy },
  { name: "Altschool", slug: "altschool", logo: LogoAltschool },
] as const;

// Navigation links
export const navLinks = [
  { key: "Home", href: "#hero" },
  { key: "About", href: "#about" },
  { key: "Events", href: "#events" },
  { key: "Resources", href: "#offerings" },
  { key: "Faq", href: "#faq" },
] as const;

// Team member placeholders (easily extendable)
export const teamMembers = [
  {
    name: "Emmanuella Ahidjo",
    roleKey: "teamRoleSocialMediaManager" as const,
    image: EmmanuellaAhidjo,
  },
  { name: "Adora Okolue", roleKey: "teamRoleCommunityManager" as const, image: AdoraOkolue },
  { name: "Glory Olaifa", roleKey: "teamRoleProgramManager" as const, image: GloryOlaifa },
  { name: "Victoria Oloyede", roleKey: "teamRoleAdminIntern" as const, image: VictoriaOloyede },
  // { name: "", roleKey: "teamRoleGraphicsDesigner" as const, image: "" },
  { name: "Emmanuel Adeyeye", roleKey: "teamRoleWebDeveloper" as const, image: EmmanuelAdeyeye },
] as const;

// Gallery placeholders
export const galleryImages = [
  { alt: "Community meetup photo 1" },
  { alt: "Community meetup photo 2" },
  { alt: "June 6th event photo 1" },
  { alt: "June 6th event photo 2" },
  { alt: "Workshop session photo" },
  { alt: "Networking event photo" },
] as const;

// Social links
export const socialLinks = [
  { name: "Twitter", href: env.VITE_TWITTER_URL, icon: "twitter" },
  {
    name: "LinkedIn",
    href: env.VITE_LINKEDIN_URL,
    icon: "linkedin",
  },
  { name: "Instagram", href: env.VITE_INSTAGRAM_URL, icon: "instagram" },
] as const;

// Values
export const values = ["Value1", "Value2", "Value3", "Value4"] as const;

// Speakers
export interface Speaker {
  id: string;
  name: string;
  title: string;
  role: "speaker" | "panelist" | "convener";
  sessionFormat: "Keynote" | "Masterclass" | "Panel" | "Standard";
  topic: string;
  bio: string;
  image?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
}

export const speakers: Speaker[] = [
  {
    id: "adedoyinsolami-adeyeye",
    name: "Adedoyinsolami Adeyeye",
    title: "Product Manager, Moniepoint / Founder, Decode Benin",
    role: "convener",
    sessionFormat: "Keynote",
    topic: "Beyond the Degree: Building Career Bridges in the African Tech Ecosystem",
    bio: "A driven Software Product Manager at Moniepoint with a deep passion for community building and product growth. Having studied Software Engineering in Benin Republic, Doyin founded Decode Benin to create the exact bridge she wished she had as a student -- connecting bright minds to the real-world tech industry.",
    socials: {
      linkedin: "https://linkedin.com/in/adedoyinsolami",
      twitter: "https://twitter.com/decodebenin",
    },
  },
  {
    id: "adedeji-olowe",
    name: "Adedeji Olowe",
    title: "Fintech Thought Leader & Entrepreneur",
    role: "speaker",
    sessionFormat: "Keynote",
    topic: "The Future of Fintech in West Africa",
    bio: "One of Africa's most respected fintech voices, Adedeji Olowe has been instrumental in shaping the conversation around digital payments and financial inclusion across the continent. A serial entrepreneur and thought leader, he brings decades of experience building and scaling fintech companies.",
    socials: {
      twitter: "https://twitter.com/aborodedeji",
      linkedin: "https://linkedin.com/in/aborodedeji",
    },
  },
  {
    id: "prosper-otemuyiwa",
    name: "Prosper Otemuyiwa",
    title: "Developer Advocate & Community Builder",
    role: "speaker",
    sessionFormat: "Masterclass",
    topic: "Open Source as a Career Accelerator for African Developers",
    bio: "Prosper Otemuyiwa is a globally recognized developer advocate and passionate open-source contributor. He has spent years helping African developers leverage open-source contributions to build international careers and establish credibility in the global tech scene.",
    socials: {
      twitter: "https://twitter.com/unicodeveloper",
      linkedin: "https://linkedin.com/in/unicodeveloper",
    },
  },
  {
    id: "khadijat-abdulkadir",
    name: "Khadijat Abdulkadir",
    title: "Marketing & Growth Lead (Fintech)",
    role: "speaker",
    sessionFormat: "Standard",
    topic: "Growth Marketing Strategies for Tech Startups in Emerging Markets",
    bio: "A dynamic marketing and growth professional with extensive experience in the fintech space. Khadijat has led growth campaigns that reached millions of users across Africa, combining data-driven strategies with deep market understanding.",
    socials: {
      linkedin: "https://linkedin.com/in/khadijatabdulkadir",
    },
  },
  {
    id: "samuel-afolabi",
    name: "Samuel Afolabi",
    title: "Software Engineer & Tech Educator",
    role: "speaker",
    sessionFormat: "Masterclass",
    topic: "From Student to Senior Engineer: A Practical Roadmap",
    bio: "Samuel Afolabi is a seasoned software engineer who has worked across multiple tech stacks and companies. He is passionate about tech education and regularly mentors aspiring developers, helping them navigate the transition from academic learning to professional software engineering.",
    socials: {
      twitter: "https://twitter.com/samuelafolabi",
      linkedin: "https://linkedin.com/in/samuelafolabi",
    },
  },
  {
    id: "fatima-zahra",
    name: "Fatima Zahra",
    title: "UX Researcher & Design Lead",
    role: "panelist",
    sessionFormat: "Panel",
    topic: "Designing for Africa: UX Research in Emerging Markets",
    bio: "Fatima Zahra is a UX researcher and design lead with a focus on creating digital products that truly serve African users. Her research-first approach has shaped products used by millions, and she advocates for inclusive design practices that bridge cultural and linguistic divides.",
    socials: {
      linkedin: "https://linkedin.com/in/fatimazahra",
      website: "https://fatimazahra.design",
    },
  },
  {
    id: "chukwuemeka-nwosu",
    name: "Chukwuemeka Nwosu",
    title: "Venture Capital Partner",
    role: "panelist",
    sessionFormat: "Panel",
    topic: "What Investors Actually Look For in African Tech Startups",
    bio: "A venture capital partner with a keen eye for Africa's next big tech opportunities. Chukwuemeka has evaluated and funded numerous startups across the continent and brings candid insight into what it takes to attract investment in the African tech ecosystem.",
    socials: {
      linkedin: "https://linkedin.com/in/chukwuemekanwosu",
      twitter: "https://twitter.com/cnwosu",
    },
  },
  {
    id: "aminata-diallo",
    name: "Aminata Diallo",
    title: "Data Scientist & AI Researcher",
    role: "speaker",
    sessionFormat: "Masterclass",
    topic: "AI & Machine Learning: Real-World Applications for African Problems",
    bio: "Aminata Diallo is a data scientist and AI researcher focused on applying machine learning to solve uniquely African challenges -- from agriculture optimization to healthcare access. She bridges the gap between cutting-edge AI research and practical, impactful deployment.",
    socials: {
      linkedin: "https://linkedin.com/in/aminatadiallo",
      twitter: "https://twitter.com/aminata_ai",
    },
  },
  {
    id: "tunde-bakare",
    name: "Tunde Bakare",
    title: "Cybersecurity Consultant",
    role: "speaker",
    sessionFormat: "Standard",
    topic: "Cybersecurity Careers: An Untapped Goldmine for Young Africans",
    bio: "Tunde Bakare is a cybersecurity consultant who has helped organizations across Africa strengthen their digital defenses. He is a vocal advocate for young Africans entering the cybersecurity field, which remains one of the most in-demand and underserved areas in the continent's tech landscape.",
    socials: {
      linkedin: "https://linkedin.com/in/tundebakare",
    },
  },
  {
    id: "ngozi-okonkwo",
    name: "Ngozi Okonkwo",
    title: "Product Design Lead",
    role: "panelist",
    sessionFormat: "Panel",
    topic: "Building Products Users Actually Love: A West African Perspective",
    bio: "Ngozi Okonkwo is a product design lead who has shipped products across fintech, edtech, and healthtech verticals. She brings a user-centered design philosophy rooted in deep empathy for African users, and she mentors the next generation of product designers.",
    socials: {
      twitter: "https://twitter.com/ngoziokonkwo",
      linkedin: "https://linkedin.com/in/ngoziokonkwo",
      website: "https://ngozi.design",
    },
  },
];

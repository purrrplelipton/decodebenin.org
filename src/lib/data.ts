import { createId } from "@paralleldrive/cuid2";
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
].map((i) => ({ id: createId(), ...i }));

// Navigation links
export const navLinks = [
  { key: "Home", href: "#hero" },
  { key: "About", href: "#about" },
  { key: "Events", href: "#events" },
  { key: "Resources", href: "#offerings" },
  { key: "Faq", href: "#faq" },
].map((i) => ({ id: createId(), ...i }));

// Team member placeholders (easily extendable)
export const teamMembers = [
  {
    name: "Emmanuella Ahidjo",
    roleKey: "teamRoleSocialMediaManager",
    image: EmmanuellaAhidjo,
    linkedIn: "meena-emmanuella-ahidjo-551a32351",
  },
  {
    name: "Adora Okolue",
    roleKey: "teamRoleCommunityManager",
    image: AdoraOkolue,
    linkedIn: "adora-okolue",
  },
  {
    name: "Glory Olaifa",
    roleKey: "teamRoleProgramManager",
    image: GloryOlaifa,
    linkedIn: "glory-olaifa",
  },
  {
    name: "Victoria Oloyede",
    roleKey: "teamRoleAdminIntern",
    image: VictoriaOloyede,
    linkedIn: "oluwatimilehin-oloyede-2495833b0",
  },
  {
    name: "Emmanuel Adeyeye",
    roleKey: "teamRoleWebDeveloper",
    image: EmmanuelAdeyeye,
    linkedIn: "adeyeye-emmanuel",
  },
].map((i) => ({ id: createId(), ...i }));

// Gallery placeholders
export const galleryImages = [
  { alt: "Community meetup photo 1" },
  { alt: "Community meetup photo 2" },
  { alt: "June 6th event photo 1" },
  { alt: "June 6th event photo 2" },
  { alt: "Workshop session photo" },
  { alt: "Networking event photo" },
].map((i) => ({ id: createId(), ...i }));

// Social links
export const socialLinks = [
  { name: "Twitter", href: env.VITE_TWITTER_URL, icon: "twitter" },
  {
    name: "LinkedIn",
    href: env.VITE_LINKEDIN_URL,
    icon: "linkedin",
  },
  { name: "Instagram", href: env.VITE_INSTAGRAM_URL, icon: "instagram" },
].map((i) => ({ id: createId(), ...i }));

// Values
export const values = ["Value1", "Value2", "Value3", "Value4"].map((value) => ({
  id: createId(),
  value,
}));

// Speakers
export const speakers = [
  {
    image: "",
    name: "Oluchukwu Chiadika",
    title: "Marketing & Growth Lead",
    sessionFormat: "Speak",
    topic: "Scaling Your Wealth as Fast as Your Career",
    bio: "A results-driven marketing and growth professional with a track record of scaling brands across Africa's tech landscape.",
    linkedin: "oluchukwu-chiadika",
  },
  {
    image: "",
    name: "Oluwadamilola Daniel",
    title: "Programs/Partnership Lead (Africa Agility)",
    sessionFormat: "Panel",
    topic: "The EdTech Blueprint: Choosing Your Path and Mastering the Ecosystem",
    bio: "Programs and Partnership Lead at Africa Agility, passionate about building bridges between education and technology across the continent.",
    linkedin: "oluwadamilola-daniel",
  },
  {
    image: "",
    name: "Adedoyinsola Adeyeye",
    title: "Product Manager (Moniepoint) | Founder (Decode Benin)",
    sessionFormat: "Keynote",
    topic: "Beyond the Degree: Engineering your future in the tech ecosystem",
    bio: "A driven Software Product Manager at Moniepoint with a deep passion for community building and product growth. Founded Decode Benin to create the exact bridge she wished she had as a student.",
    linkedin: "adedoyinsolami",
  },
  {
    image: "",
    name: "Daniel Esuola",
    title: "Founder (Provolo)",
    sessionFormat: "Panel",
    topic: "",
    bio: "Entrepreneur and founder of Provolo, building innovative solutions for the African market.",
    linkedin: "daniel-esuola",
  },
  {
    image: "",
    name: "Imam Bashir",
    title: "Cybersecurity Engineer | Programs/Community Lead",
    sessionFormat: "Panel",
    topic: "",
    bio: "Cybersecurity engineer and community builder working to make digital spaces safer across Africa.",
    linkedin: "imam-bashir",
  },
  {
    image: "",
    name: "Glory Olaifa",
    title: "Android Engineer (Bglow)",
    sessionFormat: "Panel",
    topic: "",
    bio: "Android engineer at Bglow, building mobile experiences that serve millions of users across Africa.",
    linkedin: "glory-olaifa",
  },
  {
    image: "",
    name: "Akintunde Opawole",
    title: "Program & Partnership (Product Dive)",
    sessionFormat: "Keynote",
    topic: "",
    bio: "Program and Partnership lead at Product Dive, fostering product management education and community growth.",
    linkedin: "akintunde-opawole",
  },
  {
    image: "",
    name: "Dami Opaniyan",
    title: "Partnership (TS Academy)",
    sessionFormat: "Panel",
    topic: "The EdTech Blueprint: Choosing Your Path and Mastering the Ecosystem",
    bio: "Partnership lead at TS Academy, connecting educational programs with industry opportunities across West Africa.",
    linkedin: "dami-opaniyan",
  },
  {
    image: "",
    name: "Samuel Afolabi",
    title: "Cybersecurity Engineer",
    sessionFormat: "Standard",
    topic: "",
    bio: "Seasoned cybersecurity engineer passionate about securing Africa's growing digital infrastructure.",
    linkedin: "samuel-afolabi",
  },
  {
    image: "",
    name: "Chukwuemeka Chukwurah",
    title: "Senior Software Engineer (Rocksteady Technology)",
    sessionFormat: "Standard",
    topic: "The path from code to scalable systems: Journey of building for efficiency",
    bio: "Senior Software Engineer at Rocksteady Technology with deep expertise in building scalable, efficient systems from the ground up.",
    linkedin: "chukwuemeka-chukwurah",
  },
].map((i) => ({ id: createId(), ...i }));

import { createId } from "@paralleldrive/cuid2";
import { env } from "#/env";

// Static data for partners/sponsors marquee
export const partners = [
  { name: "MTN Benin", slug: "mtn-benin", logo: "/images/mtn-benin-logo.png" },
  { name: "Moniepoint", slug: "moniepoint", logo: "/images/moniepoint-logo.png" },
  { name: "Product Dive", slug: "product-dive", logo: "/images/product-dive-logo.png" },
  { name: "Sobebra", slug: "sobebra", logo: "/images/sobebra-logo.png" },
  { name: "Gozem", slug: "gozem", logo: "/images/gozem-logo.png" },
  { name: "CosmoLAB", slug: "cosmolab", logo: "/images/cosmolab-logo.png" },
  { name: "Etrilabs", slug: "etrilabs", logo: "/images/etrilabs-logo.png" },
  { name: "Epitech", slug: "epitech", logo: "/images/epitech-logo.png" },
  {
    name: "Google Developer Group",
    slug: "google-developer-group",
    logo: "/images/google-developer-group-logo.png",
  },
  { name: "Rightcom", slug: "rightcom", logo: "/images/rightcom-logo.png" },
  { name: "Comtel Technologies", slug: "comtel", logo: "/images/comtel-technologies-logo.png" },
  { name: "Africa Agility", slug: "africa-agility", logo: "/images/africa-agility-logo.png" },
  { name: "TS Academy", slug: "ts-academy", logo: "/images/ts-academy-logo.png" },
  { name: "Altschool", slug: "altschool", logo: "/images/altschool-logo.png" },
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
    image: "/images/emmanuella-ahidjo.avif",
    linkedIn: "meena-emmanuella-ahidjo-551a32351",
  },
  {
    name: "Adora Okolue",
    roleKey: "teamRoleCommunityManager",
    image: "/images/adora-okolue.avif",
    linkedIn: "adora-okolue",
  },
  {
    name: "Glory Olaifa",
    roleKey: "teamRoleProgramManager",
    image: "/images/glory-olaifa.avif",
    linkedIn: "glory-olaifa",
  },
  {
    name: "Victoria Oloyede",
    roleKey: "teamRoleAdminIntern",
    image: "/images/victoria-oloyede.avif",
    linkedIn: "oluwatimilehin-oloyede-2495833b0",
  },
  {
    name: "Emmanuel Adeyeye",
    roleKey: "teamRoleWebDeveloper",
    image: "/images/emmanuel-adeyeye.avif",
    linkedIn: "adeyeye-emmanuel",
  },
].map((i) => ({ id: createId(), ...i }));

// Gallery placeholders
export const galleryImages = [
  { alt: "Community meetup photo 1", src: "/images/community-meetup-1.avif" },
  { alt: "Community meetup photo 2", src: "/images/community-meetup-2.avif" },
  { alt: "June 6th event photo 1", src: "/images/june-6th-event-1.avif" },
  { alt: "June 6th event photo 2", src: "/images/june-6th-event-2.avif" },
  { alt: "Workshop session photo", src: "/images/workshop-session.avif" },
  { alt: "Networking event photo", src: "/images/networking-event.avif" },
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
    image: "/images/oluchukwu-chiadika.avif",
    name: "Oluchukwu Chiadika",
    title: "Marketing & Growth Lead",
    bio: "",
    linkedin: "",
    sessionFormat: "Speak",
    topic: "Scaling Your Wealth as Fast as Your Career",
  },
  {
    image: "/images/oluwadamilola-daniel.avif",
    name: "Oluwadamilola Daniel",
    title: "Programs/Partnership Lead(Africa Agility)",
    bio: "",
    linkedin: "",
    sessionFormat: "Panel",
    topic: "The EdTech Blueprint: Choosing Your Path and Mastering the Ecosystem",
  },
  {
    image: "/images/adedoyinsolami-adeyeye.avif",
    name: "Adedoyinsola Adeyeye",
    title: "Product Manager(Moniepoint) | Founder(Decode Benin)",
    bio: "",
    linkedin: "adedoyinsola-adeyeye-csm%C2%AE-mba-in-view-b88b74233",
    sessionFormat: "Keynote",
    topic: "Beyond the Degree: Engineering your future in the tech ecosystem",
  },
  {
    image: "/images/daniel-esuola.avif",
    name: "Daniel Esuola",
    title: "Founder(Provolo)",
    bio: "",
    linkedin: "",
    sessionFormat: "Panel",
    topic: "",
  },
  {
    image: "/images/imam-bashir.avif",
    name: "Imam Bashir",
    title: "Cybersecurity Engineer | Programs/Community Lead",
    bio: "",
    linkedin: "",
    sessionFormat: "Panel",
    topic: "",
  },
  {
    image: "/images/glory-olaifa.avif",
    name: "Glory Olaifa",
    title: "Android Engineer(Bglow)",
    bio: "",
    linkedin: "glory-olaifa",
    sessionFormat: "Panel",
    topic: "",
  },
  {
    image: "/images/akintunde-opawole.avif",
    name: "Akintunde Opawole",
    title: "Program & Partnership(Product Dive)",
    bio: "",
    linkedin: "",
    sessionFormat: "Keynote",
    topic: "",
  },
  {
    image: "/images/dami-opaniyan.avif",
    name: "Dami Opaniyan",
    title: "Partnership(TS Academy)",
    bio: "",
    linkedin: "",
    sessionFormat: "Panel",
    topic: "The EdTech Blueprint: Choosing Your Path and Mastering the Ecosystem",
  },
  {
    image: "/images/samuel-afolabi.avif",
    name: "Samuel Afolabi",
    title: "Cybersecurity Engineer",
    bio: "",
    linkedin: "",
    sessionFormat: "Standard",
    topic: "",
  },
  {
    image: "/images/chukwuemeka-chukwurah.avif",
    name: "Chukwuemeka Chukwurah",
    bio: "",
    linkedin: "",
    title: "Senior Software Engineer(Rocksteady Technology)",
    sessionFormat: "Standard",
    topic: "The path from code to scalable systems: Journey of building for efficiency",
  },
].map((i) => ({ id: createId(), ...i }));

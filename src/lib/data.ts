import {
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
} from "#/assets/images";

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
  { name: "Operations Lead", role: "Operations", placeholder: true },
  { name: "Community Lead", role: "Community", placeholder: true },
  { name: "Marketing Lead", role: "Marketing", placeholder: true },
  { name: "Partnership Lead", role: "Partnership", placeholder: true },
] as const;

// Gallery placeholders
export const galleryImages = [
  { alt: "Community meetup photo 1", placeholder: true },
  { alt: "Community meetup photo 2", placeholder: true },
  { alt: "June 6th event photo 1", placeholder: true },
  { alt: "June 6th event photo 2", placeholder: true },
  { alt: "Workshop session photo", placeholder: true },
  { alt: "Networking event photo", placeholder: true },
] as const;

// Social links
export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/decodebenin", icon: "twitter" },
  { name: "LinkedIn", href: "https://linkedin.com/company/decodebenin", icon: "linkedin" },
  { name: "Instagram", href: "https://instagram.com/decodebenin", icon: "instagram" },
] as const;

// Values
export const values = ["Value1", "Value2", "Value3", "Value4"] as const;

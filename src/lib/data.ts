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

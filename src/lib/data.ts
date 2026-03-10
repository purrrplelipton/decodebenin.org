import { createId } from "@paralleldrive/cuid2";
import { env } from "#/env";

// Static data for partners/sponsors marquee
export interface Partner {
  id: string;
  name: string;
  slug: string;
  logo: string;
}

export const partners: Partner[] = [
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
export interface NavLink {
  id: string;
  key: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { key: "navHome", href: "#hero" },
  { key: "navAbout", href: "#about" },
  { key: "navEvents", href: "#events" },
  { key: "navSchedule", href: "#schedule" },
  { key: "navResources", href: "#offerings" },
  { key: "navFaq", href: "#faq" },
].map((i) => ({ id: createId(), ...i }));

// Team member placeholders (easily extendable)
export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  image: string;
  linkedIn: string;
}

export const teamMembers: TeamMember[] = [
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
export interface GalleryImage {
  id: string;
  altKey: string;
  src: string;
}

export const galleryImages: GalleryImage[] = [
  { altKey: "galleryPhoto1", src: "/images/community-meetup-1.avif" },
  { altKey: "galleryPhoto2", src: "/images/community-meetup-2.avif" },
  { altKey: "galleryPhoto3", src: "/images/june-6th-event-1.avif" },
  { altKey: "galleryPhoto4", src: "/images/june-6th-event-2.avif" },
  { altKey: "galleryPhoto5", src: "/images/workshop-session.avif" },
  { altKey: "galleryPhoto6", src: "/images/networking-event.avif" },
].map((i) => ({ id: createId(), ...i }));

// Social links
export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { name: "Twitter", href: env.VITE_TWITTER_URL, icon: "twitter" },
  {
    name: "LinkedIn",
    href: env.VITE_LINKEDIN_URL,
    icon: "linkedin",
  },
  { name: "Instagram", href: env.VITE_INSTAGRAM_URL, icon: "instagram" },
].map((i) => ({ id: createId(), ...i }));

// Values
export interface Value {
  id: string;
  value: string;
}

export const values: Value[] = ["Value1", "Value2", "Value3", "Value4"].map((value) => ({
  id: createId(),
  value,
}));

// Speakers
export interface Speaker {
  id: string;
  image: string;
  name: string;
  titleKey: string;
  bioKey: string;
  linkedin: string;
  sessionFormatKey: string;
  topicKey: string;
  languageKey: string;
}

export const speakers: Speaker[] = [
  {
    image: "/images/speakers/oluchukwu-chiadika.avif",
    name: "Oluchukwu Chiadika",
    titleKey: "speakerOluchukwuChiadikaTitle",
    bioKey: "speakerOluchukwuChiadikaBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandardMasterclass",
    topicKey: "speakerOluchukwuChiadikaTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/gilles-kounou.avif",
    name: "Gilles Kounou",
    titleKey: "speakerGillesKounouTitle",
    bioKey: "speakerGillesKounouBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatKeynote",
    topicKey: "speakerGillesKounouTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/speakers/adedoyinsolami-adeyeye.avif",
    name: "Adedoyinsola Adeyeye",
    titleKey: "speakerAdedoyinsolaAdeyeyeTitle",
    bioKey: "speakerAdedoyinsolaAdeyeyeBio",
    linkedin: "adedoyinsola-adeyeye-csm%C2%AE-mba-in-view-b88b74233",
    sessionFormatKey: "speakerFormatWelcomeAddress",
    topicKey: "speakerAdedoyinsolaAdeyeyeTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/speakers/divine-kenagnon.avif",
    name: "Divine Kenagnon",
    titleKey: "speakerDivineKenagnonTitle",
    bioKey: "speakerDivineKenagnonBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerDivineKenagnonTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/speakers/daniel-esuola.avif",
    name: "Daniel Esuola",
    titleKey: "speakerDanielEsuolaTitle",
    bioKey: "speakerDanielEsuolaBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerDanielEsuolaTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/speakers/epoundor-freedauss-tanda.avif",
    name: "Epoundor Freedauss Tanda",
    titleKey: "speakerEpoundorFreedaussTandaTitle",
    bioKey: "speakerEpoundorFreedaussTandaBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerEpoundorFreedaussTandaTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/speakers/imam-bashir.avif",
    name: "Imam Bashir",
    titleKey: "speakerImamBashirTitle",
    bioKey: "speakerImamBashirBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerImamBashirTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/speakers/praise-god-akujuobi.avif",
    name: "Praise-God Akujuobi",
    titleKey: "speakerPraiseGodAkujuobiTitle",
    bioKey: "speakerPraiseGodAkujuobiBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerPraiseGodAkujuobiTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/speakers/glory-olaifa.avif",
    name: "Glory Olaifa",
    titleKey: "speakerGloryOlaifaTitle",
    bioKey: "speakerGloryOlaifaBio",
    linkedin: "glory-olaifa",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerGloryOlaifaTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/dr-viviane-oke.avif",
    name: "Dr. Viviane Oke",
    titleKey: "speakerDrVivianeOkeTitle",
    bioKey: "speakerDrVivianeOkeBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandard",
    topicKey: "speakerDrVivianeOkeTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/akintunde-opawole.avif",
    name: "Akintunde Opawole",
    titleKey: "speakerAkintundeOpawoleTitle",
    bioKey: "speakerAkintundeOpawoleBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatKeynote",
    topicKey: "speakerAkintundeOpawoleTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/gloria-maria-djossinou.avif",
    name: "Gloria-Maria Djossinou",
    titleKey: "speakerGloriaMariaDjossinouTitle",
    bioKey: "speakerGloriaMariaDjossinouBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerGloriaMariaDjossinouTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/speakers/dami-opaniyan.avif",
    name: "Dami Opaniyan",
    titleKey: "speakerDamiOpaniyanTitle",
    bioKey: "speakerDamiOpaniyanBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerDamiOpaniyanTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/speakers/mahouna-thierry-martial-tchangole.avif",
    name: "Mahouna Thierry Martial Tchangole",
    titleKey: "speakerMahounaThierryMartialTchangoleTitle",
    bioKey: "speakerMahounaThierryMartialTchangoleBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandard",
    topicKey: "speakerMahounaThierryMartialTchangoleTopic",
    languageKey: "speakerLangFr",
  },
  {
    image: "/images/speakers/samuel-afolabi.avif",
    name: "Samuel Afolabi",
    titleKey: "speakerSamuelAfolabiTitle",
    bioKey: "speakerSamuelAfolabiBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandard",
    topicKey: "speakerSamuelAfolabiTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/mtn-benin.avif",
    name: "MTN Benin",
    titleKey: "speakerMtnBeninTitle",
    bioKey: "speakerMtnBeninBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandardMasterclass",
    topicKey: "speakerMtnBeninTopic",
    languageKey: "speakerLangEnFr",
  },
  {
    image: "/images/speakers/chukwuemeka-chukwurah.avif",
    name: "Chukwuemeka Chukwurah",
    titleKey: "speakerChukwuemekaChukwurahTitle",
    bioKey: "speakerChukwuemekaChukwurahBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandard",
    topicKey: "speakerChukwuemekaChukwurahTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/lauretta-ojionu.avif",
    name: "Lauretta Ojionu",
    titleKey: "speakerLaurettaOjionuTitle",
    bioKey: "speakerLaurettaOjionuBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandard",
    topicKey: "speakerLaurettaOjionuTopic",
    languageKey: "speakerLangEnFr",
  },
  {
    image: "/images/speakers/oluwadamilola-daniel.avif",
    name: "Oluwadamilola Daniel",
    titleKey: "speakerOluwadamilolaDanielTitle",
    bioKey: "speakerOluwadamilolaDanielBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatPanel",
    topicKey: "speakerOluwadamilolaDanielTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/speakers/samuel-abada.avif",
    name: "Samuel Abada",
    titleKey: "speakerSamuelAbadaTitle",
    bioKey: "speakerSamuelAbadaBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatLightningTalk",
    topicKey: "speakerSamuelAbadaTopic",
    languageKey: "speakerLangEn",
  },
  {
    image: "/images/speakers/doris-abadassi.avif",
    name: "Doris Abadassi",
    titleKey: "speakerDorisAbadassiTitle",
    bioKey: "speakerDorisAbadassiBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatLightningTalk",
    topicKey: "speakerDorisAbadassiTopic",
    languageKey: "speakerLangFr",
  },
].map((i) => ({ id: createId(), ...i }));

// Event Schedule
export interface ScheduleItem {
  id: string;
  time: string;
  activityKey: string;
  duration?: string;
  locationKey?: string;
  languageKey?: string;
  speakerName?: string;
  topicKey?: string;
  speakerAndTopicKey?: string;
}

export interface ScheduleSession {
  id: string;
  sessionNameKey: string;
  items: ScheduleItem[];
}

export const schedule: ScheduleSession[] = [
  {
    id: createId(),
    sessionNameKey: "scheduleMorningSession",
    items: [
      {
        id: createId(),
        time: "8:00 AM - 9:00 AM",
        activityKey: "scheduleActivityRegistration",
      },
      {
        id: createId(),
        time: "9:00 AM - 9:15 AM",
        activityKey: "scheduleActivityWelcome",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEnFr",
        speakerName: "Doyin Adeyeye",
        topicKey: "speakerAdedoyinsolaAdeyeyeTopic",
        duration: "15 mins",
      },
      {
        id: createId(),
        time: "9:15 AM - 9:45 AM",
        activityKey: "scheduleActivityKeynote",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerName: "MTN Benin Team",
        topicKey: "speakerMtnBeninTopic",
        duration: "30 mins",
      },
      {
        id: createId(),
        time: "9:45 AM - 10:15 AM",
        activityKey: "scheduleActivityKeynote",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Akintunde Opawole (Product Dive)",
        topicKey: "speakerAkintundeOpawoleTopic",
        duration: "30 mins",
      },
      {
        id: createId(),
        time: "10:15 AM - 10:40 AM",
        activityKey: "scheduleActivityStandardTalk",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Oluchukwu Chiadika",
        topicKey: "speakerOluchukwuChiadikaTopic",
        duration: "25 mins",
      },
      {
        id: createId(),
        time: "10:40 AM - 11:05 AM",
        activityKey: "scheduleActivityStandardTalk",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Chukwuemeka Chukwurah",
        topicKey: "speakerChukwuemekaChukwurahTopic",
        duration: "25 mins",
      },
      {
        id: createId(),
        time: "11:05 AM - 11:20 AM",
        activityKey: "scheduleActivityGames1",
        duration: "15 mins",
      },
    ],
  },
  {
    id: createId(),
    sessionNameKey: "scheduleMiddaySession",
    items: [
      {
        id: createId(),
        time: "11:20 AM - 12:00 PM",
        activityKey: "scheduleActivityPanelSessions",
        locationKey: "scheduleLocationBreakout",
        languageKey: "scheduleLangFrEn",
        speakerAndTopicKey: "scheduleSpeakerMiddayPanel",
        duration: "40 mins",
      },
      {
        id: createId(),
        time: "12:00 PM - 12:15 PM",
        activityKey: "scheduleActivityLightningTalks",
        locationKey: "scheduleLocationBreakout",
        languageKey: "scheduleLangFrEn",
        speakerAndTopicKey: "scheduleSpeakerLightningTalks",
        duration: "15 mins",
      },
      {
        id: createId(),
        time: "12:15 PM - 12:40 PM",
        activityKey: "scheduleActivityKeynote",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerName: "Gilles Kounou (CEO, KkiaPay)",
        topicKey: "speakerGillesKounouTopic",
        duration: "25 mins",
      },
      {
        id: createId(),
        time: "12:40 PM - 1:00 PM",
        activityKey: "scheduleActivitySponsorSession",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Moniepoint Team",
        duration: "20 mins",
      },
      {
        id: createId(),
        time: "1:00 PM - 1:30 PM",
        activityKey: "scheduleActivityGames2",
        duration: "30 mins",
      },
    ],
  },
  {
    id: createId(),
    sessionNameKey: "scheduleAfternoonSession",
    items: [
      {
        id: createId(),
        time: "1:30 PM - 1:55 PM",
        activityKey: "scheduleActivityStandardTalks",
        locationKey: "scheduleLocationBreakout",
        languageKey: "scheduleLangFrEn",
        speakerAndTopicKey: "scheduleSpeakerAfternoonTalks",
        duration: "25 mins",
      },
      {
        id: createId(),
        time: "1:55 PM - 2:10 PM",
        activityKey: "scheduleActivitySponsorSession",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerName: "Comtel Technologies Team",
        duration: "15 mins",
      },
      {
        id: createId(),
        time: "2:10 PM - 2:50 PM",
        activityKey: "scheduleActivityPanelSessions",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerAndTopicKey: "scheduleSpeakerAfternoonPanel",
        duration: "40 mins",
      },
      {
        id: createId(),
        time: "2:50 PM",
        activityKey: "scheduleActivityGames3",
      },
    ],
  },
];

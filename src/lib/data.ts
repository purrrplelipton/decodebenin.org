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
  { name: "Epitech", slug: "epitech", logo: "/images/epitech-logo.png" },
  {
    name: "Google Developer Group",
    slug: "google-developer-group",
    logo: "/images/google-developer-group-logo.png",
  },
  { name: "Comtel Technologies", slug: "comtel", logo: "/images/comtel-technologies-logo.png" },
  { name: "Africa Agility", slug: "africa-agility", logo: "/images/africa-agility-logo.png" },
  { name: "TS Academy", slug: "ts-academy", logo: "/images/ts-academy-logo.png" },
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
  { altKey: "galleryPhoto3", src: "/images/may-23rd-event-1.avif" },
  { altKey: "galleryPhoto4", src: "/images/may-23rd-event-2.avif" },
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
    image: "/images/speakers/akintunde-opawole.avif",
    name: "Akintunde Opawole",
    titleKey: "speakerAkintundeOpawoleTitle",
    bioKey: "speakerAkintundeOpawoleBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatKeynote",
    topicKey: "speakerAkintundeOpawoleTopic",
    languageKey: "speakerLangEn",
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
    image: "/images/speakers/obaloluwa-ajiboye.avif",
    name: "Obaloluwa Ajiboye",
    titleKey: "speakerObaloluwaAjiboyeTitle",
    bioKey: "speakerObaloluwaAjiboyeBio",
    linkedin: "",
    sessionFormatKey: "speakerFormatStandardMasterclass",
    topicKey: "speakerObaloluwaAjiboyeTopic",
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
  startsAt: string;
  endsAt: string;
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
        startsAt: "2026-05-23T08:00:00+01:00",
        endsAt: "2026-05-23T09:00:00+01:00",
        activityKey: "scheduleActivityRegistration",
      },
      {
        id: createId(),
        time: "9:00 AM - 9:15 AM",
        startsAt: "2026-05-23T09:00:00+01:00",
        endsAt: "2026-05-23T09:15:00+01:00",
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
        startsAt: "2026-05-23T09:15:00+01:00",
        endsAt: "2026-05-23T09:45:00+01:00",
        activityKey: "scheduleActivityKeynote",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Akintunde Opawole",
        topicKey: "speakerAkintundeOpawoleTopic",
        duration: "30 mins",
      },
      {
        id: createId(),
        time: "9:45 AM - 10:10 AM",
        startsAt: "2026-05-23T09:45:00+01:00",
        endsAt: "2026-05-23T10:10:00+01:00",
        activityKey: "scheduleActivityStandardTalk",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Oluchukwu Chiadika",
        topicKey: "speakerOluchukwuChiadikaTopic",
        duration: "25 mins",
      },
      {
        id: createId(),
        time: "10:10 AM - 10:35 AM",
        startsAt: "2026-05-23T10:10:00+01:00",
        endsAt: "2026-05-23T10:35:00+01:00",
        activityKey: "scheduleActivityStandardTalk",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Chukwuemeka Chukwurah",
        topicKey: "speakerChukwuemekaChukwurahTopic",
        duration: "25 mins",
      },
      {
        id: createId(),
        time: "10:35 AM - 11:15 AM",
        startsAt: "2026-05-23T10:35:00+01:00",
        endsAt: "2026-05-23T11:15:00+01:00",
        activityKey: "scheduleActivityPanelSessions",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerAndTopicKey: "scheduleSpeakerMorningPanel",
        duration: "40 mins",
      },
      {
        id: createId(),
        time: "11:15 AM - 11:30 AM",
        startsAt: "2026-05-23T11:15:00+01:00",
        endsAt: "2026-05-23T11:30:00+01:00",
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
        time: "11:30 AM - 11:50 AM",
        startsAt: "2026-05-23T11:30:00+01:00",
        endsAt: "2026-05-23T11:50:00+01:00",
        activityKey: "scheduleActivitySponsorSession",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Moniepoint Team",
        duration: "20 mins",
      },
      {
        id: createId(),
        time: "11:50 AM - 12:05 PM",
        startsAt: "2026-05-23T11:50:00+01:00",
        endsAt: "2026-05-23T12:05:00+01:00",
        activityKey: "scheduleActivityLightningTalks",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerName: "Doris Abadassi",
        topicKey: "speakerDorisAbadassiTopic",
        duration: "15 mins",
      },
      {
        id: createId(),
        time: "12:05 PM - 12:25 PM",
        startsAt: "2026-05-23T12:05:00+01:00",
        endsAt: "2026-05-23T12:25:00+01:00",
        activityKey: "scheduleActivityStandardTalk",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Samuel Afolabi",
        topicKey: "speakerSamuelAfolabiTopic",
        duration: "20 mins",
      },
      {
        id: createId(),
        time: "12:25 PM - 12:55 PM",
        startsAt: "2026-05-23T12:25:00+01:00",
        endsAt: "2026-05-23T12:55:00+01:00",
        activityKey: "scheduleActivityPanelSessions",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerAndTopicKey: "scheduleSpeakerMiddayPanel",
        duration: "30 mins",
      },
      {
        id: createId(),
        time: "12:55 PM - 1:15 PM",
        startsAt: "2026-05-23T12:55:00+01:00",
        endsAt: "2026-05-23T13:15:00+01:00",
        activityKey: "scheduleActivityStandardTalk",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Obaloluwa Ajiboye",
        topicKey: "speakerObaloluwaAjiboyeTopic",
        duration: "20 mins",
      },
      {
        id: createId(),
        time: "1:15 PM - 1:25 PM",
        startsAt: "2026-05-23T13:15:00+01:00",
        endsAt: "2026-05-23T13:25:00+01:00",
        activityKey: "scheduleActivityGames2",
        duration: "10 mins",
      },
    ],
  },
  {
    id: createId(),
    sessionNameKey: "scheduleAfternoonSession",
    items: [
      {
        id: createId(),
        time: "1:25 PM - 1:45 PM",
        startsAt: "2026-05-23T13:25:00+01:00",
        endsAt: "2026-05-23T13:45:00+01:00",
        activityKey: "scheduleActivityStandardTalks",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerName: "Martial Thiery",
        topicKey: "speakerMahounaThierryMartialTchangoleTopic",
        duration: "20 mins",
      },
      {
        id: createId(),
        time: "1:45 PM - 2:00 PM",
        startsAt: "2026-05-23T13:45:00+01:00",
        endsAt: "2026-05-23T14:00:00+01:00",
        activityKey: "scheduleActivityLightningTalks",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerName: "Samuel Abada",
        topicKey: "speakerSamuelAbadaTopic",
        duration: "15 mins",
      },
      {
        id: createId(),
        time: "2:00 PM - 2:10 PM",
        startsAt: "2026-05-23T14:00:00+01:00",
        endsAt: "2026-05-23T14:10:00+01:00",
        activityKey: "scheduleActivitySponsorSession",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerAndTopicKey: "scheduleSpeakerAfternoonPartner",
        duration: "10 mins",
      },
      {
        id: createId(),
        time: "2:10 PM - 2:25 PM",
        startsAt: "2026-05-23T14:10:00+01:00",
        endsAt: "2026-05-23T14:25:00+01:00",
        activityKey: "scheduleActivitySponsorSession",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangFr",
        speakerName: "Comtel Technologies Team",
        duration: "15 mins",
      },
      {
        id: createId(),
        time: "2:25 PM - 2:50 PM",
        startsAt: "2026-05-23T14:25:00+01:00",
        endsAt: "2026-05-23T14:50:00+01:00",
        activityKey: "scheduleActivityPanelSessions",
        locationKey: "scheduleLocationMainStage",
        languageKey: "scheduleLangEn",
        speakerAndTopicKey: "scheduleSpeakerAfternoonPanel",
        duration: "25 mins",
      },
    ],
  },
];

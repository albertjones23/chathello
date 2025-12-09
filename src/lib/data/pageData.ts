import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";

export const Headerdata: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features-section" },
  { label: "How It Works", href: "/#work-section" },
  { label: "Contact Us", href: "/#contact" },
];

const basePath = process.env.NODE_ENV === "production" ? "/hellochats-web" : "";

/* --------------------------------------------
   COMPANIES / TRUST SECTION
   Replace logos if you want to show brand trust.
   For now, these are placeholders.
----------------------------------------------*/
export const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: `${basePath}/images/companies/birdseye.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/break.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/keddar.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/shield.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tandov.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tree.svg`,
  },
];

/* --------------------------------------------
   HOW IT WORKS SECTION
----------------------------------------------*/
export const workdata: WorkType[] = [
  {
    imgSrc: `${basePath}/images/work/icon-one.svg`,
    heading: "Create Account Anonymously",
    subheading:
      "Join instantly without sharing personal information — your identity stays fully private.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-two.svg`,
    heading: "Start Secure Chats",
    subheading:
      "Send encrypted messages, photos, and voice notes with complete protection.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-three.svg`,
    heading: "Call & Share Freely",
    subheading:
      "Enjoy HD voice/video calls and private media sharing without any tracking.",
  },
];

/* --------------------------------------------
   FEATURES SECTION — HelloChats Messaging Features
----------------------------------------------*/
export const Featuresdata: FeatureType[] = [
  {
    imgSrc: `${basePath}/images/features/encryption.svg`,
    heading: "End-to-End Encryption",
    subheading:
      "Every message, call, and file is fully encrypted — only you and your contacts can access them.",
  },
  {
    imgSrc: `${basePath}/images/features/anonymous.svg`,
    heading: "Anonymous Account",
    subheading:
      "Sign up without sharing your personal details. No phone number or identity required.",
  },
  {
    imgSrc: `${basePath}/images/features/calls.svg`,
    heading: "HD Voice & Video Calls",
    subheading:
      "Enjoy crystal-clear, secure calling built for smooth, real-time communication.",
  },
  {
    imgSrc: `${basePath}/images/features/media.svg`,
    heading: "Private Media Sharing",
    subheading:
      "Share photos, videos, audio, and documents safely with strong encryption.",
  },
  {
    imgSrc: `${basePath}/images/features/minimal.svg`,
    heading: "Distraction-Free Interface",
    subheading:
      "A clean and elegant design that keeps your chats focused and free from ads or clutter.",
  },
  {
    imgSrc: `${basePath}/images/features/sync.svg`,
    heading: "Cross-Platform Sync",
    subheading:
      "Move seamlessly between mobile and web while keeping your conversations secure and synced.",
  },
];

/* --------------------------------------------
   FAQ SECTION — HelloChats FAQ
----------------------------------------------*/
export const Faqdata: FaqType[] = [
  {
    heading: "1. Is HelloChats really private?",
    subheading:
      "Yes. Every message, call, and media file is protected with end-to-end encryption. Only you and the person you talk to can access it.",
  },
  {
    heading: "2. Do I need to share my personal details?",
    subheading:
      "No. HelloChats allows anonymous account creation. You can start chatting without revealing your identity.",
  },
  {
    heading: "3. Can I make voice and video calls?",
    subheading:
      "Absolutely. HelloChats supports HD-quality voice and video calls with full encryption for maximum privacy.",
  },
  {
    heading: "4. Is HelloChats free to use?",
    subheading:
      "Yes. HelloChats is completely free — no subscriptions, no ads, no hidden charges.",
  },
];

/* --------------------------------------------
   SOCIAL LINKS SECTION
----------------------------------------------*/
export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: `${basePath}/images/footer/insta.svg`,
    href: "https://instagram.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/twitter.svg`,
    href: "https://twitter.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/youtube.svg`,
    href: "https://youtube.com/",
  },
];

/* --------------------------------------------
   FOOTER NAVIGATION
----------------------------------------------*/
export const Footerlinkdata: FooterType[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features-section" },
  { label: "How It Works", href: "/#work-section" },
  { label: "FAQ", href: "/#faq-section" },
  { label: "Contact Us", href: "/#contact" },
];

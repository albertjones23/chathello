import { Metadata } from "next";
import Banner from "./components/home/hero";
import Companies from "./components/home/companies";
import Work from "./components/home/work";

import Features from "./components/home/features";
import Simple from "./components/home/simple";
import Trade from "./components/home/trade";
import Faq from "./components/home/faq";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "HelloChats",
  description: "Fast. Private. Modern Messaging.",
  icons: {
    icon: "/images/logo.png",     // your logo here
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Features />
      <Simple />
      <Trade />
      <Faq />
      <ContactForm />
    </main>
  );
}

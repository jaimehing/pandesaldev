import "./page.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Hero from "./components/hero/Hero";
import HeroSubtitle from "./components/hero/HeroSubtitle";
import DiscordCtaButton from "./components/discord_cta_button/DiscordCtaButton";
import Stats from "./components/stats/Stats";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const PageContent = () => {
  return (
    <>
      <main className="mx-6 my-6 border rounded-xl border-[#313244] bg-[#1E1E2EE0]">
        <Header />
        <Menu />
        <Hero />
        <HeroSubtitle />
        <DiscordCtaButton />
        <Stats />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default PageContent;

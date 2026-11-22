import { About } from '@/features/home/About';
import { Branding } from '@/features/home/Branding';
import { Experience } from '@/features/home/Experience';
import { Faq } from '@/features/home/Faq';
import { Hero } from '@/features/home/Hero';
import { IntroScroller } from '@/features/home/IntroScroller';
import { NavyBackdrop } from '@/features/home/NavyBackdrop';
import { PortfolioShowcase } from '@/features/home/PortfolioShowcase';
import { Services } from '@/features/home/Services';

export default function HomePage() {
  return (
    <>
      <IntroScroller>
        <Hero />
        <About />
      </IntroScroller>
      <PortfolioShowcase />
      <NavyBackdrop>
        <Services />
        <Experience />
      </NavyBackdrop>
      <Branding />
      <Faq />
    </>
  );
}

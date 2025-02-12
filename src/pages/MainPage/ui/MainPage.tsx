import { FC } from 'react'
import { Header } from '@/widgets'
import { HeroSection } from './HeroSection/HeroSection'
import { AboutSection } from './AboutSection/AboutSection'
import { WhySection } from './WhySection/WhySection'
import { ServicesSection } from './ServicesSection/ServicesSection'
import { ActionSection } from './ActionSection/ActionSection'
import { AdvantageSection } from './AdvantageSection/AdvantageSection'
import { Footer } from '@/widgets'

export const MainPage: FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServicesSection />
      <ActionSection />
      <AdvantageSection />
      <Footer />
    </>
  )
}

import { FC } from 'react'
import { Header } from '@/widgets'
import { HeroSection } from './HeroSection/HeroSection'
import { AboutSection } from './AboutSection/AboutSection'
import { WhySection } from './WhySection/WhySection'
import { ServicesSection } from './ServicesSection/ServicesSection'
import { Footer } from '@/widgets'

export const MainPage: FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServicesSection />
      <Footer />
    </>
  )
}

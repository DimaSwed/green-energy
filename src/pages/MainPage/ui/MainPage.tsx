import { FC } from 'react'
import { Header } from '@/widgets'
import { HeroSection } from './HeroSection/HeroSection'
import { AboutSection } from './AboutSection/AboutSection'
import { WhySection } from './WhySection/WhySection'
import { ServicesSection } from './ServicesSection/ServicesSection'
import { ActionSection } from './ActionSection/ActionSection'
import { AdvantageSection } from './AdvantageSection/AdvantageSection'
import { TestimonialSection } from './TestimonialsSection/TestimonialSection'
import FormSection from './FormSection/FormSection'
import { Footer } from '@/widgets'
import { Box } from '@mui/material'

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
      <TestimonialSection />
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          position: 'relative'
        }}
      >
        <FormSection />
      </Box>
      <Footer />
    </>
  )
}

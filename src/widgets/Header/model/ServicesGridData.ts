interface Service {
  title: string
  description: string
  image: string
  background: string
}

export const servicesData: Service[] = [
  {
    title: 'Energy Consultation',
    description: 'Assessing your energy needs and designing optimal solutions.',
    image: '/images/energy-consultation.jpg',
    background: 'black'
  },
  {
    title: 'System Design & Engineering',
    description: 'Customized systems to maximize performance and sustainability.',
    image: '/images/system-design.jpg',
    background: 'black'
  },
  {
    title: 'Supply of Equipment',
    description: 'High-quality solar panels, wind turbines, batteries, and more.',
    image: '',
    background: 'blue'
  },
  {
    title: 'Installation Services',
    description: 'Professional installation by certified technicians.',
    image: '/images/installation-services.jpg',
    background: 'black'
  },
  {
    title: 'Energy Monitoring & Management',
    description: 'Ongoing support for long-term efficiency and reliability.',
    image: '',
    background: 'blue'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support for long-term efficiency and reliability.',
    image: '/images/maintenance-support.jpg',
    background: 'black'
  }
]

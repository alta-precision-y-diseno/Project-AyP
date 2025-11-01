import ServicesHero from "../components/sections/ServicesHero"
import ServiceSection from "../components/sections/ServiceSection"
import ServiceSection2 from "../components/sections/ServiceSection2"
import ServiceSection3 from "../components/sections/ServiceSection3"
import ServiceSection4 from "../components/sections/ServiceSection4"
import AnimatedCard from "../components/sections/AnimatedCard"

const ServicesPage = () => {
  return (
    <div className="mt-20">
        <ServicesHero />
        <ServiceSection />
        <ServiceSection2 />
        <ServiceSection3 />
        <ServiceSection4 />
        <AnimatedCard />
    </div>
  )
}

export default ServicesPage

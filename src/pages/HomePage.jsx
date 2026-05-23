import Hero from "../components/Hero"
import MenuSection from "../components/MenuSection"
import LocationSection from "../components/LocationSection"
import Footer from "../components/Footer"

export default function HomePage() {

  return (
    <div>

      <Hero />

      <MenuSection showAllMenus={false} />

      <LocationSection />

      <Footer />

    </div>
  )
}
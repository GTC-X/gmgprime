import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import TechHighlight from './components/TechHighlight'
import Instruments from './components/Instruments'
import Onboarding from './components/Onboarding'
import PartnerStrip from './components/PartnerStrip'
import Compliance from './components/Compliance'
import Footer from './components/Footer'

export default function Page() {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <Solutions />
                <TechHighlight />
                <Instruments />
                <Onboarding />
                <PartnerStrip />
                <Compliance />
            </main>
            <Footer />
        </>
    )
}

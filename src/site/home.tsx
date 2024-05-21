import { About } from "./About/about"
import { Features } from "./Features/features"
import { Footer } from "./Footer/footer"
import { Hero } from "./Hero/hero"
import { Keys } from "./Keys/keys"
import { Navbar } from "./Navbar/navbar"
import { What } from "./What/what"

export const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            {/* <LazyAbout /> */}
            <What />
            <Keys />
            <Features />
            <Footer />
        </div>
    )
}
import About from "./About"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Services from "./Services"

function SectionHeading({ heading }) {
  return (
    <div className="flex flex-col items-center bg-[var(--primary-background)] pt-10 xl:pt-20">
      <h2 className="text-[var(--text-secondary)] text-3xl lg:text-4xl font-semibold tracking-wide">{heading}</h2>
      <p className="text-[#b8651d] text-sm lg:text-md font-semibold my-2">Lorem ipsum dolor sit amet</p>
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <section> <SectionHeading heading={'Services We Offer'} /> <Services /></section>
      <section> <SectionHeading heading={'Why Choose Us'} /> <About /></section>
      <section> <SectionHeading heading={'Our Portfolio'} /> <Portfolio /></section>
    </>
  )
}

export default Home

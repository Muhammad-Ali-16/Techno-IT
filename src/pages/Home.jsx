import About from "./About"
import Clients from "./Clients"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing"
import Services from "./Services"
import Teams from "./Teams"
import Testimonials from "./Testimonials"

function SectionHeading({ heading, background }) {
  return (
    <div className={`flex flex-col items-center bg-[var(${background})] pt-10 xl:pt-20`}>
      <h2 className="text-[var(--text-secondary)] text-3xl lg:text-4xl font-semibold tracking-wide">{heading}</h2>
      <p className="text-[#b8651d] text-sm lg:text-md font-semibold my-2">Lorem ipsum dolor sit amet</p>
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <section> <SectionHeading background={'--primary-background'} heading={'Services We Offer'} /> <Services /></section>
      <section> <SectionHeading background={'--primary-background'} heading={'Why Choose Us'} /> <About /></section>
      <section> <SectionHeading background={'--primary-background'} heading={'Our Portfolio'} /> <Portfolio /></section>
      <section> <SectionHeading background={'--primary-background'} heading={'Pricing Plans'} /> <Pricing /></section>
      <section> <SectionHeading background={'--primary-background'} heading={'Testimonials'} /> <Testimonials /></section>
      <section> <Clients /></section>
      <section> <SectionHeading background={'--secondary-background'} heading={'Our Team'} /> <Teams /></section>

    </>
  )
}

export default Home

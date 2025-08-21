import Hero from "./Hero"
import Services from "./Services"

function SectionHeading({ heading }) {
  return (
    <div className="flex flex-col items-center bg-[var(--primary-background)] pt-20">
      <h2 className="text-[var(--primary-blue)] text-3xl lg:text-4xl font-semibold tracking-wide">{heading}</h2>
      <p className="text-[#b8651d] text-sm lg:text-md font-semibold my-2">Lorem ipsum dolor sit amet</p>
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <section> <SectionHeading heading={'Services We Offer'} /> <Services /></section>
    </>
  )
}

export default Home

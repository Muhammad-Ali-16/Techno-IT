import { Link } from "react-router-dom";

function PageHero({ title }) {
    return (
        <section>
            <div className="page_header_bg">
                <div className="pagehero_banner max-w-8xl">
                    <div className="pagehero_banner_content flex flex-col items-center justify-center min-h-[20vh] pt-[120px] pb-[60px] relative z-2">
                        <h3 className="pagehero_heading text-[var(--primary-blue)] text-2xl lg:text-3xl font-semibold">{title}</h3>
                        <h6 className="pagehero_sub-heading text-white font-light text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipiscing elit</h6>
                    </div>
                </div>
            </div>
            <div className="pagehero_topbar bg-[var(--primary-blue)] py-4 lg:py-6">
                <div className="topbar_content flex flex-row max-w-8xl text-sm lg:text-xl">
                    <h5 className="text-[#eee]"><Link to="/">Home</Link></h5>
                    <h5 className="text-[#3a3a3a]"><span className="mx-2 text-[#0c6de0]">/</span>{title}</h5>
                </div>
            </div>
        </section>
    )
}

export default PageHero

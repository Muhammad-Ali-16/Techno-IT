import { Link } from "react-router-dom";

function PageHero({ title }) {
    return (
        <section>
            <div className="page_header_bg">
                <div className="pagehero_banner max-w-8xl">
                    <div className="pagehero_banner_content flex flex-col items-center justify-center min-h-[20vh] pt-[120px] pb-[60px] relative z-2">
                        <h3 className="pagehero_heading text-[var(--primary-blue)] text-3xl font-semibold">{title}</h3>
                        <h6 className="pagehero_sub-heading text-white font-light text-md">Lorem ipsum dolor sit amet consectetur adipiscing elit</h6>
                    </div>
                </div>
            </div>
            <div className="pagehero_topbar bg-[var(--primary-blue)] py-6">
                <div className="topbar_content flex flex-row max-w-8xl text-xl">
                    <h5 className="text-[#eee]"><Link to="/">Home</Link></h5>
                    <h5 className="text-[#3a3a3a]"><span className="mx-2 text-[#0c6de0]">/</span>{title}</h5>
                </div>
            </div>
        </section>
    )
}

export default PageHero

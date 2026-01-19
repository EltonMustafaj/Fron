import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", { type: "words" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        tl.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: "expo.out",
            stagger: 0.02
        }).from(".top-grid div, .bottom-grid div", {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.04
        }, "-=0.5")
    });


    return (
        <section id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <span className="badge">Pijet më të Mira</span>
                        <h2 className="about-title">Ku çdo detaj ka rëndësi <span className="text-white">-</span> nga përgatitja te dekorimi</h2>
                    </div>
                    <div className="sub-content">
                        <p className="text-white/70">
                            Çdo pije që shërbejmë është një pasqyrim i fiksimit tonë pas detajeve — nga shtypja e parë e mentes deri te dekorimi final. Ky kujdes është ai që e kthen një pije të thjeshtë në diçka vërtet të paharrueshme.
                        </p>
                        <div className="flex flex-wrap items-center gap-8 mt-10">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow to-yellow/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex flex-col items-center min-w-[140px]">
                                    <p className="text-4xl font-bold text-yellow font-modern-negra">4.9<span className="text-base text-white/40 ml-1">/5</span></p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-2 text-center">Vlerësimi i Klientëve</p>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                                <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex flex-col items-center min-w-[140px]">
                                    <p className="text-4xl font-bold text-white font-modern-negra">+1,000</p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-2 text-center">Pije çdo muaj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3 group overflow-hidden rounded-3xl">
                    <div className="noisy z-10 pointer-events-none" />
                    <img src="/images/abt1.png" alt="Atmosfera në Fron Bar" className="group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="md:col-span-6 group overflow-hidden rounded-3xl">
                    <div className="noisy z-10 pointer-events-none" />
                    <img src="/images/abt2.png" alt="Përgatitja e koktejeve" className="group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="md:col-span-3 group overflow-hidden rounded-3xl">
                    <div className="noisy z-10 pointer-events-none" />
                    <img src="/images/abt5.png" alt="Detaje nga lokali" className="group-hover:scale-110 transition-transform duration-700" />
                </div>
            </div>

            <div className="bottom-grid mt-5">
                <div className="md:col-span-8 group overflow-hidden rounded-3xl">
                    <div className="noisy z-10 pointer-events-none" />
                    <img src="/images/abt3.png" alt="Hapësira e jashtme" className="group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="md:col-span-4 group overflow-hidden rounded-3xl">
                    <div className="noisy z-10 pointer-events-none" />
                    <img src="/images/abt4.png" alt="Shërbimi profesional" className="group-hover:scale-110 transition-transform duration-700" />
                </div>
            </div>
        </section>
    )
}

export default About
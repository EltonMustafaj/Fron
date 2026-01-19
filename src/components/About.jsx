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
                        <div className="flex items-center gap-4 mt-6">
                            <div className="bg-yellow/10 p-4 rounded-2xl border border-yellow/20">
                                <p className="text-3xl font-bold text-yellow">
                                    <span>4.9</span>/5
                                </p>
                                <p className="text-[10px] uppercase tracking-wider text-white-100/60">
                                    Vlerësimi i Klientëve
                                </p>
                            </div>
                            <div className="h-full flex flex-col justify-center">
                                <p className="text-xl font-semibold">+1,000</p>
                                <p className="text-[10px] uppercase tracking-wider text-white-100/60">Pije të shërbyera çdo muaj</p>
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
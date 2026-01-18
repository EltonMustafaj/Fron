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
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Pijet më të Mira</p>
                        <h2>Ku çdo detaj ka rëndësi <span className="text-white">-</span> nga përgatitja te dekorimi</h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Çdo pije që shërbejmë është një pasqyrim i fiksimit tonë pas detajeve — nga shtypja e parë e mentes deri te dekorimi final. Ky kujdes është ai që e kthen një pije të thjeshtë në diçka vërtet të paharrueshme.
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                Më shumë se +12,000 klientë
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt1.png" alt="image" />
                </div>

                <div className="md:col-span-6">
                    <div className="noisy" />
                    <img src="/images/abt2.png" alt="image" />
                </div>

                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt5.png" alt="image" />
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy" />
                    <img src="/images/abt3.png" alt="image" />
                </div>

                <div className="md:col-span-4">
                    <div className="noisy" />
                    <img src="/images/abt4.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default About
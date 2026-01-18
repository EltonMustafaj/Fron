import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const Contact = () => {
    useGSAP(() => {
        const titleSplit = new SplitText(".content h2", { type: "words" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 90%"
            },
            ease: "power1.inOut"
        });

        tl.from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02 })
            .from("#contact h3, #contact p", { opacity: 0, yPercent: 100, stagger: 0.04 })
            .to("#f-right-leaf", { y: -50, duration: 0.2, ease: "power1.inOut" })
            .to("#f-left-leaf", { y: 50, duration: 0.2, ease: "power1.inOut" }, "<")
    })

    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf" id="f-left-leaf" />

            <div className="content">
                <h2>Ku të na gjeni</h2>

                <div>
                    <h3>Na Vizitoni</h3>
                    <p>Rr. Nëna Terezë, Istog, Kosovë</p>
                </div>

                <div>
                    <h3>Na Kontaktoni</h3>
                    <p>+383 43 777 878</p>
                    <p>hello@fronbar.com</p>
                </div>

                <div>
                    <h3>Hapur Çdo Ditë</h3>
                    {
                        openingHours.map((item) => {
                            return <p key={item.day}>
                                {item.day} : {item.time}
                            </p>
                        })
                    }
                </div>

                <div>
                    <h3>Socialet</h3>
                    <div className="flex-center gap-5">
                        {
                            socials.map((social) => (
                                <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
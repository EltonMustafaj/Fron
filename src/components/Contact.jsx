import { useGSAP } from "@gsap/react"
import { openingHours, socials, storeInfo } from "../../constants"
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
            .from("#contact h3, #contact p, #contact a", { opacity: 0, yPercent: 100, stagger: 0.04 })
            .to("#f-right-leaf", { y: -50, duration: 0.2, ease: "power1.inOut" })
            .to("#f-left-leaf", { y: 50, duration: 0.2, ease: "power1.inOut" }, "<")
    })

    return (
        <footer id="contact" className="bg-black/90">
            <img src="/images/footer-right-leaf.png" alt="leaf decoration" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf decoration" id="f-left-leaf" />

            <div className="content">
                <h2>{storeInfo.heading}</h2>

                <div className="space-y-2">
                    <h3>Na Vizitoni</h3>
                    <a
                        href={storeInfo.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow transition-colors underline-offset-4 hover:underline"
                    >
                        {storeInfo.address}
                    </a>
                </div>

                <div className="space-y-2">
                    <h3>Na Kontaktoni</h3>
                    <p>
                        <a href={`tel:${storeInfo.contact.phone.replace(/\s/g, '')}`} className="hover:text-yellow transition-colors">
                            {storeInfo.contact.phone}
                        </a>
                    </p>
                    <p>
                        <a href={`mailto:${storeInfo.contact.email}`} className="hover:text-yellow transition-colors">
                            {storeInfo.contact.email}
                        </a>
                    </p>
                </div>

                <div className="space-y-2">
                    <h3>Hapur Çdo Ditë</h3>
                    {
                        openingHours.map((item) => {
                            return <p key={item.day} className="text-white/80">
                                <span className="font-semibold">{item.day}:</span> {item.time}
                            </p>
                        })
                    }
                </div>

                <div>
                    <h3>Socialet</h3>
                    <div className="flex-center gap-6 mt-4">
                        {
                            socials.map((social) => (
                                <a
                                    href={social.url}
                                    key={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <img src={social.icon} alt={social.name} className="w-8 h-8 object-contain opacity-80 hover:opacity-100" />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="mt-20 pb-10 text-center text-white/30 text-xs border-t border-white/10 pt-10">
                <p>&copy; {new Date().getFullYear()} Fron Bar. Të gjitha të drejtat e rezervuara.</p>
            </div>
        </footer>
    )
}

export default Contact
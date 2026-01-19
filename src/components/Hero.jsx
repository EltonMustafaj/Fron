import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText(".hero-title", { type: 'chars, words' });
        const paragraphSplit = new SplitText(".subtitle", { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.04
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.04,
            delay: 0.7
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        }).to(".right-leaf", { y: 200 }, 0)
            .to(".left-leaf", { y: -200 }, 0)

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                pin: true,
                start: startValue,
                end: endValue,
                scrub: true
            }
        });

        videoRef.current.onloadedmetadata = () => {
            videoTimeline.to(videoRef.current, {
                currentTime: videoRef.current.duration
            });
        }
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(".left-leaf", {
                x: xPos,
                y: yPos,
                duration: 1,
                ease: "power2.out"
            });
            gsap.to(".right-leaf", {
                x: -xPos,
                y: -yPos,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <section id="hero" className="noisy relative overflow-hidden">
                <h1 className="hero-title select-none">FRON BAR</h1>
                <img src="/images/hero-left-leaf.png" alt="leaf decoration" className="left-leaf pointer-events-none" />
                <img src="/images/hero-right-leaf.png" alt="leaf decoration" className="right-leaf pointer-events-none" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className="uppercase tracking-widest text-sm opacity-60">E ftohtë . E freskët . Klasike</p>
                            <p className="subtitle text-yellow">
                                Shijo Shpirtin <br /> e Verës
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle mb-4">Çdo pije në menunë tonë është një përzierje e përbërësve premium dhe recetave të përjetshme — e krijuar për të kënaqur shqisat tuaja.</p>
                            <a
                                href="#cocktails"
                                className="inline-block border border-yellow/50 px-8 py-3 rounded-full hover:bg-yellow hover:text-black transition-all duration-300 font-semibold"
                            >
                                Shiko Menunë
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>
            <div className="video absolute inset-0 pointer-events-none">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover opacity-60"
                ></video>
            </div>
        </>
    )
}

export default Hero
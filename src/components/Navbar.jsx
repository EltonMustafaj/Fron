import React from 'react'
import { navLinks } from "../../constants/index.js"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(() => {
        const navTweens = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: 'nav',
                    start: "bottom top",
                    scrub: true
                }
            }
        );

        navTweens.fromTo("nav",
            {
                backgroundColor: "transparent",
            },
            {
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut"
            }
        );
    });

    return (
        <nav>
            <div>
                <a href="#hero" className='flex items-center gap-2' aria-label="Kreu - Fron Bar">
                    <img src="/images/logo.png" alt="Fron Bar Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                    <p>Fron Bar</p>
                </a>
                <ul>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className="hover:text-yellow transition-colors duration-300"
                                    aria-label={`Navigo te ${link.title}`}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
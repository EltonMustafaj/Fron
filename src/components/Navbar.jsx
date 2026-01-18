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
                <a href="#hero" className='flex items-center gap-2'>
                    <img src="images/logo.png" alt="logo" />
                    <p>Fron Bar</p>
                </a>
                <ul>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
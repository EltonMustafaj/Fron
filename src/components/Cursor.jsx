import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const onMouseDown = () => {
            gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Hover effects for interactive elements
        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(follower, {
                    scale: 3,
                    backgroundColor: 'rgba(231, 211, 147, 0.2)',
                    borderColor: 'transparent',
                    duration: 0.3
                });
                gsap.to(cursor, { opacity: 0, duration: 0.2 });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(231, 211, 147, 0.5)',
                    duration: 0.3
                });
                gsap.to(cursor, { opacity: 1, duration: 0.2 });
            });
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block">
            <div
                ref={cursorRef}
                className="w-2 h-2 bg-yellow rounded-full -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="absolute w-8 h-8 border border-yellow/50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
            />
        </div>
    );
};

export default Cursor;

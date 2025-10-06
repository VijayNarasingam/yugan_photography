// Smooth scrolling with Lenis (guarded - library may not be loaded)
let lenis;
if (typeof Lenis === 'function') {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
        lenis.raf(time);
        // ScrollTrigger may not be available, guard its update call
        if (window.ScrollTrigger && typeof ScrollTrigger.update === 'function') {
            ScrollTrigger.update();
        }
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

// Elements used by GSAP/ScrollTrigger
const section_1 = document.getElementById('vertical');
const col_left = document.querySelector('.col_left');

// Create timeline only if GSAP is available and target element exists
let timeln;
if (window.gsap && typeof gsap.timeline === 'function' && col_left) {
    timeln = gsap.timeline({ paused: true });
    timeln.fromTo(col_left, { y: 0 }, { y: '170vh', duration: 1, ease: 'none' }, 0);
}

// Create ScrollTrigger only if available and needed elements exist
if (window.ScrollTrigger && timeln && section_1) {
    // Use the global ScrollTrigger instance
    ScrollTrigger.create({
        animation: timeln,
        trigger: section_1,
        start: 'top top',
        end: 'bottom center',
        scrub: true,
    });
}
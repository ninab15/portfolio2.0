//$(".mask").click(function () {
//    $(".icon-wrap").toggleClass('active');
//    $('body, .bar').toggleClass('dark');
//});
document.addEventListener("DOMContentLoaded", start);

function start() {

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const divs = section.querySelectorAll("div");

        gsap.from(divs, {
            opacity: 0,
            y: 100,
            duration: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "header",
                start: "center center",
                end: "center 20%",
            },
        });
    });
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#content-marketing", {
        scrollTrigger: {
            trigger: "#content-marketing",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        duration: 1,
        backgroundColor: "rgba(229, 249, 209, 0.7)",
    });

    gsap.to("#webfeature", {
        scrollTrigger: {
            trigger: "#webfeature",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        duration: 1,
        backgroundColor: "rgba(229, 249, 209, 0.7)",
    });


    gsap.to("#ecommerce", {
        scrollTrigger: {
            trigger: "#ecommerce",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        duration: 1,
        backgroundColor: "rgba(229, 249, 209, 0.7)",
    });
}

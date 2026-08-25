/* =====================================================
   ABDULRAHMON TAIWO — PORTFOLIO
   INTERACTION & ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       01 — SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".section, .glass-card, .skill-card, .project-card, .contact-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =================================================
       02 — NAVIGATION ACTIVE STATE
    ================================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );

    sections.forEach((section) => {

        sectionObserver.observe(section);

    });


    /* =================================================
       03 — SMOOTH NAVIGATION
    ================================================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       04 — MAGNETIC BUTTON EFFECT
    ================================================= */

    const magneticButtons =
        document.querySelectorAll(
            ".btn, .nav-cta"
        );

    magneticButtons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left - rect.width / 2;

            const y =
                event.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "";

        });

    });


    /* =================================================
       05 — PROJECT CARD TILT
    ================================================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });


    /* =================================================
       06 — PARALLAX ORB
    ================================================= */

    const orb =
        document.querySelector(".glass-orb");

    if (orb) {

        window.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX /
                        window.innerWidth - 0.5) * 20;

                const y =
                    (event.clientY /
                        window.innerHeight - 0.5) * 20;

                orb.style.marginLeft =
                    `${x}px`;

                orb.style.marginTop =
                    `${y}px`;

            }
        );

    }


    /* =================================================
       07 — DYNAMIC YEAR
    ================================================= */

    const year =
        document.querySelector("#current-year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =================================================
       08 — REDUCED MOTION ACCESSIBILITY
    ================================================= */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (reducedMotion.matches) {

        document.documentElement.style
            .scrollBehavior = "auto";

    }


    /* =================================================
       09 — CONSOLE MESSAGE
    ================================================= */

    console.log(
        "👋 Welcome to Abdulrahmon Taiwo's portfolio."
    );

    console.log(
        "Built with HTML, CSS & JavaScript."
    );

});
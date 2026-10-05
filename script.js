/* =========================================
   SUHYWRITES — JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("open");
            navLinks.classList.toggle("open");

        });

        // Close menu after clicking a link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("open");
                navLinks.classList.remove("open");

            });

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================================
       PORTFOLIO FILTER
    ========================================== */

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const portfolioItems =
        document.querySelectorAll(".portfolio-item");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove active class
            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            // Add active class to clicked button
            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            portfolioItems.forEach(item => {

                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {

                    item.classList.remove("hidden");

                    // Small animation
                    item.style.animation = "none";

                    requestAnimationFrame(() => {

                        item.style.animation =
                            "portfolioAppear 0.45s ease forwards";

                    });

                } else {

                    item.classList.add("hidden");

                }

            });

        });

    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");


            if (target === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) return;


        if (window.scrollY > 40) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(41, 35, 38, 0.06)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();


    /* =========================================
       PORTFOLIO APPEAR ANIMATION
    ========================================== */

    const style =
        document.createElement("style");


    style.innerHTML = `
    
        @keyframes portfolioAppear {

            from {
                opacity: 0;
                transform: translateY(15px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }

        }

    `;


    document.head.appendChild(style);


    /* =========================================
       BUTTERFLY RANDOM MOVEMENT
    ========================================== */

    const butterflies =
        document.querySelectorAll(".butterfly");


    butterflies.forEach((butterfly, index) => {

        // Slight random delay
        butterfly.style.animationDelay =
            `${-(index * 4 + 2)}s`;

    });


    /* =========================================
       SMOOTH ANCHOR SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (event) {

                const targetId =
                    this.getAttribute("href");


                if (targetId === "#") return;


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });


    /* =========================================
       PREVENT EMPTY PORTFOLIO LINKS
    ========================================== */

    document.querySelectorAll(".portfolio-link")
        .forEach(link => {

            link.addEventListener("click", event => {

                const href =
                    link.getAttribute("href");


                if (!href || href === "#") {

                    event.preventDefault();

                    alert(
                        "Writing sample link will be added here."
                    );

                }

            });

        });


    /* =========================================
       PAGE LOADED
    ========================================== */

    document.body.classList.add("page-loaded");

});

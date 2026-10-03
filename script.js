document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       BEGIN READING BUTTON
    ========================= */

    const beginButton = document.getElementById("beginReading");

    if (beginButton) {

        beginButton.addEventListener("click", () => {

            const intro = document.querySelector(".story-intro");

            if (intro) {

                intro.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =========================
       READING PROGRESS
    ========================= */

    const progressBar =
        document.getElementById("readingProgress");

    function updateReadingProgress() {

        const scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (documentHeight <= 0) {
            return;
        }

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            `${Math.min(progress, 100)}%`;

    }

    window.addEventListener(
        "scroll",
        updateReadingProgress,
        { passive: true }
    );

    updateReadingProgress();


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================
       PARALLAX ATMOSPHERE
    ========================= */

    const background =
        document.querySelector(".background");

    const moon =
        document.querySelector(".moon");

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;

            if (background) {

                background.style.transform =
                    `translateY(${scroll * 0.015}px)`;

            }

            if (moon) {

                moon.style.transform =
                    `translateY(${scroll * 0.04}px)`;

            }

        },
        { passive: true }
    );


    /* =========================
       CINEMATIC TEXT EFFECT
    ========================= */

    const dramaticTexts =
        document.querySelectorAll(
            ".dramatic-line, .fight-line, .final-dialogue"
        );

    const dramaticObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.transition =
                            "all 1.2s ease";

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateX(0)";

                    }

                });

            },
            {
                threshold: 0.3
            }
        );

    dramaticTexts.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateX(-25px)";

        dramaticObserver.observe(element);

    });


    /* =========================
       CHAPTER INDICATOR
    ========================= */

    const chapterIndicator =
        document.querySelector(
            ".chapter-indicator"
        );

    const chapterSections =
        document.querySelectorAll(
            "section"
        );

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        chapterIndicator
                    ) {

                        const label =
                            entry.target.dataset.chapter;

                        if (label) {

                            chapterIndicator.textContent =
                                label;

                        }

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

    chapterSections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =========================
       SUBTLE MOUSE MOVEMENT
    ========================= */

    const hero =
        document.querySelector(".hero");

    if (
        hero &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        0.5) *
                    10;

                const y =
                    (event.clientY /
                        window.innerHeight -
                        0.5) *
                    10;

                const heroContent =
                    hero.querySelector(
                        ".hero-content"
                    );

                if (heroContent) {

                    heroContent.style.transform =
                        `translate(${x}px, ${y}px)`;

                }

            }
        );

        hero.addEventListener(
            "mouseleave",
            () => {

                const heroContent =
                    hero.querySelector(
                        ".hero-content"
                    );

                if (heroContent) {

                    heroContent.style.transform =
                        "translate(0, 0)";

                }

            }
        );

    }


    /* =========================
       IMAGE-LIKE CINEMATIC FLASH
    ========================= */

    const gunshots =
        document.querySelectorAll(
            ".gunshot"
        );

    gunshots.forEach(gunshot => {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            gunshot.animate(
                                [
                                    {
                                        opacity: 0.2,
                                        transform:
                                            "scale(.8)"
                                    },
                                    {
                                        opacity: 1,
                                        transform:
                                            "scale(1.08)"
                                    },
                                    {
                                        opacity: 1,
                                        transform:
                                            "scale(1)"
                                    }
                                ],
                                {
                                    duration: 700,
                                    easing:
                                        "cubic-bezier(.2,.8,.2,1)"
                                }
                            );

                            observer.unobserve(
                                gunshot
                            );

                        }

                    });

                },
                {
                    threshold: 0.6
                }
            );

        observer.observe(gunshot);

    });


    /* =========================
       PHONE VIBRATION EFFECT
    ========================= */

    const phone =
        document.querySelector(".phone");

    if (phone) {

        const phoneObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            phone.animate(
                                [
                                    {
                                        transform:
                                            "rotate(0)"
                                    },
                                    {
                                        transform:
                                            "rotate(-3deg)"
                                    },
                                    {
                                        transform:
                                            "rotate(3deg)"
                                    },
                                    {
                                        transform:
                                            "rotate(-2deg)"
                                    },
                                    {
                                        transform:
                                            "rotate(2deg)"
                                    },
                                    {
                                        transform:
                                            "rotate(0)"
                                    }
                                ],
                                {
                                    duration: 700,
                                    iterations: 2
                                }
                            );

                        }

                    });

                },
                {
                    threshold: 0.7
                }
            );

        phoneObserver.observe(phone);

    }


    /* =========================
       PAGE LOADED
    ========================= */

    document.body.classList.add(
        "page-loaded"
    );

});
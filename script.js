const loader = document.getElementById("loader");
const progress = document.getElementById("progress");
const startReading = document.getElementById("startReading");


// LOADER

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});


// ENTER STORY

startReading.addEventListener("click", () => {

    document.querySelector(".cinematic-intro")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// READING PROGRESS

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        height > 0
            ? (scrollTop / height) * 100
            : 0;

    progress.style.width = percentage + "%";

});


// REVEAL ELEMENTS

const revealItems = document.querySelectorAll(
    ".story-card, .character-content, .delivery-content, .ship-content, .blood-content, .fire-content, .horror-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealItems.forEach(item => observer.observe(item));


// CINEMATIC PARALLAX

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    document.querySelectorAll(
        ".scene-image, .character-background, .ship-background, .gold-image, .ryan-background, .blood-background, .fire-background"
    ).forEach((element, index) => {

        const speed = 0.015 + (index % 3) * 0.006;

        element.style.transform =
            `translate3d(0, ${scroll * speed}px, 0) scale(1.06)`;

    });

});


// CHAPTER INDICATOR

const sections = [
    {
        selector: ".cinematic-intro",
        name: "CHAPTER ONE"
    },
    {
        selector: ".harbour-scene",
        name: "THE HARBOUR"
    },
    {
        selector: ".drugs-scene",
        name: "THE CONTRABAND"
    },
    {
        selector: ".gold-scene",
        name: "THE GOLD"
    },
    {
        selector: ".delivery-section",
        name: "THE WRONG DELIVERY"
    },
    {
        selector: ".blood-scene",
        name: "THE FINAL CONFRONTATION"
    },
    {
        selector: ".fire-scene",
        name: "THE CALL"
    }
];

const chapterIndicator =
    document.querySelector(".chapter-indicator");

window.addEventListener("scroll", () => {

    let current = "CHAPTER ONE";

    sections.forEach(section => {

        const element =
            document.querySelector(section.selector);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.45) {
            current = section.name;
        }

    });

    chapterIndicator.textContent = current;

});


// MOUSE CINEMATIC MOVEMENT

document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll(
        ".scene-image, .ship-background, .gold-image"
    ).forEach(element => {

        element.style.marginLeft = `${x * 8}px`;
        element.style.marginTop = `${y * 8}px`;

    });

});


// BLOOD FLASH

const bloodScene =
    document.querySelector(".blood-scene");

if (bloodScene) {

    const bloodObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    document.body.classList.add(
                        "blood-enter"
                    );

                    setTimeout(() => {

                        document.body.classList.remove(
                            "blood-enter"
                        );

                    }, 500);

                }

            });

        }, {
            threshold: .5
        });

    bloodObserver.observe(bloodScene);

}
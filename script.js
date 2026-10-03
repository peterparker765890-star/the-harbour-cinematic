/* =====================================================
   THE HARBOUR — CHAPTER TWO
   CINEMATIC SCRIPT
===================================================== */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        if(loader){
            loader.classList.add("hide");
        }

    }, 1800);

});


/* ================= READING PROGRESS ================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    const progress =
        document.getElementById("progress");

    if(progress){
        progress.style.width =
            percentage + "%";
    }

});


/* ================= SCROLL REVEAL ================= */

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold:0.15
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        revealObserver.observe(element);

    });


/* ================= EMBERS ================= */

const emberContainer =
    document.querySelector(".embers");

if(emberContainer){

    for(let i = 0; i < 45; i++){

        const ember =
            document.createElement("span");

        ember.className = "ember";

        ember.style.left =
            Math.random() * 100 + "%";

        ember.style.animationDuration =
            (4 + Math.random() * 7) + "s";

        ember.style.animationDelay =
            Math.random() * 8 + "s";

        ember.style.opacity =
            Math.random();

        emberContainer.appendChild(ember);

    }

}


/* ================= CINEMATIC PARALLAX ================= */

window.addEventListener("scroll", () => {

    const scenes =
        document.querySelectorAll(".scene");

    scenes.forEach((scene) => {

        const rect =
            scene.getBoundingClientRect();

        if(
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ){

            const distance =
                window.innerHeight / 2 -
                (rect.top + rect.height / 2);

            const movement =
                distance * 0.015;

            const background =
                scene.querySelector(
                    "::before"
                );

            scene.style.setProperty(
                "--parallax",
                movement + "px"
            );

        }

    });

});


/* ================= KEYBOARD ================= */

document.addEventListener(
    "keydown",
    (event) => {

        /* HOME */

        if(event.key === "Home"){

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }

        /* END */

        if(event.key === "End"){

            window.scrollTo({
                top:document.body.scrollHeight,
                behavior:"smooth"
            });

        }

    }
);


/* ================= IMAGE PRELOADING ================= */

const cinematicImages = [

    "assets/ch2-ocean.jpg",
    "assets/ch2-harbour.jpg",
    "assets/ch2-truck.jpg",
    "assets/ch2-confrontation.jpg",
    "assets/ch2-michael.jpg",
    "assets/ch2-blood.jpg",
    "assets/ch2-ocean-night.jpg",
    "assets/ch2-burning-forest.jpg",
    "assets/david-harris.jpg",
    "assets/jack.jpg"

];

cinematicImages.forEach((src) => {

    const image =
        new Image();

    image.src = src;

});


/* ================= PAGE TITLE EFFECT ================= */

const originalTitle =
    document.title;

document.addEventListener(
    "visibilitychange",
    () => {

        if(document.hidden){

            document.title =
                "Come back to THE HARBOUR...";

        }else{

            document.title =
                originalTitle;

        }

    }
);
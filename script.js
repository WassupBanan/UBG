/* =========================================
   UBG COMPANION
   INTERACTION SCRIPT
========================================= */


/* =========================================
   INTRO
========================================= */

const intro = document.getElementById("intro");
const skipIntro = document.getElementById("skipIntro");
const loadingText = document.getElementById("loadingText");
const loadingDots = document.getElementById("loadingDots");

let dots = 0;

const dotInterval = setInterval(() => {

    dots++;

    if (dots > 3) {
        dots = 0;
    }

    loadingDots.textContent = ".".repeat(dots);

}, 350);


function hideIntro() {

    clearInterval(dotInterval);

    intro.classList.add("hidden");

    setTimeout(() => {
        intro.style.display = "none";
    }, 900);

}


setTimeout(hideIntro, 3200);

skipIntro.addEventListener("click", hideIntro);

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        hideIntro();
    }

});


/* =========================================
   RANDOM HUD EFFECT
========================================= */

const healthBars = document.querySelectorAll(".health-fill");

setInterval(() => {

    healthBars.forEach((bar) => {

        const current = parseFloat(
            bar.style.width.replace("%", "")
        );

        const change = (Math.random() * 3) - 1.5;

        let next = current + change;

        next = Math.max(25, Math.min(100, next));

        bar.style.width = `${next}%`;

    });

}, 1800);


/* =========================================
   ULTIMATE CHARGE
========================================= */

const ultFill = document.querySelector(".ult-fill");
const ultPercent = document.querySelector(".ult-percent");

let ultimate = 74;

setInterval(() => {

    ultimate += Math.random() * 0.8;

    if (ultimate >= 100) {
        ultimate = 0;
    }

    ultFill.style.width = `${ultimate}%`;
    ultPercent.textContent = `${Math.floor(ultimate)}%`;

}, 700);


/* =========================================
   SCROLL NAVIGATION
========================================= */

document.querySelectorAll(".navbar a[href^='#']").forEach(link => {

    link.addEventListener("click", (event) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================
   STYLE CARD HOVER
========================================= */

document.querySelectorAll(".style-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 20px 60px rgba(0,0,0,0.45)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


/* =========================================
   INTERSECTION ANIMATION
========================================= */

const animatedElements = document.querySelectorAll(
    ".explore-card, .style-card, .mechanic-card, .collection-card, .ranked-panel"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================================
   RANDOM COMBAT FLASH
========================================= */

const hero = document.querySelector(".hero");

setInterval(() => {

    if (Math.random() > 0.75) {

        hero.animate(
            [
                {
                    transform: "translateX(0)"
                },
                {
                    transform: "translateX(-3px)"
                },
                {
                    transform: "translateX(3px)"
                },
                {
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 120,
                iterations: 1
            }
        );

    }

}, 2500);

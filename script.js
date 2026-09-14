/* ==================================================
   UBG WEBSITE JAVASCRIPT
================================================== */


const intro =
    document.getElementById("intro");


const site =
    document.getElementById("site");


const skip =
    document.getElementById("skipIntro");


const logo =
    document.querySelector(".intro-logo");


const loadingDots =
    document.getElementById("loadingDots");


const soundButton =
    document.getElementById("soundButton");



/* ==================================================
   INTRO
================================================== */


let finished = false;


function finishIntro() {

    if (finished) return;

    finished = true;


    intro.style.transition =
        "opacity .8s ease, transform .8s ease";


    intro.style.opacity = "0";


    intro.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        intro.remove();

        site.classList.add("visible");

    }, 800);

}



/* ==================================================
   LOADING DOTS
================================================== */


let dotCount = 0;


setInterval(() => {

    dotCount++;

    if (dotCount > 3) {
        dotCount = 1;
    }

    loadingDots.textContent =
        ".".repeat(dotCount);

}, 350);



/* ==================================================
   LOGO GLITCH
================================================== */


setTimeout(() => {

    if (finished) return;


    logo.style.animation =
        "glitch .18s linear 4";


}, 1700);



/* ==================================================
   AUTOMATICALLY FINISH INTRO
================================================== */


setTimeout(() => {

    finishIntro();

}, 3900);



/* ==================================================
   SKIP BUTTON
================================================== */


skip.addEventListener(
    "click",
    finishIntro
);



/* ==================================================
   ESC KEY
================================================== */


window.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            finishIntro();

        }

    }
);



/* ==================================================
   SOUND
================================================== */


let audioContext = null;


function playIntroSound() {

    audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type = "sine";


    oscillator.frequency.setValueAtTime(
        55,
        audioContext.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        35,
        audioContext.currentTime + 1.2
    );


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.08,
        audioContext.currentTime + 0.03
    );


    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 1.2
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 1.25
    );

}



/* ==================================================
   SOUND BUTTON
================================================== */


soundButton.addEventListener(
    "click",
    () => {

        if (!audioContext) {

            playIntroSound();

            soundButton.innerHTML =
                "SOUND <span>ON</span>";

        }

        else {

            audioContext.close();

            audioContext = null;

            soundButton.innerHTML =
                "SOUND <span>OFF</span>";

        }

    }
);

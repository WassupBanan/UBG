/* =========================================================
   UBG FAN WIKI
   MASTER JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       INTRO SYSTEM
    ===================================================== */

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

    /*
       Only run intro code if the page
       actually contains the intro.
    */

    if (intro && site) {

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


        /* ==============================================
           LOADING DOTS
        ============================================== */

        if (loadingDots) {

            let dotCount = 0;

            setInterval(() => {

                if (finished) return;

                dotCount++;

                if (dotCount > 3) {
                    dotCount = 1;
                }

                loadingDots.textContent =
                    ".".repeat(dotCount);

            }, 350);
        }


        /* ==============================================
           LOGO GLITCH
        ============================================== */

        if (logo) {

            setTimeout(() => {

                if (finished) return;

                logo.style.animation =
                    "glitch .18s linear 4";

            }, 1700);
        }


        /* ==============================================
           AUTOMATICALLY FINISH INTRO
        ============================================== */

        setTimeout(() => {

            finishIntro();

        }, 3900);


        /* ==============================================
           SKIP BUTTON
        ============================================== */

        if (skip) {

            skip.addEventListener(
                "click",
                finishIntro
            );
        }


        /* ==============================================
           ESC KEY
        ============================================== */

        window.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {

                    finishIntro();

                }

            }
        );


        /* ==============================================
           INTRO SOUND
        ============================================== */

        let audioContext = null;

        function playIntroSound() {

            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) return;

            audioContext =
                new AudioContext();

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


        /* ==============================================
           SOUND BUTTON
        ============================================== */

        if (soundButton) {

            soundButton.addEventListener(
                "click",
                () => {

                    if (!audioContext) {

                        playIntroSound();

                        soundButton.innerHTML =
                            "SOUND <span>ON</span>";

                    } else {

                        audioContext.close();

                        audioContext = null;

                        soundButton.innerHTML =
                            "SOUND <span>OFF</span>";
                    }

                }
            );
        }

    }


    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.getElementById("sidebar");

    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                sidebar.classList.toggle("open");

            }
        );


        /* Close when clicking outside */

        document.addEventListener(
            "click",
            (event) => {

                if (
                    window.innerWidth <= 650 &&
                    sidebar.classList.contains("open") &&
                    !sidebar.contains(event.target) &&
                    !mobileMenu.contains(event.target)
                ) {

                    sidebar.classList.remove("open");

                }

            }
        );


        /* Close sidebar after navigation */

        sidebar
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        if (
                            window.innerWidth <= 650
                        ) {

                            sidebar.classList.remove(
                                "open"
                            );

                        }

                    }
                );

            });

    }


    /* =====================================================
       GLOBAL SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById("globalSearch");

    const searchResults =
        document.getElementById("searchResults");

    if (searchInput && searchResults) {

        searchInput.addEventListener(
            "input",
            () => {

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                /* Empty search */

                if (!query) {

                    searchResults.classList.remove(
                        "show"
                    );

                    searchResults.innerHTML = "";

                    return;
                }


                /*
                   styles.js exposes:
                   window.UBG_STYLES
                */

                const database =
                    window.UBG_STYLES || [];


                /* Search */

                const results =
                    database
                        .filter(style => {

                            const name =
                                style.name
                                    ?.toLowerCase() || "";

                            const ranked =
                                style.ranked
                                    ?.toLowerCase() || "";

                            const rarity =
                                style.rarity
                                    ?.toLowerCase() || "";


                            return (
                                name.includes(query) ||
                                ranked.includes(query) ||
                                rarity.includes(query)
                            );

                        })
                        .slice(0, 7);


                /* No results */

                if (!results.length) {

                    searchResults.innerHTML = `
                        <div
                            style="
                                padding:12px;
                                color:#85858e;
                                font-size:11px;
                            "
                        >
                            No results found.
                        </div>
                    `;

                    searchResults.classList.add(
                        "show"
                    );

                    return;
                }


                /* Results */

                searchResults.innerHTML =
                    results
                        .map(style => {

                            const image =
                                style.animation
                                    ? `assets/styles/${style.animation}`
                                    : "";


                            return `
                                <a
                                    class="search-result"
                                    href="style.html?style=${encodeURIComponent(style.name)}"
                                >

                                    <div
                                        class="search-result-image"
                                    >

                                        ${
                                            image
                                                ? `
                                                    <img
                                                        src="${image}"
                                                        alt=""
                                                    >
                                                `
                                                : ""
                                        }

                                    </div>


                                    <div
                                        class="search-result-info"
                                    >

                                        <strong>
                                            ${style.name}
                                        </strong>

                                        <span>

                                            ${style.rarity}

                                            ${
                                                style.ranked
                                                    ? ` · ${style.ranked}`
                                                    : ""
                                            }

                                        </span>

                                    </div>

                                </a>
                            `;

                        })
                        .join("");


                searchResults.classList.add(
                    "show"
                );

            }
        );


        /* Close search when clicking outside */

        document.addEventListener(
            "click",
            (event) => {

                if (
                    !searchInput.contains(
                        event.target
                    ) &&
                    !searchResults.contains(
                        event.target
                    )
                ) {

                    searchResults.classList.remove(
                        "show"
                    );

                }

            }
        );


        /* CTRL + K / CMD + K */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    (event.ctrlKey || event.metaKey) &&
                    event.key.toLowerCase() === "k"
                ) {

                    event.preventDefault();

                    searchInput.focus();

                }

            }
        );

    }


    /* =====================================================
       ACTIVE SIDEBAR LINK
    ===================================================== */

    const currentPage =
        document.body.dataset.page;

    const currentFile =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    document
        .querySelectorAll(".sidebar-link")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) return;


            const cleanHref =
                href
                    .split("?")[0]
                    .split("#")[0];


            const page =
                cleanHref
                    .split("/")
                    .pop();


            let isCurrent = false;


            /* Home */

            if (
                currentPage === "home" &&
                page === "index.html"
            ) {

                isCurrent = true;

            }


            /* Styles */

            if (
                currentPage === "styles" &&
                page === "styles.html"
            ) {

                isCurrent = true;

            }


            /* Mechanics */

            if (
                currentPage === "mechanics" &&
                page === "mechanics.html"
            ) {

                isCurrent = true;

            }


            /* Ranked */

            if (
                currentPage === "ranked" &&
                page === "ranked.html"
            ) {

                isCurrent = true;

            }


            /* Guides */

            if (
                currentPage === "guides" &&
                page === "guides.html"
            ) {

                isCurrent = true;

            }


            /* Collection */

            if (
                currentPage === "collection" &&
                page === "collection.html"
            ) {

                isCurrent = true;

            }


            /* Fallback */

            if (
                !currentPage &&
                page === currentFile
            ) {

                isCurrent = true;

            }


            if (isCurrent) {

                link.classList.add("active");

            }

        });


    /* =====================================================
       ESCAPE SEARCH
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (searchResults) {

                    searchResults.classList.remove(
                        "show"
                    );

                }

            }

        }
    );

});

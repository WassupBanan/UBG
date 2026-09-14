/* =========================================================
   UBG FAN WIKI
   Global JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       MOBILE SIDEBAR
    ----------------------------------------------------- */

    const mobileMenu = document.getElementById("mobileMenu");
    const sidebar = document.getElementById("sidebar");

    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });

        document.addEventListener("click", (event) => {

            if (
                window.innerWidth <= 650 &&
                sidebar.classList.contains("open") &&
                !sidebar.contains(event.target) &&
                !mobileMenu.contains(event.target)
            ) {
                sidebar.classList.remove("open");
            }

        });
    }


    /* -----------------------------------------------------
       GLOBAL SEARCH
    ----------------------------------------------------- */

    const searchInput = document.getElementById("globalSearch");
    const searchResults = document.getElementById("searchResults");

    if (searchInput && searchResults) {

        searchInput.addEventListener("input", () => {

            const query = searchInput.value
                .trim()
                .toLowerCase();

            if (!query) {
                searchResults.classList.remove("show");
                searchResults.innerHTML = "";
                return;
            }

            /*
             * styles.js exposes the style database as
             * window.UBG_STYLES.
             */

            const database = window.UBG_STYLES || [];

            const results = database
                .filter(style => {

                    const name =
                        style.name?.toLowerCase() || "";

                    const ranked =
                        style.ranked?.toLowerCase() || "";

                    const rarity =
                        style.rarity?.toLowerCase() || "";

                    return (
                        name.includes(query) ||
                        ranked.includes(query) ||
                        rarity.includes(query)
                    );
                })
                .slice(0, 7);


            if (!results.length) {

                searchResults.innerHTML = `
                    <div style="
                        padding:12px;
                        color:#85858e;
                        font-size:11px;
                    ">
                        No results found.
                    </div>
                `;

                searchResults.classList.add("show");

                return;
            }


            searchResults.innerHTML = results
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

                            <div class="search-result-image">
                                ${
                                    image
                                        ? `<img src="${image}" alt="">`
                                        : ""
                                }
                            </div>

                            <div class="search-result-info">

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

            searchResults.classList.add("show");
        });


        document.addEventListener("click", event => {

            if (!searchInput.contains(event.target) &&
                !searchResults.contains(event.target)) {

                searchResults.classList.remove("show");

            }

        });


        /* CTRL + K */

        document.addEventListener("keydown", event => {

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                searchInput.focus();

            }

        });

    }


    /* -----------------------------------------------------
       ACTIVE SIDEBAR LINK
    ----------------------------------------------------- */

    const currentPage =
        document.body.dataset.page;

    document
        .querySelectorAll(".sidebar-link")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) return;

            const page =
                href.split("/").pop();

            const current =
                window.location.pathname
                    .split("/")
                    .pop() || "index.html";

            if (
                (currentPage === "home" &&
                    page === "index.html") ||

                (currentPage === "styles" &&
                    page === "styles.html") ||

                (currentPage === "mechanics" &&
                    page === "mechanics.html") ||

                (currentPage === "ranked" &&
                    page === "ranked.html") ||

                (currentPage === "guides" &&
                    page === "guides.html") ||

                (currentPage === "collection" &&
                    page === "collection.html")
            ) {
                link.classList.add("active");
            }

        });

});

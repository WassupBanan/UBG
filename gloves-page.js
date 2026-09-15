"use strict";


const gloveDatabase =
    window.UBG_GLOVES || [];


const sections =
    document.getElementById(
        "gloveSections"
    );


const searchInput =
    document.getElementById(
        "gloveSearch"
    );


const countElement =
    document.getElementById(
        "gloveCount"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


let currentFilter = "all";
let currentSearch = "";


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function rarityClass(rarity) {

    return String(rarity || "")
        .toLowerCase()
        .replace(/[^a-z]/g, "");

}


/* =========================================================
   CARD
   ========================================================= */

function createCard(glove) {

    let imageHTML;

    if (glove.image) {

        imageHTML = `
            <img
                src="${escapeHTML(glove.image)}"
                alt="${escapeHTML(glove.name)}"
                loading="lazy"
            >
        `;

    } else {

        imageHTML = `
            <div class="glove-placeholder">
                🥊
            </div>
        `;

    }


    let status = "";

    if (glove.wip) {

        status = `
            <div class="glove-status wip">
                WIP
            </div>
        `;

    } else if (glove.obtainable) {

        status = `
            <div class="glove-status available">
                Available
            </div>
        `;

    } else {

        status = `
            <div class="glove-status">
                Unobtainable
            </div>
        `;

    }


    return `

        <a
            class="glove-card"
            href="glove.html?glove=${encodeURIComponent(glove.id)}"
        >

            <div class="glove-card-image">

                ${status}

                ${imageHTML}

            </div>


            <div class="glove-card-body">

                <div class="glove-card-name">

                    ${escapeHTML(glove.name)}

                </div>


                ${
                    glove.subtitle
                        ? `
                            <div class="glove-card-subtitle">
                                ${escapeHTML(glove.subtitle)}
                            </div>
                        `
                        : ""
                }


                <span
                    class="glove-rarity ${rarityClass(glove.rarity)}"
                >
                    ${escapeHTML(glove.rarity)}
                </span>

            </div>

        </a>

    `;

}


/* =========================================================
   RENDER
   ========================================================= */

function renderGloves() {

    const filtered =
        gloveDatabase.filter(glove => {

            const matchesCategory =
                currentFilter === "all" ||
                glove.category === currentFilter;


            const searchText =
                [
                    glove.name,
                    glove.subtitle,
                    glove.category,
                    glove.series,
                    glove.rarity,
                    glove.obtain
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


            const matchesSearch =
                !currentSearch ||
                searchText.includes(
                    currentSearch.toLowerCase()
                );


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    countElement.textContent =
        `${filtered.length} ${
            filtered.length === 1
                ? "glove"
                : "gloves"
        }`;


    if (!filtered.length) {

        sections.innerHTML = "";

        noResults.hidden = false;

        return;

    }


    noResults.hidden = true;


    const grouped = {};


    filtered.forEach(glove => {

        if (!grouped[glove.category]) {

            grouped[glove.category] = [];

        }

        grouped[glove.category].push(glove);

    });


    sections.innerHTML =
        Object.entries(grouped)
            .map(
                ([category, items]) => `

                    <section
                        class="glove-category"
                    >

                        <div class="category-header">

                            <div class="category-title">

                                <h3>
                                    ${escapeHTML(category)}
                                </h3>

                            </div>

                            <span class="category-count">

                                ${items.length}
                                ${
                                    items.length === 1
                                        ? "ITEM"
                                        : "ITEMS"
                                }

                            </span>

                        </div>


                        <div class="glove-grid">

                            ${items
                                .map(createCard)
                                .join("")}

                        </div>

                    </section>

                `
            )
            .join("");

}


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value.trim();

        renderGloves();

    }
);


/* =========================================================
   FILTERS
   ========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            currentFilter =
                button.dataset.filter;


            renderGloves();

        }
    );

});


/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderGloves();

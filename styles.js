const STYLE_ASSET_PATH = "assets/styles/";

const styles = [

    // =========================
    // UNCOMMON
    // =========================

    {
        name: "Basic",
        rarity: "Uncommon",
        ranked: "BASIC",
        image: "Basic_Idle.gif",
        lights: "Basic_Lights.gif",
        heavy: "Basic_Heavies.gif",
        dashes: "Basic_Dashes.gif",
        ultimate: "Basic-ult-.gif",
        hp: 100,
        dash: "Average",
        range: "Good",
        block: "Good",
        ultimateCharge: "50%",
        passive: "None",
        ability: "None",
        ultimateName: "Full Force Uppercut",
        description:
            "A straightforward all-rounder that provides a balanced foundation for learning the game."
    },

    {
        name: "Smash",
        rarity: "Uncommon",
        ranked: "SENDO",
        image: "Smash_Idle.gif",
        lights: "Smash_Lights.gif",
        heavy: "Smash_Heavy.gif",
        dashes: "Smash_Dashes.gif"
    },

    {
        name: "Long Guard",
        rarity: "Uncommon",
        ranked: "LONGGUARD",
        image: "Long_Guard_Idle.gif",
        lights: "LG_Lights.gif",
        heavy: "LG_Heavy.gif",
        dashes: "LG_Dashes.gif"
    },

    {
        name: "Counter",
        rarity: "Uncommon",
        ranked: "MIYATA",
        image: "Counter_Idle.gif",
        lights: "Counter_Lights.gif",
        heavy: "Counter_Heavy.gif",
        dashes: "Counter_Dashes.gif"
    },

    {
        name: "Turtle",
        rarity: "Uncommon",
        ranked: "NANOMACHINES",
        image: "Turtle_Idle.gif",
        lights: "Turtle_Lights.gif",
        heavy: "Turtle_Heavy.gif",
        dashes: "Turtle_Dashes.gif",
        shiny: "Nanomachines"
    },


    // =========================
    // RARE
    // =========================

    {
        name: "Corkscrew",
        rarity: "Rare",
        ranked: "DATE",
        image: "Corkscrew_Idle.gif",
        lights: "Corkscrew_Lights.gif",
        heavy: "Corkscrew_Heavy.gif",
        dashes: "Corkscrew_Dashes.gif",
        shiny: "Drill"
    },

    {
        name: "Charge",
        rarity: "Rare",
        ranked: "CHARGE",
        image: "Charge_Idle.gif",
        lights: "Charge_Lights.gif",
        heavy: "Charge_Heavy.gif",
        dashes: "Charge_Dashes.gif",
        abilityGif: "Stampede.gif"
    },

    {
        name: "Hammer",
        rarity: "Rare",
        ranked: "HAMMER",
        image: "Hammer_Idle.gif",
        lights: "Hammer_Lights.gif",
        heavy: "Hammer_Heavy.gif",
        dashes: "Hammer_Dashes.gif",
        abilityGif: "Body_Blow.gif"
    },

    {
        name: "Trickster",
        rarity: "Rare",
        ranked: "AOKI",
        image: "Trickster_Idle.gif",
        lights: "Trickster_Lights.gif",
        heavy: "Trickster_Heavy.gif",
        dashes: "Trickster_Dashes.gif",
        shiny: "Conman"
    },

    {
        name: "Dragonfish",
        rarity: "Rare",
        ranked: "DRAGONFISH",
        image: "Kimura_Idle.gif",
        lights: "Kimura_Lights.gif",
        heavy: "Kimura_Heavy.gif",
        dashes: "Kimura_Dashes.gif",
        wip: true
    },


    // =========================
    // MYTHIC
    // =========================

    {
        name: "Dempsey",
        rarity: "Mythic",
        ranked: "IPPO",
        image: "Ippo_Idle.gif",
        lights: "Ippo_Lights.gif",
        heavy: "Ippo_Heavy.gif",
        dashes: "Ippo_Dashes.gif",
        abilityGif: "Dempsey_Roll.gif"
    },

    {
        name: "Hitman",
        rarity: "Mythic",
        ranked: "HITMAN",
        image: "Hitman_Idle.gif",
        lights: "Hitman_Lights.gif",
        heavy: "Hitman_Heavy.gif",
        dashes: "Hitman_Dashes.gif"
    },

    {
        name: "Hands Low",
        rarity: "Mythic",
        ranked: "SAEKI",
        image: "Hands_Low_Idle.gif",
        lights: "HL_Lights.gif",
        heavy: "HL_Heavy.gif",
        dashes: "HL_Dashes.gif"
    },

    {
        name: "Wolf",
        rarity: "Mythic",
        ranked: "VOLG",
        image: "Wolf_Idle.gif",
        lights: "Wolf_Lights.gif",
        heavy: "Wolf_Heavy.gif",
        dashes: "Wolf_Dashes.gif",
        abilityGif: "White_Fang_storage_showcase.gif",
        shiny: "Coyote"
    },

    {
        name: "Bullet",
        rarity: "Mythic",
        ranked: "BULLET",
        image: "Bullet_Idle.gif",
        lights: "Bullet_Lights.gif",
        heavy: "Bullet_Heavy.gif",
        dashes: "Bullet_Dashes.gif"
    },

    {
        name: "Switch Hit",
        rarity: "Mythic",
        ranked: "SWITCHHIT",
        image: "Switch_Hit_Idle.gif",
        lights: "SH_Light.gif",
        heavy: "SH_Heavy.gif",
        dashes: "SH_Dashes.gif",
        abilityGif: "Static_Neutral.gif"
    },

    {
        name: "Surgeon",
        rarity: "Mythic",
        ranked: "SURGEON",
        image: "Surgeon_meters.png",
        wip: true
    },


    // =========================
    // LEGENDARY
    // =========================

    {
        name: "Slugger",
        rarity: "Legendary",
        ranked: "TAKAMURA",
        image: "Slugger_Idle.gif",
        lights: "Slugger_Lights.gif",
        heavy: "Slugger_Heavy.gif",
        dashes: "Slugger_Dashes.gif"
    },

    {
        name: "Hawk",
        rarity: "Legendary",
        ranked: "HAWK",
        image: "Hawk_Idle.gif",
        lights: "Hawk_Lights.gif",
        heavy: "Hawk_Heavies.gif",
        dashes: "Hawk_Dashes.gif",
        abilityGif: "Hawk_meter.png"
    },

    {
        name: "Ghost",
        rarity: "Legendary",
        ranked: "GHOST",
        image: "Ghost_Idle.gif",
        lights: "Ghost_Lights.gif",
        heavy: "Ghost_Heavy.gif",
        dashes: "Ghost_Dashes.gif",
        abilityGif: "Ghost_Jab.gif"
    },

    {
        name: "Iron Fist",
        rarity: "Legendary",
        ranked: "IRONFIST",
        image: "Iron_Fist_Idle.gif",
        lights: "IF_Lights.gif",
        heavy: "IF_Heavy.gif",
        dashes: "IF_Dashes.gif"
    },

    {
        name: "Shotgun",
        rarity: "Legendary",
        ranked: "SHOTGUN",
        image: "Shotgun_Idles.gif",
        lights: "Shotgun_Lights.gif",
        heavy: "Shotgun_Heavy.gif",
        dashes: "Shotgun_Dashes.gif",
        abilityGif: "Single_barrage.gif"
    },

    {
        name: "Freedom",
        rarity: "Legendary",
        ranked: "FREEDOM",
        image: "Freedom_Idles.gif",
        lights: "Freedom_Lights.gif",
        heavy: "Freedom_Heavy.gif",
        dashes: "Freedom_Dashes.gif",
        abilityGif: "Freedom_Whirlwind.gif"
    },

    {
        name: "Chronos",
        rarity: "Legendary",
        ranked: "CHRONOS",
        image: "Chronos_Idle.gif",
        lights: "Chronos_Lights.gif",
        heavy: "Chronos_Heavy.gif",
        dashes: "Chronos_Dashes.gif",
        abilityGif: "Chronos_Focus_showcase.gif",
        shiny: "Godspeed"
    },

    {
        name: "White Ash",
        rarity: "Legendary",
        ranked: "JOE",
        image: "White_Ash_Idle.gif",
        lights: "WA_Lights.gif",
        heavy: "WA_Heavy.gif",
        dashes: "WA_Dashes.gif",
        abilityGif: "Joe_Burn_Showcase.gif"
    },

    {
        name: "Supernova",
        rarity: "Legendary",
        ranked: "SUPERNOVA",
        image: "Supernova_Idle.gif",
        wip: true
    },

    {
        name: "Deimos",
        rarity: "Legendary",
        ranked: "MONSTROSITY",
        image: "Deimos_Idle.gif",
        wip: true
    },


    // =========================
    // SHINY
    // =========================

    {
        name: "Godspeed",
        rarity: "Shiny",
        base: "Chronos",
        image: "Chronos_Idle.gif",
        wip: true
    },

    {
        name: "Bald",
        rarity: "Shiny",
        base: "Basic",
        image: "Basic_Idle.gif"
    },

    {
        name: "Coyote",
        rarity: "Shiny",
        base: "Wolf",
        image: "Wolf_Idle.gif"
    },

    {
        name: "Drill",
        rarity: "Shiny",
        base: "Corkscrew",
        image: "Corkscrew_Idle.gif"
    },

    {
        name: "Nanomachines",
        rarity: "Shiny",
        base: "Turtle",
        image: "Turtle_Idle.gif"
    }

];


function rarityClass(rarity) {

    return rarity.toLowerCase();

}


function createStyleCard(style) {

    return `
        <a
            class="style-card ${rarityClass(style.rarity)}"
            href="style.html?style=${encodeURIComponent(style.name)}"
            data-name="${style.name.toLowerCase()}"
            data-rarity="${style.rarity}"
        >

            <div class="style-card-image">

                <img
                    src="${STYLE_ASSET_PATH}${style.image}"
                    alt="${style.name}"
                    loading="lazy"
                >

                ${style.wip ? `
                    <span class="wip-badge">
                        WIP
                    </span>
                ` : ""}

            </div>


            <div class="style-card-body">

                <div class="style-card-top">

                    <span class="rarity ${rarityClass(style.rarity)}">
                        ${style.rarity.toUpperCase()}
                    </span>

                    <span class="style-arrow">
                        →
                    </span>

                </div>


                <h3>
                    ${style.name}
                </h3>


                ${
                    style.ranked
                    ?
                    `<span class="ranked-name">
                        ${style.ranked}
                    </span>`
                    :
                    ""
                }


                ${
                    style.base
                    ?
                    `<div class="base-style">
                        BASE: ${style.base}
                    </div>`
                    :
                    ""
                }

            </div>

        </a>
    `;

}


function renderStyles(filter = "all", search = "") {

    const grid = document.getElementById("styleGrid");

    if (!grid) return;

    const query = search.toLowerCase().trim();

    const filtered = styles.filter(style => {

        const matchesRarity =
            filter === "all" ||
            style.rarity === filter;

        const matchesSearch =
            !query ||
            style.name.toLowerCase().includes(query) ||
            (style.ranked &&
                style.ranked.toLowerCase().includes(query));

        return matchesRarity && matchesSearch;

    });


    grid.innerHTML = filtered
        .map(createStyleCard)
        .join("");


    const count = document.getElementById("styleCount");

    if (count) {
        count.textContent = filtered.length;
    }


    const noResults =
        document.getElementById("noResults");

    if (noResults) {
        noResults.style.display =
            filtered.length === 0
            ? "flex"
            : "none";
    }

}


function setupFilters() {

    const filters =
        document.querySelectorAll(".filter");

    filters.forEach(button => {

        button.addEventListener("click", () => {

            filters.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            const search =
                document.getElementById("styleSearch")
                    ?.value || "";

            renderStyles(filter, search);

        });

    });

}


function setupSearch() {

    const search =
        document.getElementById("styleSearch");

    if (!search) return;

    search.addEventListener("input", () => {

        const active =
            document.querySelector(".filter.active");

        const filter =
            active?.dataset.filter || "all";

        renderStyles(filter, search.value);

    });

}


function getStyleFromURL() {

    const params =
        new URLSearchParams(window.location.search);

    return params.get("style");

}


function findStyle(name) {

    if (!name) return null;

    return styles.find(
        style =>
            style.name.toLowerCase() ===
            name.toLowerCase()
    );

}


function media(filename, alt = "") {

    if (!filename) {

        return `
            <div class="media-placeholder">
                Animation unavailable
            </div>
        `;

    }

    return `
        <img
            src="${STYLE_ASSET_PATH}${filename}"
            alt="${alt}"
            loading="lazy"
        >
    `;

}


function renderStyleArticle(style) {

    const article =
        document.getElementById("styleArticle");

    const infobox =
        document.getElementById("styleInfobox");

    if (!article || !style) return;


    document.title =
        `${style.name} — UBG Wiki`;


    article.innerHTML = `

        <div class="breadcrumb">
            UBG WIKI
            <span>/</span>
            STYLES
            <span>/</span>
            ${style.name.toUpperCase()}
        </div>


        <section class="style-page-header">

            <div>

                <div class="article-label">
                    ${style.rarity.toUpperCase()} STYLE
                </div>

                <h1>
                    ${style.name}
                </h1>

                ${
                    style.wip
                    ?
                    `<span class="wip-badge large">
                        WORK IN PROGRESS
                    </span>`
                    :
                    ""
                }

                ${
                    style.ranked
                    ?
                    `<p class="style-ranked">
                        RANKED NAME:
                        <strong>${style.ranked}</strong>
                    </p>`
                    :
                    ""
                }

            </div>


            <div class="article-hero-gif">

                ${media(
                    style.image,
                    `${style.name} idle animation`
                )}

            </div>

        </section>


        <section
            id="overview"
            class="article-section"
        >

            <div class="section-heading">

                <div>
                    <span class="section-number">
                        01
                    </span>

                    <h2>
                        Overview
                    </h2>
                </div>

            </div>


            <div class="article-text">

                <p>
                    ${
                        style.description ||
                        `${style.name} is a ${style.rarity.toLowerCase()} fighting style in Untitled Boxing Game.`
                    }
                </p>

                ${
                    style.base
                    ?
                    `
                    <div class="base-notice">
                        <strong>Shiny variant</strong>

                        <p>
                            This style is based on
                            <a href="style.html?style=${encodeURIComponent(style.base)}">
                                ${style.base}
                            </a>.
                        </p>
                    </div>
                    `
                    :
                    ""
                }

            </div>

        </section>


        <section
            id="moveset"
            class="article-section"
        >

            <div class="section-heading">

                <div>
                    <span class="section-number">
                        02
                    </span>

                    <h2>
                        Moveset
                    </h2>
                </div>

            </div>


            <div class="moves-grid">

                <div class="move-card">

                    <div class="move-title">
                        <span>01</span>
                        Idle
                    </div>

                    <div class="move-image">
                        ${media(style.image)}
                    </div>

                </div>


                <div class="move-card">

                    <div class="move-title">
                        <span>02</span>
                        Light Attacks
                    </div>

                    <div class="move-image">
                        ${media(style.lights)}
                    </div>

                </div>


                <div class="move-card">

                    <div class="move-title">
                        <span>03</span>
                        Heavy Attack
                    </div>

                    <div class="move-image">
                        ${media(style.heavy)}
                    </div>

                </div>


                <div class="move-card">

                    <div class="move-title">
                        <span>04</span>
                        Dashes
                    </div>

                    <div class="move-image">
                        ${media(style.dashes)}
                    </div>

                </div>


                ${
                    style.abilityGif
                    ?
                    `
                    <div class="move-card wide">

                        <div class="move-title">
                            <span>05</span>
                            Ability / Showcase
                        </div>

                        <div class="move-image">
                            ${media(style.abilityGif)}
                        </div>

                    </div>
                    `
                    :
                    ""
                }

            </div>

        </section>


        <section
            id="details"
            class="article-section"
        >

            <div class="section-heading">

                <div>
                    <span class="section-number">
                        03
                    </span>

                    <h2>
                        Details
                    </h2>
                </div>

            </div>


            <div class="details-grid">

                ${
                    style.hp
                    ?
                    `<div class="detail-box">
                        <span>HP</span>
                        <strong>${style.hp}</strong>
                    </div>`
                    :
                    ""
                }

                ${
                    style.dash
                    ?
                    `<div class="detail-box">
                        <span>DASH</span>
                        <strong>${style.dash}</strong>
                    </div>`
                    :
                    ""
                }

                ${
                    style.range
                    ?
                    `<div class="detail-box">
                        <span>RANGE</span>
                        <strong>${style.range}</strong>
                    </div>`
                    :
                    ""
                }

                ${
                    style.block
                    ?
                    `<div class="detail-box">
                        <span>BLOCK</span>
                        <strong>${style.block}</strong>
                    </div>`
                    :
                    ""
                }

                ${
                    style.ultimateCharge
                    ?
                    `<div class="detail-box">
                        <span>ULTIMATE</span>
                        <strong>${style.ultimateCharge}</strong>
                    </div>`
                    :
                    ""
                }

                ${
                    style.passive
                    ?
                    `<div class="detail-box">
                        <span>PASSIVE</span>
                        <strong>${style.passive}</strong>
                    </div>`
                    :
                    ""
                }

            </div>


            ${
                style.ultimateName
                ?
                `
                <div class="ability-section">

                    <span class="red-label">
                        ULTIMATE
                    </span>

                    <h3>
                        ${style.ultimateName}
                    </h3>

                    ${
                        style.ultimate
                        ?
                        `<div class="ultimate-image">
                            ${media(style.ultimate)}
                        </div>`
                        :
                        ""
                    }

                </div>
                `
                :
                ""
            }


            <div class="wip-note">

                <strong>Wiki status</strong>

                <p>
                    Information on this page may be incomplete.
                    Contributions and corrections are welcome.
                </p>

            </div>

        </section>

    `;


    if (infobox) {

        infobox.innerHTML = `

            <div class="style-infobox-image">
                ${media(style.image)}
            </div>

            <div class="style-infobox-title">
                ${style.name}
            </div>

            <div class="style-infobox-rarity">

                <span class="rarity ${rarityClass(style.rarity)}">
                    ${style.rarity.toUpperCase()}
                </span>

            </div>


            <div class="infobox-row">
                <span>Ranked</span>
                <strong>
                    ${style.ranked || "—"}
                </strong>
            </div>


            <div class="infobox-row">
                <span>Base Style</span>
                <strong>
                    ${style.base || "—"}
                </strong>
            </div>


            ${
                style.shiny
                ?
                `
                <div class="infobox-row">
                    <span>Shiny</span>
                    <strong>
                        ${style.shiny}
                    </strong>
                </div>
                `
                :
                ""
            }

        `;

    }

}


document.addEventListener("DOMContentLoaded", () => {

    const grid =
        document.getElementById("styleGrid");

    if (grid) {

        renderStyles();
        setupFilters();
        setupSearch();

    }


    const styleName =
        getStyleFromURL();

    if (styleName) {

        const style =
            findStyle(styleName);

        if (style) {

            renderStyleArticle(style);

        } else {

            const article =
                document.getElementById("styleArticle");

            if (article) {

                article.innerHTML = `
                    <div class="not-found">
                        <h1>Style not found</h1>

                        <p>
                            The requested style could not
                            be found in the database.
                        </p>

                        <a
                            href="styles.html"
                            class="red-button"
                        >
                            ← BACK TO STYLES
                        </a>
                    </div>
                `;

            }

        }

    }

});

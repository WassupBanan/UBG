/* =========================================================
   UNTITLED BOXING GAME
   FAN WIKI — STYLES DATABASE
   ========================================================= */


/* =========================================================
   STYLE DATABASE
   ========================================================= */

const styles = [

    /* =====================================================
       UNCOMMON
       ===================================================== */

    {
        name: "Basic",
        rarity: "Uncommon",
        ranked: "BASIC",
        hp: 100,
        dash: "Average",
        range: "Good",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "None",
        ultimateName: "Full Force Uppercut",
        description:
            "A straightforward all-rounder with balanced fundamentals. Basic is simple to understand and provides a reliable foundation for learning the game.",
        strengths: [
            "Balanced overall performance",
            "Easy to learn",
            "Reliable fundamentals"
        ],
        weaknesses: [
            "No major specialized mechanic",
            "Can be outperformed by specialized styles"
        ],
        obtain: "Available as the basic starting style.",
        animation: "Basic_Idle.gif"
    },


    {
        name: "Smash",
        rarity: "Uncommon",
        ranked: "SENDO",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "None",
        ultimateName: "Smash",
        description:
            "A pressure-oriented boxing style focused on powerful, aggressive attacks.",
        strengths: [
            "Strong offensive pressure",
            "Good close-range presence",
            "Powerful attacks"
        ],
        weaknesses: [
            "Less effective when forced to play defensively",
            "Requires good positioning"
        ],
        obtain: "Obtained through style spins.",
        animation: "Smash_Idle.gif"
    },


    {
        name: "Long Guard",
        rarity: "Uncommon",
        ranked: "LONGGUARD",
        hp: 100,
        dash: "Average",
        range: "Long",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "None",
        ultimateName: "Long Guard Ultimate",
        description:
            "A defensive style built around maintaining distance and controlling the opponent with an extended guard.",
        strengths: [
            "Strong defensive presence",
            "Excellent range",
            "Good spacing control"
        ],
        weaknesses: [
            "Less comfortable at close range",
            "Requires good spacing"
        ],
        obtain: "Obtained through style spins.",
        animation: "Long_Guard_Idle.gif"
    },


    {
        name: "Counter",
        rarity: "Uncommon",
        ranked: "MIYATA",
        hp: 100,
        dash: "Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "None",
        ultimateName: "Counter Ultimate",
        description:
            "A precision-oriented counter-punching style that rewards reading the opponent and punishing their mistakes.",
        strengths: [
            "Excellent counter-punching potential",
            "Rewards precise timing",
            "Strong against predictable opponents"
        ],
        weaknesses: [
            "Requires good reactions",
            "Less effective when the opponent refuses to commit"
        ],
        obtain: "Obtained through style spins.",
        animation: "Counter_Idle.gif"
    },


    {
        name: "Turtle",
        rarity: "Uncommon",
        ranked: "NANOMACHINES",
        hp: 100,
        dash: "Slow",
        range: "Average",
        block: "Excellent",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "None",
        ultimateName: "Turtle Ultimate",
        description:
            "A defensive style centered around blocking, patience and surviving the opponent's pressure.",
        strengths: [
            "Strong defensive capabilities",
            "Excellent block",
            "Good for patient players"
        ],
        weaknesses: [
            "Lower mobility",
            "Can struggle to create pressure"
        ],
        obtain: "Obtained through style spins.",
        animation: "Turtle_Idle.gif",
        shiny: "Nanomachines"
    },


    /* =====================================================
       RARE
       ===================================================== */

    {
        name: "Corkscrew",
        rarity: "Rare",
        ranked: "DATE",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "None",
        ultimateName: "Corkscrew Ultimate",
        description:
            "A boxing style centered around rotational punching mechanics and solid fundamentals.",
        strengths: [
            "Balanced offense",
            "Reliable punching",
            "Good fundamentals"
        ],
        weaknesses: [
            "No extreme specialization",
            "Requires consistent fundamentals"
        ],
        obtain: "Obtained through style spins.",
        animation: "Corkscrew_Idle.gif",
        shiny: "Drill"
    },


    {
        name: "Charge",
        rarity: "Rare",
        ranked: "CHARGE",
        hp: 100,
        dash: "Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Charge",
        ultimateName: "Stampede",
        description:
            "An aggressive style designed around closing distance and overwhelming opponents with forward pressure.",
        strengths: [
            "Strong forward pressure",
            "Excellent gap closing",
            "Aggressive playstyle"
        ],
        weaknesses: [
            "Can be predictable when constantly advancing",
            "Requires careful stamina management"
        ],
        obtain: "Obtained through style spins.",
        animation: "Charge_Idle.gif"
    },


    {
        name: "Hammer",
        rarity: "Rare",
        ranked: "HAMMER",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Body Blow",
        ultimateName: "Hammer Ultimate",
        description:
            "A heavy-hitting boxing style focused on delivering powerful punches and breaking through defenses.",
        strengths: [
            "Strong heavy attacks",
            "Good close-range pressure",
            "Powerful damage potential"
        ],
        weaknesses: [
            "Can be slower than technical styles",
            "Requires commitment to attacks"
        ],
        obtain: "Obtained through style spins.",
        animation: "Hammer_Idle.gif"
    },


    {
        name: "Trickster",
        rarity: "Rare",
        ranked: "AOKI",
        hp: 100,
        dash: "Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Trick",
        ultimateName: "Trickster Ultimate",
        description:
            "An unorthodox style built around unpredictable movement and unusual attack patterns.",
        strengths: [
            "Unpredictable movement",
            "Good mobility",
            "Can confuse opponents"
        ],
        weaknesses: [
            "Requires creativity",
            "Can be difficult to use consistently"
        ],
        obtain: "Obtained through style spins.",
        animation: "Trickster_Idle.gif",
        shiny: "Conman"
    },


    {
        name: "Dragonfish",
        rarity: "Rare",
        ranked: "DRAGONFISH",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Dragonfish",
        ultimateName: "Dragonfish Ultimate",
        description:
            "A specialized style represented by the Dragonfish moveset.",
        strengths: [
            "Distinctive moveset",
            "Specialized offensive options"
        ],
        weaknesses: [
            "Requires familiarity with its mechanics"
        ],
        obtain: "Style information is currently being developed.",
        animation: "Kimura_Idle.gif",
        wip: true
    },


    /* =====================================================
       MYTHIC
       ===================================================== */

    {
        name: "Dempsey",
        rarity: "Mythic",
        ranked: "IPPO",
        hp: 100,
        dash: "Fast",
        range: "Short",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Dempsey Roll",
        ability: "Dempsey Roll",
        ultimateName: "Dempsey Ultimate",
        description:
            "An in-fighting style based around aggressive movement, rolling and close-range combinations.",
        strengths: [
            "Excellent close-range pressure",
            "Strong offensive movement",
            "Effective combination potential"
        ],
        weaknesses: [
            "Needs to fight at close range",
            "Can struggle against strong spacing"
        ],
        obtain: "Obtained through style spins.",
        animation: "Ippo_Idle.gif"
    },


    {
        name: "Hitman",
        rarity: "Mythic",
        ranked: "HITMAN",
        hp: 100,
        dash: "Fast",
        range: "Long",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Flicker",
        ultimateName: "Hitman Ultimate",
        description:
            "A long-range technical style focused on fast punches and controlling opponents from a distance.",
        strengths: [
            "Excellent range",
            "Fast attacks",
            "Strong neutral game"
        ],
        weaknesses: [
            "Requires good spacing",
            "Can struggle when pressured at close range"
        ],
        obtain: "Obtained through style spins.",
        animation: "Hitman_Idle.gif"
    },


    {
        name: "Hands Low",
        rarity: "Mythic",
        ranked: "SAEKI",
        hp: 100,
        dash: "Very Fast",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Hands Low",
        ultimateName: "Hands Low Ultimate",
        description:
            "A highly mobile technical style that trades conventional defense for speed and evasive movement.",
        strengths: [
            "Excellent mobility",
            "Fast attacks",
            "Strong evasive potential"
        ],
        weaknesses: [
            "Weak conventional defense",
            "Punishable when movement is mistimed"
        ],
        obtain: "Obtained through style spins.",
        animation: "Hands_Low_Idle.gif"
    },


    {
        name: "Wolf",
        rarity: "Mythic",
        ranked: "VOLG",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "White Fang",
        ultimateName: "Wolf Ultimate",
        description:
            "A balanced technical style with strong fundamentals and the White Fang mechanic.",
        strengths: [
            "Strong fundamentals",
            "Good defensive options",
            "Versatile gameplay"
        ],
        weaknesses: [
            "Requires good timing",
            "Can be difficult to master"
        ],
        obtain: "Obtained through style spins.",
        animation: "Wolf_Idle.gif",
        shiny: "Coyote"
    },


    {
        name: "Bullet",
        rarity: "Mythic",
        ranked: "BULLET",
        hp: 100,
        dash: "Very Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Bullet",
        ultimateName: "Bullet Ultimate",
        description:
            "A speed-focused style built around exceptionally fast punches and rapid offensive pressure.",
        strengths: [
            "Extremely fast attacks",
            "Excellent offensive pressure",
            "Strong punish potential"
        ],
        weaknesses: [
            "Requires fast reactions",
            "Mistakes can be heavily punished"
        ],
        obtain: "Obtained through style spins.",
        animation: "Bullet_Idle.gif"
    },


    {
        name: "Switch Hit",
        rarity: "Mythic",
        ranked: "SWITCHHIT",
        hp: 100,
        dash: "Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Switch Stance",
        ability: "Switch Hit",
        ultimateName: "Switch Hit Ultimate",
        description:
            "An adaptable style that changes its offensive approach by switching between stances.",
        strengths: [
            "Adaptable offense",
            "Multiple attack angles",
            "Strong matchup flexibility"
        ],
        weaknesses: [
            "Requires knowledge of both sides",
            "Can be difficult to master"
        ],
        obtain: "Obtained through style spins.",
        animation: "Switch_Hit_Idle.gif"
    },


    {
        name: "Surgeon",
        rarity: "Mythic",
        ranked: "SURGEON",
        hp: 100,
        dash: "Fast",
        range: "Good",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Surgical Precision",
        ability: "Surgeon",
        ultimateName: "Surgeon Ultimate",
        description:
            "A precision-focused style represented by its specialized meter and technical moveset.",
        strengths: [
            "Precision-based gameplay",
            "Strong technical options"
        ],
        weaknesses: [
            "Requires mechanical knowledge",
            "Some information is still being developed"
        ],
        obtain: "Style information is currently being developed.",
        animation: "Surgeon_meters.png",
        wip: true
    },


    /* =====================================================
       LEGENDARY
       ===================================================== */

    {
        name: "Slugger",
        rarity: "Legendary",
        ranked: "TAKAMURA",
        hp: 100,
        dash: "Slow",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "None",
        ability: "Slugger",
        ultimateName: "Slugger Ultimate",
        description:
            "A powerful style focused on devastating punches and punishing opponents with clean reads.",
        strengths: [
            "High damage potential",
            "Powerful heavy attacks",
            "Excellent punishment"
        ],
        weaknesses: [
            "Lower mobility",
            "Requires accurate reads"
        ],
        obtain: "Obtained through style spins.",
        animation: "Slugger_Idle.gif"
    },


    {
        name: "Hawk",
        rarity: "Legendary",
        ranked: "HAWK",
        hp: 100,
        dash: "Fast",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "None",
        passive: "Rage",
        ability: "Swayback",
        ultimateName: "Hawk Ultimate",
        description:
            "An unorthodox, aggressive style built around instinctive movement, pressure and unique evasive mechanics.",
        strengths: [
            "Strong offensive pressure",
            "Unique evasive movement",
            "High offensive potential"
        ],
        weaknesses: [
            "Weak conventional defense",
            "Requires strong offensive timing"
        ],
        obtain: "Obtained through style spins.",
        animation: "Hawk_Idle.gif"
    },


    {
        name: "Ghost",
        rarity: "Legendary",
        ranked: "GHOST",
        hp: 100,
        dash: "Mediocre",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "None",
        passive: "Dim Highlights",
        ability: "Ghost Jab",
        ultimateName: "Ghost Ultimate",
        description:
            "A deceptive and evasive style built around movement, timing and precision. Ghost rewards players who can read attacks and create openings.",
        strengths: [
            "Strong evasive potential",
            "Excellent counter opportunities",
            "Good movement"
        ],
        weaknesses: [
            "Weak block",
            "Requires precise timing",
            "Mistimed movement can be punished"
        ],
        obtain: "Obtained through style spins.",
        animation: "Ghost_Idle.gif"
    },


    {
        name: "Iron Fist",
        rarity: "Legendary",
        ranked: "IRONFIST",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "Iron Fist",
        ability: "Iron Fist",
        ultimateName: "Iron Fist Ultimate",
        description:
            "A hard-hitting style built around powerful fundamentals and relentless punching.",
        strengths: [
            "Powerful attacks",
            "Reliable fundamentals",
            "Strong pressure"
        ],
        weaknesses: [
            "Less specialized mobility",
            "Requires good positioning"
        ],
        obtain: "Obtained through style spins.",
        animation: "Iron_Fist_Idle.gif"
    },


    {
        name: "Shotgun",
        rarity: "Legendary",
        ranked: "SHOTGUN",
        hp: 100,
        dash: "Fast",
        range: "Long",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Prodigy",
        ability: "Barrage",
        ultimateName: "Shotgun Ultimate",
        description:
            "A rapid-fire boxing style focused on repeated, accurate punches and overwhelming offensive volume.",
        strengths: [
            "Excellent punching speed",
            "Strong ranged pressure",
            "High offensive volume"
        ],
        weaknesses: [
            "Requires accurate execution",
            "Can be punished between attacks"
        ],
        obtain: "Obtained through style spins.",
        animation: "Shotgun_Idles.gif"
    },


    {
        name: "Freedom",
        rarity: "Legendary",
        ranked: "FREEDOM",
        hp: 80,
        dash: "Variable",
        range: "Variable",
        block: "Variable",
        ultimate: "50%",
        trail: "None",
        passive: "Style Switching",
        ability: "Switching",
        ultimateName: "Freedom Ultimate",
        description:
            "An adaptable style that can change its fighting approach through different modes.",
        strengths: [
            "Extremely adaptable",
            "Multiple combat approaches",
            "Can respond to different opponents"
        ],
        weaknesses: [
            "Lower base health",
            "Requires knowledge of multiple modes",
            "High learning curve"
        ],
        obtain: "Obtained through style spins.",
        animation: "Freedom_Idles.gif"
    },


    {
        name: "Chronos",
        rarity: "Legendary",
        ranked: "CHRONOS",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Focus",
        ability: "Chronos",
        ultimateName: "Chronos Ultimate",
        description:
            "A time-themed style centered around controlling the pace of combat and manipulating exchanges.",
        strengths: [
            "Unique time-based mechanics",
            "Strong control potential",
            "Rewards precise timing"
        ],
        weaknesses: [
            "Requires mechanical knowledge",
            "Mistimed abilities can be punished"
        ],
        obtain: "Obtained through style spins.",
        animation: "Chronos_Idle.gif",
        shiny: "Godspeed"
    },


    {
        name: "White Ash",
        rarity: "Legendary",
        ranked: "JOE",
        hp: 100,
        dash: "Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "White Ash",
        ability: "Burn",
        ultimateName: "Joe Ultimate",
        description:
            "A style inspired by Joe, built around determination, pressure and a unique burn mechanic.",
        strengths: [
            "Strong offensive potential",
            "Unique burn mechanics",
            "Rewards aggressive play"
        ],
        weaknesses: [
            "Requires careful management of its mechanics",
            "Can be difficult to master"
        ],
        obtain: "Obtained through style spins.",
        animation: "White_Ash_Idle.gif"
    },


    {
        name: "Supernova",
        rarity: "Legendary",
        ranked: "SUPERNOVA",
        hp: 100,
        dash: "Fast",
        range: "Good",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Supernova",
        ability: "Supernova",
        ultimateName: "Supernova Ultimate",
        description:
            "A specialized legendary style with unique stamina and meter mechanics.",
        strengths: [
            "Specialized mechanics",
            "Strong offensive potential"
        ],
        weaknesses: [
            "Requires knowledge of its unique mechanics",
            "Information is still being developed"
        ],
        obtain: "Style information is currently being developed.",
        animation: "Supernova_Idle.gif",
        wip: true
    },


    {
        name: "Deimos",
        rarity: "Legendary",
        ranked: "MONSTROSITY",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Deimos",
        ability: "Deimos",
        ultimateName: "Deimos Ultimate",
        description:
            "A powerful specialized style currently under development.",
        strengths: [
            "Unique style identity",
            "Specialized offensive potential"
        ],
        weaknesses: [
            "Moveset information is still being developed"
        ],
        obtain: "Style information is currently being developed.",
        animation: "Deimos_Idle.gif",
        wip: true
    },


    /* =====================================================
       SHINY
       ===================================================== */

    {
        name: "Godspeed",
        rarity: "Shiny",
        ranked: "GODSPEED",
        baseStyle: "Chronos",
        hp: 100,
        dash: "Very Fast",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Shiny Variant",
        ability: "Godspeed",
        ultimateName: "Godspeed Ultimate",
        description:
            "A shiny variant associated with Chronos.",
        strengths: [
            "Shiny variant",
            "Associated with Chronos"
        ],
        weaknesses: [
            "Shiny-specific mechanics are still being documented"
        ],
        obtain: "Shiny variant information is currently being developed.",
        animation: "Chronos_Idle.gif",
        wip: true
    },


    {
        name: "Bald",
        rarity: "Shiny",
        ranked: "BALD",
        baseStyle: "Basic",
        hp: 100,
        dash: "Average",
        range: "Good",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "Shiny Variant",
        ability: "None",
        ultimateName: "Full Force Uppercut",
        description:
            "A shiny variant associated with Basic.",
        strengths: [
            "Shiny variant of Basic",
            "Familiar underlying fundamentals"
        ],
        weaknesses: [
            "Shiny-specific mechanics are still being documented"
        ],
        obtain: "Shiny variant information is currently being developed.",
        animation: "Basic_Idle.gif"
    },


    {
        name: "Coyote",
        rarity: "Shiny",
        ranked: "COYOTE",
        baseStyle: "Wolf",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "None",
        passive: "Shiny Variant",
        ability: "White Fang",
        ultimateName: "Wolf Ultimate",
        description:
            "A shiny variant associated with Wolf.",
        strengths: [
            "Shiny variant of Wolf",
            "Associated with White Fang mechanics"
        ],
        weaknesses: [
            "Shiny-specific mechanics are still being documented"
        ],
        obtain: "Shiny variant information is currently being developed.",
        animation: "Wolf_Idle.gif"
    },


    {
        name: "Drill",
        rarity: "Shiny",
        ranked: "DRILL",
        baseStyle: "Corkscrew",
        hp: 100,
        dash: "Average",
        range: "Average",
        block: "Average",
        ultimate: "50%",
        trail: "None",
        passive: "Shiny Variant",
        ability: "Corkscrew",
        ultimateName: "Corkscrew Ultimate",
        description:
            "A shiny variant associated with Corkscrew.",
        strengths: [
            "Shiny variant of Corkscrew",
            "Retains the style's core identity"
        ],
        weaknesses: [
            "Shiny-specific mechanics are still being documented"
        ],
        obtain: "Shiny variant information is currently being developed.",
        animation: "Corkscrew_Idle.gif"
    },


    {
        name: "Nanomachines",
        rarity: "Shiny",
        ranked: "NANOMACHINES",
        baseStyle: "Turtle",
        hp: 100,
        dash: "Slow",
        range: "Average",
        block: "Excellent",
        ultimate: "50%",
        trail: "None",
        passive: "Shiny Variant",
        ability: "None",
        ultimateName: "Turtle Ultimate",
        description:
            "A shiny variant associated with Turtle.",
        strengths: [
            "Shiny variant of Turtle",
            "Strong defensive identity"
        ],
        weaknesses: [
            "Shiny-specific mechanics are still being documented"
        ],
        obtain: "Shiny variant information is currently being developed.",
        animation: "Turtle_Idle.gif"
    }

];


/* =========================================================
   MAKE DATABASE AVAILABLE TO GLOBAL SEARCH
   ========================================================= */

window.UBG_STYLES = styles;


/* =========================================================
   HELPERS
   ========================================================= */

function getStyleImage(style) {

    if (!style || !style.animation) {
        return "";
    }

    return `assets/styles/${style.animation}`;
}


function getRarityClass(rarity) {

    return `rarity-${String(rarity || "")
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

}


function escapeHTML(value) {

    if (
        value === undefined ||
        value === null
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {
    return escapeHTML(value);
}


/* =========================================================
   STYLE DATABASE PAGE
   ========================================================= */

const styleGrid =
    document.getElementById("styleGrid");

const styleSearch =
    document.getElementById("styleSearch");

const styleCount =
    document.getElementById("styleCount");

const filterButtons =
    document.querySelectorAll(".wiki-filter");


if (styleGrid) {

    let currentRarity = "All";

    let currentSearch = "";


    /* -----------------------------------------------------
       RENDER STYLE CARDS
    ----------------------------------------------------- */

    function renderStyles() {

        let filtered =
            [...styles];


        /* rarity */

        if (
            currentRarity &&
            currentRarity !== "All"
        ) {

            filtered =
                filtered.filter(style =>
                    style.rarity === currentRarity
                );

        }


        /* search */

        if (currentSearch) {

            const query =
                currentSearch.toLowerCase();


            filtered =
                filtered.filter(style => {

                    const name =
                        String(
                            style.name || ""
                        ).toLowerCase();


                    const ranked =
                        String(
                            style.ranked || ""
                        ).toLowerCase();


                    const rarity =
                        String(
                            style.rarity || ""
                        ).toLowerCase();


                    const description =
                        String(
                            style.description || ""
                        ).toLowerCase();


                    const baseStyle =
                        String(
                            style.baseStyle || ""
                        ).toLowerCase();


                    return (
                        name.includes(query) ||
                        ranked.includes(query) ||
                        rarity.includes(query) ||
                        description.includes(query) ||
                        baseStyle.includes(query)
                    );

                });

        }


        /* count */

        if (styleCount) {

            styleCount.textContent =
                `${filtered.length} style${
                    filtered.length === 1
                        ? ""
                        : "s"
                }`;

        }


        /* empty */

        if (!filtered.length) {

            styleGrid.innerHTML = `

                <div style="
                    grid-column:1/-1;
                    padding:50px 20px;
                    text-align:center;
                    color:#85858e;
                ">

                    <div style="
                        font-size:24px;
                        margin-bottom:10px;
                    ">
                        ◌
                    </div>

                    No styles found.

                </div>

            `;

            return;
        }


        /* cards */

        styleGrid.innerHTML =
            filtered.map(style => {

                const image =
                    getStyleImage(style);


                const rarity =
                    getRarityClass(
                        style.rarity
                    );


                return `

                    <a
                        class="style-wiki-card"
                        href="style.html?style=${encodeURIComponent(style.name)}"
                    >

                        <div class="style-wiki-image">

                            ${
                                image
                                    ? `
                                        <img
                                            src="${escapeAttribute(image)}"
                                            alt="${escapeAttribute(style.name)}"
                                            loading="lazy"
                                            onerror="
                                                this.style.display='none';
                                            "
                                        >
                                      `
                                    : `
                                        <div class="image-unavailable">
                                            IMAGE UNAVAILABLE
                                        </div>
                                      `
                            }

                        </div>


                        <div class="style-wiki-info">


                            <div class="style-wiki-top">

                                <span class="
                                    rarity
                                    ${rarity}
                                ">
                                    ${escapeHTML(style.rarity)}
                                </span>


                                ${
                                    style.wip
                                        ? `
                                            <span class="wip-tag">
                                                WIP
                                            </span>
                                          `
                                        : ""
                                }

                            </div>


                            <div class="style-wiki-name">
                                ${escapeHTML(style.name)}
                            </div>


                            ${
                                style.ranked
                                    ? `
                                        <div class="style-wiki-ranked">
                                            ${escapeHTML(style.ranked)}
                                        </div>
                                      `
                                    : ""
                            }


                            <div class="style-wiki-description">

                                ${escapeHTML(
                                    style.description ||
                                    "No description available."
                                )}

                            </div>


                            ${
                                style.baseStyle
                                    ? `
                                        <div style="
                                            margin-top:8px;
                                            color:#85858e;
                                            font-size:9px;
                                        ">
                                            Base:
                                            <strong style="color:#c7c7cc;">
                                                ${escapeHTML(style.baseStyle)}
                                            </strong>
                                        </div>
                                      `
                                    : ""
                            }


                        </div>

                    </a>

                `;

            }).join("");

    }


    /* -----------------------------------------------------
       FILTER BUTTONS
    ----------------------------------------------------- */

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                currentRarity =
                    button.dataset.rarity ||
                    "All";


                renderStyles();

            }
        );

    });


    /* -----------------------------------------------------
       SEARCH
    ----------------------------------------------------- */

    if (styleSearch) {

        styleSearch.addEventListener(
            "input",
            event => {

                currentSearch =
                    event.target.value
                        .trim();


                renderStyles();

            }
        );

    }


    /* -----------------------------------------------------
       URL RARITY FILTER
       Example:
       styles.html?rarity=Legendary
    ----------------------------------------------------- */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const urlRarity =
        params.get("rarity");


    if (urlRarity) {

        const matchingButton =
            [...filterButtons].find(
                button =>
                    String(
                        button.dataset.rarity
                    ).toLowerCase() ===
                    String(
                        urlRarity
                    ).toLowerCase()
            );


        if (matchingButton) {

            filterButtons.forEach(
                button =>
                    button.classList.remove(
                        "active"
                    )
            );


            matchingButton.classList.add(
                "active"
            );


            currentRarity =
                matchingButton.dataset.rarity;

        }

    }


    /* initial render */

    renderStyles();

}


/* =========================================================
   STYLE ARTICLE PAGE
   ========================================================= */

const styleArticle =
    document.getElementById(
        "styleArticle"
    );


if (styleArticle) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const requestedName =
        params.get("style");


    const style =
        styles.find(item =>

            String(item.name)
                .toLowerCase() ===

            String(requestedName || "")
                .toLowerCase()

        );


    if (!style) {

        document.title =
            "Style Not Found — UBG Wiki";


        styleArticle.innerHTML = `

            <div class="breadcrumb">

                <a href="index.html">
                    Home
                </a>

                <span>
                    / Styles / Not Found
                </span>

            </div>


            <div class="wiki-panel">

                <div class="panel-label">

                    <span></span>

                    ERROR

                </div>


                <h1>
                    Style not found
                </h1>


                <p style="
                    margin-top:10px;
                ">

                    The requested style could not
                    be found in the current UBG
                    Wiki database.

                </p>


                <a
                    href="styles.html"
                    class="red-button"
                    style="
                        margin-top:18px;
                    "
                >

                    Return to Styles

                </a>

            </div>

        `;

    } else {

        renderStyleArticle(style);

    }

}


/* =========================================================
   ARTICLE RENDERER
   ========================================================= */

function renderStyleArticle(style) {

    const image =
        getStyleImage(style);


    document.title =
        `${style.name} — UBG Wiki`;


    /* -----------------------------------------------------
       Strengths
    ----------------------------------------------------- */

    let strengthsHTML = "";


    if (Array.isArray(style.strengths)) {

        strengthsHTML =
            style.strengths
                .map(item =>
                    `<li>${escapeHTML(item)}</li>`
                )
                .join("");

    } else if (style.strengths) {

        strengthsHTML =
            `<li>${escapeHTML(
                style.strengths
            )}</li>`;

    }


    /* -----------------------------------------------------
       Weaknesses
    ----------------------------------------------------- */

    let weaknessesHTML = "";


    if (Array.isArray(style.weaknesses)) {

        weaknessesHTML =
            style.weaknesses
                .map(item =>
                    `<li>${escapeHTML(item)}</li>`
                )
                .join("");

    } else if (style.weaknesses) {

        weaknessesHTML =
            `<li>${escapeHTML(
                style.weaknesses
            )}</li>`;

    }


    /* -----------------------------------------------------
       Shiny / base relationship
    ----------------------------------------------------- */

    let variantHTML = "";


    if (style.baseStyle) {

        variantHTML = `

            <div class="infobox-row">

                <span>
                    Base Style
                </span>

                <strong>

                    <a
                        href="style.html?style=${encodeURIComponent(style.baseStyle)}"
                        style="
                            color:#ff4652;
                        "
                    >
                        ${escapeHTML(style.baseStyle)}
                    </a>

                </strong>

            </div>

        `;

    }


    /* -----------------------------------------------------
       Render
    ----------------------------------------------------- */

    styleArticle.innerHTML = `


        <!-- BREADCRUMB -->

        <div class="breadcrumb">

            <a href="index.html">
                Home
            </a>

            <span>
                /
            </span>

            <a href="styles.html">
                Styles
            </a>

            <span>
                /
                ${escapeHTML(style.name)}
            </span>

        </div>



        <!-- ARTICLE HEADER -->

        <section class="style-article-header">

            <div>

                <div class="eyebrow">

                    ${escapeHTML(style.rarity)}

                </div>


                <h1>

                    ${escapeHTML(style.name)}

                </h1>


                ${
                    style.ranked
                        ? `

                            <div class="article-ranked">

                                ${escapeHTML(
                                    style.ranked
                                )}

                            </div>

                          `
                        : ""
                }

            </div>


            ${
                style.wip

                    ? `

                        <div class="
                            article-status
                            wip-status
                        ">

                            WIP / IN DEVELOPMENT

                        </div>

                      `

                    : `

                        <div class="
                            article-status
                        ">

                            <span
                                class="status-dot"
                            ></span>

                            STYLE ARTICLE

                        </div>

                      `
            }

        </section>



        <!-- ARTICLE LAYOUT -->

        <div class="style-article-layout">


            <!-- MAIN ARTICLE -->

            <article>


                <!-- HERO IMAGE -->

                <section class="
                    wiki-panel
                    style-hero-panel
                ">

                    <div class="
                        style-hero-image
                    ">

                        ${
                            image

                                ? `

                                    <img
                                        src="${escapeAttribute(image)}"
                                        alt="${escapeAttribute(style.name)}"
                                    >

                                  `

                                : `

                                    <div
                                        class="
                                            image-unavailable
                                        "
                                    >

                                        IMAGE UNAVAILABLE

                                    </div>

                                  `
                        }

                    </div>

                </section>



                <!-- OVERVIEW -->

                ${
                    style.description

                        ? `

                            <section
                                class="article-section"
                            >

                                <h2>
                                    Overview
                                </h2>


                                <p>

                                    ${escapeHTML(
                                        style.description
                                    )}

                                </p>

                            </section>

                          `

                        : ""
                }



                <!-- BASE INFORMATION -->

                <section class="
                    article-section
                ">

                    <h2>
                        Base Information
                    </h2>


                    <div class="
                        stats-table
                    ">


                        <div>

                            <span>
                                Health
                            </span>

                            <strong>
                                ${escapeHTML(
                                    style.hp || "—"
                                )}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Dash
                            </span>

                            <strong>
                                ${escapeHTML(
                                    style.dash || "—"
                                )}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Range
                            </span>

                            <strong>
                                ${escapeHTML(
                                    style.range || "—"
                                )}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Block
                            </span>

                            <strong>
                                ${escapeHTML(
                                    style.block || "—"
                                )}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Ultimate
                            </span>

                            <strong>
                                ${escapeHTML(
                                    style.ultimate || "—"
                                )}
                            </strong>

                        </div>


                    </div>

                </section>



                <!-- PASSIVE -->

                ${
                    style.passive

                        ? `

                            <section
                                class="article-section"
                            >

                                <h2>
                                    Passive
                                </h2>


                                <div
                                    class="ability-box"
                                >

                                    <strong>
                                        ${escapeHTML(
                                            style.passive
                                        )}
                                    </strong>

                                </div>

                            </section>

                          `

                        : ""
                }



                <!-- ABILITY -->

                ${
                    style.ability

                        ? `

                            <section
                                class="article-section"
                            >

                                <h2>
                                    Ability
                                </h2>


                                <div
                                    class="ability-box"
                                >

                                    <strong>
                                        ${escapeHTML(
                                            style.ability
                                        )}
                                    </strong>

                                </div>

                            </section>

                          `

                        : ""
                }



                <!-- ULTIMATE -->

                ${
                    style.ultimateName

                        ? `

                            <section
                                class="article-section"
                            >

                                <h2>
                                    Ultimate
                                </h2>


                                <div
                                    class="
                                        ability-box
                                        ultimate-box
                                    "
                                >

                                    <strong>
                                        ${escapeHTML(
                                            style.ultimateName
                                        )}
                                    </strong>

                                </div>

                            </section>

                          `

                        : ""
                }



                <!-- STRENGTHS / WEAKNESSES -->

                ${
                    strengthsHTML ||
                    weaknessesHTML

                        ? `

                            <div
                                class="
                                    article-columns
                                "
                            >


                                ${
                                    strengthsHTML

                                        ? `

                                            <section
                                                class="
                                                    article-section
                                                "
                                            >

                                                <h2>
                                                    Strengths
                                                </h2>


                                                <ul
                                                    class="
                                                        article-list
                                                    "
                                                >

                                                    ${strengthsHTML}

                                                </ul>

                                            </section>

                                          `

                                        : ""
                                }


                                ${
                                    weaknessesHTML

                                        ? `

                                            <section
                                                class="
                                                    article-section
                                                "
                                            >

                                                <h2>
                                                    Weaknesses
                                                </h2>


                                                <ul
                                                    class="
                                                        article-list
                                                    "
                                                >

                                                    ${weaknessesHTML}

                                                </ul>

                                            </section>

                                          `

                                        : ""
                                }


                            </div>

                          `

                        : ""
                }



                <!-- OBTAINMENT -->

                ${
                    style.obtain

                        ? `

                            <section
                                class="
                                    article-section
                                "
                            >

                                <h2>
                                    Obtaining the Style
                                </h2>


                                <p>

                                    ${escapeHTML(
                                        style.obtain
                                    )}

                                </p>

                            </section>

                          `

                        : ""
                }



                <!-- WIP NOTICE -->

                ${
                    style.wip

                        ? `

                            <section
                                class="
                                    article-section
                                "
                            >

                                <div
                                    class="
                                        wiki-panel
                                    "
                                    style="
                                        border-color:
                                        rgba(
                                            255,
                                            180,
                                            91,
                                            0.25
                                        );

                                        background:
                                        rgba(
                                            255,
                                            180,
                                            91,
                                            0.04
                                        );
                                    "
                                >

                                    <div
                                        class="
                                            panel-label
                                        "
                                        style="
                                            color:
                                            #ffb45b;
                                        "
                                    >

                                        <span
                                            style="
                                                background:
                                                #ffb45b;
                                            "
                                        ></span>

                                        WIP NOTICE

                                    </div>


                                    <p>

                                        Some information
                                        about this style is
                                        still being developed
                                        for this fan wiki.
                                        Treat incomplete
                                        sections as provisional
                                        until they are updated.

                                    </p>

                                </div>

                            </section>

                          `

                        : ""
                }


            </article>



            <!-- INFOBOX -->

            <aside
                class="style-infobox"
            >


                <div class="
                    infobox-title
                ">

                    ${escapeHTML(
                        style.name
                    )}

                </div>



                <div class="
                    infobox-image
                ">

                    ${
                        image

                            ? `

                                <img
                                    src="${escapeAttribute(image)}"
                                    alt=""
                                >

                              `

                            : ""
                    }

                </div>



                <!-- RARITY -->

                <div class="
                    infobox-row
                ">

                    <span>
                        Rarity
                    </span>


                    <strong>

                        ${escapeHTML(
                            style.rarity
                        )}

                    </strong>

                </div>



                <!-- RANKED -->

                ${
                    style.ranked

                        ? `

                            <div class="
                                infobox-row
                            ">

                                <span>
                                    Ranked
                                </span>


                                <strong>

                                    ${escapeHTML(
                                        style.ranked
                                    )}

                                </strong>

                            </div>

                          `

                        : ""
                }



                <!-- BASE STYLE -->

                ${variantHTML}



                <!-- SHINY -->

                ${
                    style.shiny

                        ? `

                            <div class="
                                infobox-row
                            ">

                                <span>
                                    Shiny
                                </span>


                                <strong>

                                    <a
                                        href="style.html?style=${encodeURIComponent(style.shiny)}"
                                        style="
                                            color:#ffe47a;
                                        "
                                    >

                                        ${escapeHTML(
                                            style.shiny
                                        )}

                                    </a>

                                </strong>

                            </div>

                          `

                        : ""
                }



                <!-- HP -->

                ${
                    style.hp

                        ? `

                            <div class="
                                infobox-row
                            ">

                                <span>
                                    Health
                                </span>


                                <strong>

                                    ${escapeHTML(
                                        style.hp
                                    )}

                                </strong>

                            </div>

                          `

                        : ""
                }



                <!-- DASH -->

                ${
                    style.dash

                        ? `

                            <div class="
                                infobox-row
                            ">

                                <span>
                                    Dash
                                </span>


                                <strong>

                                    ${escapeHTML(
                                        style.dash
                                    )}

                                </strong>

                            </div>

                          `

                        : ""
                }



                <!-- RANGE -->

                ${
                    style.range

                        ? `

                            <div class="
                                infobox-row
                            ">

                                <span>
                                    Range
                                </span>


                                <strong>

                                    ${escapeHTML(
                                        style.range
                                    )}

                                </strong>

                            </div>

                          `

                        : ""
                }



                <!-- BLOCK -->

                ${
                    style.block

                        ? `

                            <div class="
                                infobox-row
                            ">

                                <span>
                                    Block
                                </span>


                                <strong>

                                    ${escapeHTML(
                                        style.block
                                    )}

                                </strong>

                            </div>

                          `

                        : ""
                }



                <!-- OBTAIN -->

                ${
                    style.obtain

                        ? `

                            <div
                                class="
                                    infobox-obtain
                                "
                            >

                                <span>
                                    OBTAIN
                                </span>


                                <p>

                                    ${escapeHTML(
                                        style.obtain
                                    )}

                                </p>

                            </div>

                          `

                        : ""
                }


            </aside>


        </div>

    `;

}


/* =========================================================
   END OF STYLES.JS
   ========================================================= */

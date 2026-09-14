const styles = [

    // =========================
    // UNCOMMON
    // =========================

    {
        name: "Basic",
        rarity: "Uncommon",
        ranked: "BASIC",
        shiny: "Bald",
        hp: "100",
        dash: "Average",
        range: "Good",
        block: "Good",
        ultimate: "50%",
        trail: "White",

        passive: "None",

        ability: "None",

        ultimateName: "Full Force Uppercut",

        description:
            "A straightforward all-rounder with no true exploitable weaknesses. Basic is designed to be beginner-friendly while still remaining viable.",

        strengths:
            "Balanced stats, reliable attacks, and simple fundamentals.",

        weaknesses:
            "Does not specialize heavily in any particular area.",

        animation:
            "Basic_Idle.gif"
    },


    {
        name: "Smash",
        rarity: "Uncommon",
        ranked: "SENDO",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Red",

        passive: "None",

        ability: "None",

        ultimateName: "Smash Punch Finisher",

        description:
            "A versatile infighter centered around powerful individual attacks and excellent block damage.",

        strengths:
            "Excellent heavy punch damage and strong block damage.",

        weaknesses:
            "Slow attacks and weaker mobility make it easier to avoid outside of Perfect Dodges.",

        animation:
            "Smash_Idle.gif"
    },


    {
        name: "Long Guard",
        rarity: "Uncommon",
        ranked: "LONGGUARD",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Great",
        block: "Good",
        ultimate: "50%",
        trail: "Light-Blue",

        passive: "Whiff Counter",

        ability: "None",

        ultimateName: "1-1-2",

        description:
            "An outboxer built around increased range and speed. Long Guard is the only style with whiff counters.",

        strengths:
            "Excellent range, strong whiff punishment, and safer neutral play.",

        weaknesses:
            "Lower light and block damage and more expensive dashes.",

        animation:
            "Long_Guard_Idle.gif"
    },


    {
        name: "Counter",
        rarity: "Uncommon",
        ranked: "MIYATA",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Pink / Purple",

        passive: "Counter Bonus",

        ability: "None",

        ultimateName: "Jolt Blow",

        description:
            "An archetypical counterpunching style built around high-risk, high-reward counter attacks.",

        strengths:
            "Excellent counter damage and strong stamina.",

        weaknesses:
            "Poor base damage and weak block damage.",

        animation:
            "Counter_Idle.gif"
    },


    {
        name: "Turtle",
        rarity: "Uncommon",
        ranked: "NANOMACHINES",
        shiny: "Nanomachines",
        hp: "100",
        dash: "Awful",
        range: "Average",
        block: "Fantastic",
        ultimate: "45%",
        trail: "Light-Green",

        passive: "Turtle Block",

        ability: "None",

        ultimateName: "One Centimetre Punch",

        description:
            "A defensive style with one of the strongest blocks in the game.",

        strengths:
            "Fantastic block strength and permanent block regeneration.",

        weaknesses:
            "Extremely poor dash mobility and short dash distance.",

        animation:
            "Turtle_Idle.gif"
    },


    // =========================
    // RARE
    // =========================

    {
        name: "Corkscrew",
        rarity: "Rare",
        ranked: "DATE",
        shiny: "Drill",
        hp: "100",
        dash: "Good",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Indigo",

        passive: "Faster Health and Block Regeneration",

        ability: "Corkscrew",

        ultimateName: "Heartbreak Shot",

        description:
            "A pressure-oriented style with strong raw attacks and improved regeneration.",

        strengths:
            "Good damage, stamina, and regeneration.",

        weaknesses:
            "Slow Corkscrew windup and significant endlag.",

        animation:
            "Corkscrew_Idle.gif"
    },


    {
        name: "Charge",
        rarity: "Rare",
        ranked: "CHARGE",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Orange",

        passive: "Cannot Backdash",

        ability: "Stampede",

        ultimateName: "Raging Bull",

        description:
            "A pressure style that builds its ability by landing punches before unleashing Stampede.",

        strengths:
            "Strong body blows, long dash distance, and powerful pressure.",

        weaknesses:
            "Cannot backdash and has a steep side-dash angle.",

        animation:
            "Charge_Idle.gif"
    },


    {
        name: "Hammer",
        rarity: "Rare",
        ranked: "HAMMER",
        shiny: "None",
        hp: "100",
        dash: "Mediocre",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Greenish-Yellow",

        passive: "None",

        ability: "Body Blow",

        ultimateName: "Guard Crusher",

        description:
            "A pressure-oriented style whose Body Blow can drain stamina and break guard.",

        strengths:
            "Strong block pressure and stamina control.",

        weaknesses:
            "Mediocre mobility and short dash distance.",

        animation:
            "Hammer_Idle.gif"
    },


    {
        name: "Trickster",
        rarity: "Rare",
        ranked: "AOKI",
        shiny: "Conman",
        hp: "100",
        dash: "Fantastic",
        range: "Average",
        block: "Mediocre",
        ultimate: "55%",
        trail: "Green",

        passive: "Unique Dash and Heavy SFX",

        ability: "Double Dasher",

        ultimateName: "Look-Away Frog Punch",

        description:
            "A highly mobile style centered around deceptive movement and unusual dash mechanics.",

        strengths:
            "Fantastic mobility, wide side dashes, and strong stamina.",

        weaknesses:
            "Poor block strength and slower attacks.",

        animation:
            "Trickster_Idle.gif"
    },


    {
        name: "Dragonfish",
        rarity: "Rare",
        ranked: "DRAGONFISH",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Below Average",
        ultimate: "50%",
        trail: "Teal",

        passive: "Submerge",

        ability: "Dragonfish Blow",

        ultimateName: "WIP",

        description:
            "A reworked style originating from Kimura. Submerge builds a meter that weakens the opponent's block and retreating ability.",

        strengths:
            "Well-rounded attacks with a powerful meter-based heavy attack.",

        weaknesses:
            "Some mechanics and counterplay remain WIP.",

        animation:
            "Kimura_Idle.gif",

        wip: true
    },


    // =========================
    // MYTHIC
    // =========================

    {
        name: "Dempsey",
        rarity: "Mythic",
        ranked: "IPPO",
        shiny: "None",
        hp: "100",
        dash: "Good",
        range: "Average",
        block: "Average",
        ultimate: "55%",
        trail: "Gold",

        passive: "Cannot Backdash",

        ability: "Dempsey Roll",

        ultimateName: "Tiger Crusher",

        description:
            "A relentless pressure style based around the Dempsey Roll and weaving movement.",

        strengths:
            "Excellent mobility, strong pressure, and huge charged Roll damage.",

        weaknesses:
            "Cannot block while rolling and can be punished during predictable movement.",

        animation:
            "Ippo_Idle.gif"
    },


    {
        name: "Hitman",
        rarity: "Mythic",
        ranked: "HITMAN",
        shiny: "None",
        hp: "100",
        dash: "Poor",
        range: "Fantastic",
        block: "Weak",
        ultimate: "55%",
        trail: "Purple",

        passive: "Disjointed Attacks",

        ability: "None",

        ultimateName: "Nightmare Barrage",

        description:
            "A long-range style focused heavily on disjointed attacks and exceptional range.",

        strengths:
            "Fantastic range and fast light attacks.",

        weaknesses:
            "Poor mobility and weak blocking.",

        animation:
            "Hitman_Idle.gif"
    },


    {
        name: "Hands Low",
        rarity: "Mythic",
        ranked: "SAEKI",
        shiny: "None",
        hp: "100",
        dash: "Great",
        range: "Average",
        block: "Mediocre",
        ultimate: "45%",
        trail: "Pink / Purple",

        passive: "Faster Ultimate Charge + Blindness",

        ability: "Double Dasher",

        ultimateName: "Blinding Rush",

        description:
            "A highly mobile counter-oriented style whose ultimate applies Blindness.",

        strengths:
            "Great mobility, fast attacks, and faster ultimate charging.",

        weaknesses:
            "Poor light damage and increased counter damage intake.",

        animation:
            "Hands_Low_Idle.gif"
    },


    {
        name: "Wolf",
        rarity: "Mythic",
        ranked: "VOLG",
        shiny: "Coyote",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Bluish-White",

        passive: "White Fang",

        ability: "Fang Storage",

        ultimateName: "WIP",

        description:
            "A two-hit heavy style that can store its Overhand after an Uppercut.",

        strengths:
            "Excellent combined heavy speed and damage.",

        weaknesses:
            "Individual heavy attacks are weak without their combination.",

        animation:
            "Wolf_Idle.gif"
    },


    {
        name: "Bullet",
        rarity: "Mythic",
        ranked: "BULLET",
        shiny: "None",
        hp: "100",
        dash: "Poor",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Red",

        passive: "Bullet Jab",

        ability: "Thunderbolt",

        ultimateName: "Cheating Combo",

        description:
            "A counter-focused style with a near-instant Light attack after an opponent dashes.",

        strengths:
            "Extremely powerful counter Heavy and strong stamina.",

        weaknesses:
            "Poor mobility and significant counter damage intake.",

        animation:
            "Bullet_Idle.gif"
    },


    {
        name: "Switch Hit",
        rarity: "Mythic",
        ranked: "SWITCHHIT",
        shiny: "None",
        hp: "100",
        dash: "Poor",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Dark Purple",

        passive: "Ambidextrous",

        ability: "Static",

        ultimateName: "WIP",

        description:
            "A stance-switching style that changes attack directions depending on lateral movement.",

        strengths:
            "Flexible attack directions and Static's ability to interrupt Perfect Dodges.",

        weaknesses:
            "Poor mobility and mediocre blocking.",

        animation:
            "Switch_Hit_Idle.gif"
    },


    {
        name: "Surgeon",
        rarity: "Mythic",
        ranked: "SURGEON",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "40%",
        trail: "White / Feathers",

        passive: "Pinpoint",

        ability: "Pinpoint",

        ultimateName: "Sedated",

        description:
            "A technical style that targets the Head, Chest, and Liver to stack different debuffs.",

        strengths:
            "Strong debuff management and targeted pressure.",

        weaknesses:
            "Requires careful management of Pinpoint modes.",

        animation:
            "Surgeon_meters.png"
    },


    // =========================
    // LEGENDARY
    // =========================

    {
        name: "Slugger",
        rarity: "Legendary",
        ranked: "TAKAMURA",
        shiny: "None",
        hp: "100",
        dash: "Mediocre",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Red / Black",

        passive: "Charged Heavy",

        ability: "Heavy Charge",

        ultimateName: "Rage",

        description:
            "A devastating power style built around charging Heavy attacks.",

        strengths:
            "Fantastic damage and powerful charged attacks.",

        weaknesses:
            "Slow attacks, weak block, and mediocre mobility.",

        animation:
            "Slugger_Idle.gif"
    },


    {
        name: "Hawk",
        rarity: "Legendary",
        ranked: "HAWK",
        shiny: "None",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Red / Black",

        passive: "Rage Meter + Swayback",

        ability: "Swayback",

        ultimateName: "WIP",

        description:
            "A style built around Rage, Swayback, and multiple increasingly powerful modes.",

        strengths:
            "Strong movement and powerful Rage-based pressure.",

        weaknesses:
            "Weak blocking and reliance on Rage management.",

        animation:
            "Hawk_Idle.gif"
    },


    {
        name: "Ghost",
        rarity: "Legendary",
        ranked: "GHOST",
        shiny: "None",
        hp: "100",
        dash: "Mediocre",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Gold / None",

        passive: "Dim Highlights",

        ability: "Ghost Jab",

        ultimateName: "WIP",

        description:
            "A fast, deceptive style built around Ghost Jab and powerful speed.",

        strengths:
            "Great Light speed and long dash distance.",

        weaknesses:
            "Weak block and Ghost Jab can punish its user when missed or blocked.",

        animation:
            "Ghost_Idle.gif"
    },


    {
        name: "Iron Fist",
        rarity: "Legendary",
        ranked: "IRONFIST",
        shiny: "None",
        hp: "100",
        dash: "Poor",
        range: "Average",
        block: "Good",
        ultimate: "75%",
        trail: "White",

        passive: "Heavy Self-Damage",

        ability: "Iron Heavy",

        ultimateName: "No Ribs Survived",

        description:
            "A high-risk power style with enormous Heavy damage at the cost of damaging its own user.",

        strengths:
            "Fantastic Heavy damage and the highest ultimate charge requirement.",

        weaknesses:
            "Very slow attacks, poor stamina, poor dashes, and self-damage.",

        animation:
            "Iron_Fist_Idle.gif"
    },


    {
        name: "Shotgun",
        rarity: "Legendary",
        ranked: "SHOTGUN",
        shiny: "None",
        hp: "100",
        dash: "Good",
        range: "Average",
        block: "Mediocre",
        ultimate: "45–55%",
        trail: "Magenta",

        passive: "Rhythm Hell",

        ability: "Speed-O-Meter",

        ultimateName: "FNF Rhythm",

        description:
            "A rhythm-focused style with two modes: Barrage and Prodigy.",

        strengths:
            "Great speed and stamina with powerful Barrage pressure.",

        weaknesses:
            "Self-damage, rhythm requirements, and significant counter intake.",

        animation:
            "Shotgun_Idles.gif"
    },


    {
        name: "Freedom",
        rarity: "Legendary",
        ranked: "FREEDOM",
        shiny: "None",
        hp: "80 × 3 Stocks",
        dash: "Fantastic",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Variable",

        passive: "Whirlwind Swayback",

        ability: "Style Switching",

        ultimateName: "WIP",

        description:
            "A three-stock style capable of switching between Whirlwind, Flicker, and Smash.",

        strengths:
            "Extremely flexible movement and three distinct modes.",

        weaknesses:
            "Each mode has different weaknesses and Freedom requires active switching.",

        animation:
            "Freedom_Idles.gif"
    },


    {
        name: "Chronos",
        rarity: "Legendary",
        ranked: "CHRONOS",
        shiny: "Godspeed",
        hp: "90",
        dash: "Great",
        range: "Average",
        block: "Mediocre",
        ultimate: "45–50%",
        trail: "Gold",

        passive: "Focus",

        ability: "Time Focus",

        ultimateName: "WIP",

        description:
            "A time-manipulation style that uses Focus to increase movement and offensive pressure while weakening the opponent.",

        strengths:
            "Exceptional Focus movement and powerful time-based pressure.",

        weaknesses:
            "Focus drains over time and can be cancelled by taking damage or being knocked down.",

        animation:
            "Chronos_Idle.gif"
    },


    {
        name: "White Ash",
        rarity: "Legendary",
        ranked: "JOE",
        shiny: "None",
        hp: "70 × 4 Stocks",
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "30% / 10%",
        trail: "Light Blue",

        passive: "Burn",

        ability: "Cross Counter",

        ultimateName: "Cross Counter",

        description:
            "A four-stock style that grows stronger through Burn while its health deteriorates.",

        strengths:
            "Large total health pool, strong Burn buffs, and powerful counterplay.",

        weaknesses:
            "Cannot normally block or backdash during Burn and continuously loses HP.",

        animation:
            "White_Ash_Idle.gif"
    },


    {
        name: "Supernova",
        rarity: "Legendary",
        ranked: "SUPERNOVA",
        shiny: "None",
        hp: "100",
        dash: "Great",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Teal",

        passive: "CTE",

        ability: "Starstruck",

        ultimateName: "WIP",

        description:
            "A newer style centered around Starstruck, Comet, and Eject/Re-entry mechanics.",

        strengths:
            "Strong movement and meter-based mechanics.",

        weaknesses:
            "Several mechanics remain WIP.",

        animation:
            "Supernova_Idle.gif",

        wip: true
    },


    {
        name: "Deimos",
        rarity: "Legendary",
        ranked: "MONSTROSITY",
        shiny: "None",
        hp: "90",
        dash: "WIP",
        range: "WIP",
        block: "WIP",
        ultimate: "35% / 65%",
        trail: "Red / Black",

        passive: "Bleed",

        ability: "Terror",

        ultimateName: "Pinnacle of Violence",

        description:
            "A WIP horror-themed style based around Bleed stacks, Terror, and the Monstrosity transformation.",

        strengths:
            "WIP.",

        weaknesses:
            "WIP.",

        animation:
            "Deimos_Idle.gif",

        wip: true
    },


    // =========================
    // SHINY
    // =========================

    {
        name: "Godspeed",
        rarity: "Shiny",
        ranked: "GODSPEEDSHINY",
        baseStyle: "Chronos",
        hp: "90",
        dash: "Great",
        range: "Average",
        block: "Mediocre",
        ultimate: "45–50%",
        trail: "Dark Blue / White",

        passive: "Chronos Focus",

        ability: "Godspeed",

        ultimateName: "WIP",

        description:
            "Chronos's Shiny variant, inspired by Killua Zoldyck from Hunter × Hunter.",

        strengths:
            "Retains Chronos's Focus mechanics with a distinctive Godspeed visual identity.",

        weaknesses:
            "Godspeed mechanics are WIP.",

        obtain:
            "1 in 666,700 / Guaranteed Legendary Shards",

        animation:
            "Chronos_Idle.gif",

        wip: true
    },


    {
        name: "Bald",
        rarity: "Shiny",
        ranked: "BALDSHINY",
        baseStyle: "Basic",
        hp: "100",
        dash: "Average",
        range: "Good",
        block: "Good",
        ultimate: "50%",
        trail: "White",

        passive: "Basic",

        ability: "None",

        ultimateName: "Death Punch",

        description:
            "Basic's Shiny variant inspired by Saitama from One Punch Man.",

        strengths:
            "Retains Basic's reliable all-rounder design.",

        weaknesses:
            "Retains Basic's lack of specialization.",

        obtain:
            "Unspinnable / 1 in 2 Uncommon Shards",

        animation:
            "Basic_Idle.gif"
    },


    {
        name: "Coyote",
        rarity: "Shiny",
        ranked: "COYOTESHINY",
        baseStyle: "Wolf",
        hp: "100",
        dash: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Bluish-White",

        passive: "White Fang",

        ability: "Fang Storage",

        ultimateName: "Cero Metralleta",

        description:
            "Wolf's Shiny variant based on Coyote Starrk from Bleach.",

        strengths:
            "Retains Wolf's powerful two-hit Heavy system.",

        weaknesses:
            "Retains Wolf's reliance on combining its Heavy attacks.",

        obtain:
            "Unspinnable / Guaranteed Mythic Shards",

        animation:
            "Wolf_Idle.gif"
    },


    {
        name: "Drill",
        rarity: "Shiny",
        ranked: "DRILLSHINY",
        baseStyle: "Corkscrew",
        hp: "100",
        dash: "Good",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Pink",

        passive: "Faster Health and Block Regeneration",

        ability: "Corkscrew",

        ultimateName: "Can You Believe It?",

        description:
            "Corkscrew's Shiny variant based on Kasane Teto.",

        strengths:
            "Retains Corkscrew's strong raw attacks and regeneration.",

        weaknesses:
            "Retains Corkscrew's windup and endlag.",

        obtain:
            "1 in 24,700 / Rare Shards",

        animation:
            "Corkscrew_Idle.gif"
    },


    {
        name: "Nanomachines",
        rarity: "Shiny",
        ranked: "NANOMACHINES",
        baseStyle: "Turtle",
        hp: "100",
        dash: "Awful",
        range: "Average",
        block: "Fantastic",
        ultimate: "45%",
        trail: "Red / Black",

        passive: "Turtle Block",

        ability: "None",

        ultimateName: "Nanomachines, Son",

        description:
            "Turtle's Shiny variant based on Senator Steven Armstrong from Metal Gear Rising: Revengeance.",

        strengths:
            "Retains Turtle's exceptional defensive capabilities.",

        weaknesses:
            "Retains Turtle's extremely poor mobility.",

        obtain:
            "1 in 10,600 / 1 in 2 Uncommon Shards",

        animation:
            "Turtle_Idle.gif"
    }

];


// =====================================================
// ELEMENTS
// =====================================================

const grid = document.getElementById("styleGrid");
const searchInput = document.getElementById("styleSearch");
const countDisplay = document.getElementById("styleCount");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("styleModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

let currentRarity = "all";


// =====================================================
// RARITY HELPERS
// =====================================================

function rarityClass(rarity) {
    return rarity.toLowerCase();
}


// =====================================================
// RENDER STYLES
// =====================================================

function renderStyles() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();

    const filteredStyles = styles.filter(style => {

        const rarityMatch =
            currentRarity === "all" ||
            style.rarity === currentRarity;

        const searchMatch =
            style.name.toLowerCase().includes(searchTerm) ||
            style.ranked.toLowerCase().includes(searchTerm) ||
            (style.baseStyle &&
                style.baseStyle.toLowerCase().includes(searchTerm));

        return rarityMatch && searchMatch;
    });


    grid.innerHTML = "";

    countDisplay.textContent =
        filteredStyles.length;


    if (filteredStyles.length === 0) {

        noResults.classList.remove("hidden");

        return;
    }

    noResults.classList.add("hidden");


    filteredStyles.forEach(style => {

        const card = document.createElement("article");

        card.className =
            `style-card rarity-${rarityClass(style.rarity)}`;

        card.innerHTML = `

            <div class="style-card-top">

                <span class="style-rarity">
                    ${style.rarity}
                </span>

                ${
                    style.wip
                        ? `<span class="wip-badge">WIP</span>`
                        : ""
                }

            </div>


            <div class="style-visual">

                <div class="style-glow"></div>

                <div class="style-placeholder">

                    <span>
                        ${style.name
                            .substring(0, 1)
                            .toUpperCase()}
                    </span>

                </div>

            </div>


            <div class="style-card-body">

                <h2>
                    ${style.name}
                </h2>

                <div class="ranked-name">
                    ${style.ranked}
                </div>

                ${
                    style.baseStyle
                        ? `
                            <div class="base-style">
                                BASE: ${style.baseStyle}
                            </div>
                          `
                        : ""
                }


                <div class="mini-stats">

                    <div>
                        <small>HP</small>
                        <strong>${style.hp}</strong>
                    </div>

                    <div>
                        <small>DASH</small>
                        <strong>${style.dash}</strong>
                    </div>

                    <div>
                        <small>RANGE</small>
                        <strong>${style.range}</strong>
                    </div>

                    <div>
                        <small>BLOCK</small>
                        <strong>${style.block}</strong>
                    </div>

                </div>


                <button class="view-style">
                    VIEW STYLE
                </button>

            </div>
        `;


        card
            .querySelector(".view-style")
            .addEventListener("click", () => {

                openStyle(style);

            });


        grid.appendChild(card);

    });

}


// =====================================================
// OPEN MODAL
// =====================================================

function openStyle(style) {

    modalContent.innerHTML = `

        <div class="modal-header">

            <div>

                <span class="modal-rarity rarity-${rarityClass(style.rarity)}">
                    ${style.rarity}
                </span>

                <h1>
                    ${style.name}
                </h1>

                <p class="modal-ranked">
                    ${style.ranked}
                </p>

            </div>

            ${
                style.baseStyle
                    ? `
                        <div class="modal-base">
                            BASE STYLE
                            <strong>${style.baseStyle}</strong>
                        </div>
                      `
                    : ""
            }

        </div>


        ${
            style.wip
                ? `
                    <div class="modal-wip">
                        ⚠ THIS STYLE CONTAINS WIP INFORMATION
                    </div>
                  `
                : ""
        }


        <div class="modal-layout">


            <div class="modal-visual">

                <div class="modal-style-symbol">
                    ${style.name.substring(0, 1)}
                </div>

                <div class="modal-trail">
                    TRAIL
                    <strong>${style.trail}</strong>
                </div>

            </div>


            <div class="modal-information">


                <section>

                    <h3>
                        OVERVIEW
                    </h3>

                    <p>
                        ${style.description}
                    </p>

                </section>


                <section>

                    <h3>
                        CORE STATS
                    </h3>

                    <div class="stat-grid">

                        <div class="stat-box">
                            <small>HEALTH</small>
                            <strong>${style.hp}</strong>
                        </div>

                        <div class="stat-box">
                            <small>DASH</small>
                            <strong>${style.dash}</strong>
                        </div>

                        <div class="stat-box">
                            <small>RANGE</small>
                            <strong>${style.range}</strong>
                        </div>

                        <div class="stat-box">
                            <small>BLOCK</small>
                            <strong>${style.block}</strong>
                        </div>

                        <div class="stat-box">
                            <small>ULTIMATE</small>
                            <strong>${style.ultimate}</strong>
                        </div>

                    </div>

                </section>


                <section>

                    <h3>
                        PASSIVE
                    </h3>

                    <p>
                        ${style.passive}
                    </p>

                </section>


                <section>

                    <h3>
                        ABILITY
                    </h3>

                    <p>
                        ${style.ability}
                    </p>

                </section>


                <section>

                    <h3>
                        ULTIMATE
                    </h3>

                    <p>
                        <strong>
                            ${style.ultimateName}
                        </strong>
                    </p>

                </section>


                <div class="strength-weakness">

                    <div>

                        <h3>
                            STRENGTHS
                        </h3>

                        <p>
                            ${style.strengths}
                        </p>

                    </div>


                    <div>

                        <h3>
                            WEAKNESSES
                        </h3>

                        <p>
                            ${style.weaknesses}
                        </p>

                    </div>

                </div>


                ${
                    style.obtain
                        ? `
                            <section>

                                <h3>
                                    OBTAINMENT
                                </h3>

                                <p>
                                    ${style.obtain}
                                </p>

                            </section>
                          `
                        : ""
                }

            </div>

        </div>

    `;

    modal.classList.add("open");

    document.body.classList.add("modal-open");
}


// =====================================================
// CLOSE MODAL
// =====================================================

function closeStyleModal() {

    modal.classList.remove("open");

    document.body.classList.remove("modal-open");

}


closeModal.addEventListener(
    "click",
    closeStyleModal
);


document
    .querySelector(".style-modal-overlay")
    .addEventListener(
        "click",
        closeStyleModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeStyleModal();

        }

    }
);


// =====================================================
// FILTERS
// =====================================================

document
    .querySelectorAll(".rarity-filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".rarity-filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentRarity =
                    button.dataset.rarity;

                renderStyles();

            }
        );

    });


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
    "input",
    renderStyles
);


// =====================================================
// INITIAL RENDER
// =====================================================

renderStyles();

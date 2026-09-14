/* =========================================================
   UBG COMPANION — STYLE DATABASE
   ========================================================= */

const styles = [

    /* =========================
       UNCOMMON
    ========================= */

    {
        id: "basic",
        name: "Basic",
        rarity: "Uncommon",
        ranked: "BASIC",
        shiny: "Bald",
        hp: "100",
        dashes: "Average",
        range: "Good",
        block: "Good",
        ultimate: "50%",
        trail: "White",

        description:
            "A straightforward all-rounder with no true exploitable weaknesses. Basic is beginner-friendly while still remaining useful in experienced hands.",

        archetype: "All-Rounder",

        passive: "None",

        ability: "None",

        ultimateName: "Full Force Uppercut",

        light:
            "Left → Right. Good damage, average speed and stamina.",

        heavy:
            "Always Right. Average damage, speed and stamina.",

        dash:
            "Average endlag, long distance and moderate side dash.",

        notes:
            "One of the most straightforward styles in UBG."
    },


    {
        id: "smash",
        name: "Smash",
        rarity: "Uncommon",
        ranked: "SENDO",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Red",

        description:
            "A versatile infighter built around powerful individual attacks and heavy block damage.",

        archetype: "Infighter",

        passive: "None",

        ability: "None",

        ultimateName: "Smash Punch Finisher",

        light:
            "Left → Right. Good damage with average speed and stamina.",

        heavy:
            "Always Left. Great damage, slow speed and mediocre stamina.",

        dash:
            "Slightly long endlag, long distance and steep side dash.",

        notes:
            "Smash has the strongest single-attack block damage among the documented uncommon styles, but its slower movement and attacks can make it easier to avoid."
    },


    {
        id: "long-guard",
        name: "Long Guard",
        rarity: "Uncommon",
        ranked: "LONGGUARD",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Great",
        block: "Good",
        ultimate: "50%",
        trail: "Light Blue",

        description:
            "An outboxer with increased range and access to whiff counters.",

        archetype: "Outboxer",

        passive: "Whiff Counter",

        ability: "Whiff Counter",

        ultimateName: "1-1-2",

        light:
            "Left → Right. Mediocre damage, good speed and average-plus stamina.",

        heavy:
            "Left → Right. Good damage with average speed and stamina.",

        dash:
            "Short endlag, average distance and wide side dash.",

        notes:
            "The only documented style with whiff counters. It sacrifices damage and block pressure for range and safety."
    },


    {
        id: "counter",
        name: "Counter",
        rarity: "Uncommon",
        ranked: "MIYATA",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Pink / Purple",

        description:
            "The archetypical counterpuncher. Its attacks become significantly more threatening when used as counters.",

        archetype: "Counterpuncher",

        passive: "Counter Damage Bonus",

        ability: "None",

        ultimateName: "Jolt Blow",

        light:
            "Left → Right. Poor base damage, great speed and great stamina. Great on Counter.",

        heavy:
            "Always Right. Mediocre base damage, good speed and great stamina. Fantastic on Counter.",

        dash:
            "Short endlag, average distance and wide side dash.",

        notes:
            "A high-risk, high-reward style that rewards reading the opponent."
    },


    {
        id: "turtle",
        name: "Turtle",
        rarity: "Uncommon",
        ranked: "—",
        shiny: "Nanomachines",
        hp: "100",
        dashes: "Awful",
        range: "Average",
        block: "Fantastic",
        ultimate: "45%",
        trail: "Light Green",

        description:
            "A defensive style built around an unusually strong block and persistent block regeneration.",

        archetype: "Defensive",

        passive: "Turtle Block",

        ability: "None",

        ultimateName: "One Centimetre Punch",

        light:
            "Left → Right. Mediocre damage, average speed and stamina.",

        heavy:
            "Always Right. Mediocre damage, average speed and stamina.",

        dash:
            "Very long endlag, very short distance and moderate side dash.",

        notes:
            "Turtle's block regeneration is slower, but it never completely stops regenerating."
    },


    /* =========================
       RARE
    ========================= */

    {
        id: "corkscrew",
        name: "Corkscrew",
        rarity: "Rare",
        ranked: "DATE",
        shiny: "Drill",
        hp: "100",
        dashes: "Good",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Indigo",

        description:
            "A style with strong regeneration and a powerful Corkscrew heavy attack.",

        archetype: "Pressure",

        passive: "Faster health and block regeneration",

        ability: "Corkscrew",

        ultimateName: "Heartbreak Shot",

        light:
            "Left → Right. Good damage, average speed and great stamina.",

        heavy:
            "Always Right. Good damage, mediocre speed and average stamina.",

        dash:
            "Short endlag, long distance and steep side dash.",

        notes:
            "The Corkscrew has a slow windup and significant endlag, but strong raw damage."
    },


    {
        id: "charge",
        name: "Charge",
        rarity: "Rare",
        ranked: "CHARGE",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Orange",

        description:
            "A forward-pressure style that builds charge through landed punches.",

        archetype: "Pressure",

        passive: "Cannot Backdash",

        ability: "Stampede",

        ultimateName: "Raging Bull",

        light:
            "Left → Right. Average-plus damage, average speed and great stamina.",

        heavy:
            "Always Left. Average-plus damage, average speed and stamina.",

        dash:
            "Average endlag, long distance and steep side dash.",

        notes:
            "Stampede has strong range and knockback. A blocked Stampede stuns the opponent."
    },


    {
        id: "hammer",
        name: "Hammer",
        rarity: "Rare",
        ranked: "HAMMER",
        shiny: "—",
        hp: "100",
        dashes: "Mediocre",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Greenish Yellow",

        description:
            "A pressure-oriented style that uses Body Blow to drain stamina and break guards.",

        archetype: "Infighter",

        passive: "None",

        ability: "Body Blow",

        ultimateName: "Guard Crusher",

        light:
            "Left → Right. Good damage, average speed and stamina.",

        heavy:
            "Always Right. Average damage, mediocre speed and average stamina.",

        dash:
            "Slightly long endlag, short distance and wide side dash.",

        notes:
            "Body Blow charges by landing or blocking punches and can break the opponent's guard."
    },


    {
        id: "trickster",
        name: "Trickster",
        rarity: "Rare",
        ranked: "AOKI",
        shiny: "Conman",
        hp: "100",
        dashes: "Fantastic",
        range: "Average",
        block: "Mediocre",
        ultimate: "55%",
        trail: "Green",

        description:
            "A highly mobile style centered around unusual movement and a unique double dash.",

        archetype: "Trickster",

        passive: "Unique dash and heavy sound effects",

        ability: "Double Dasher",

        ultimateName: "Look-Away Frog Punch",

        light:
            "Left → Right. Good damage, mediocre speed and average stamina.",

        heavy:
            "Always Right mechanically. Good damage, mediocre speed and good stamina.",

        dash:
            "Double Dasher. No traditional endlag, mediocre distance and wide side dash.",

        notes:
            "The visual animation of the heavy can show both hands despite the mechanical direction."
    },


    {
        id: "dragonfish",
        name: "Dragonfish",
        rarity: "Rare",
        ranked: "DRAGONFISH",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Below Average",
        ultimate: "50%",
        trail: "Teal",

        description:
            "A WIP style based on the reworked Kimura. Dragonfish builds a meter that can weaken an opponent's defensive movement.",

        archetype: "WIP",

        passive: "Submerge",

        ability: "Dragonfish Blow",

        ultimateName: "Unknown",

        light:
            "Left → Right. Average damage, speed and stamina.",

        heavy:
            "Always Right. Average damage, speed and stamina.",

        dash:
            "Short endlag, long distance and moderate side dash.",

        notes:
            "WIP. Dragonfish Blow requires the meter to reach the required threshold. Strategy and counterplay remain WIP."
    },


    /* =========================
       MYTHIC
    ========================= */

    {
        id: "dempsey",
        name: "Dempsey",
        rarity: "Mythic",
        ranked: "IPPO",
        shiny: "—",
        hp: "100",
        dashes: "Good",
        range: "Average",
        block: "Average",
        ultimate: "55%",
        trail: "Gold",

        description:
            "A pressure-heavy style inspired by Ippo and centered around the Dempsey Roll.",

        archetype: "Pressure",

        passive: "No Backdash",

        ability: "Dempsey Roll",

        ultimateName: "Tiger Crusher",

        light:
            "Left → Right → Right. Good damage with average speed and stamina.",

        heavy:
            "Left → Right. Average damage.",

        dash:
            "Short endlag, long distance and steep side dash.",

        notes:
            "The Dempsey Roll charges through landed punches. It can provide powerful movement and attack options, but cannot block while revving."
    },


    {
        id: "hitman",
        name: "Hitman",
        rarity: "Mythic",
        ranked: "HITMAN",
        shiny: "—",
        hp: "100",
        dashes: "Poor",
        range: "Fantastic",
        block: "Weak",
        ultimate: "55%",
        trail: "Purple",

        description:
            "A long-range style built around extreme reach and disjointed attacks.",

        archetype: "Outboxer",

        passive: "None",

        ability: "None",

        ultimateName: "Nightmare Barrage",

        light:
            "Always Left. Good damage, great speed and good stamina.",

        heavy:
            "Always Right. Average damage, speed and stamina.",

        dash:
            "Slightly long endlag, very short distance and wide side dash.",

        notes:
            "Hitman compensates for poor movement with exceptional range."
    },


    {
        id: "hands-low",
        name: "Hands Low",
        rarity: "Mythic",
        ranked: "SAEKI",
        shiny: "—",
        hp: "100",
        dashes: "Great",
        range: "Average",
        block: "Mediocre",
        ultimate: "45%",
        trail: "Pink / Purple",

        description:
            "A highly mobile counter-focused style with faster ultimate generation.",

        archetype: "Counterpuncher",

        passive: "Faster Ultimate Charge",

        ability: "Blindness",

        ultimateName: "Blinding Rush",

        light:
            "Left → Right. Poor damage, great speed and good stamina.",

        heavy:
            "Left → Right. Average damage, good speed and average stamina.",

        dash:
            "Double Dasher. Mediocre distance and wide side dash.",

        notes:
            "The ultimate applies Blindness for 10 seconds and covers the right side of the opponent's screen."
    },


    {
        id: "wolf",
        name: "Wolf",
        rarity: "Mythic",
        ranked: "VOLG",
        shiny: "Coyote",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Bluish White",

        description:
            "A style built around the White Fang, allowing the Heavy sequence to combine two powerful attacks.",

        archetype: "Combo",

        passive: "White Fang",

        ability: "Fang Storage",

        ultimateName: "True White Fang",

        light:
            "Left → Right. Average damage, good speed and average stamina.",

        heavy:
            "Uppercut always Left, Overhand always Right. Together they deal great damage.",

        dash:
            "Average endlag, long distance and steep side dash.",

        notes:
            "Fang Storage can queue the Overhand at the end of a blockstring after an Uppercut."
    },


    {
        id: "bullet",
        name: "Bullet",
        rarity: "Mythic",
        ranked: "BULLET",
        shiny: "—",
        hp: "100",
        dashes: "Poor",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Red",

        description:
            "A counter-focused style with an extremely fast Light attack after an opponent dashes.",

        archetype: "Counterpuncher",

        passive: "Bullet Jab",

        ability: "Thunderbolt",

        ultimateName: "Cheating Combo",

        light:
            "Left → Right. Mediocre base damage, with Bullet Jab becoming near-instant.",

        heavy:
            "Left → Right. Average damage, mediocre speed and average stamina.",

        dash:
            "Slightly long endlag, average distance and moderate side dash.",

        notes:
            "Thunderbolt is an extremely powerful counterhit Heavy."
    },


    {
        id: "switch-hit",
        name: "Switch Hit",
        rarity: "Mythic",
        ranked: "SWITCHHIT",
        shiny: "—",
        hp: "100",
        dashes: "Poor",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Dark Purple",

        description:
            "An ambidextrous style whose attack directions change depending on lateral movement.",

        archetype: "Technical",

        passive: "Ambidextrous",

        ability: "Static",

        ultimateName: "Unknown",

        light:
            "Orthodox: Left. Southpaw: Right.",

        heavy:
            "Orthodox: Right. Southpaw: Left.",

        dash:
            "Slightly long endlag, long distance and moderate side dash.",

        notes:
            "Static charges when the opponent dashes and can invert controls while disrupting Perfect Dodges."
    },


    {
        id: "surgeon",
        name: "Surgeon",
        rarity: "Mythic",
        ranked: "SURGEON",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Good",
        ultimate: "40%",
        trail: "White / Feathers",

        description:
            "A technical style that uses Pinpoint to apply stacking debuffs to different parts of the opponent.",

        archetype: "Technical",

        passive: "Pinpoint",

        ability: "Pinpoint",

        ultimateName: "Sedated",

        light:
            "Left → Left → Right. Mediocre damage, good speed and average-plus stamina.",

        heavy:
            "Right Head/Chest, Left Liver.",

        dash:
            "Movement is above average.",

        notes:
            "Pinpoint cycles between Head, Chest and Liver. Debuffs decay through true damage and knockdowns."
    },


    /* =========================
       LEGENDARY
    ========================= */

    {
        id: "slugger",
        name: "Slugger",
        rarity: "Legendary",
        ranked: "TAKAMURA",
        shiny: "—",
        hp: "100",
        dashes: "Mediocre",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Red / Black",

        description:
            "A heavy-hitting style built around charging its Heavy attack.",

        archetype: "Power",

        passive: "Heavy Charge",

        ability: "Heavy Charge",

        ultimateName: "Rage",

        light:
            "Right → Left → Left. Fantastic damage, slow speed and average stamina.",

        heavy:
            "Always Right. Good uncharged damage and Fantastic charged damage.",

        dash:
            "Slightly long endlag, long distance and wide side dash.",

        notes:
            "Holding Heavy increases its damage."
    },


    {
        id: "hawk",
        name: "Hawk",
        rarity: "Legendary",
        ranked: "HAWK",
        shiny: "—",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Red / Black",

        description:
            "A pressure style built around Rage, Swayback, and increasingly dangerous offensive states.",

        archetype: "Pressure",

        passive: "Rage Meter",

        ability: "Swayback",

        ultimateName: "Unknown",

        light:
            "Style-dependent. Movement and attacks change with Rage states.",

        heavy:
            "Style-dependent. Movement and attacks change with Rage states.",

        dash:
            "Average movement in the standard states.",

        notes:
            "Rage progresses through Base, Bloodlust, and Ecstasy. Swayback allows a dodge from idle."
    },


    {
        id: "ghost",
        name: "Ghost",
        rarity: "Legendary",
        ranked: "GHOST",
        shiny: "—",
        hp: "100",
        dashes: "Mediocre",
        range: "Average",
        block: "Weak",
        ultimate: "50%",
        trail: "Gold / None",

        description:
            "A precision-oriented style that hides its attack highlights and builds toward the powerful Ghost Jab.",

        archetype: "Precision",

        passive: "Dim Highlights",

        ability: "Ghost Jab",

        ultimateName: "Unknown",

        light:
            "Always Left. Average damage, great speed and average stamina.",

        heavy:
            "Always Right. Average damage, speed and stamina.",

        dash:
            "Average endlag, long distance and wide side dash.",

        notes:
            "Ghost Jab is a near-instant combo starter, but missing or hitting block can leave Ghost vulnerable."
    },


    {
        id: "iron-fist",
        name: "Iron Fist",
        rarity: "Legendary",
        ranked: "IRONFIST",
        shiny: "—",
        hp: "100",
        dashes: "Poor",
        range: "Average",
        block: "Good",
        ultimate: "75%",
        trail: "White",

        description:
            "A devastating power style that sacrifices health to deliver extremely powerful Heavy attacks.",

        archetype: "Power",

        passive: "Heavy Self-Damage",

        ability: "None",

        ultimateName: "No Ribs Survived",

        light:
            "Left → Right. Great damage, mediocre speed and average stamina.",

        heavy:
            "Left → Right. Fantastic damage, very slow speed and poor stamina.",

        dash:
            "Long endlag, short distance and steep side dash.",

        notes:
            "Raw Heavy attacks damage the user. The current version does not slow the player."
    },


    {
        id: "shotgun",
        name: "Shotgun",
        rarity: "Legendary",
        ranked: "SHOTGUN",
        shiny: "—",
        hp: "100",
        dashes: "Good",
        range: "Average",
        block: "Mediocre",
        ultimate: "45–55%",
        trail: "Magenta",

        description:
            "A rhythm-based style featuring Speed-O-Meter, Barrage, Prodigy, and Rhythm Hell.",

        archetype: "Rhythm",

        passive: "Rhythm Hell",

        ability: "Speed-O-Meter",

        ultimateName: "FNF Rhythm",

        light:
            "Left → Right. Great speed and great stamina.",

        heavy:
            "Right normally, Left in Prodigy.",

        dash:
            "Good movement with different behavior between Base and Prodigy.",

        notes:
            "Ultimate strength depends on rhythm grade: S +5%, A +4%, B +2%, C +1%, D -5%."
    },


    {
        id: "freedom",
        name: "Freedom",
        rarity: "Legendary",
        ranked: "FREEDOM",
        shiny: "—",
        hp: "80 × 3 Stocks",
        dashes: "Fantastic / Average / Good",
        range: "Average / Fantastic",
        block: "Weak / Below Average / Good",
        ultimate: "50%",
        trail: "Varies",

        description:
            "A multi-form style that can switch between Whirlwind, Flicker, and Smash.",

        archetype: "Multi-Style",

        passive: "Whirlwind Swayback",

        ability: "Form Switching",

        ultimateName: "Unknown",

        light:
            "Changes depending on the selected form.",

        heavy:
            "Changes depending on the selected form.",

        dash:
            "Whirlwind, Flicker, and Smash each have different movement characteristics.",

        notes:
            "Freedom has three stocks and supports Chainswitching and Wesker Tech on PC."
    },


    {
        id: "chronos",
        name: "Chronos",
        rarity: "Legendary",
        ranked: "CHRONOS",
        shiny: "Godspeed",
        hp: "90",
        dashes: "Great / Fantastic Focus",
        range: "Average",
        block: "Mediocre",
        ultimate: "45% / 50% Focus",

        trail: "Gold",

        description:
            "A time-manipulation style built around Focus, movement control, and precise timing.",

        archetype: "Technical",

        passive: "Focus",

        ability: "Time Manipulation",

        ultimateName: "Unknown",

        light:
            "Movement and attack speed improve during Focus.",

        heavy:
            "Focused Heavy receives significant counter-related benefits.",

        dash:
            "Above-average movement, becoming well above average during Focus.",

        notes:
            "Focus drains over time and can be recharged through actions such as emotes, Perfect Dodges, and counters."
    },


    {
        id: "white-ash",
        name: "White Ash",
        rarity: "Legendary",
        ranked: "JOE",
        shiny: "—",
        hp: "70 × 4 Stocks",
        dashes: "Average",
        range: "Average",
        block: "Good / None Burn",
        ultimate: "30% / 10% fail",

        trail: "Light Blue",

        description:
            "A four-stock style centered around Burn, escalating damage, and the Cross Counter ultimate.",

        archetype: "High Risk",

        passive: "Burn",

        ability: "Burn",

        ultimateName: "Cross Counter",

        light:
            "Changes as Burn increases.",

        heavy:
            "Changes as Burn increases.",

        dash:
            "Average, with Burn affecting movement properties.",

        notes:
            "White Ash cannot normally block or backdash while Burn is active. Its ultimate uses a QTE."
    },


    {
        id: "supernova",
        name: "Supernova",
        rarity: "Legendary",
        ranked: "SUPERNOVA",
        shiny: "—",
        hp: "100",
        dashes: "Great",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Teal",

        description:
            "A newer WIP style built around CTE, Starstruck, Comet, and Eject/Re-entry.",

        archetype: "WIP",

        passive: "CTE",

        ability: "Starstruck",

        ultimateName: "Unknown",

        light:
            "WIP.",

        heavy:
            "WIP.",

        dash:
            "WIP.",

        notes:
            "WIP. Missing attack and ultimate details remain intentionally undisclosed."
    },


    {
        id: "deimos",
        name: "Deimos",
        rarity: "Legendary",
        ranked: "MONSTROSITY",
        shiny: "—",
        hp: "90",
        dashes: "?",
        range: "?",
        block: "?",
        ultimate: "35% / 65% Monstrosity",
        trail: "Red / Black",

        description:
            "A WIP horror-themed style built around Bleed, Terror, and Monstrosity.",

        archetype: "WIP",

        passive: "BLEED / TERROR",

        ability: "Monstrosity",

        ultimateName: "Pinnacle of Violence / Last Question and Final Answer",

        light:
            "?",

        heavy:
            "?",

        dash:
            "?",

        notes:
            "WIP. Strategy and counterplay are currently not confirmed."
    },


    /* =========================
       SHINY
    ========================= */

    {
        id: "godspeed",
        name: "Godspeed",
        rarity: "Shiny",
        ranked: "GODSPEEDSHINY",
        shiny: "Godspeed",
        hp: "90",
        dashes: "Great / Fantastic Focus",
        range: "Average",
        block: "Mediocre",
        ultimate: "45% / 50% Focus",
        trail: "Dark Blue / White",

        description:
            "The Shiny variant of Chronos, inspired by Killua Zoldyck.",

        archetype: "Shiny",

        passive: "Chronos Base Mechanics",

        ability: "Godspeed / Focus",

        ultimateName: "Unknown",

        light:
            "Based on Chronos.",

        heavy:
            "Based on Chronos.",

        dash:
            "Based on Chronos.",

        notes:
            "Godspeed is WIP. It features a yo-yo and glowing Godspeed/Focus accessories."
    },


    {
        id: "bald",
        name: "Bald",
        rarity: "Shiny",
        ranked: "BALDSHINY",
        shiny: "Bald",
        hp: "100",
        dashes: "Average",
        range: "Good",
        block: "Good",
        ultimate: "50%",
        trail: "White",

        description:
            "The Shiny variant of Basic, inspired by Saitama.",

        archetype: "Shiny",

        passive: "Basic Base Mechanics",

        ability: "None",

        ultimateName: "Death Punch",

        light:
            "Based on Basic.",

        heavy:
            "Straight punches with a Saitama-inspired Heavy.",

        dash:
            "Based on Basic.",

        notes:
            "Bald is unspinnable and can be obtained through Uncommon Shards."
    },


    {
        id: "coyote",
        name: "Coyote",
        rarity: "Shiny",
        ranked: "COYOTESHINY",
        shiny: "Coyote",
        hp: "100",
        dashes: "Average",
        range: "Average",
        block: "Good",
        ultimate: "50%",
        trail: "Bluish White",

        description:
            "The Shiny variant of Wolf, inspired by Coyote Starrk from Bleach.",

        archetype: "Shiny",

        passive: "Wolf Base Mechanics",

        ability: "White Fang",

        ultimateName: "Cero Metralleta",

        light:
            "Based on Wolf.",

        heavy:
            "Based on Wolf, with Coyote-inspired visual attacks.",

        dash:
            "Based on Wolf.",

        notes:
            "Coyote was the first Shiny style and has a voiced ultimate."
    },


    {
        id: "drill",
        name: "Drill",
        rarity: "Shiny",
        ranked: "DRILLSHINY",
        shiny: "Drill",
        hp: "100",
        dashes: "Good",
        range: "Average",
        block: "Mediocre",
        ultimate: "50%",
        trail: "Pink",

        description:
            "The Shiny variant of Corkscrew, inspired by Kasane Teto.",

        archetype: "Shiny",

        passive: "Corkscrew Base Mechanics",

        ability: "Corkscrew",

        ultimateName: "Can You Believe It?",

        light:
            "Based on Corkscrew.",

        heavy:
            "Uses a baguette as part of the attack animation.",

        dash:
            "Based on Corkscrew.",

        notes:
            "The style features a dancing R6 animation at 30 FPS."
    },


    {
        id: "nanomachines",
        name: "Nanomachines",
        rarity: "Shiny",
        ranked: "NANOSHINY",
        shiny: "Nanomachines",
        hp: "100",
        dashes: "Awful",
        range: "Average",
        block: "Fantastic",
        ultimate: "45%",
        trail: "Red / Black",

        description:
            "The Shiny variant of Turtle, inspired by Senator Steven Armstrong.",

        archetype: "Shiny",

        passive: "Turtle Block",

        ability: "Nanomachines",

        ultimateName: "Nanomachines, Son",

        light:
            "Based on Turtle.",

        heavy:
            "Based on Turtle with Armstrong-inspired visual attacks.",

        dash:
            "Based on Turtle.",

        notes:
            "The style uses mechanical visual effects while blocking."
    }

];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const styleGrid = document.getElementById("styleGrid");
const searchInput = document.getElementById("styleSearch");
const filters = document.querySelectorAll(".filter");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("styleModal");
const modalContent = document.getElementById("styleDetail");
const closeModal = document.getElementById("closeModal");


/* =========================================================
   STYLE CARD
   ========================================================= */

function createStyleCard(style) {

    const card = document.createElement("article");

    card.className = `database-style-card rarity-${style.rarity.toLowerCase()}`;

    card.innerHTML = `

        <div class="database-card-top">

            <span class="database-rarity">
                ${style.rarity}
            </span>

            <span class="database-ranked">
                ${style.ranked}
            </span>

        </div>


        <div class="database-card-main">

            <div class="style-symbol">
                ${style.name.charAt(0)}
            </div>

            <div>

                <h3>${style.name}</h3>

                <span class="style-archetype">
                    ${style.archetype}
                </span>

            </div>

        </div>


        <p class="database-description">
            ${style.description}
        </p>


        <div class="mini-stats">

            <div>
                <span>HP</span>
                <strong>${style.hp}</strong>
            </div>

            <div>
                <span>DASH</span>
                <strong>${style.dashes}</strong>
            </div>

            <div>
                <span>RANGE</span>
                <strong>${style.range}</strong>
            </div>

            <div>
                <span>BLOCK</span>
                <strong>${style.block}</strong>
            </div>

        </div>


        <button class="view-style">
            VIEW STYLE →
        </button>

    `;

    card
        .querySelector(".view-style")
        .addEventListener("click", () => openStyle(style));

    return card;
}


/* =========================================================
   RENDER
   ========================================================= */

function renderStyles(filter = "all", search = "") {

    styleGrid.innerHTML = "";

    const searchTerm = search.toLowerCase().trim();

    const filtered = styles.filter(style => {

        const matchesFilter =
            filter === "all" ||
            style.rarity.toLowerCase() === filter;

        const matchesSearch =
            style.name.toLowerCase().includes(searchTerm) ||
            style.ranked.toLowerCase().includes(searchTerm) ||
            style.archetype.toLowerCase().includes(searchTerm);

        return matchesFilter && matchesSearch;

    });


    filtered.forEach(style => {

        styleGrid.appendChild(
            createStyleCard(style)
        );

    });


    noResults.style.display =
        filtered.length === 0 ? "block" : "none";
}


/* =========================================================
   FILTERS
   ========================================================= */

let currentFilter = "all";

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentFilter =
            button.dataset.filter;

        renderStyles(
            currentFilter,
            searchInput.value
        );

    });

});


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener("input", () => {

    renderStyles(
        currentFilter,
        searchInput.value
    );

});


/* =========================================================
   STYLE DETAIL
   ========================================================= */

function openStyle(style) {

    modalContent.innerHTML = `

        <div class="detail-header">

            <div>

                <span class="database-rarity">
                    ${style.rarity}
                </span>

                <h2>${style.name}</h2>

                <span class="detail-ranked">
                    ${style.ranked}
                </span>

            </div>

            <div class="detail-symbol">
                ${style.name.charAt(0)}
            </div>

        </div>


        <p class="detail-description">
            ${style.description}
        </p>


        <div class="detail-stats">

            <div>
                <span>HEALTH</span>
                <strong>${style.hp}</strong>
            </div>

            <div>
                <span>DASHES</span>
                <strong>${style.dashes}</strong>
            </div>

            <div>
                <span>RANGE</span>
                <strong>${style.range}</strong>
            </div>

            <div>
                <span>BLOCK</span>
                <strong>${style.block}</strong>
            </div>

            <div>
                <span>ULTIMATE</span>
                <strong>${style.ultimate}</strong>
            </div>

            <div>
                <span>TRAIL</span>
                <strong>${style.trail}</strong>
            </div>

        </div>


        <div class="detail-columns">

            <div class="detail-section">

                <span>ARCHETYPE</span>

                <h3>
                    ${style.archetype}
                </h3>

            </div>


            <div class="detail-section">

                <span>PASSIVE</span>

                <h3>
                    ${style.passive}
                </h3>

            </div>


            <div class="detail-section">

                <span>ABILITY</span>

                <h3>
                    ${style.ability}
                </h3>

            </div>


            <div class="detail-section">

                <span>ULTIMATE</span>

                <h3>
                    ${style.ultimateName}
                </h3>

            </div>

        </div>


        <div class="move-sections">

            <div>

                <span>LIGHT ATTACK</span>

                <p>
                    ${style.light}
                </p>

            </div>


            <div>

                <span>HEAVY ATTACK</span>

                <p>
                    ${style.heavy}
                </p>

            </div>


            <div>

                <span>DASH</span>

                <p>
                    ${style.dash}
                </p>

            </div>

        </div>


        <div class="style-notes">

            <span>NOTES</span>

            <p>
                ${style.notes}
            </p>

        </div>

    `;

    modal.classList.add("open");

    document.body.classList.add("modal-open");
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

closeModal.addEventListener("click", closeStyle);

document
    .querySelector(".modal-backdrop")
    .addEventListener("click", closeStyle);


function closeStyle() {

    modal.classList.remove("open");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeStyle();
    }

});


/* =========================================================
   INITIALIZE
   ========================================================= */

renderStyles();

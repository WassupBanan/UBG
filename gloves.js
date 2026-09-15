"use strict";

/*
==========================================================
UNTITLED BOXING GAME
GLOVES DATABASE
==========================================================
*/

const gloves = [

    /* =====================================================
       STANDARD CRATES
       ===================================================== */

    {
        id: "pain",
        name: "Pain",
        category: "Standard Crates",
        rarity: "Crate",
        crate: "Pain Crate",
        obtainable: true,
        description: "One of the standard glove crates available in the shop.",
        obtain: "Pain Crate",
        image: "",
        featured: false
    },

    {
        id: "gems",
        name: "Gems",
        category: "Standard Crates",
        rarity: "Crate",
        crate: "Gems Crate",
        obtainable: true,
        description: "A standard crate containing a selection of cosmetic gloves.",
        obtain: "Gems Crate",
        image: "",
        featured: false
    },

    {
        id: "dragon",
        name: "Dragon",
        category: "Standard Crates",
        rarity: "Crate",
        crate: "Dragon Crate",
        obtainable: true,
        description: "A standard glove crate featuring dragon-themed cosmetics.",
        obtain: "Dragon Crate",
        image: "",
        featured: false
    },

    {
        id: "sci-fi",
        name: "Sci-Fi",
        category: "Standard Crates",
        rarity: "Crate",
        crate: "Sci-Fi Crate",
        obtainable: true,
        description: "A standard crate containing futuristic cosmetic gloves.",
        obtain: "Sci-Fi Crate",
        image: "",
        featured: false
    },

    {
        id: "anime",
        name: "Anime",
        category: "Standard Crates",
        rarity: "Crate",
        crate: "Anime Crate",
        obtainable: true,
        description: "A standard crate featuring anime-inspired gloves.",
        obtain: "Anime Crate",
        image: "",
        featured: false
    },


    /* =====================================================
       HOLIDAY CRATES
       ===================================================== */

    {
        id: "halloween-2023",
        name: "Halloween 2023",
        category: "Holiday Crates",
        rarity: "Event",
        crate: "Halloween 2023",
        obtainable: false,
        description: "A Halloween event crate from 2023. Its gloves are currently unobtainable outside of trading.",
        obtain: "Halloween 2023 event",
        image: "",
        featured: false
    },

    {
        id: "christmas-2023",
        name: "Christmas 2023",
        subtitle: "Holly Jolly",
        category: "Holiday Crates",
        rarity: "Event",
        crate: "Christmas 2023",
        obtainable: false,
        description: "The Holly Jolly Christmas 2023 event crate.",
        obtain: "Christmas 2023 event",
        image: "",
        featured: false
    },

    {
        id: "halloween-2024",
        name: "Halloween 2024",
        category: "Holiday Crates",
        rarity: "Event",
        crate: "Halloween 2024",
        obtainable: false,
        description: "The Halloween 2024 event crate.",
        obtain: "Halloween 2024 event",
        image: "",
        featured: false
    },

    {
        id: "christmas-2024",
        name: "Christmas 2024",
        subtitle: "Jolly",
        category: "Holiday Crates",
        rarity: "Event",
        crate: "Christmas 2024",
        obtainable: false,
        description: "The Jolly Christmas 2024 event crate.",
        obtain: "Christmas 2024 event",
        image: "",
        featured: true
    },

    {
        id: "valentines-2026",
        name: "Valentine's 2026",
        category: "Holiday Crates",
        rarity: "Event",
        crate: "Valentine's 2026",
        obtainable: false,
        description: "The Valentine's Day 2026 event crate.",
        obtain: "Valentine's Day 2026 event",
        image: "",
        featured: true
    },


    /* =====================================================
       RANKED GLOVES
       ===================================================== */

    {
        id: "torn-bronze",
        name: "Torn Bronze",
        category: "Ranked Gloves",
        rarity: "Uncommon",
        obtainable: false,
        rank: "Bronze 3",
        description: "A ranked reward awarded for reaching Bronze 3.",
        obtain: "Reach Bronze 3 in Ranked",
        tradable: false,
        image: "",
        featured: false
    },

    {
        id: "patched-silver",
        name: "Patched Silver",
        category: "Ranked Gloves",
        rarity: "Rare",
        obtainable: false,
        rank: "Silver 3",
        description: "A ranked reward awarded for reaching Silver 3.",
        obtain: "Reach Silver 3 in Ranked",
        tradable: false,
        image: "",
        featured: false
    },

    {
        id: "fused-gold",
        name: "Fused Gold",
        category: "Ranked Gloves",
        rarity: "Mythic",
        obtainable: false,
        rank: "Gold 3",
        description: "A ranked reward awarded for reaching Gold 3.",
        obtain: "Reach Gold 3 in Ranked",
        tradable: false,
        image: "",
        featured: false
    },

    {
        id: "ultra-diamond",
        name: "Ultra Diamond",
        category: "Ranked Gloves",
        rarity: "Legendary",
        obtainable: false,
        rank: "Diamond 3",
        description: "A ranked reward awarded for reaching Diamond 3.",
        obtain: "Reach Diamond 3 in Ranked",
        tradable: false,
        image: "",
        featured: false
    },

    {
        id: "champion",
        name: "Champion",
        category: "Ranked Gloves",
        rarity: "Legendary",
        obtainable: false,
        rank: "Champion 3",
        description: "The highest ranked glove reward.",
        obtain: "Reach Champion 3 in Ranked",
        tradable: false,
        image: "",
        featured: true
    },


    /* =====================================================
       BEOWULF SERIES
       ===================================================== */

    {
        id: "beowulf",
        name: "Beowulf",
        category: "Event Gloves",
        series: "Beowulf Series",
        rarity: "Event",
        obtainable: false,
        description: "The original red Beowulf gloves, awarded during the Valentine's Day 2024 event.",
        obtain: "Valentine's Day 2024 event",
        tradable: true,
        image: "",
        featured: true
    },

    {
        id: "bluowulf",
        name: "Bluowulf",
        category: "Event Gloves",
        series: "Beowulf Series",
        rarity: "Event",
        obtainable: false,
        description: "A blue variant of Beowulf awarded during the June 2025 two-year anniversary event.",
        obtain: "June 2025 2-year anniversary event",
        tradable: true,
        image: "",
        featured: true
    },

    {
        id: "beowulf-reborn",
        name: "Beowulf Reborn",
        category: "Event Gloves",
        series: "Beowulf Series",
        rarity: "Event",
        obtainable: false,
        description: "A remodeled version of the original Beowulf gloves.",
        obtain: "3-year anniversary event",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "pridewulf",
        name: "Pridewulf",
        category: "Event Gloves",
        series: "Beowulf Series",
        rarity: "Event",
        obtainable: false,
        description: "An RGB Beowulf variant that changes colour over time.",
        obtain: "3-year anniversary event",
        tradable: true,
        image: "",
        featured: true
    },

    {
        id: "voidwulf",
        name: "Voidwulf",
        category: "Event Gloves",
        series: "Beowulf Series",
        rarity: "Event",
        obtainable: false,
        description: "A purple Beowulf variant that has been teased by developers. It is currently unobtainable.",
        obtain: "Currently unobtainable",
        tradable: false,
        image: "",
        featured: true,
        wip: true
    },


    /* =====================================================
       BALROG SERIES
       ===================================================== */

    {
        id: "balrog",
        name: "Balrog",
        category: "Event Gloves",
        series: "Balrog Evolutions",
        rarity: "Event",
        obtainable: false,
        description: "Balrog was awarded for getting 50 knockdowns during the June 2024 one-year anniversary event.",
        obtain: "June 2024 1-year anniversary event",
        tradable: true,
        image: "",
        featured: true,
        mobileNote: "On mobile devices, Balrog receives an orange glow because Roblox mobile has trouble rendering its existing orange glow correctly."
    },

    {
        id: "balrog-breaker",
        name: "Balrog Breaker",
        category: "Event Gloves",
        series: "Balrog Evolutions",
        rarity: "Event",
        obtainable: false,
        description: "The purple Balrog evolution.",
        obtain: "Break 100 guards after obtaining Balrog",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "balrog-greed",
        name: "Balrog Greed",
        category: "Event Gloves",
        series: "Balrog Evolutions",
        rarity: "Event",
        obtainable: false,
        description: "The green Balrog evolution.",
        obtain: "Earn $59,999 after obtaining Balrog",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "balrog-perfect",
        name: "Balrog Perfect",
        category: "Event Gloves",
        series: "Balrog Evolutions",
        rarity: "Event",
        obtainable: false,
        description: "The red Balrog evolution.",
        obtain: "Perform 500 perfect dodges after obtaining Balrog",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "balrog-triumph",
        name: "Balrog Triumph",
        category: "Event Gloves",
        series: "Balrog Evolutions",
        rarity: "Event",
        obtainable: false,
        description: "The orange Balrog evolution.",
        obtain: "Win 50 matches after obtaining Balrog",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "balrog-ultimate",
        name: "Balrog Ultimate",
        category: "Event Gloves",
        series: "Balrog Evolutions",
        rarity: "Event",
        obtainable: false,
        description: "The blue Balrog evolution.",
        obtain: "Land 100 ultimates after obtaining Balrog",
        tradable: true,
        image: "",
        featured: false
    },


    /* =====================================================
       OTHER EVENT GLOVES
       ===================================================== */

    {
        id: "gilgamesh",
        name: "Gilgamesh",
        category: "Event Gloves",
        rarity: "Event",
        obtainable: false,
        description: "Awarded for completing the Christmas 2024 event. The gloves slowly change colour while equipped.",
        obtain: "Christmas 2024 event",
        tradable: true,
        image: "",
        featured: true
    },

    {
        id: "bringus-beater",
        name: "Bringus Beater",
        category: "Event Gloves",
        rarity: "Event",
        obtainable: false,
        description: "Awarded during UBG's participatory event for Roblox's August 2024 The Games event.",
        obtain: "Coach Bringus event",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "bringus-destroyer",
        name: "Bringus Destroyer",
        category: "Event Gloves",
        rarity: "Event",
        obtainable: false,
        description: "Awarded for defeating the Coach Bringus boss during The Games event.",
        obtain: "Coach Bringus event",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "troll",
        name: "Troll",
        category: "Event Gloves",
        rarity: "Event",
        obtainable: false,
        description: "A glove given to players during the April Fools 2024 event.",
        obtain: "Code freeunusual during April Fools 2024",
        tradable: true,
        image: "",
        featured: true
    },

    {
        id: "whoopee-concussion",
        name: "Whoopee Concussion",
        category: "Event Gloves",
        rarity: "Event",
        obtainable: false,
        description: "A reward from the April Fools 2026 event. Its upgraded unusual version has the Prankster effect.",
        obtain: "April Fools 2026 event",
        tradable: true,
        image: "",
        featured: true
    },

    {
        id: "discovered",
        name: "Discovered",
        category: "Event Gloves",
        rarity: "Event",
        obtainable: false,
        description: "Awarded during the Walmart Discovered Perks promotional event in November 2025.",
        obtain: "Get 5 knockdowns during the Discovered Perks event",
        tradable: true,
        image: "",
        featured: false,
        unusual: "Spark"
    },


    /* =====================================================
       ORIGINAL / BETA
       ===================================================== */

    {
        id: "default",
        name: "Default",
        category: "Original / Beta",
        rarity: "Uncommon",
        obtainable: false,
        description: "The original blocky default gloves worn by new players.",
        obtain: "Original game",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "sleek",
        name: "Sleek",
        category: "Original / Beta",
        rarity: "Beta",
        obtainable: false,
        description: "One of the original gloves sold directly through the old glove shop.",
        obtain: "Trading",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "classic",
        name: "Classic",
        category: "Original / Beta",
        rarity: "Beta",
        obtainable: false,
        description: "Originally known as New Default. It was moved to the Pain crate during the shop rework.",
        obtain: "Trading",
        tradable: true,
        image: "",
        featured: false
    },

    {
        id: "carbon",
        name: "Carbon",
        category: "Original / Beta",
        rarity: "Beta",
        obtainable: false,
        description: "An original beta glove that was not reintroduced during the shop rework.",
        obtain: "Trading",
        tradable: true,
        image: "",
        featured: true
    },


    /* =====================================================
       STYLE GLOVES
       ===================================================== */

    {
        id: "counter-mastery",
        name: "Counter Mastery",
        category: "Style Gloves",
        rarity: "Upcoming",
        obtainable: false,
        description: "An upcoming mastery glove thematically based around the Counter style.",
        obtain: "Upcoming feature",
        tradable: false,
        image: "",
        featured: true,
        wip: true
    },

    {
        id: "smash-mastery",
        name: "Smash Mastery",
        category: "Style Gloves",
        rarity: "Upcoming",
        obtainable: false,
        description: "An upcoming mastery glove thematically based around the Smash style.",
        obtain: "Upcoming feature",
        tradable: false,
        image: "",
        featured: true,
        wip: true
    }

];


/* ==========================================================
   DATABASE EXPORT
   ========================================================== */

window.UBG_GLOVES = gloves;

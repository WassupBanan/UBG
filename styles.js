/* =========================================================
   UNTITLED BOXING GAME
   FAN WIKI — STYLES DATABASE
   ========================================================= */

const styles = [

  /* =========================
     UNCOMMON
     ========================= */

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
    animation: "Basic_Idle.gif",
    description: "The default boxing style. A balanced style with no major strengths or weaknesses.",
    strengths: "Balanced and easy to learn.",
    weaknesses: "Has no specialised advantages.",
    obtain: "Available by default."
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
    animation: "Smash_Idle.gif",
    description: "A straightforward power-focused style based around heavy punches.",
    strengths: "Strong offensive pressure.",
    weaknesses: "Less specialised than higher rarity styles.",
    obtain: "Spin for the style."
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
    animation: "Long_Guard_Idle.gif",
    description: "A defensive style that uses long-range punches and a strong guard.",
    strengths: "Excellent range and defensive potential.",
    weaknesses: "Can struggle against close-range pressure.",
    obtain: "Spin for the style."
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
    animation: "Counter_Idle.gif",
    description: "A counter-focused style that rewards accurate timing.",
    strengths: "Fast movement and strong counterplay.",
    weaknesses: "Requires good timing and prediction.",
    obtain: "Spin for the style."
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
    animation: "Turtle_Idle.gif",
    shiny: "Nanomachines",
    description: "A highly defensive style focused on blocking and surviving pressure.",
    strengths: "Excellent defence.",
    weaknesses: "Slow movement.",
    obtain: "Spin for the style."
  },

  /* =========================
     RARE
     ========================= */

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
    animation: "Corkscrew_Idle.gif",
    shiny: "Drill",
    description: "A style centred around powerful corkscrew punches.",
    strengths: "Reliable offensive pressure.",
    weaknesses: "Does not specialise heavily in defence or mobility.",
    obtain: "Spin for the style."
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
    animation: "Charge_Idle.gif",
    description: "An aggressive style built around charging toward opponents.",
    strengths: "Fast and aggressive.",
    weaknesses: "Can become predictable when constantly rushing.",
    obtain: "Spin for the style."
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
    animation: "Hammer_Idle.gif",
    description: "A heavy-hitting style that focuses on powerful body attacks.",
    strengths: "Strong body pressure.",
    weaknesses: "Average mobility.",
    obtain: "Spin for the style."
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
    animation: "Trickster_Idle.gif",
    shiny: "Conman",
    description: "A deceptive style designed around unpredictable movement.",
    strengths: "Fast and difficult to predict.",
    weaknesses: "Requires good movement and mind games.",
    obtain: "Spin for the style."
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
    animation: "Kimura_Idle.gif",
    wip: true,
    description: "A style currently being documented.",
    strengths: "Data currently incomplete.",
    weaknesses: "Data currently incomplete.",
    obtain: "Spin for the style."
  },

  /* =========================
     MYTHIC
     ========================= */

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
    animation: "Ippo_Idle.gif",
    description: "A pressure-heavy style based around the famous Dempsey Roll.",
    strengths: "Fast movement and strong pressure.",
    weaknesses: "Short range.",
    obtain: "Spin for the style."
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
    animation: "Hitman_Idle.gif",
    description: "A long-range style that specialises in fast flicker punches.",
    strengths: "Fast attacks and long range.",
    weaknesses: "Requires spacing and precision.",
    obtain: "Spin for the style."
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
    animation: "Hands_Low_Idle.gif",
    description: "An extremely mobile style that keeps its hands low.",
    strengths: "Very fast movement.",
    weaknesses: "Weak defence.",
    obtain: "Spin for the style."
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
    animation: "Wolf_Idle.gif",
    shiny: "Coyote",
    description: "A balanced style with strong defensive capabilities and the White Fang ability.",
    strengths: "Good defence and reliable attacks.",
    weaknesses: "Does not excel in one specific category.",
    obtain: "Spin for the style."
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
    animation: "Bullet_Idle.gif",
    description: "An extremely fast style focused on rapid attacks.",
    strengths: "Very high speed.",
    weaknesses: "Average range and defence.",
    obtain: "Spin for the style."
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
    animation: "Switch_Hit_Idle.gif",
    description: "A flexible style built around switching stances.",
    strengths: "Versatile and adaptable.",
    weaknesses: "Requires familiarity with both stances.",
    obtain: "Spin for the style."
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
    animation: "Surgeon_meters.png",
    wip: true,
    description: "A style currently being documented.",
    strengths: "Fast movement and good range.",
    weaknesses: "Data currently incomplete.",
    obtain: "Spin for the style."
  },

  /* =========================
     LEGENDARY
     ========================= */

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
    animation: "Slugger_Idle.gif",
    description: "A powerful legendary style focused on heavy slugging punches.",
    strengths: "Strong power and good defence.",
    weaknesses: "Slow movement.",
    obtain: "Spin for the style."
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
    animation: "Hawk_Idle.gif",
    description: "A fast and aggressive style that relies on evasive movement.",
    strengths: "Fast and highly aggressive.",
    weaknesses: "Weak defence.",
    obtain: "Spin for the style."
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
    animation: "Ghost_Idle.gif",
    description: "A deceptive style built around ghostly movement and attacks.",
    strengths: "Unique evasive mechanics.",
    weaknesses: "Weak defence.",
    obtain: "Spin for the style."
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
    animation: "Iron_Fist_Idle.gif",
    description: "A sturdy legendary style focused around powerful punches.",
    strengths: "Good defence and reliable damage.",
    weaknesses: "Average mobility.",
    obtain: "Spin for the style."
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
    animation: "Shotgun_Idles.gif",
    description: "A fast legendary style capable of overwhelming opponents with barrages.",
    strengths: "Fast movement and long range.",
    weaknesses: "Average defence.",
    obtain: "Spin for the style."
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
    animation: "Freedom_Idles.gif",
    description: "A unique style that allows the player to switch between different styles.",
    strengths: "Extremely versatile.",
    weaknesses: "Stats and playstyle vary depending on the current form.",
    obtain: "Spin for the style."
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
    animation: "Chronos_Idle.gif",
    shiny: "Godspeed",
    description: "A legendary style centred around timing and Focus.",
    strengths: "Strong timing-based mechanics.",
    weaknesses: "Requires precise execution.",
    obtain: "Spin for the style."
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
    animation: "White_Ash_Idle.gif",
    description: "A legendary style based around Joe's burning determination.",
    strengths: "Fast and aggressive.",
    weaknesses: "Requires careful management of pressure.",
    obtain: "Spin for the style."
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
    animation: "Supernova_Idle.gif",
    wip: true,
    description: "A legendary style currently being documented.",
    strengths: "Fast movement and good range.",
    weaknesses: "Data currently incomplete.",
    obtain: "Spin for the style."
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
    animation: "Deimos_Idle.gif",
    wip: true,
    description: "A legendary style currently being documented.",
    strengths: "Data currently incomplete.",
    weaknesses: "Data currently incomplete.",
    obtain: "Spin for the style."
  },

  /* =========================
     SHINY
     ========================= */

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
    animation: "Chronos_Idle.gif",
    wip: true,
    description: "A shiny variant of Chronos.",
    strengths: "Very fast movement.",
    weaknesses: "Data currently incomplete.",
    obtain: "Obtain as a shiny variant."
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
    animation: "Basic_Idle.gif",
    description: "A shiny variant of Basic.",
    strengths: "Balanced.",
    weaknesses: "No specialised advantages.",
    obtain: "Obtain as a shiny variant."
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
    animation: "Wolf_Idle.gif",
    description: "A shiny variant of Wolf.",
    strengths: "Good defence.",
    weaknesses: "Average mobility.",
    obtain: "Obtain as a shiny variant."
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
    animation: "Corkscrew_Idle.gif",
    description: "A shiny variant of Corkscrew.",
    strengths: "Reliable offensive pressure.",
    weaknesses: "Average overall stats.",
    obtain: "Obtain as a shiny variant."
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
    animation: "Turtle_Idle.gif",
    description: "A shiny variant of Turtle.",
    strengths: "Excellent defence.",
    weaknesses: "Slow movement.",
    obtain: "Obtain as a shiny variant."
  }

];


/* =========================================================
   GLOBAL DATABASE
   ========================================================= */

window.UBG_STYLES = styles;


/* =========================================================
   HELPERS
   ========================================================= */

function getStyleImage(style) {
  return `./assets/styles/${style.animation}`;
}

function getRarityClass(rarity) {
  return rarity
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function escapeHTML(value) {
  return String(value ?? "")
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
   STYLES LIST PAGE
   ========================================================= */

function renderStyleGrid(filter = "all", searchTerm = "") {

  const grid = document.getElementById("styleGrid");

  if (!grid) return;

  const search = searchTerm.trim().toLowerCase();

  let filtered = styles.filter(style => {

    const rarityMatch =
      filter === "all" ||
      style.rarity.toLowerCase() === filter.toLowerCase();

    const searchMatch =
      !search ||
      style.name.toLowerCase().includes(search) ||
      style.ranked.toLowerCase().includes(search) ||
      style.rarity.toLowerCase().includes(search);

    return rarityMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(style => {

    const image = getStyleImage(style);

    return `
      <a
        class="style-card"
        href="style.html?style=${encodeURIComponent(style.name)}"
      >

        <div class="style-card-image">
          <img
            src="${escapeAttribute(image)}"
            alt="${escapeAttribute(style.name)}"
            loading="lazy"
          >
        </div>

        <div class="style-card-content">

          <div class="style-card-top">
            <span class="rarity-badge ${getRarityClass(style.rarity)}">
              ${escapeHTML(style.rarity)}
            </span>

            ${style.wip ? `<span class="wip-badge">WIP</span>` : ""}
          </div>

          <h3>${escapeHTML(style.name)}</h3>

          <small>${escapeHTML(style.ranked)}</small>

          <p>${escapeHTML(style.description)}</p>

        </div>

      </a>
    `;

  }).join("");

  const count = document.getElementById("styleCount");

  if (count) {
    count.textContent =
      `${filtered.length} style${filtered.length === 1 ? "" : "s"}`;
  }
}


/* =========================================================
   STYLE FILTERS
   ========================================================= */

function setupStyleFilters() {

  const searchInput = document.getElementById("styleSearch");

  if (searchInput) {

    searchInput.addEventListener("input", () => {

      const activeFilter =
        document.querySelector(".wiki-filter.active");

      const filter =
        activeFilter?.dataset.filter || "all";

      renderStyleGrid(
        filter,
        searchInput.value
      );

    });

  }

  document.querySelectorAll(".wiki-filter").forEach(button => {

    button.addEventListener("click", () => {

      document.querySelectorAll(".wiki-filter")
        .forEach(item => item.classList.remove("active"));

      button.classList.add("active");

      renderStyleGrid(
        button.dataset.rarity || "all",
        searchInput?.value || ""
      );

    });

  });

}


/* =========================================================
   STYLE ARTICLE
   ========================================================= */

function renderStyleArticle(style) {

  const article =
    document.getElementById("styleArticle");

  if (!article || !style) return;


  const moveMap = {

    "Basic": {
      light: "Basic_Lights.gif",
      heavy: "Basic_Heavies.gif",
      dash: "Basic_Dashes.gif",
      ultimate: "Basic-ult-.gif"
    },

    "Smash": {
      light: "Smash_Lights.gif",
      heavy: "Smash_Heavy.gif",
      dash: "Smash_Dashes.gif"
    },

    "Long Guard": {
      light: "LG_Lights.gif",
      heavy: "LG_Heavy.gif",
      dash: "LG_Dashes.gif"
    },

    "Counter": {
      light: "Counter_Lights.gif",
      heavy: "Counter_Heavy.gif",
      dash: "Counter_Dashes.gif"
    },

    "Turtle": {
      light: "Turtle_Lights.gif",
      heavy: "Turtle_Heavy.gif",
      dash: "Turtle_Dashes.gif"
    },

    "Corkscrew": {
      light: "Corkscrew_Lights.gif",
      heavy: "Corkscrew_Heavy.gif",
      dash: "Corkscrew_Dashes.gif"
    },

    "Charge": {
      light: "Charge_Lights.gif",
      heavy: "Charge_Heavy.gif",
      dash: "Charge_Dashes.gif",
      ability: "Stampede.gif"
    },

    "Hammer": {
      light: "Hammer_Lights.gif",
      heavy: "Hammer_Heavy.gif",
      dash: "Hammer_Dashes.gif",
      ability: "Body_Blow.gif"
    },

    "Trickster": {
      light: "Trickster_Lights.gif",
      heavy: "Trickster_Heavy.gif",
      dash: "Trickster_Dashes.gif"
    },

    "Dragonfish": {
      light: "Kimura_Lights.gif",
      heavy: "Kimura_Heavy.gif",
      dash: "Kimura_Dashes.gif"
    },

    "Dempsey": {
      light: "Ippo_Lights.gif",
      heavy: "Ippo_Heavy.gif",
      dash: "Ippo_Dashes.gif",
      ability: "Dempsey_Roll.gif"
    },

    "Hitman": {
      light: "Hitman_Lights.gif",
      heavy: "Hitman_Heavy.gif",
      dash: "Hitman_Dashes.gif"
    },

    "Hands Low": {
      light: "HL_Lights.gif",
      heavy: "HL_Heavy.gif",
      dash: "HL_Dashes.gif"
    },

    "Wolf": {
      light: "Wolf_Lights.gif",
      heavy: "Wolf_Heavy.gif",
      dash: "Wolf_Dashes.gif",
      ability: "White_Fang_storage_showcase.gif"
    },

    "Bullet": {
      light: "Bullet_Lights.gif",
      heavy: "Bullet_Heavy.gif",
      dash: "Bullet_Dashes.gif"
    },

    "Switch Hit": {
      light: "SH_Light.gif",
      heavy: "SH_Heavy.gif",
      dash: "SH_Dashes.gif",
      ability: "Static_PD.gif"
    },

    "Slugger": {
      light: "Slugger_Lights.gif",
      heavy: "Slugger_Heavy.gif",
      dash: "Slugger_Dashes.gif"
    },

    "Hawk": {
      light: "Hawk_Lights.gif",
      heavy: "Hawk_Heavies.gif",
      dash: "Hawk_Dashes.gif"
    },

    "Ghost": {
      light: "Ghost_Lights.gif",
      heavy: "Ghost_Heavy.gif",
      dash: "Ghost_Dashes.gif",
      ability: "Ghost_Jab.gif"
    },

    "Iron Fist": {
      light: "IF_Lights.gif",
      heavy: "IF_Heavy.gif",
      dash: "IF_Dashes.gif"
    },

    "Shotgun": {
      light: "Shotgun_Lights.gif",
      heavy: "Shotgun_Heavy.gif",
      dash: "Shotgun_Dashes.gif",
      ability: "Single_barrage.gif"
    },

    "Freedom": {
      light: "Freedom_Lights.gif",
      heavy: "Freedom_Heavy.gif",
      dash: "Freedom_Dashes.gif",
      ability: "Freedom_Switching.gif"
    },

    "Chronos": {
      light: "Chronos_Lights.gif",
      heavy: "Chronos_Heavy.gif",
      dash: "Chronos_Dashes.gif",
      ability: "Chronos_Focus_showcase.gif"
    },

    "White Ash": {
      light: "WA_Lights.gif",
      heavy: "WA_Heavy.gif",
      dash: "WA_Dashes.gif",
      ability: "Joe_Burn_Showcase.gif",
      ultimate: "Joe_Ult_Showcase.gif"
    },

    "Supernova": {
      light: "AttackPlaceholder.png"
    },

    "Deimos": {
      light: "AttackPlaceholder.png"
    }

  };


  const moves =
    moveMap[style.name] || {};


  function moveCard(label, filename) {

    if (!filename) return "";

    return `
      <div class="move-card">

        <div class="move-title">
          ${escapeHTML(label)}
        </div>

        <div class="move-preview">
          <img
            src="./assets/styles/${escapeAttribute(filename)}"
            alt="${escapeAttribute(style.name)} ${escapeAttribute(label)}"
            loading="lazy"
            onerror="this.parentElement.parentElement.style.display='none'"
          >
        </div>

      </div>
    `;
  }


  const previousIndex =
    Math.max(0, styles.indexOf(style) - 1);

  const nextIndex =
    Math.min(styles.length - 1, styles.indexOf(style) + 1);

  const previousStyle =
    styles[previousIndex];

  const nextStyle =
    styles[nextIndex];


  article.innerHTML = `

    <div class="style-page">

      <div class="style-breadcrumb">

        <a href="index.html">Main Page</a>

        <span>›</span>

        <a href="styles.html">Styles</a>

        <span>›</span>

        <strong>${escapeHTML(style.name)}</strong>

      </div>


      <header class="style-header">

        <div>

          <div class="style-header-meta">

            <span class="rarity-badge ${getRarityClass(style.rarity)}">
              ${escapeHTML(style.rarity)}
            </span>

            ${style.wip
              ? `<span class="wip-badge">WORK IN PROGRESS</span>`
              : ""
            }

          </div>

          <h1>${escapeHTML(style.name)}</h1>

          <div class="style-subtitle">
            ${escapeHTML(style.ranked)}
          </div>

        </div>

        <div class="style-header-actions">

          <a href="styles.html" class="article-button">
            ← All Styles
          </a>

          <a
            href="https://www.roblox.com/games/13621938427/untitled-boxing-game"
            target="_blank"
            rel="noopener noreferrer"
            class="article-button primary"
          >
            Play UBG ↗
          </a>

        </div>

      </header>


      <div class="style-layout">


        <article class="style-content">


          <div class="style-lead">

            <div class="style-lead-image">

              <img
                src="${escapeAttribute(getStyleImage(style))}"
                alt="${escapeAttribute(style.name)}"
              >

            </div>

            <div class="style-lead-text">

              <p>
                ${escapeHTML(style.description)}
              </p>

              ${style.baseStyle
                ? `
                  <p class="style-variant-note">
                    Shiny variant of
                    <a href="style.html?style=${encodeURIComponent(style.baseStyle)}">
                      ${escapeHTML(style.baseStyle)}
                    </a>.
                  </p>
                `
                : ""
              }

            </div>

          </div>


          ${style.wip ? `

            <div class="wip-notice">

              <strong>⚠ Work in progress</strong>

              <p>
                Information on this page is still being documented.
                Some values, descriptions, or mechanics may be incomplete.
              </p>

            </div>

          ` : ""}


          <section id="overview" class="wiki-section">

            <h2>Overview</h2>

            <p>
              ${escapeHTML(style.description)}
            </p>

            <p>
              <strong>${escapeHTML(style.name)}</strong>
              is classified as a
              <strong>${escapeHTML(style.rarity)}</strong>
              style in Untitled Boxing Game.
            </p>

          </section>


          <section id="stats" class="wiki-section">

            <h2>Style information</h2>

            <div class="stat-table">

              <div class="stat-row">
                <span>Health</span>
                <strong>${escapeHTML(style.hp)}</strong>
              </div>

              <div class="stat-row">
                <span>Dash</span>
                <strong>${escapeHTML(style.dash)}</strong>
              </div>

              <div class="stat-row">
                <span>Range</span>
                <strong>${escapeHTML(style.range)}</strong>
              </div>

              <div class="stat-row">
                <span>Block</span>
                <strong>${escapeHTML(style.block)}</strong>
              </div>

              <div class="stat-row">
                <span>Ultimate</span>
                <strong>${escapeHTML(style.ultimate)}</strong>
              </div>

            </div>

          </section>


          ${style.passive && style.passive !== "None" ? `

            <section id="passive" class="wiki-section">

              <h2>Passive</h2>

              <div class="ability-box">

                <div class="ability-name">
                  ${escapeHTML(style.passive)}
                </div>

                <p>
                  This style has the
                  <strong>${escapeHTML(style.passive)}</strong>
                  passive.
                </p>

              </div>

            </section>

          ` : ""}


          ${style.ability && style.ability !== "None" ? `

            <section id="ability" class="wiki-section">

              <h2>Ability</h2>

              <div class="ability-box">

                <div class="ability-name">
                  ${escapeHTML(style.ability)}
                </div>

                <p>
                  The main ability available to this style.
                </p>

              </div>

            </section>

          ` : ""}


          ${style.ultimateName ? `

            <section id="ultimate" class="wiki-section">

              <h2>Ultimate</h2>

              <div class="ability-box ultimate-box">

                <div class="ability-name">
                  ${escapeHTML(style.ultimateName)}
                </div>

                <p>
                  This style's ultimate ability.
                </p>

                <div class="ultimate-meter">
                  Ultimate requirement:
                  <strong>${escapeHTML(style.ultimate)}</strong>
                </div>

              </div>

              ${moves.ultimate
                ? moveCard("Ultimate", moves.ultimate)
                : ""
              }

            </section>

          ` : ""}


          <section id="moveset" class="wiki-section">

            <h2>Moveset</h2>

            <div class="move-grid">

              ${moveCard("Light Punches", moves.light)}

              ${moveCard("Heavy Punches", moves.heavy)}

              ${moveCard("Dash", moves.dash)}

              ${moveCard("Ability", moves.ability)}

              ${moves.ultimate
                ? moveCard("Ultimate", moves.ultimate)
                : ""
              }

            </div>

            ${Object.keys(moves).length === 0 ? `

              <p class="missing-data">
                Move animations have not yet been documented.
              </p>

            ` : ""}

          </section>


          <section id="strengths" class="wiki-section">

            <h2>Strengths</h2>

            <div class="strength-box">

              <p>
                ${escapeHTML(style.strengths)}
              </p>

            </div>

          </section>


          <section id="weaknesses" class="wiki-section">

            <h2>Weaknesses</h2>

            <div class="weakness-box">

              <p>
                ${escapeHTML(style.weaknesses)}
              </p>

            </div>

          </section>


          <section id="strategy" class="wiki-section">

            <h2>Strategy</h2>

            <p>
              Strategy information for
              <strong>${escapeHTML(style.name)}</strong>
              is currently being documented.
            </p>

          </section>


          <section id="obtaining" class="wiki-section">

            <h2>Obtaining</h2>

            <div class="obtain-box">

              ${escapeHTML(style.obtain)}

            </div>

          </section>


          <section id="gallery" class="wiki-section">

            <h2>Gallery</h2>

            <div class="gallery-grid">

              <div class="gallery-item">

                <img
                  src="${escapeAttribute(getStyleImage(style))}"
                  alt="${escapeAttribute(style.name)}"
                  loading="lazy"
                >

              </div>

            </div>

          </section>


          <div class="style-categories">

            <span>Category:</span>

            <a href="styles.html?rarity=${encodeURIComponent(style.rarity)}">
              ${escapeHTML(style.rarity)} Styles
            </a>

            ${style.baseStyle
              ? `
                <a href="style.html?style=${encodeURIComponent(style.baseStyle)}">
                  Shiny Variants
                </a>
              `
              : ""
            }

          </div>


          <div class="style-pagination">

            <a
              href="style.html?style=${encodeURIComponent(previousStyle.name)}"
              class="pagination-card"
            >

              <span>← Previous Style</span>

              <strong>
                ${escapeHTML(previousStyle.name)}
              </strong>

            </a>


            <a
              href="style.html?style=${encodeURIComponent(nextStyle.name)}"
              class="pagination-card next"
            >

              <span>Next Style →</span>

              <strong>
                ${escapeHTML(nextStyle.name)}
              </strong>

            </a>

          </div>


        </article>


        <aside class="style-side">


          <div class="wiki-infobox">

            <div class="infobox-title">
              ${escapeHTML(style.name)}
            </div>

            <div class="infobox-image">

              <img
                src="${escapeAttribute(getStyleImage(style))}"
                alt="${escapeAttribute(style.name)}"
              >

            </div>


            <div class="infobox-row">

              <span>Rarity</span>

              <strong class="${getRarityClass(style.rarity)}">
                ${escapeHTML(style.rarity)}
              </strong>

            </div>


            <div class="infobox-row">

              <span>Ranked</span>

              <strong>
                ${escapeHTML(style.ranked)}
              </strong>

            </div>


            ${style.baseStyle ? `

              <div class="infobox-row">

                <span>Base style</span>

                <a href="style.html?style=${encodeURIComponent(style.baseStyle)}">
                  ${escapeHTML(style.baseStyle)}
                </a>

              </div>

            ` : ""}


            <div class="infobox-row">

              <span>Health</span>

              <strong>
                ${escapeHTML(style.hp)}
              </strong>

            </div>


            <div class="infobox-row">

              <span>Dash</span>

              <strong>
                ${escapeHTML(style.dash)}
              </strong>

            </div>


            <div class="infobox-row">

              <span>Range</span>

              <strong>
                ${escapeHTML(style.range)}
              </strong>

            </div>


            <div class="infobox-row">

              <span>Block</span>

              <strong>
                ${escapeHTML(style.block)}
              </strong>

            </div>


            <div class="infobox-row">

              <span>Ultimate</span>

              <strong>
                ${escapeHTML(style.ultimate)}
              </strong>

            </div>


          </div>


          <div class="wiki-side-panel">

            <div class="side-panel-title">
              CONTENTS
            </div>

            <a href="#overview">Overview</a>
            <a href="#stats">Style information</a>

            ${style.passive && style.passive !== "None"
              ? `<a href="#passive">Passive</a>`
              : ""
            }

            ${style.ability && style.ability !== "None"
              ? `<a href="#ability">Ability</a>`
              : ""
            }

            <a href="#ultimate">Ultimate</a>
            <a href="#moveset">Moveset</a>
            <a href="#strengths">Strengths</a>
            <a href="#weaknesses">Weaknesses</a>
            <a href="#strategy">Strategy</a>
            <a href="#obtaining">Obtaining</a>
            <a href="#gallery">Gallery</a>

          </div>


          <div class="wiki-side-panel">

            <div class="side-panel-title">
              STYLE NAVIGATION
            </div>

            <a href="styles.html">
              ← All Styles
            </a>

            <a href="styles.html">
              🥊 Style List
            </a>

            <a href="#">
              ⚙ Mechanics
            </a>

          </div>


        </aside>

      </div>

    </div>

  `;

}


/* =========================================================
   LOAD STYLE ARTICLE
   ========================================================= */

function loadStyleArticle() {

  const article =
    document.getElementById("styleArticle");

  if (!article) return;

  const params =
    new URLSearchParams(window.location.search);

  const requestedStyle =
    params.get("style");

  if (!requestedStyle) {

    article.innerHTML = `

      <div class="missing-style">

        <h1>Style not found</h1>

        <p>
          No style was specified.
        </p>

        <a href="styles.html">
          ← Return to Styles
        </a>

      </div>

    `;

    return;
  }


  const style =
    styles.find(
      item =>
        item.name.toLowerCase() ===
        requestedStyle.toLowerCase()
    );


  if (!style) {

    article.innerHTML = `

      <div class="missing-style">

        <h1>Style not found</h1>

        <p>
          The style
          <strong>${escapeHTML(requestedStyle)}</strong>
          could not be found in the database.
        </p>

        <a href="styles.html">
          ← Return to Styles
        </a>

      </div>

    `;

    return;
  }


  document.title =
    `${style.name} — UBG Wiki`;

  renderStyleArticle(style);

}


/* =========================================================
   GLOBAL SEARCH
   ========================================================= */

function setupGlobalSearch() {

  const search =
    document.getElementById("globalSearch");

  if (!search) return;


  search.addEventListener("keydown", event => {

    if (event.key !== "Enter") return;

    const query =
      search.value.trim().toLowerCase();

    if (!query) return;


    const exact =
      styles.find(
        style =>
          style.name.toLowerCase() === query
      );


    const partial =
      exact ||
      styles.find(
        style =>
          style.name.toLowerCase().includes(query)
      );


    if (partial) {

      window.location.href =
        `style.html?style=${encodeURIComponent(partial.name)}`;

    } else {

      window.location.href =
        `styles.html?search=${encodeURIComponent(query)}`;

    }

  });

}


/* =========================================================
   URL FILTERS FOR STYLES PAGE
   ========================================================= */

function loadStyleFiltersFromURL() {

  if (!document.getElementById("styleGrid")) {
    return;
  }


  const params =
    new URLSearchParams(window.location.search);

  const rarity =
    params.get("rarity");

  const search =
    params.get("search") || "";


  const searchInput =
    document.getElementById("styleSearch");


  if (searchInput) {
    searchInput.value = search;
  }


  let filter = "all";


  if (rarity) {

    filter =
      rarity.toLowerCase();

    document
      .querySelectorAll(".wiki-filter")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.filter?.toLowerCase() === filter
        );

      });

  }


  renderStyleGrid(
    filter,
    search
  );

}


/* =========================================================
   INITIALISE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  setupStyleFilters();

  loadStyleFiltersFromURL();

  loadStyleArticle();

  setupGlobalSearch();

});

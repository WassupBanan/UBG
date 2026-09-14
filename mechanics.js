/* =========================================================
   UNTITLED BOXING GAME
   FAN WIKI — MECHANICS DATABASE
   ========================================================= */


/* =========================================================
   MECHANICS DATABASE
   ========================================================= */

const mechanics = [

  {
    id: "health",
    name: "Health",
    category: "Resource",
    icon: "❤️",
    description:
      "Your fighter's health determines how much punishment they can take before being knocked out.",
    section: "Combat Basics"
  },

  {
    id: "stamina",
    name: "Stamina",
    category: "Resource",
    icon: "⚡",
    description:
      "Stamina is consumed by many offensive and movement actions and must be managed carefully.",
    section: "Combat Basics"
  },

  {
    id: "m1",
    name: "M1 / Light Punch",
    category: "Offense",
    icon: "👊",
    description:
      "A fast basic attack used to pressure opponents, extend combos and deal damage.",
    section: "Combat Basics"
  },

  {
    id: "m2",
    name: "M2 / Heavy Punch",
    category: "Offense",
    icon: "💥",
    description:
      "A slower and more powerful attack with different properties from a light punch.",
    section: "Combat Basics"
  },

  {
    id: "blocking",
    name: "Blocking",
    category: "Defense",
    icon: "🛡️",
    description:
      "Blocking reduces incoming damage and allows you to defend against attacks without immediately dodging.",
    section: "Combat Basics"
  },

  {
    id: "dodging",
    name: "Dodging",
    category: "Movement",
    icon: "↔",
    description:
      "Dodges allow fighters to avoid incoming attacks and reposition during combat.",
    section: "Combat Basics"
  },

  {
    id: "perfect-dodge",
    name: "Perfect Dodge",
    category: "Defense",
    icon: "✦",
    description:
      "A well-timed dodge can create an opening for a counterattack.",
    section: "Advanced Combat"
  },

  {
    id: "countering",
    name: "Countering",
    category: "Offense",
    icon: "⚔",
    description:
      "Punish an opponent by landing an attack while they are vulnerable during their own attack.",
    section: "Advanced Combat"
  },

  {
    id: "feinting",
    name: "Feinting",
    category: "Technique",
    icon: "↩",
    description:
      "Cancel or alter an attack to manipulate an opponent's defensive timing.",
    section: "Advanced Combat"
  },

  {
    id: "iframes",
    name: "I-Frames",
    category: "Defense",
    icon: "◇",
    description:
      "Certain movement interactions can temporarily prevent attacks from connecting.",
    section: "Advanced Combat"
  },

  {
    id: "ultimate",
    name: "Ultimate",
    category: "Special",
    icon: "🔥",
    description:
      "Build ultimate charge throughout the fight and unleash your style's ultimate attack when available.",
    section: "Special Systems"
  },

  {
    id: "backdash",
    name: "Backdash",
    category: "Movement",
    icon: "⏪",
    description:
      "Quickly move backwards to create distance or avoid incoming attacks.",
    section: "Special Systems"
  },

  {
    id: "backdash-degradation",
    name: "Backdash Degradation",
    category: "Movement",
    icon: "↓",
    description:
      "Repeated movement can interact with movement efficiency and spacing during combat.",
    section: "Special Systems"
  },

  {
    id: "style-abilities",
    name: "Style Abilities",
    category: "Styles",
    icon: "🥊",
    description:
      "Individual boxing styles can introduce unique abilities, passives and special mechanics.",
    section: "Special Systems"
  }

];


/* =========================================================
   GLOBAL DATABASE
   ========================================================= */

window.UBG_MECHANICS = mechanics;


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   SEARCH DATA
   ========================================================= */

function getSearchResults(query) {

  const search = query
    .trim()
    .toLowerCase();

  if (!search) {
    return [];
  }

  return mechanics
    .filter(mechanic => {

      const searchableText = [
        mechanic.name,
        mechanic.category,
        mechanic.section,
        mechanic.description
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);

    })
    .slice(0, 8);

}


/* =========================================================
   SEARCH RESULT DROPDOWN
   ========================================================= */

function createSearchResults(results) {

  let dropdown = document.getElementById("mechanicsSearchResults");

  if (!dropdown) {

    dropdown = document.createElement("div");

    dropdown.id = "mechanicsSearchResults";

    dropdown.className = "mechanics-search-results";

    const searchBox = document.querySelector(".search-box");

    if (searchBox) {
      searchBox.appendChild(dropdown);
    }

  }

  if (!results.length) {

    dropdown.innerHTML = `
      <div class="search-empty">
        No mechanics found.
      </div>
    `;

    dropdown.classList.add("visible");

    return;
  }


  dropdown.innerHTML = results
    .map(mechanic => {

      return `
        <a
          href="mechanic.html?mechanic=${encodeURIComponent(mechanic.id)}"
          class="mechanics-search-result"
        >

          <span class="search-result-icon">
            ${escapeHTML(mechanic.icon)}
          </span>

          <span class="search-result-info">

            <strong>
              ${escapeHTML(mechanic.name)}
            </strong>

            <small>
              ${escapeHTML(mechanic.category)}
            </small>

          </span>

        </a>
      `;

    })
    .join("");

  dropdown.classList.add("visible");

}


/* =========================================================
   HIDE SEARCH RESULTS
   ========================================================= */

function hideSearchResults() {

  const dropdown =
    document.getElementById("mechanicsSearchResults");

  if (dropdown) {
    dropdown.classList.remove("visible");
  }

}


/* =========================================================
   SEARCH INITIALIZATION
   ========================================================= */

function initializeSearch() {

  const search =
    document.getElementById("globalSearch");

  if (!search) {
    return;
  }


  search.addEventListener("input", function () {

    const query = search.value;

    if (!query.trim()) {
      hideSearchResults();
      return;
    }

    const results =
      getSearchResults(query);

    createSearchResults(results);

  });


  search.addEventListener("focus", function () {

    if (search.value.trim()) {

      const results =
        getSearchResults(search.value);

      createSearchResults(results);

    }

  });


  search.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      search.value = "";

      hideSearchResults();

      search.blur();

    }

  });

}


/* =========================================================
   GLOBAL KEYBOARD SHORTCUT
   ========================================================= */

function initializeKeyboardShortcuts() {

  document.addEventListener("keydown", function (event) {

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      const search =
        document.getElementById("globalSearch");

      if (search) {

        search.focus();

        search.select();

      }

    }

  });

}


/* =========================================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
   ========================================================= */

function initializeOutsideClick() {

  document.addEventListener("click", function (event) {

    const searchBox =
      document.querySelector(".search-box");

    const results =
      document.getElementById("mechanicsSearchResults");

    if (!searchBox || !results) {
      return;
    }

    if (!searchBox.contains(event.target)) {
      hideSearchResults();
    }

  });

}


/* =========================================================
   ACTIVE SECTION TRACKING
   ========================================================= */

function initializeSectionObserver() {

  const sections = [
    document.getElementById("combat-basics"),
    document.getElementById("advanced-combat"),
    document.getElementById("special-systems")
  ].filter(Boolean);


  const links =
    document.querySelectorAll(
      '.info-panel a[href^="#"]'
    );


  if (!sections.length || !links.length) {
    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          const id =
            entry.target.id;


          links.forEach(link => {

            link.classList.remove("active-section");

            if (
              link.getAttribute("href") === `#${id}`
            ) {

              link.classList.add("active-section");

            }

          });

        });

      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0
      }
    );


  sections.forEach(section => {
    observer.observe(section);
  });

}


/* =========================================================
   SMOOTH INTERNAL NAVIGATION
   ========================================================= */

function initializeSmoothLinks() {

  const links =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  links.forEach(link => {

    link.addEventListener("click", function (event) {

      const targetID =
        link.getAttribute("href");

      if (
        !targetID ||
        targetID === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetID);

      if (!target) {
        return;
      }


      event.preventDefault();


      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });


      history.replaceState(
        null,
        "",
        targetID
      );

    });

  });

}


/* =========================================================
   ADD SEARCH DROPDOWN STYLES
   ========================================================= */

function injectSearchStyles() {

  if (
    document.getElementById(
      "mechanicsSearchInjectedStyles"
    )
  ) {
    return;
  }


  const style =
    document.createElement("style");

  style.id =
    "mechanicsSearchInjectedStyles";


  style.textContent = `

    .search-box {
      position: relative;
    }

    .mechanics-search-results {
      position: absolute;

      top: calc(100% + 8px);
      left: 0;
      right: 0;

      min-width: 280px;

      padding: 6px;

      background: #111;

      border: 1px solid #303030;

      border-radius: 8px;

      box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.55);

      opacity: 0;

      visibility: hidden;

      transform: translateY(-4px);

      transition:
        opacity 0.15s ease,
        transform 0.15s ease,
        visibility 0.15s ease;

      z-index: 2000;
    }


    .mechanics-search-results.visible {
      opacity: 1;

      visibility: visible;

      transform: translateY(0);
    }


    .mechanics-search-result {
      display: flex;

      align-items: center;

      gap: 10px;

      padding: 10px;

      border-radius: 6px;

      color: #aaa;

      transition:
        background 0.15s ease,
        color 0.15s ease;
    }


    .mechanics-search-result:hover {
      background: #1b1b1b;

      color: white;
    }


    .search-result-icon {
      width: 32px;
      height: 32px;

      display: flex;

      align-items: center;
      justify-content: center;

      background: #1c1c1c;

      border: 1px solid #303030;

      border-radius: 6px;

      flex-shrink: 0;
    }


    .search-result-info {
      display: flex;

      flex-direction: column;

      min-width: 0;
    }


    .search-result-info strong {
      color: #eee;

      font-size: 11px;
    }


    .search-result-info small {
      margin-top: 1px;

      color: #666;

      font-size: 9px;

      text-transform: uppercase;

      letter-spacing: 0.7px;
    }


    .search-empty {
      padding: 14px;

      color: #666;

      font-size: 11px;

      text-align: center;
    }


    .active-section {
      background:
        rgba(229, 57, 53, 0.08);

      color: white !important;
    }


    .active-section span {
      color:
        #ff4b47 !important;
    }

  `;


  document.head.appendChild(style);

}


/* =========================================================
   CARD HOVER ACCESSIBILITY
   ========================================================= */

function initializeCardKeyboardNavigation() {

  const cards =
    document.querySelectorAll(
      ".mechanic-card"
    );


  cards.forEach(card => {

    card.addEventListener("keydown", function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        card.click();

      }

    });

  });

}


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

function initializeMechanicsPage() {

  initializeSearch();

  initializeKeyboardShortcuts();

  initializeOutsideClick();

  initializeSectionObserver();

  initializeSmoothLinks();

  injectSearchStyles();

  initializeCardKeyboardNavigation();

}


/* =========================================================
   START
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeMechanicsPage
  );

} else {

  initializeMechanicsPage();

}

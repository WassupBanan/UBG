/* =========================================================
   UNTITLED BOXING GAME
   FAN WIKI — MECHANICS DATABASE + ARTICLE SYSTEM
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
    section: "Combat Basics",

    overview:
      "Health is one of the most important resources in Untitled Boxing Game. It represents how much damage your fighter can take before losing the fight.",

    howItWorks: [
      "Taking successful hits from your opponent reduces your health.",
      "Losing health puts you closer to being knocked out.",
      "Protecting your health becomes increasingly important as a fight progresses.",
      "Avoiding unnecessary trades can preserve your advantage."
    ],

    tips: [
      "Do not trade damage unnecessarily when you already have the advantage.",
      "Use blocking and movement to reduce the amount of damage you take.",
      "Pay attention to your opponent's offensive patterns instead of focusing only on attacking."
    ],

    mistakes: [
      "Taking unnecessary hits just to land one attack.",
      "Ignoring your health while chasing an opponent.",
      "Continuing predictable attacks after losing a large amount of health."
    ],

    related: ["blocking", "dodging", "stamina"]
  },


  {
    id: "stamina",
    name: "Stamina",
    category: "Resource",
    icon: "⚡",
    description:
      "Stamina is consumed by many offensive and movement actions and must be managed carefully.",
    section: "Combat Basics",

    overview:
      "Stamina represents the fighter's ability to continue performing actions during a fight. Managing it properly prevents you from running out of options at the wrong moment.",

    howItWorks: [
      "Certain actions consume stamina.",
      "Repeatedly performing stamina-consuming actions can leave you with fewer options.",
      "Good stamina management allows you to maintain pressure without exhausting yourself.",
      "Stamina becomes especially important during extended exchanges."
    ],

    tips: [
      "Avoid spending stamina simply because you can.",
      "Give yourself opportunities to recover when you are not under pressure.",
      "Think about what you will do after an exchange before committing to another action."
    ],

    mistakes: [
      "Constantly using movement without a purpose.",
      "Entering an exchange without enough resources to continue.",
      "Panicking and repeatedly performing actions when pressured."
    ],

    related: ["health", "dodging", "backdash"]
  },


  {
    id: "m1",
    name: "M1 / Light Punch",
    category: "Offense",
    icon: "👊",
    description:
      "A fast basic attack used to pressure opponents, extend combos and deal damage.",
    section: "Combat Basics",

    overview:
      "The M1 or Light Punch is one of the fundamental offensive tools in UBG. It is generally used to start or continue offensive interactions and test an opponent's defence.",

    howItWorks: [
      "M1 performs a light punch.",
      "Light attacks are generally faster and easier to use than heavier attacks.",
      "Successful attacks can create opportunities for continued pressure.",
      "M1 attacks can also be used to test how an opponent reacts."
    ],

    tips: [
      "Use M1 attacks with a purpose rather than repeatedly clicking.",
      "Pay attention to how your opponent responds to your pressure.",
      "Mix your timing so your attacks do not become predictable."
    ],

    mistakes: [
      "Mindlessly spamming M1.",
      "Continuing an attack pattern after your opponent has adapted.",
      "Attacking without considering your opponent's possible counter."
    ],

    related: ["m2", "blocking", "countering", "feinting"]
  },


  {
    id: "m2",
    name: "M2 / Heavy Punch",
    category: "Offense",
    icon: "💥",
    description:
      "A slower and more powerful attack with different properties from a light punch.",
    section: "Combat Basics",

    overview:
      "The M2 or Heavy Punch provides a different offensive option from the standard light punch. Its slower timing means that choosing the right moment to use it is important.",

    howItWorks: [
      "M2 performs a heavier punch.",
      "Heavy attacks generally require more commitment than light attacks.",
      "A well-timed heavy attack can punish predictable behaviour.",
      "Using heavy attacks carelessly can give your opponent an opportunity to react."
    ],

    tips: [
      "Look for moments where your opponent is committed.",
      "Mix heavy attacks into your offence instead of relying on them constantly.",
      "Use your opponent's habits to decide when a heavier attack is appropriate."
    ],

    mistakes: [
      "Using heavy attacks at predictable times.",
      "Throwing them without reading your opponent.",
      "Assuming a stronger attack is automatically the better attack."
    ],

    related: ["m1", "countering", "feinting", "blocking"]
  },


  {
    id: "blocking",
    name: "Blocking",
    category: "Defense",
    icon: "🛡️",
    description:
      "Blocking reduces incoming damage and allows you to defend against attacks without immediately dodging.",
    section: "Combat Basics",

    overview:
      "Blocking is a fundamental defensive option. Instead of trying to avoid every attack, a player can use their guard to absorb pressure and wait for a better opportunity.",

    howItWorks: [
      "Holding the block input puts your fighter into a defensive state.",
      "Incoming attacks may be defended against while blocking.",
      "Blocking allows you to remain relatively close to your opponent.",
      "Blocking is most effective when combined with movement and good timing."
    ],

    tips: [
      "Do not remain blocking indefinitely.",
      "Use blocking when you expect an attack rather than reacting blindly.",
      "Look for opportunities to leave block and regain control of the exchange."
    ],

    mistakes: [
      "Holding block constantly.",
      "Blocking without watching what your opponent is doing.",
      "Forgetting that defence should eventually lead into a response."
    ],

    related: ["dodging", "perfect-dodge", "countering", "feinting"]
  },


  {
    id: "dodging",
    name: "Dodging",
    category: "Movement",
    icon: "↔",
    description:
      "Dodges allow fighters to avoid incoming attacks and reposition during combat.",
    section: "Combat Basics",

    overview:
      "Dodging allows a fighter to avoid attacks through movement rather than absorbing them with a block. Good dodging is based on timing, positioning and reading your opponent.",

    howItWorks: [
      "A dodge moves your fighter away from an incoming attack.",
      "Dodging can change the spacing between fighters.",
      "A successful dodge can create an opportunity to respond.",
      "Poorly timed dodges can leave you vulnerable."
    ],

    tips: [
      "Dodge with a reason instead of reacting to every movement.",
      "Watch your opponent's attack timing.",
      "Mix dodges with blocking so your defence remains difficult to predict."
    ],

    mistakes: [
      "Panic dodging.",
      "Dodging every time the opponent approaches.",
      "Using the same dodge direction repeatedly.",
      "Forgetting what you want to do after the dodge."
    ],

    related: ["perfect-dodge", "iframes", "backdash", "blocking"]
  },


  {
    id: "perfect-dodge",
    name: "Perfect Dodge",
    category: "Defense",
    icon: "✦",
    description:
      "A well-timed dodge can create an opening for a counterattack.",
    section: "Advanced Combat",

    overview:
      "Perfect Dodges reward precise defensive timing. Instead of simply moving away from an attack, the goal is to time your movement around the opponent's attack so that you gain a favourable opening.",

    howItWorks: [
      "The dodge must be timed around the opponent's incoming attack.",
      "A successful timing window can create an advantage.",
      "The resulting opening can allow you to transition into offence.",
      "The mechanic rewards reading the opponent rather than simply reacting to movement."
    ],

    tips: [
      "Study your opponent's attack rhythm.",
      "Do not attempt a perfect dodge against every attack.",
      "Practice recognizing when an opponent is actually committing."
    ],

    mistakes: [
      "Trying to perfect dodge everything.",
      "Dodging before the opponent has actually committed.",
      "Becoming predictable with your defensive timing."
    ],

    related: ["dodging", "countering", "iframes", "feinting"]
  },


  {
    id: "countering",
    name: "Countering",
    category: "Offense",
    icon: "⚔",
    description:
      "Punish an opponent by landing an attack while they are vulnerable during their own attack.",
    section: "Advanced Combat",

    overview:
      "Countering is about turning your opponent's commitment against them. Rather than attacking first, you wait for a predictable action and punish the resulting opening.",

    howItWorks: [
      "Observe the opponent's attack or movement.",
      "Recognize when they have committed to an action.",
      "Respond during the resulting opening.",
      "Use the successful counter to regain control of the exchange."
    ],

    tips: [
      "Learn your opponent's habits before attempting complicated counters.",
      "Look for repeated behaviours.",
      "Do not assume your opponent will always repeat the same action.",
      "Adapt when your opponent realizes you are waiting for a counter."
    ],

    mistakes: [
      "Trying to predict everything.",
      "Waiting too long for an opening that is not coming.",
      "Using the same counter repeatedly.",
      "Becoming more focused on countering than actually fighting."
    ],

    related: ["perfect-dodge", "feinting", "m1", "m2"]
  },


  {
    id: "feinting",
    name: "Feinting",
    category: "Technique",
    icon: "↩",
    description:
      "Cancel or alter an attack to manipulate an opponent's defensive timing.",
    section: "Advanced Combat",

    overview:
      "Feinting is a mind-game technique designed to make an opponent react to an attack that does not actually reach its expected conclusion.",

    howItWorks: [
      "Begin an offensive action that appears genuine.",
      "Alter or cancel the expected attack.",
      "Use the opponent's defensive reaction to create a new opening.",
      "Punish the reaction if the situation allows it."
    ],

    tips: [
      "Use feints occasionally rather than constantly.",
      "Pay attention to which attacks make your opponent react.",
      "A simple feint is often more effective than an overly complicated sequence."
    ],

    mistakes: [
      "Feinting without observing the opponent.",
      "Repeating the same fake until it becomes predictable.",
      "Trying to force a reaction that your opponent is not giving."
    ],

    related: ["countering", "m1", "m2", "blocking"]
  },


  {
    id: "iframes",
    name: "I-Frames",
    category: "Defense",
    icon: "◇",
    description:
      "Certain movement interactions can temporarily prevent attacks from connecting.",
    section: "Advanced Combat",

    overview:
      "I-frames, short for invulnerability frames, refer to brief periods during certain actions where attacks may not connect normally.",

    howItWorks: [
      "Certain movement or defensive interactions may provide a brief protected window.",
      "Correct timing determines whether an attack connects.",
      "Understanding these windows can improve defensive consistency.",
      "I-frames should be treated as a timing tool rather than a replacement for good positioning."
    ],

    tips: [
      "Learn the timing of the movement you are using.",
      "Do not rely on protected windows without considering spacing.",
      "Use your knowledge of timing to make better defensive decisions."
    ],

    mistakes: [
      "Assuming every dodge provides the same protection.",
      "Using movement randomly and hoping to avoid attacks.",
      "Ignoring positioning because of confidence in a defensive window."
    ],

    related: ["dodging", "perfect-dodge", "backdash", "countering"]
  },


  {
    id: "ultimate",
    name: "Ultimate",
    category: "Special",
    icon: "🔥",
    description:
      "Build ultimate charge throughout the fight and unleash your style's ultimate attack when available.",
    section: "Special Systems",

    overview:
      "The Ultimate system gives styles access to a powerful special attack once the necessary conditions are met. Using it effectively requires deciding when the potential reward is worth the commitment.",

    howItWorks: [
      "Ultimate charge is built during a fight.",
      "Once available, the fighter can use their style's Ultimate.",
      "Different styles can have different Ultimate attacks.",
      "The timing of an Ultimate can be just as important as having one available."
    ],

    tips: [
      "Do not rush to use an Ultimate simply because it is available.",
      "Look for situations where your opponent has limited options.",
      "Consider how your opponent may react once they know your Ultimate is ready."
    ],

    mistakes: [
      "Using the Ultimate without considering positioning.",
      "Wasting an Ultimate because of impatience.",
      "Ignoring the opponent's ability to defend or escape."
    ],

    related: ["style-abilities", "countering", "dodging"]
  },


  {
    id: "backdash",
    name: "Backdash",
    category: "Movement",
    icon: "⏪",
    description:
      "Quickly move backwards to create distance or avoid incoming attacks.",
    section: "Special Systems",

    overview:
      "The Backdash is a movement option used to quickly create space between fighters. It can be used defensively, but it can also influence the rhythm and spacing of an exchange.",

    howItWorks: [
      "The fighter quickly moves backwards.",
      "The movement creates distance from the opponent.",
      "Backdashing can interrupt an opponent's expected engagement range.",
      "It can be combined with other movement and attacks to change the pace of combat."
    ],

    tips: [
      "Use Backdash to create meaningful space.",
      "Do not automatically Backdash whenever the opponent approaches.",
      "Think about what you want to do after creating distance."
    ],

    mistakes: [
      "Backdashing constantly.",
      "Moving away when you actually have an opportunity to attack.",
      "Using Backdash without considering the opponent's next movement."
    ],

    related: ["dodging", "backdash-degradation", "stamina"]
  },


  {
    id: "backdash-degradation",
    name: "Backdash Degradation",
    category: "Movement",
    icon: "↓",
    description:
      "Repeated movement can interact with movement efficiency and spacing during combat.",
    section: "Special Systems",

    overview:
      "Backdash Degradation describes the reduced effectiveness that can occur when repeatedly relying on backdash movement. It is an important consideration for players who frequently use backdash to control distance.",

    howItWorks: [
      "Repeatedly relying on the same movement option can become less effective.",
      "Movement patterns can become predictable to an experienced opponent.",
      "Spacing becomes harder to maintain when movement is used without variation.",
      "Changing your movement pattern helps prevent opponents from easily adapting."
    ],

    tips: [
      "Do not rely on Backdash as your only defensive option.",
      "Mix movement with blocking and other defensive choices.",
      "Change your rhythm when your opponent begins reading your movement."
    ],

    mistakes: [
      "Repeatedly backdashing in the same situation.",
      "Assuming distance automatically means safety.",
      "Ignoring the opponent's ability to chase or predict your movement."
    ],

    related: ["backdash", "dodging", "stamina", "countering"]
  },


  {
    id: "style-abilities",
    name: "Style Abilities",
    category: "Styles",
    icon: "🥊",
    description:
      "Individual boxing styles can introduce unique abilities, passives and special mechanics.",
    section: "Special Systems",

    overview:
      "Style Abilities are mechanics tied to individual fighting styles. They are one of the major reasons different styles can play very differently despite sharing the same basic controls.",

    howItWorks: [
      "Different styles can provide unique abilities or passive effects.",
      "A style's abilities influence how it should be played.",
      "Understanding your own style is only part of the equation; you should also understand what your opponent's style can do.",
      "Style-specific mechanics can change how players approach offence, defence and movement."
    ],

    tips: [
      "Read your style's strengths and weaknesses before building a strategy.",
      "Learn what your opponent's style is capable of.",
      "Choose your actions based on the specific matchup rather than using one strategy every game."
    ],

    mistakes: [
      "Playing every style exactly the same way.",
      "Ignoring the opponent's style-specific options.",
      "Using an ability simply because it is available."
    ],

    related: ["ultimate", "countering", "dodging", "blocking"]
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

  let dropdown =
    document.getElementById("mechanicsSearchResults");

  if (!dropdown) {

    dropdown = document.createElement("div");

    dropdown.id = "mechanicsSearchResults";

    dropdown.className =
      "mechanics-search-results";

    const searchBox =
      document.querySelector(".search-box");

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

    createSearchResults(
      getSearchResults(query)
    );

  });


  search.addEventListener("focus", function () {

    if (search.value.trim()) {

      createSearchResults(
        getSearchResults(search.value)
      );

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
      document.getElementById(
        "mechanicsSearchResults"
      );

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

            link.classList.remove(
              "active-section"
            );

            if (
              link.getAttribute("href") ===
              `#${id}`
            ) {

              link.classList.add(
                "active-section"
              );

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

    link.addEventListener(
      "click",
      function (event) {

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

      }
    );

  });

}


/* =========================================================
   MECHANIC ARTICLE RENDERER
   ========================================================= */

function renderMechanicArticle() {

  const article =
    document.getElementById(
      "mechanicArticle"
    );

  if (!article) {
    return;
  }


  const params =
    new URLSearchParams(
      window.location.search
    );


  const mechanicID =
    params.get("mechanic");


  const mechanic =
    mechanics.find(
      item => item.id === mechanicID
    );


  if (!mechanic) {

    article.innerHTML = `

      <div class="mechanic-not-found">

        <div class="mechanic-not-found-icon">
          ⚙
        </div>

        <span class="article-eyebrow">
          MECHANICS
        </span>

        <h1>
          Mechanic Not Found
        </h1>

        <p>
          The mechanic you're looking for doesn't
          exist in the current wiki database.
        </p>

        <a
          href="mechanics.html"
          class="mechanic-back-button"
        >
          ← BACK TO MECHANICS
        </a>

      </div>

    `;

    return;
  }


  document.title =
    `${mechanic.name} — UBG Wiki`;


  const currentIndex =
    mechanics.findIndex(
      item => item.id === mechanic.id
    );


  const previous =
    mechanics[
      (currentIndex - 1 + mechanics.length) %
      mechanics.length
    ];


  const next =
    mechanics[
      (currentIndex + 1) %
      mechanics.length
    ];


  const relatedMechanics =
    mechanic.related
      .map(id =>
        mechanics.find(
          item => item.id === id
        )
      )
      .filter(Boolean);


  article.innerHTML = `

    <!-- BREADCRUMB -->

    <div class="mechanic-breadcrumb">

      <a href="index.html">
        Main Page
      </a>

      <span>›</span>

      <a href="mechanics.html">
        Mechanics
      </a>

      <span>›</span>

      <span>
        ${escapeHTML(mechanic.name)}
      </span>

    </div>


    <!-- ARTICLE HEADER -->

    <header class="mechanic-header">

      <div class="mechanic-header-icon">
        ${escapeHTML(mechanic.icon)}
      </div>

      <div class="mechanic-header-content">

        <span class="article-eyebrow">
          ${escapeHTML(mechanic.category)}
        </span>

        <h1>
          ${escapeHTML(mechanic.name)}
        </h1>

        <p>
          ${escapeHTML(mechanic.description)}
        </p>

        <div class="mechanic-meta">

          <span>
            ${escapeHTML(mechanic.section)}
          </span>

          <span>
            UBG MECHANIC
          </span>

        </div>

      </div>

    </header>


    <!-- OVERVIEW -->

    <section class="mechanic-section">

      <div class="mechanic-section-heading">

        <span>01</span>

        <div>
          <small>OVERVIEW</small>
          <h2>What is ${escapeHTML(mechanic.name)}?</h2>
        </div>

      </div>

      <div class="mechanic-panel">

        <p>
          ${escapeHTML(mechanic.overview)}
        </p>

      </div>

    </section>


    <!-- HOW IT WORKS -->

    <section class="mechanic-section">

      <div class="mechanic-section-heading">

        <span>02</span>

        <div>
          <small>MECHANIC</small>
          <h2>How It Works</h2>
        </div>

      </div>

      <div class="mechanic-points">

        ${mechanic.howItWorks
          .map((point, index) => `
            <div class="mechanic-point">

              <div class="mechanic-point-number">
                ${String(index + 1).padStart(2, "0")}
              </div>

              <p>
                ${escapeHTML(point)}
              </p>

            </div>
          `)
          .join("")}

      </div>

    </section>


    <!-- TIPS -->

    <section class="mechanic-section">

      <div class="mechanic-section-heading">

        <span>03</span>

        <div>
          <small>GAMEPLAY</small>
          <h2>Tips & Strategy</h2>
        </div>

      </div>

      <div class="mechanic-tips">

        ${mechanic.tips
          .map(tip => `
            <div class="mechanic-tip">

              <span>✓</span>

              <p>
                ${escapeHTML(tip)}
              </p>

            </div>
          `)
          .join("")}

      </div>

    </section>


    <!-- COMMON MISTAKES -->

    <section class="mechanic-section">

      <div class="mechanic-section-heading">

        <span>04</span>

        <div>
          <small>AVOID</small>
          <h2>Common Mistakes</h2>
        </div>

      </div>

      <div class="mechanic-mistakes">

        ${mechanic.mistakes
          .map(mistake => `
            <div class="mechanic-mistake">

              <span>×</span>

              <p>
                ${escapeHTML(mistake)}
              </p>

            </div>
          `)
          .join("")}

      </div>

    </section>


    <!-- RELATED -->

    <section class="mechanic-section">

      <div class="mechanic-section-heading">

        <span>05</span>

        <div>
          <small>EXPLORE</small>
          <h2>Related Mechanics</h2>
        </div>

      </div>

      <div class="related-mechanics">

        ${relatedMechanics
          .map(related => `
            <a
              href="mechanic.html?mechanic=${encodeURIComponent(related.id)}"
              class="related-mechanic"
            >

              <span class="related-icon">
                ${escapeHTML(related.icon)}
              </span>

              <span>

                <strong>
                  ${escapeHTML(related.name)}
                </strong>

                <small>
                  ${escapeHTML(related.category)}
                </small>

              </span>

              <b>→</b>

            </a>
          `)
          .join("")}

      </div>

    </section>


    <!-- PREVIOUS / NEXT -->

    <div class="mechanic-navigation">

      <a
        href="mechanic.html?mechanic=${encodeURIComponent(previous.id)}"
        class="mechanic-nav-card"
      >

        <small>
          ← PREVIOUS
        </small>

        <strong>
          ${escapeHTML(previous.name)}
        </strong>

      </a>


      <a
        href="mechanics.html"
        class="mechanic-nav-center"
      >
        ALL MECHANICS
      </a>


      <a
        href="mechanic.html?mechanic=${encodeURIComponent(next.id)}"
        class="mechanic-nav-card next"
      >

        <small>
          NEXT →
        </small>

        <strong>
          ${escapeHTML(next.name)}
        </strong>

      </a>

    </div>


    <!-- WIKI NOTE -->

    <div class="mechanic-update-note">

      <span>⚠</span>

      <p>
        <strong>Wiki note:</strong>
        Mechanics may change as Untitled Boxing Game
        receives updates. Numerical values, timing,
        frame data and other technical details should
        be verified against the current version of the game.
      </p>

    </div>

  `;

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

    card.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          card.click();

        }

      }
    );

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

  renderMechanicArticle();

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

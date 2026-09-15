/* =========================================================
   UBG ADMIN PANEL
   STYLE DATABASE EDITOR
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * styles.js loads before this file.
     *
     * Therefore:
     *
     * window.UBG_STYLES
     *
     * contains your real style database.
     */

    if (!window.UBG_STYLES) {

        alert(
            "UBG_STYLES could not be loaded. Make sure styles.js exists."
        );

        return;
    }


    /* =====================================================
       DATABASE
       ===================================================== */

    const originalStyles =
        JSON.parse(
            JSON.stringify(window.UBG_STYLES)
        );


    let styles =
        loadLocalDatabase();


    let selectedIndex = null;

    let activeRarity = "all";

    let searchTerm = "";


    /* =====================================================
       LOCAL STORAGE
       ===================================================== */

    function loadLocalDatabase() {

        const saved =
            localStorage.getItem("UBG_ADMIN_STYLES");

        if (!saved) {

            return JSON.parse(
                JSON.stringify(originalStyles)
            );

        }

        try {

            return JSON.parse(saved);

        } catch {

            return JSON.parse(
                JSON.stringify(originalStyles)
            );

        }

    }


    function saveLocalDatabase() {

        localStorage.setItem(
            "UBG_ADMIN_STYLES",
            JSON.stringify(styles)
        );

        updateSaveIndicator(false);
    }


    function updateSaveIndicator(unsaved) {

        const indicator =
            document.getElementById("saveIndicator");

        if (!indicator) return;

        if (unsaved) {

            indicator.classList.add("unsaved");

            indicator.innerHTML =
                `<span></span> Unsaved changes`;

        } else {

            indicator.classList.remove("unsaved");

            indicator.innerHTML =
                `<span></span> All changes saved`;

        }

    }


    /* =====================================================
       NAVIGATION
       ===================================================== */

    const navItems =
        document.querySelectorAll(".nav-item");


    const sections = {

        dashboard:
            document.getElementById("dashboardSection"),

        styles:
            document.getElementById("stylesSection"),

        mechanics:
            document.getElementById("mechanicsSection"),

        patches:
            document.getElementById("patchesSection"),

        data:
            document.getElementById("dataSection")

    };


    const pageTitle =
        document.getElementById("pageTitle");


    function openSection(sectionName) {

        Object.values(sections).forEach(section => {

            section?.classList.remove("active");

        });


        sections[sectionName]?.classList.add("active");


        navItems.forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.section === sectionName
            );

        });


        const titles = {

            dashboard: "Dashboard",
            styles: "Style Editor",
            mechanics: "Mechanics",
            patches: "Patch Notes",
            data: "Data Management"

        };


        pageTitle.textContent =
            titles[sectionName] || "Dashboard";

    }


    navItems.forEach(item => {

        item.addEventListener("click", () => {

            openSection(
                item.dataset.section
            );

        });

    });


    document.querySelectorAll(
        "[data-section-jump]"
    ).forEach(button => {

        button.addEventListener("click", () => {

            openSection(
                button.dataset.sectionJump
            );

        });

    });


    /* =====================================================
       DASHBOARD
       ===================================================== */

    function updateDashboard() {

        document.getElementById(
            "totalStyles"
        ).textContent = styles.length;


        document.getElementById(
            "legendaryCount"
        ).textContent =
            styles.filter(
                style =>
                    style.rarity === "Legendary"
            ).length;


        document.getElementById(
            "shinyCount"
        ).textContent =
            styles.filter(
                style =>
                    style.rarity === "Shiny"
            ).length;


        document.getElementById(
            "wipCount"
        ).textContent =
            styles.filter(
                style => style.wip
            ).length;

    }


    /* =====================================================
       STYLE LIST
       ===================================================== */

    function getFilteredStyles() {

        const search =
            searchTerm
                .trim()
                .toLowerCase();


        return styles.filter(style => {

            const rarityMatch =
                activeRarity === "all" ||
                style.rarity === activeRarity;


            const searchMatch =
                !search ||
                style.name
                    .toLowerCase()
                    .includes(search) ||

                style.ranked
                    .toLowerCase()
                    .includes(search);


            return rarityMatch && searchMatch;

        });

    }


    function renderStyleList() {

        const list =
            document.getElementById(
                "styleList"
            );


        const filtered =
            getFilteredStyles();


        if (!filtered.length) {

            list.innerHTML = `
                <div style="
                    padding:25px;
                    color:#777;
                    font-size:11px;
                    text-align:center;
                ">
                    No styles found.
                </div>
            `;

            return;
        }


        list.innerHTML =
            filtered.map(style => {

                const realIndex =
                    styles.indexOf(style);


                return `

                    <button
                        class="style-list-item
                        ${selectedIndex === realIndex
                            ? "active"
                            : ""
                        }"
                        data-index="${realIndex}"
                    >

                        <div>

                            <div class="style-list-name">
                                ${escapeHTML(style.name)}
                            </div>

                            <span class="style-list-meta">
                                ${escapeHTML(style.rarity)}
                                ·
                                ${escapeHTML(style.ranked)}
                            </span>

                        </div>

                        ${
                            style.wip
                                ? `<span class="wip-mini">WIP</span>`
                                : ""
                        }

                    </button>

                `;

            }).join("");


        list.querySelectorAll(
            ".style-list-item"
        ).forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectStyle(
                        Number(button.dataset.index)
                    );

                }
            );

        });

    }


    document
        .getElementById("adminStyleSearch")
        .addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value;

                renderStyleList();

            }
        );


    document
        .querySelectorAll(".rarity-tab")
        .forEach(tab => {

            tab.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".rarity-tab"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    tab.classList.add("active");


                    activeRarity =
                        tab.dataset.rarity;


                    renderStyleList();

                }
            );

        });


    /* =====================================================
       SELECT STYLE
       ===================================================== */

    function selectStyle(index) {

        selectedIndex = index;

        const style =
            styles[index];


        if (!style) return;


        document
            .getElementById("emptyEditor")
            .classList.add("hidden");


        document
            .getElementById("styleEditor")
            .classList.remove("hidden");


        populateEditor(style);

        renderStyleList();

    }


    /* =====================================================
       EDITOR
       ===================================================== */

    const fields = {

        name:
            document.getElementById("fieldName"),

        ranked:
            document.getElementById("fieldRanked"),

        rarity:
            document.getElementById("fieldRarity"),

        baseStyle:
            document.getElementById("fieldBaseStyle"),

        animation:
            document.getElementById("fieldAnimation"),

        wip:
            document.getElementById("fieldWip"),

        m1Damage:
            document.getElementById("fieldM1"),

        m2Damage:
            document.getElementById("fieldM2"),

        counterDamage:
            document.getElementById("fieldCounter"),

        ultimateDamage:
            document.getElementById("fieldUltimateDamage"),

        hp:
            document.getElementById("fieldHP"),

        ultimate:
            document.getElementById("fieldUltimate"),

        dash:
            document.getElementById("fieldDash"),

        range:
            document.getElementById("fieldRange"),

        block:
            document.getElementById("fieldBlock"),

        passive:
            document.getElementById("fieldPassive"),

        ability:
            document.getElementById("fieldAbility"),

        ultimateName:
            document.getElementById("fieldUltimateName"),

        description:
            document.getElementById("fieldDescription"),

        strengths:
            document.getElementById("fieldStrengths"),

        weaknesses:
            document.getElementById("fieldWeaknesses"),

        obtain:
            document.getElementById("fieldObtain")

    };


    function populateEditor(style) {

        document.getElementById(
            "editorStyleName"
        ).textContent =
            style.name;


        document.getElementById(
            "editorStyleRarity"
        ).textContent =
            `${style.rarity} · ${style.ranked}`;


        Object.entries(fields)
            .forEach(([key, field]) => {

                if (!field) return;


                if (field.type === "checkbox") {

                    field.checked =
                        Boolean(style[key]);

                } else {

                    field.value =
                        style[key] ?? "";

                }

            });


        renderPreview(style);

    }


    /* =====================================================
       EDITOR CHANGE TRACKING
       ===================================================== */

    Object.entries(fields)
        .forEach(([key, field]) => {

            if (!field) return;


            field.addEventListener(
                "input",
                () => {

                    updatePreviewFromEditor();

                    updateSaveIndicator(true);

                }
            );


            field.addEventListener(
                "change",
                () => {

                    updatePreviewFromEditor();

                    updateSaveIndicator(true);

                }
            );

        });


    /* =====================================================
       SAVE STYLE
       ===================================================== */

    document
        .getElementById("styleEditor")
        .addEventListener(
            "submit",
            event => {

                event.preventDefault();


                if (selectedIndex === null)
                    return;


                const style =
                    styles[selectedIndex];


                Object.entries(fields)
                    .forEach(([key, field]) => {

                        if (!field) return;


                        if (
                            field.type === "checkbox"
                        ) {

                            style[key] =
                                field.checked;

                        } else if (
                            field.type === "number"
                        ) {

                            style[key] =
                                field.value === ""
                                    ? ""
                                    : Number(field.value);

                        } else {

                            style[key] =
                                field.value;

                        }

                    });


                saveLocalDatabase();

                updateDashboard();

                renderStyleList();

                populateEditor(style);


                showToast(
                    "Style saved locally."
                );

            }
        );


    /* =====================================================
       RESET CURRENT STYLE
       ===================================================== */

    document
        .getElementById("resetStyleButton")
        .addEventListener(
            "click",
            () => {

                if (selectedIndex === null)
                    return;


                const original =
                    originalStyles[selectedIndex];


                if (!original) return;


                styles[selectedIndex] =
                    JSON.parse(
                        JSON.stringify(original)
                    );


                saveLocalDatabase();

                populateEditor(
                    styles[selectedIndex]
                );

                renderStyleList();


                showToast(
                    "Style reset."
                );

            }
        );


    /* =====================================================
       DELETE STYLE
       ===================================================== */

    document
        .getElementById("deleteStyleButton")
        .addEventListener(
            "click",
            () => {

                if (selectedIndex === null)
                    return;


                const style =
                    styles[selectedIndex];


                if (
                    !confirm(
                        `Delete "${style.name}" from the local database?`
                    )
                ) {

                    return;

                }


                styles.splice(
                    selectedIndex,
                    1
                );


                selectedIndex = null;


                saveLocalDatabase();

                updateDashboard();

                renderStyleList();


                document
                    .getElementById("styleEditor")
                    .classList.add("hidden");


                document
                    .getElementById("emptyEditor")
                    .classList.remove("hidden");


                showToast(
                    "Style deleted locally."
                );

            }
        );


    /* =====================================================
       NEW STYLE
       ===================================================== */

    document
        .getElementById("newStyleButton")
        .addEventListener(
            "click",
            () => {

                const newStyle = {

                    name: "New Style",

                    rarity: "Uncommon",

                    ranked: "NEW",

                    hp: 100,

                    dash: "Average",

                    range: "Average",

                    block: "Average",

                    ultimate: "50%",

                    trail: "None",

                    passive: "None",

                    ability: "None",

                    ultimateName: "New Ultimate",

                    animation: "AttackPlaceholder.png",

                    description:
                        "Add a description.",

                    strengths:
                        "Add strengths.",

                    weaknesses:
                        "Add weaknesses.",

                    obtain:
                        "Add obtaining information.",

                    m1Damage: "",

                    m2Damage: "",

                    counterDamage: "",

                    ultimateDamage: ""

                };


                styles.push(newStyle);


                saveLocalDatabase();

                updateDashboard();


                selectedIndex =
                    styles.length - 1;


                renderStyleList();

                selectStyle(selectedIndex);


                openSection("styles");


                showToast(
                    "New style created."
                );

            }
        );


    /* =====================================================
       PREVIEW
       ===================================================== */

    function updatePreviewFromEditor() {

        if (selectedIndex === null)
            return;


        const previewStyle = {};


        Object.entries(fields)
            .forEach(([key, field]) => {

                if (
                    field.type === "checkbox"
                ) {

                    previewStyle[key] =
                        field.checked;

                } else {

                    previewStyle[key] =
                        field.value;

                }

            });


        renderPreview(
            previewStyle
        );

    }


    function renderPreview(style) {

        const preview =
            document.getElementById(
                "stylePreview"
            );


        preview.innerHTML = `

            <div class="preview-top">

                <div class="preview-name">
                    ${escapeHTML(
                        style.name || "Unnamed Style"
                    )}
                </div>

                <div class="preview-rarity">
                    ${escapeHTML(
                        style.rarity || "Unknown"
                    )}
                </div>

            </div>


            <div class="preview-description">

                ${escapeHTML(
                    style.description ||
                    "No description."
                )}

            </div>


            <div class="preview-stats">

                ${previewStat(
                    "Health",
                    style.hp
                )}

                ${previewStat(
                    "M1",
                    style.m1Damage
                )}

                ${previewStat(
                    "M2",
                    style.m2Damage
                )}

                ${previewStat(
                    "Counter",
                    style.counterDamage
                )}

                ${previewStat(
                    "Ultimate",
                    style.ultimateDamage
                )}

            </div>

        `;

    }


    function previewStat(label, value) {

        return `

            <div class="preview-stat">

                <span>
                    ${escapeHTML(label)}
                </span>

                <strong>
                    ${
                        value === "" ||
                        value === undefined
                            ? "—"
                            : escapeHTML(value)
                    }
                </strong>

            </div>

        `;

    }


    /* =====================================================
       EXPORT
       ===================================================== */

    function exportDatabase() {

        const output = `/* =========================================================
   UNTITLED BOXING GAME
   FAN WIKI — STYLES DATABASE
   GENERATED BY UBG ADMIN PANEL
   ========================================================= */

const styles = ${JSON.stringify(
    styles,
    null,
    2
)};


/* =========================================================
   GLOBAL DATABASE
   ========================================================= */

window.UBG_STYLES = styles;


/* =========================================================
   HELPERS
   ========================================================= */

function getStyleImage(style) {
    return \`./assets/styles/\${style.animation}\`;
}

function getRarityClass(rarity) {
    return rarity
        .toLowerCase()
        .replace(/\\s+/g, "-");
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
`;


        const blob =
            new Blob(
                [output],
                {
                    type:
                        "application/javascript"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "styles.js";


        document.body.appendChild(link);

        link.click();

        link.remove();


        URL.revokeObjectURL(url);


        showToast(
            "styles.js exported."
        );

    }


    document
        .getElementById("exportDatabase")
        .addEventListener(
            "click",
            exportDatabase
        );


    document
        .getElementById("exportTop")
        .addEventListener(
            "click",
            exportDatabase
        );


    /* =====================================================
       RESET EVERYTHING
       ===================================================== */

    document
        .getElementById("resetDatabase")
        .addEventListener(
            "click",
            () => {

                if (
                    !confirm(
                        "Reset ALL local changes?"
                    )
                ) {

                    return;

                }


                localStorage.removeItem(
                    "UBG_ADMIN_STYLES"
                );


                styles =
                    JSON.parse(
                        JSON.stringify(
                            originalStyles
                        )
                    );


                selectedIndex = null;


                updateDashboard();

                renderStyleList();


                document
                    .getElementById(
                        "styleEditor"
                    )
                    .classList.add(
                        "hidden"
                    );


                document
                    .getElementById(
                        "emptyEditor"
                    )
                    .classList.remove(
                        "hidden"
                    );


                updateSaveIndicator(false);


                showToast(
                    "Database reset."
                );

            }
        );


    /* =====================================================
       PATCH NOTES
       ===================================================== */

    let patches =
        JSON.parse(
            localStorage.getItem(
                "UBG_ADMIN_PATCHES"
            ) || "[]"
        );


    function renderPatches() {

        const list =
            document.getElementById(
                "patchList"
            );


        if (!patches.length) {

            list.innerHTML = `

                <div class="patch-item">

                    <strong>
                        No patch notes yet.
                    </strong>

                    <p>
                        Changes can be documented here
                        as the wiki develops.
                    </p>

                </div>

            `;

            return;

        }


        list.innerHTML =
            patches.map(
                patch => `

                    <div class="patch-item">

                        <strong>
                            ${escapeHTML(
                                patch.title
                            )}
                        </strong>

                        <small>
                            ${escapeHTML(
                                patch.date
                            )}
                        </small>

                        <p>
                            ${escapeHTML(
                                patch.content
                            )}
                        </p>

                    </div>

                `
            ).join("");

    }


    document
        .getElementById("addPatchButton")
        .addEventListener(
            "click",
            () => {

                const title =
                    document.getElementById(
                        "patchTitle"
                    ).value.trim();


                const content =
                    document.getElementById(
                        "patchContent"
                    ).value.trim();


                if (!title || !content) {

                    showToast(
                        "Enter a title and changes first."
                    );

                    return;

                }


                patches.unshift({

                    title,

                    content,

                    date:
                        new Date()
                            .toLocaleDateString()

                });


                localStorage.setItem(
                    "UBG_ADMIN_PATCHES",
                    JSON.stringify(patches)
                );


                document.getElementById(
                    "patchTitle"
                ).value = "";


                document.getElementById(
                    "patchContent"
                ).value = "";


                renderPatches();


                showToast(
                    "Patch note added."
                );

            }
        );


    /* =====================================================
       TOAST
       ===================================================== */

    function showToast(message) {

        const old =
            document.querySelector(
                ".admin-toast"
            );


        old?.remove();


        const toast =
            document.createElement("div");


        toast.className =
            "admin-toast";


        toast.textContent =
            message;


        Object.assign(
            toast.style,
            {

                position: "fixed",

                right: "25px",

                bottom: "25px",

                background: "#181a1f",

                border:
                    "1px solid #30343d",

                color: "#fff",

                padding:
                    "12px 16px",

                borderRadius: "6px",

                fontSize: "11px",

                fontWeight: "700",

                zIndex: "9999",

                boxShadow:
                    "0 15px 40px rgba(0,0,0,.5)"

            }
        );


        document.body.appendChild(
            toast
        );


        setTimeout(
            () => toast.remove(),
            2500
        );

    }


    /* =====================================================
       ESCAPE HTML
       ===================================================== */

    function escapeHTML(value) {

        return String(
            value ?? ""
        )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

    }


    /* =====================================================
       INITIALISE
       ===================================================== */

    updateDashboard();

    renderStyleList();

    renderPatches();

    updateSaveIndicator(false);


    /* Open styles if URL says so */

    if (
        new URLSearchParams(
            window.location.search
        ).get("section") === "styles"
    ) {

        openSection("styles");

    }

});

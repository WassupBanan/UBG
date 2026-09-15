/* =========================================================
   UBG WIKI
   ADMIN DASHBOARD
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

const STORAGE_KEY = "UBG_ADMIN_STYLES";

let styles = [];

let selectedStyleName = null;

let activeRarity = "all";


/* =========================================================
   INITIALISE DATABASE
   ========================================================= */

function initialiseDatabase() {

    if (!window.UBG_STYLES) {

        console.error(
            "UBG_STYLES was not found. Make sure styles.js loads before admin.js."
        );

        return;

    }


    const stored =
        localStorage.getItem(STORAGE_KEY);


    if (stored) {

        try {

            styles =
                JSON.parse(stored);

        } catch (error) {

            console.error(
                "Could not load saved admin database.",
                error
            );

            styles =
                structuredClone(window.UBG_STYLES);

        }

    } else {

        styles =
            structuredClone(window.UBG_STYLES);

    }

}


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
        .replace(/\s+/g, "-");

}


/* =========================================================
   DASHBOARD STATS
   ========================================================= */

function updateDashboardStats() {

    const total =
        styles.length;


    const wip =
        styles.filter(
            style => style.wip
        ).length;


    const original =
        JSON.stringify(window.UBG_STYLES);


    const current =
        JSON.stringify(styles);


    const edited =
        original !== current
            ? 1
            : 0;


    document.getElementById(
        "totalStyles"
    ).textContent = total;


    document.getElementById(
        "wipStyles"
    ).textContent = wip;


    document.getElementById(
        "editedStyles"
    ).textContent =
        edited
            ? "YES"
            : "0";

}


/* =========================================================
   STYLE LIST
   ========================================================= */

function renderStyleList() {

    const list =
        document.getElementById(
            "adminStyleList"
        );


    if (!list) return;


    const search =
        document.getElementById(
            "adminSearch"
        )?.value
        .trim()
        .toLowerCase() || "";


    const filtered =
        styles.filter(style => {

            const matchesRarity =
                activeRarity === "all" ||
                style.rarity.toLowerCase() ===
                activeRarity.toLowerCase();


            const matchesSearch =
                !search ||

                style.name
                    .toLowerCase()
                    .includes(search)

                ||

                style.ranked
                    .toLowerCase()
                    .includes(search);


            return (
                matchesRarity &&
                matchesSearch
            );

        });


    list.innerHTML =
        filtered.map(style => `

            <button
                class="
                    admin-style-item
                    ${selectedStyleName === style.name
                        ? "active"
                        : ""}
                "
                data-style="${escapeHTML(style.name)}"
                type="button"
            >

                <div>

                    <div class="style-item-name">
                        ${escapeHTML(style.name)}
                    </div>

                    <div class="style-item-meta">

                        <span class="style-item-rarity">
                            ${escapeHTML(style.rarity)}
                        </span>

                        ${
                            style.wip
                                ? `<span class="style-item-rarity">
                                    WIP
                                   </span>`
                                : ""
                        }

                    </div>

                </div>


                ${
                    isStyleEdited(style.name)
                        ? `<span class="edited-dot"></span>`
                        : ""
                }

            </button>

        `).join("");


    list
        .querySelectorAll(".admin-style-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectStyle(
                        button.dataset.style
                    );

                }
            );

        });

}


/* =========================================================
   CHECK IF STYLE HAS BEEN EDITED
   ========================================================= */

function isStyleEdited(name) {

    const original =
        window.UBG_STYLES.find(
            style => style.name === name
        );


    const current =
        styles.find(
            style => style.name === name
        );


    if (!original || !current) {

        return false;

    }


    return JSON.stringify(original) !==
        JSON.stringify(current);

}


/* =========================================================
   SELECT STYLE
   ========================================================= */

function selectStyle(name) {

    const style =
        styles.find(
            item => item.name === name
        );


    if (!style) return;


    selectedStyleName =
        name;


    document
        .getElementById("emptyEditor")
        .classList.add("hidden");


    document
        .getElementById("styleEditor")
        .classList.remove("hidden");


    populateEditor(style);

    renderStyleList();

}


/* =========================================================
   POPULATE EDITOR
   ========================================================= */

function populateEditor(style) {

    document.getElementById(
        "editorTitle"
    ).textContent =
        style.name;


    document.getElementById(
        "editorRarity"
    ).textContent =
        style.rarity;


    document.getElementById(
        "fieldName"
    ).value =
        style.name || "";


    document.getElementById(
        "fieldRarity"
    ).value =
        style.rarity || "Uncommon";


    document.getElementById(
        "fieldRanked"
    ).value =
        style.ranked || "";


    document.getElementById(
        "fieldBaseStyle"
    ).value =
        style.baseStyle || "";


    document.getElementById(
        "fieldHP"
    ).value =
        style.hp ?? "";


    document.getElementById(
        "fieldDash"
    ).value =
        style.dash || "";


    document.getElementById(
        "fieldRange"
    ).value =
        style.range || "";


    document.getElementById(
        "fieldBlock"
    ).value =
        style.block || "";


    document.getElementById(
        "fieldUltimate"
    ).value =
        style.ultimate || "";


    document.getElementById(
        "fieldPassive"
    ).value =
        style.passive || "";


    document.getElementById(
        "fieldAbility"
    ).value =
        style.ability || "";


    document.getElementById(
        "fieldUltimateName"
    ).value =
        style.ultimateName || "";


    document.getElementById(
        "fieldDescription"
    ).value =
        style.description || "";


    document.getElementById(
        "fieldStrengths"
    ).value =
        style.strengths || "";


    document.getElementById(
        "fieldWeaknesses"
    ).value =
        style.weaknesses || "";


    document.getElementById(
        "fieldObtain"
    ).value =
        style.obtain || "";


    document.getElementById(
        "fieldAnimation"
    ).value =
        style.animation || "";


    document.getElementById(
        "fieldWIP"
    ).checked =
        Boolean(style.wip);

}


/* =========================================================
   READ EDITOR
   ========================================================= */

function readEditor() {

    return {

        name:
            document.getElementById(
                "fieldName"
            ).value.trim(),

        rarity:
            document.getElementById(
                "fieldRarity"
            ).value,

        ranked:
            document.getElementById(
                "fieldRanked"
            ).value.trim(),

        baseStyle:
            document.getElementById(
                "fieldBaseStyle"
            ).value.trim(),

        hp:
            Number(
                document.getElementById(
                    "fieldHP"
                ).value
            ),

        dash:
            document.getElementById(
                "fieldDash"
            ).value.trim(),

        range:
            document.getElementById(
                "fieldRange"
            ).value.trim(),

        block:
            document.getElementById(
                "fieldBlock"
            ).value.trim(),

        ultimate:
            document.getElementById(
                "fieldUltimate"
            ).value.trim(),

        passive:
            document.getElementById(
                "fieldPassive"
            ).value.trim(),

        ability:
            document.getElementById(
                "fieldAbility"
            ).value.trim(),

        ultimateName:
            document.getElementById(
                "fieldUltimateName"
            ).value.trim(),

        animation:
            document.getElementById(
                "fieldAnimation"
            ).value.trim(),

        description:
            document.getElementById(
                "fieldDescription"
            ).value.trim(),

        strengths:
            document.getElementById(
                "fieldStrengths"
            ).value.trim(),

        weaknesses:
            document.getElementById(
                "fieldWeaknesses"
            ).value.trim(),

        obtain:
            document.getElementById(
                "fieldObtain"
            ).value.trim(),

        wip:
            document.getElementById(
                "fieldWIP"
            ).checked

    };

}


/* =========================================================
   SAVE STYLE
   ========================================================= */

function saveCurrentStyle() {

    if (!selectedStyleName) return;


    const index =
        styles.findIndex(
            style =>
                style.name === selectedStyleName
        );


    if (index === -1) return;


    const oldStyle =
        styles[index];


    const newStyle =
        readEditor();


    /*
       Preserve properties we don't currently
       expose in the editor.
    */

    styles[index] = {

        ...oldStyle,

        ...newStyle

    };


    /*
       If the name changed, update selection.
    */

    selectedStyleName =
        newStyle.name;


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(styles)
    );


    populateEditor(
        styles[index]
    );


    renderStyleList();

    updateDashboardStats();

    showToast(
        "Style changes saved locally."
    );

}


/* =========================================================
   RESET CURRENT STYLE
   ========================================================= */

function resetCurrentStyle() {

    if (!selectedStyleName) return;


    const original =
        window.UBG_STYLES.find(
            style =>
                style.name ===
                selectedStyleName
        );


    if (!original) return;


    const index =
        styles.findIndex(
            style =>
                style.name ===
                selectedStyleName
        );


    if (index === -1) return;


    styles[index] =
        structuredClone(original);


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(styles)
    );


    populateEditor(
        styles[index]
    );


    renderStyleList();

    updateDashboardStats();


    showToast(
        "Style reset to original data."
    );

}


/* =========================================================
   SAVE ALL
   ========================================================= */

function saveAll() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(styles)
    );


    updateDashboardStats();

    renderStyleList();

    showToast(
        "All changes saved locally."
    );

}


/* =========================================================
   EXPORT DATABASE
   ========================================================= */

function exportDatabase() {

    const data =
        JSON.stringify(
            styles,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
            {
                type: "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "ubg-styles-updated.json";


    document.body.appendChild(link);

    link.click();

    link.remove();


    URL.revokeObjectURL(url);


    showToast(
        "Database exported."
    );

}


/* =========================================================
   IMPORT DATABASE
   ========================================================= */

function importDatabase(event) {

    const file =
        event.target.files?.[0];


    if (!file) return;


    const reader =
        new FileReader();


    reader.onload =
        function () {

            try {

                const imported =
                    JSON.parse(
                        reader.result
                    );


                if (!Array.isArray(imported)) {

                    throw new Error(
                        "Invalid database format."
                    );

                }


                styles =
                    imported;


                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(styles)
                );


                selectedStyleName =
                    null;


                document
                    .getElementById(
                        "emptyEditor"
                    )
                    .classList.remove(
                        "hidden"
                    );


                document
                    .getElementById(
                        "styleEditor"
                    )
                    .classList.add(
                        "hidden"
                    );


                renderStyleList();

                updateDashboardStats();


                showToast(
                    "Database imported successfully."
                );


            } catch (error) {

                alert(
                    "Could not import database.\n\n" +
                    error.message
                );

            }

        };


    reader.readAsText(file);

}


/* =========================================================
   RESET EVERYTHING
   ========================================================= */

function resetEverything() {

    const confirmed =
        confirm(
            "Reset ALL admin changes?\n\n" +
            "This will restore the original style database."
        );


    if (!confirmed) return;


    styles =
        structuredClone(
            window.UBG_STYLES
        );


    localStorage.removeItem(
        STORAGE_KEY
    );


    selectedStyleName =
        null;


    document
        .getElementById(
            "emptyEditor"
        )
        .classList.remove(
            "hidden"
        );


    document
        .getElementById(
            "styleEditor"
        )
        .classList.add(
            "hidden"
        );


    renderStyleList();

    updateDashboardStats();


    showToast(
        "All changes have been reset."
    );

}


/* =========================================================
   PREVIEW
   ========================================================= */

function previewStyle() {

    if (!selectedStyleName) return;


    saveCurrentStyle();


    window.open(
        `style.html?style=${encodeURIComponent(
            selectedStyleName
        )}`,
        "_blank"
    );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout;


function showToast(message) {

    const toast =
        document.getElementById(
            "adminToast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    document
        .getElementById(
            "adminSearch"
        )
        .addEventListener(
            "input",
            renderStyleList
        );

}


/* =========================================================
   RARITY FILTERS
   ========================================================= */

function setupRarityFilters() {

    document
        .querySelectorAll(
            ".rarity-filter"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".rarity-filter"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    activeRarity =
                        button.dataset.rarity ||
                        "all";


                    renderStyleList();

                }
            );

        });

}


/* =========================================================
   FORM SUBMIT
   ========================================================= */

function setupEditor() {

    document
        .getElementById(
            "styleEditor"
        )
        .addEventListener(
            "submit",
            event => {

                event.preventDefault();

                saveCurrentStyle();

            }
        );


    document
        .getElementById(
            "resetButton"
        )
        .addEventListener(
            "click",
            resetCurrentStyle
        );


    document
        .getElementById(
            "previewButton"
        )
        .addEventListener(
            "click",
            previewStyle
        );


    document
        .getElementById(
            "previewButtonBottom"
        )
        .addEventListener(
            "click",
            previewStyle
        );


    document
        .getElementById(
            "saveAllButton"
        )
        .addEventListener(
            "click",
            saveAll
        );


    document
        .getElementById(
            "exportButton"
        )
        .addEventListener(
            "click",
            exportDatabase
        );


    document
        .getElementById(
            "importButton"
        )
        .addEventListener(
            "change",
            importDatabase
        );


    document
        .getElementById(
            "clearButton"
        )
        .addEventListener(
            "click",
            resetEverything
        );

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initialiseDatabase();

        renderStyleList();

        updateDashboardStats();

        setupSearch();

        setupRarityFilters();

        setupEditor();

    }
);

"use strict";

/*
==========================================================
UBG ADMIN DASHBOARD
==========================================================

IMPORTANT:
- styles.js must load BEFORE this file.
- styles.js creates window.UBG_STYLES.
- Do NOT declare another "styles" variable here.
- Changes are stored in localStorage.
==========================================================
*/


/* ========================================================
   DATABASE SETTINGS
======================================================== */

const STORAGE_KEY = "UBG_ADMIN_STYLES";

let adminStyles = [];
let selectedIndex = -1;
let currentRarity = "all";


/* ========================================================
   ELEMENT HELPERS
======================================================== */

function $(id) {
    return document.getElementById(id);
}


/* ========================================================
   DEFAULT COMBAT DATA
======================================================== */

function createDefaultCombat() {
    return {
        m1Damage: 0,
        m2Damage: 0,
        counterDamage: 0,
        ultimateDamage: 0,

        m1Cooldown: 0,
        m2Cooldown: 0,

        m1Stamina: 0,
        m2Stamina: 0
    };
}


/* ========================================================
   NORMALISE STYLE DATA
======================================================== */

function normaliseStyle(style) {

    const result = {
        ...style
    };

    /*
    Add combat data if the style doesn't have it yet.
    This means your existing 32 styles won't break.
    */

    result.combat = {
        ...createDefaultCombat(),
        ...(style.combat || {})
    };

    return result;
}


/* ========================================================
   LOAD DATABASE
======================================================== */

function loadDatabase() {

    /*
    Make sure styles.js loaded correctly.
    */

    if (!window.UBG_STYLES || !Array.isArray(window.UBG_STYLES)) {

        console.error(
            "UBG Admin: window.UBG_STYLES was not found."
        );

        showToast(
            "Could not load the style database.",
            "error"
        );

        return;
    }


    /*
    Check for locally saved data.
    */

    const saved = localStorage.getItem(STORAGE_KEY);


    if (saved) {

        try {

            const parsed = JSON.parse(saved);

            if (Array.isArray(parsed)) {

                adminStyles = parsed.map(normaliseStyle);

            } else {

                adminStyles =
                    window.UBG_STYLES.map(normaliseStyle);

            }

        } catch (error) {

            console.error(
                "Could not read saved database:",
                error
            );

            adminStyles =
                window.UBG_STYLES.map(normaliseStyle);

        }

    } else {

        /*
        First time opening the admin dashboard.
        Copy the original database.
        */

        adminStyles =
            window.UBG_STYLES.map(normaliseStyle);
    }


    updateStats();
    renderStyleList();
}


/* ========================================================
   SAVE DATABASE
======================================================== */

function saveDatabase() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(adminStyles)
        );

        updateStats();

        showToast(
            "Database saved successfully.",
            "success"
        );

    } catch (error) {

        console.error(
            "Could not save database:",
            error
        );

        showToast(
            "Could not save database.",
            "error"
        );
    }
}


/* ========================================================
   UPDATE DASHBOARD STATS
======================================================== */

function updateStats() {

    const total =
        adminStyles.length;


    const wip =
        adminStyles.filter(style => style.wip === true).length;


    /*
    Compare the edited database against the original
    styles.js database.
    */

    let edited = 0;


    if (
        window.UBG_STYLES &&
        Array.isArray(window.UBG_STYLES)
    ) {

        adminStyles.forEach(style => {

            const original =
                window.UBG_STYLES.find(
                    item => item.name === style.name
                );


            if (!original) {

                edited++;
                return;
            }


            const originalNormalised =
                normaliseStyle(original);


            if (
                JSON.stringify(style) !==
                JSON.stringify(originalNormalised)
            ) {

                edited++;
            }

        });
    }


    $("totalStyles").textContent = total;
    $("wipStyles").textContent = wip;
    $("editedStyles").textContent = edited;
}


/* ========================================================
   RENDER STYLE LIST
======================================================== */

function renderStyleList() {

    const container =
        $("adminStyleList");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const searchInput =
        $("adminSearch");


    const search =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const filtered =
        adminStyles
            .map((style, index) => ({
                style,
                index
            }))
            .filter(item => {

                const style =
                    item.style;


                const matchesSearch =
                    !search ||
                    style.name
                        .toLowerCase()
                        .includes(search);


                const matchesRarity =
                    currentRarity === "all" ||
                    style.rarity === currentRarity;


                return (
                    matchesSearch &&
                    matchesRarity
                );
            });


    if (filtered.length === 0) {

        container.innerHTML = `
            <div class="style-list-empty">
                No styles found.
            </div>
        `;

        return;
    }


    filtered.forEach(item => {

        const style =
            item.style;


        const index =
            item.index;


        const button =
            document.createElement("button");


        button.type = "button";

        button.className =
            "style-list-item";


        if (index === selectedIndex) {

            button.classList.add("active");
        }


        button.innerHTML = `

            <div class="style-item-left">

                <span class="style-item-name">
                    ${escapeHTML(style.name)}
                </span>

                <span class="style-item-rarity">
                    ${escapeHTML(style.rarity || "Unknown")}
                </span>

            </div>

            <span class="style-item-arrow">
                →
            </span>

        `;


        button.addEventListener(
            "click",
            () => selectStyle(index)
        );


        container.appendChild(button);

    });
}


/* ========================================================
   SELECT STYLE
======================================================== */

function selectStyle(index) {

    if (
        index < 0 ||
        index >= adminStyles.length
    ) {
        return;
    }


    selectedIndex =
        index;


    const style =
        adminStyles[index];


    populateEditor(style);


    /*
    Hide empty state.
    */

    $("emptyEditor").style.display =
        "none";


    /*
    Show editor.
    */

    $("styleEditor").style.display =
        "block";


    renderStyleList();

    updateEditorHeader(style);
}


/* ========================================================
   UPDATE EDITOR HEADER
======================================================== */

function updateEditorHeader(style) {

    $("editorTitle").textContent =
        style.name || "Unnamed Style";


    $("editorRarity").textContent =
        style.rarity || "Unknown";


    $("editorRarity").className =
        "rarity-badge";


    if (style.rarity) {

        $("editorRarity").classList.add(
            `rarity-${style.rarity.toLowerCase()}`
        );
    }
}


/* ========================================================
   POPULATE EDITOR
======================================================== */

function populateEditor(style) {

    /*
    Make sure combat data exists.
    */

    const combat = {
        ...createDefaultCombat(),
        ...(style.combat || {})
    };


    /* BASIC INFORMATION */

    $("fieldName").value =
        style.name || "";


    $("fieldRarity").value =
        style.rarity || "Uncommon";


    $("fieldRanked").checked =
        style.ranked === true;


    $("fieldBaseStyle").value =
        style.baseStyle || "";


    /* CORE STATS */

    $("fieldHP").value =
        style.hp ?? "";


    $("fieldDash").value =
        style.dash || "";


    $("fieldRange").value =
        style.range || "";


    $("fieldBlock").value =
        style.block || "";


    $("fieldUltimate").value =
        style.ultimate || "";


    /* COMBAT VALUES */

    $("fieldM1Damage").value =
        combat.m1Damage ?? 0;


    $("fieldM2Damage").value =
        combat.m2Damage ?? 0;


    $("fieldCounterDamage").value =
        combat.counterDamage ?? 0;


    $("fieldUltimateDamage").value =
        combat.ultimateDamage ?? 0;


    $("fieldM1Cooldown").value =
        combat.m1Cooldown ?? 0;


    $("fieldM2Cooldown").value =
        combat.m2Cooldown ?? 0;


    $("fieldM1Stamina").value =
        combat.m1Stamina ?? 0;


    $("fieldM2Stamina").value =
        combat.m2Stamina ?? 0;


    /* ABILITIES */

    $("fieldPassive").value =
        style.passive || "";


    $("fieldAbility").value =
        style.ability || "";


    $("fieldUltimateName").value =
        style.ultimateName || "";


    /* DOCUMENTATION */

    $("fieldDescription").value =
        style.description || "";


    $("fieldStrengths").value =
        convertToTextarea(style.strengths);


    $("fieldWeaknesses").value =
        convertToTextarea(style.weaknesses);


    /* OBTAINING */

    $("fieldObtain").value =
        convertToTextarea(style.obtain);


    /* MEDIA */

    $("fieldAnimation").value =
        style.animation || "";


    /* WIP */

    $("fieldWIP").checked =
        style.wip === true;
}


/* ========================================================
   READ EDITOR
======================================================== */

function readEditor() {

    if (selectedIndex < 0) {
        return null;
    }


    const oldStyle =
        adminStyles[selectedIndex];


    /*
    Read the combat values.
    */

    const combat = {

        m1Damage:
            readNumber("fieldM1Damage"),

        m2Damage:
            readNumber("fieldM2Damage"),

        counterDamage:
            readNumber("fieldCounterDamage"),

        ultimateDamage:
            readNumber("fieldUltimateDamage"),

        m1Cooldown:
            readNumber("fieldM1Cooldown"),

        m2Cooldown:
            readNumber("fieldM2Cooldown"),

        m1Stamina:
            readNumber("fieldM1Stamina"),

        m2Stamina:
            readNumber("fieldM2Stamina")
    };


    /*
    Create updated style.
    */

    const updatedStyle = {

        ...oldStyle,


        /* BASIC INFORMATION */

        name:
            $("fieldName").value.trim(),

        rarity:
            $("fieldRarity").value,

        ranked:
            $("fieldRanked").checked,

        baseStyle:
            $("fieldBaseStyle").value.trim(),


        /* CORE STATS */

        hp:
            readNumber("fieldHP"),

        dash:
            $("fieldDash").value.trim(),

        range:
            $("fieldRange").value.trim(),

        block:
            $("fieldBlock").value.trim(),

        ultimate:
            $("fieldUltimate").value.trim(),


        /* COMBAT */

        combat:
            combat,


        /* ABILITIES */

        passive:
            $("fieldPassive").value.trim(),

        ability:
            $("fieldAbility").value.trim(),

        ultimateName:
            $("fieldUltimateName").value.trim(),


        /* DOCUMENTATION */

        description:
            $("fieldDescription").value.trim(),

        strengths:
            textareaToArray(
                $("fieldStrengths").value
            ),

        weaknesses:
            textareaToArray(
                $("fieldWeaknesses").value
            ),


        /* OBTAINING */

        obtain:
            textareaToArray(
                $("fieldObtain").value
            ),


        /* MEDIA */

        animation:
            $("fieldAnimation").value.trim(),


        /* STATUS */

        wip:
            $("fieldWIP").checked
    };


    return updatedStyle;
}


/* ========================================================
   SAVE CURRENT STYLE
======================================================== */

function saveCurrentStyle(
    showMessage = true
) {

    if (selectedIndex < 0) {

        showToast(
            "Select a style first.",
            "error"
        );

        return false;
    }


    const updated =
        readEditor();


    if (!updated) {
        return false;
    }


    if (!updated.name) {

        showToast(
            "Style name cannot be empty.",
            "error"
        );

        return false;
    }


    adminStyles[selectedIndex] =
        normaliseStyle(updated);


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(adminStyles)
    );


    updateStats();
    renderStyleList();
    updateEditorHeader(
        adminStyles[selectedIndex]
    );


    if (showMessage) {

        showToast(
            `${updated.name} saved.`,
            "success"
        );
    }


    return true;
}


/* ========================================================
   SAVE ALL
======================================================== */

function saveAll() {

    if (selectedIndex >= 0) {

        saveCurrentStyle(false);
    }


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(adminStyles)
    );


    updateStats();


    showToast(
        "All changes saved.",
        "success"
    );
}


/* ========================================================
   RESET CURRENT STYLE
======================================================== */

function resetCurrentStyle() {

    if (selectedIndex < 0) {

        showToast(
            "Select a style first.",
            "error"
        );

        return;
    }


    const style =
        adminStyles[selectedIndex];


    const confirmed =
        confirm(
            `Reset "${style.name}" to its original database values?`
        );


    if (!confirmed) {
        return;
    }


    /*
    Find the original style.
    */

    const original =
        window.UBG_STYLES.find(
            item =>
                item.name === style.name
        );


    if (!original) {

        showToast(
            "Original style could not be found.",
            "error"
        );

        return;
    }


    adminStyles[selectedIndex] =
        normaliseStyle(
            JSON.parse(
                JSON.stringify(original)
            )
        );


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(adminStyles)
    );


    populateEditor(
        adminStyles[selectedIndex]
    );


    updateEditorHeader(
        adminStyles[selectedIndex]
    );


    updateStats();
    renderStyleList();


    showToast(
        `${style.name} has been reset.`,
        "success"
    );
}


/* ========================================================
   RESET ENTIRE DATABASE
======================================================== */

function resetDatabase() {

    const confirmed =
        confirm(
            "Reset the entire local database to the original styles? This will remove all local changes."
        );


    if (!confirmed) {
        return;
    }


    adminStyles =
        window.UBG_STYLES.map(
            style =>
                normaliseStyle(
                    JSON.parse(
                        JSON.stringify(style)
                    )
                )
        );


    selectedIndex = -1;


    localStorage.removeItem(
        STORAGE_KEY
    );


    $("styleEditor").style.display =
        "none";


    $("emptyEditor").style.display =
        "flex";


    updateStats();
    renderStyleList();


    showToast(
        "Database reset.",
        "success"
    );
}


/* ========================================================
   SEARCH
======================================================== */

function handleSearch() {

    renderStyleList();
}


/* ========================================================
   RARITY FILTER
======================================================== */

function handleRarityFilter(event) {

    const button =
        event.currentTarget;


    currentRarity =
        button.dataset.rarity ||
        "all";


    document
        .querySelectorAll(".rarity-filter")
        .forEach(filter => {

            filter.classList.remove(
                "active"
            );

        });


    button.classList.add(
        "active"
    );


    renderStyleList();
}


/* ========================================================
   PREVIEW STYLE
======================================================== */

function previewStyle() {

    if (selectedIndex < 0) {

        showToast(
            "Select a style first.",
            "error"
        );

        return;
    }


    /*
    Save current changes before previewing.
    */

    saveCurrentStyle(false);


    const style =
        adminStyles[selectedIndex];


    if (!style.name) {
        return;
    }


    const url =
        `style.html?style=${encodeURIComponent(style.name)}`;


    window.open(
        url,
        "_blank"
    );
}


/* ========================================================
   EXPORT DATABASE
======================================================== */

function exportDatabase() {

    /*
    Save current editor first.
    */

    if (selectedIndex >= 0) {

        saveCurrentStyle(false);
    }


    const data = {
        version: "1.0",
        exportedAt:
            new Date().toISOString(),
        styles:
            adminStyles
    };


    const json =
        JSON.stringify(
            data,
            null,
            2
        );


    const blob =
        new Blob(
            [json],
            {
                type: "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href =
        url;


    link.download =
        "ubg-styles-database.json";


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );


    showToast(
        "Database exported.",
        "success"
    );
}


/* ========================================================
   IMPORT DATABASE
======================================================== */

function importDatabase() {

    const input =
        document.createElement("input");


    input.type =
        "file";


    input.accept =
        ".json,application/json";


    input.addEventListener(
        "change",
        event => {

            const file =
                event.target.files[0];


            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function () {

                    try {

                        const parsed =
                            JSON.parse(
                                reader.result
                            );


                        /*
                        Support both:
                        {
                            styles: [...]
                        }

                        and directly:
                        [...]
                        */

                        const importedStyles =
                            Array.isArray(parsed)
                                ? parsed
                                : parsed.styles;


                        if (
                            !Array.isArray(
                                importedStyles
                            )
                        ) {

                            throw new Error(
                                "Invalid database format."
                            );
                        }


                        adminStyles =
                            importedStyles.map(
                                normaliseStyle
                            );


                        selectedIndex =
                            -1;


                        localStorage.setItem(
                            STORAGE_KEY,
                            JSON.stringify(
                                adminStyles
                            )
                        );


                        $("styleEditor").style.display =
                            "none";


                        $("emptyEditor").style.display =
                            "flex";


                        updateStats();
                        renderStyleList();


                        showToast(
                            "Database imported successfully.",
                            "success"
                        );


                    } catch (error) {

                        console.error(
                            "Import error:",
                            error
                        );


                        showToast(
                            "Invalid database file.",
                            "error"
                        );
                    }
                };


            reader.readAsText(file);
        }
    );


    input.click();
}


/* ========================================================
   NUMBER HELPER
======================================================== */

function readNumber(id) {

    const element =
        $(id);


    if (!element) {
        return 0;
    }


    const value =
        parseFloat(
            element.value
        );


    return Number.isFinite(value)
        ? value
        : 0;
}


/* ========================================================
   TEXTAREA HELPERS
======================================================== */

function textareaToArray(value) {

    return value
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);
}


function convertToTextarea(value) {

    if (Array.isArray(value)) {

        return value.join("\n");
    }


    if (typeof value === "string") {

        return value;
    }


    return "";
}


/* ========================================================
   HTML ESCAPE
======================================================== */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ========================================================
   TOAST
======================================================== */

function showToast(
    message,
    type = "success"
) {

    const toast =
        $("adminToast");


    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.className =
        "admin-toast";


    toast.classList.add(
        type
    );


    toast.classList.add(
        "show"
    );


    clearTimeout(
        showToast.timeout
    );


    showToast.timeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* ========================================================
   EVENT LISTENERS
======================================================== */

function setupEvents() {


    /* SEARCH */

    const search =
        $("adminSearch");


    if (search) {

        search.addEventListener(
            "input",
            handleSearch
        );
    }


    /* RARITY FILTERS */

    document
        .querySelectorAll(".rarity-filter")
        .forEach(button => {

            button.addEventListener(
                "click",
                handleRarityFilter
            );

        });


    /* FORM SAVE */

    const editor =
        $("styleEditor");


    if (editor) {

        editor.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                saveCurrentStyle(true);
            }
        );
    }


    /* RESET */

    const reset =
        $("resetButton");


    if (reset) {

        reset.addEventListener(
            "click",
            resetCurrentStyle
        );
    }


    /* PREVIEW TOP */

    const preview =
        $("previewButton");


    if (preview) {

        preview.addEventListener(
            "click",
            previewStyle
        );
    }


    /* PREVIEW BOTTOM */

    const previewBottom =
        $("previewButtonBottom");


    if (previewBottom) {

        previewBottom.addEventListener(
            "click",
            previewStyle
        );
    }


    /* SAVE ALL */

    const saveAllButton =
        $("saveAllButton");


    if (saveAllButton) {

        saveAllButton.addEventListener(
            "click",
            saveAll
        );
    }


    /* EXPORT */

    const exportButton =
        $("exportButton");


    if (exportButton) {

        exportButton.addEventListener(
            "click",
            exportDatabase
        );
    }


    /* IMPORT */

    const importButton =
        $("importButton");


    if (importButton) {

        importButton.addEventListener(
            "click",
            importDatabase
        );
    }


    /* RESET DATABASE */

    const clearButton =
        $("clearButton");


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            resetDatabase
        );
    }
}


/* ========================================================
   START ADMIN DASHBOARD
======================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupEvents();

        loadDatabase();

    }
);

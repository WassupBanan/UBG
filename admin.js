// ============================================
// UBG ADMIN DASHBOARD
// ============================================

const STORAGE_KEY = "UBG_ADMIN_STYLES";

let adminStyles = [];
let selectedIndex = -1;
let currentRarity = "all";


// ============================================
// INITIALISE
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("UBG ADMIN: Starting...");

    if (!window.UBG_STYLES) {
        console.error("UBG ADMIN: window.UBG_STYLES does not exist.");
        showToast("Style database failed to load.");
        return;
    }

    if (!Array.isArray(window.UBG_STYLES)) {
        console.error("UBG ADMIN: UBG_STYLES is not an array.");
        showToast("Style database is invalid.");
        return;
    }

    console.log(
        "UBG ADMIN: Found",
        window.UBG_STYLES.length,
        "styles."
    );

    loadDatabase();
    setupEvents();
    renderStyles();
    updateStats();

    if (adminStyles.length > 0) {
        selectStyle(0);
    }
});


// ============================================
// DATABASE
// ============================================

function loadDatabase() {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (saved) {

        try {

            adminStyles = JSON.parse(saved);

            if (!Array.isArray(adminStyles)) {
                throw new Error("Invalid database.");
            }

            console.log(
                "UBG ADMIN: Loaded saved database:",
                adminStyles.length
            );

            return;

        } catch (error) {

            console.warn(
                "UBG ADMIN: Saved database was invalid. Using original."
            );
        }
    }

    // Make a copy of the original database
    adminStyles = window.UBG_STYLES.map(style => ({
        ...style
    }));

    console.log(
        "UBG ADMIN: Loaded original database:",
        adminStyles.length
    );
}


// ============================================
// EVENTS
// ============================================

function setupEvents() {

    // Search
    const search =
        document.getElementById("adminSearch");

    if (search) {
        search.addEventListener(
            "input",
            renderStyles
        );
    }


    // Rarity buttons
    document
        .querySelectorAll(".rarity-filter")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".rarity-filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentRarity =
                    button.dataset.rarity || "all";

                renderStyles();
            });
        });


    // Editor form
    const editor =
        document.getElementById("styleEditor");

    if (editor) {

        editor.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                saveCurrentStyle();
            }
        );
    }


    // Reset
    const reset =
        document.getElementById("resetButton");

    if (reset) {
        reset.addEventListener(
            "click",
            resetCurrentStyle
        );
    }


    // Preview
    const preview =
        document.getElementById("previewButton");

    if (preview) {
        preview.addEventListener(
            "click",
            previewStyle
        );
    }


    const previewBottom =
        document.getElementById("previewButtonBottom");

    if (previewBottom) {
        previewBottom.addEventListener(
            "click",
            previewStyle
        );
    }


    // Save all
    const saveAll =
        document.getElementById("saveAllButton");

    if (saveAll) {
        saveAll.addEventListener(
            "click",
            saveDatabase
        );
    }


    // Export
    const exportButton =
        document.getElementById("exportButton");

    if (exportButton) {
        exportButton.addEventListener(
            "click",
            exportDatabase
        );
    }


    // Import
    const importButton =
        document.getElementById("importButton");

    if (importButton) {

        importButton.addEventListener(
            "change",
            importDatabase
        );
    }


    // Reset everything
    const clearButton =
        document.getElementById("clearButton");

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            resetEverything
        );
    }
}


// ============================================
// RENDER STYLE LIST
// ============================================

function renderStyles() {

    const container =
        document.getElementById("adminStyleList");

    if (!container) {
        console.error(
            "UBG ADMIN: #adminStyleList not found."
        );
        return;
    }

    const searchInput =
        document.getElementById("adminSearch");

    const search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

    container.innerHTML = "";

    adminStyles.forEach((style, index) => {

        const name =
            style.name || "Unnamed";

        const rarity =
            style.rarity || "Unknown";


        // Search filter
        if (
            search &&
            !name.toLowerCase().includes(search)
        ) {
            return;
        }


        // Rarity filter
        if (
            currentRarity !== "all" &&
            rarity.toLowerCase() !==
            currentRarity.toLowerCase()
        ) {
            return;
        }


        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "admin-style-item";


        if (index === selectedIndex) {
            button.classList.add("active");
        }


        button.innerHTML = `
            <span class="style-item-name">
                ${escapeHTML(name)}
            </span>

            <span class="style-item-rarity">
                ${escapeHTML(rarity)}
            </span>
        `;


        button.addEventListener(
            "click",
            () => selectStyle(index)
        );


        container.appendChild(button);
    });


    // If nothing matches
    if (!container.children.length) {

        container.innerHTML = `
            <div style="
                padding:20px;
                color:#92959d;
                text-align:center;
            ">
                No styles found.
            </div>
        `;
    }
}


// ============================================
// SELECT STYLE
// ============================================

function selectStyle(index) {

    if (!adminStyles[index]) {
        return;
    }

    selectedIndex = index;

    const style =
        adminStyles[index];


    console.log(
        "UBG ADMIN: Selected:",
        style.name
    );


    // Hide empty screen
    const empty =
        document.getElementById("emptyEditor");

    if (empty) {
        empty.classList.add("hidden");
    }


    // Show editor
    const editor =
        document.getElementById("styleEditor");

    if (editor) {
        editor.classList.remove("hidden");
    }


    // Header
    setText(
        "editorTitle",
        style.name
    );

    setText(
        "editorRarity",
        style.rarity
    );


    // Basic information
    setValue(
        "fieldName",
        style.name
    );

    setValue(
        "fieldRarity",
        style.rarity
    );

    setValue(
        "fieldRanked",
        style.ranked
    );

    setValue(
        "fieldBaseStyle",
        style.baseStyle
    );


    // Core stats
    setValue(
        "fieldHP",
        style.hp
    );

    setValue(
        "fieldDash",
        style.dash
    );

    setValue(
        "fieldRange",
        style.range
    );

    setValue(
        "fieldBlock",
        style.block
    );

    setValue(
        "fieldUltimate",
        style.ultimate
    );


    // Moves
    setValue(
        "fieldPassive",
        style.passive
    );

    setValue(
        "fieldAbility",
        style.ability
    );

    setValue(
        "fieldUltimateName",
        style.ultimateName
    );


    // Documentation
    setValue(
        "fieldDescription",
        style.description
    );

    setValue(
        "fieldStrengths",
        style.strengths
    );

    setValue(
        "fieldWeaknesses",
        style.weaknesses
    );

    setValue(
        "fieldObtain",
        style.obtain
    );


    // Media
    setValue(
        "fieldAnimation",
        style.animation
    );


    // WIP
    const wip =
        document.getElementById("fieldWIP");

    if (wip) {
        wip.checked =
            Boolean(style.wip);
    }


    renderStyles();
}


// ============================================
// SAVE CURRENT STYLE
// ============================================

function saveCurrentStyle() {

    if (
        selectedIndex < 0 ||
        !adminStyles[selectedIndex]
    ) {
        showToast("Select a style first.");
        return;
    }


    const style =
        adminStyles[selectedIndex];


    // Basic
    style.name =
        getValue("fieldName");

    style.rarity =
        getValue("fieldRarity");

    style.ranked =
        getValue("fieldRanked");

    style.baseStyle =
        getValue("fieldBaseStyle");


    // Stats
    style.hp =
        getNumberOrValue("fieldHP");

    style.dash =
        getValue("fieldDash");

    style.range =
        getValue("fieldRange");

    style.block =
        getValue("fieldBlock");

    style.ultimate =
        getValue("fieldUltimate");


    // Moves
    style.passive =
        getValue("fieldPassive");

    style.ability =
        getValue("fieldAbility");

    style.ultimateName =
        getValue("fieldUltimateName");


    // Documentation
    style.description =
        getValue("fieldDescription");

    style.strengths =
        getValue("fieldStrengths");

    style.weaknesses =
        getValue("fieldWeaknesses");

    style.obtain =
        getValue("fieldObtain");


    // Media
    style.animation =
        getValue("fieldAnimation");


    // WIP
    const wip =
        document.getElementById("fieldWIP");

    if (wip) {
        style.wip =
            wip.checked;
    }


    saveDatabase();

    renderStyles();
    updateStats();

    showToast(
        `${style.name} saved.`
    );
}


// ============================================
// SAVE DATABASE
// ============================================

function saveDatabase() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(adminStyles)
    );

    console.log(
        "UBG ADMIN: Database saved."
    );

    showToast(
        "Changes saved."
    );
}


// ============================================
// RESET CURRENT
// ============================================

function resetCurrentStyle() {

    if (selectedIndex < 0) {
        return;
    }

    const original =
        window.UBG_STYLES[selectedIndex];

    if (!original) {
        return;
    }


    const confirmed =
        confirm(
            "Reset this style to its original data?"
        );

    if (!confirmed) {
        return;
    }


    adminStyles[selectedIndex] = {
        ...original
    };


    saveDatabase();

    selectStyle(selectedIndex);

    updateStats();

    showToast(
        "Style reset."
    );
}


// ============================================
// RESET EVERYTHING
// ============================================

function resetEverything() {

    const confirmed =
        confirm(
            "Reset ALL admin changes?\n\nThis cannot be undone."
        );

    if (!confirmed) {
        return;
    }


    adminStyles =
        window.UBG_STYLES.map(style => ({
            ...style
        }));


    localStorage.removeItem(
        STORAGE_KEY
    );


    selectedIndex = -1;


    renderStyles();
    updateStats();


    if (adminStyles.length > 0) {
        selectStyle(0);
    }


    showToast(
        "All changes reset."
    );
}


// ============================================
// EXPORT DATABASE
// ============================================

function exportDatabase() {

    const json =
        JSON.stringify(
            adminStyles,
            null,
            4
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

    link.href = url;

    link.download =
        "ubg-styles-database.json";


    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);


    showToast(
        "Database exported."
    );
}


// ============================================
// IMPORT DATABASE
// ============================================

function importDatabase(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload = () => {

        try {

            const imported =
                JSON.parse(reader.result);


            if (!Array.isArray(imported)) {
                throw new Error(
                    "Database must be an array."
                );
            }


            adminStyles =
                imported;


            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(adminStyles)
            );


            selectedIndex = -1;


            renderStyles();
            updateStats();


            if (adminStyles.length > 0) {
                selectStyle(0);
            }


            showToast(
                "Database imported."
            );

        } catch (error) {

            console.error(
                "Import error:",
                error
            );

            showToast(
                "Invalid database file."
            );
        }
    };


    reader.readAsText(file);
}


// ============================================
// PREVIEW
// ============================================

function previewStyle() {

    if (
        selectedIndex < 0 ||
        !adminStyles[selectedIndex]
    ) {
        showToast(
            "Select a style first."
        );

        return;
    }


    const style =
        adminStyles[selectedIndex];


    window.open(
        `style.html?style=${encodeURIComponent(style.name)}`,
        "_blank"
    );
}


// ============================================
// STATS
// ============================================

function updateStats() {

    const total =
        document.getElementById("totalStyles");

    const wip =
        document.getElementById("wipStyles");

    const edited =
        document.getElementById("editedStyles");


    if (total) {
        total.textContent =
            adminStyles.length;
    }


    if (wip) {

        wip.textContent =
            adminStyles.filter(
                style => style.wip
            ).length;
    }


    if (edited) {

        let count = 0;


        adminStyles.forEach(
            (style, index) => {

                const original =
                    window.UBG_STYLES[index];


                if (
                    JSON.stringify(style) !==
                    JSON.stringify(original)
                ) {
                    count++;
                }
            }
        );


        edited.textContent =
            count;
    }
}


// ============================================
// HELPERS
// ============================================

function getValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value
        : "";
}


function getNumberOrValue(id) {

    const value =
        getValue(id);

    if (value === "") {
        return "";
    }

    const number =
        Number(value);

    return Number.isNaN(number)
        ? value
        : number;
}


function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.value =
            value ?? "";
    }
}


function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value ?? "";
    }
}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function showToast(message) {

    const toast =
        document.getElementById("adminToast");

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}

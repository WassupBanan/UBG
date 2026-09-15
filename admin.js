const STORAGE_KEY = "UBG_ADMIN_STYLES";

let adminStyles = [];
let selectedStyleIndex = -1;


// ===============================
// INITIALISE
// ===============================

function initialiseAdmin() {
    console.log("ADMIN: Initialising...");

    if (!window.UBG_STYLES || !Array.isArray(window.UBG_STYLES)) {
        console.error("ADMIN: UBG_STYLES was not found.");
        showToast("Could not load style database.", true);
        return;
    }

    console.log(
        "ADMIN: Loaded",
        window.UBG_STYLES.length,
        "styles from styles.js"
    );

    // Load saved admin edits
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            adminStyles = JSON.parse(saved);
            console.log("ADMIN: Loaded saved database.");
        } catch (error) {
            console.error("ADMIN: Saved database is invalid.", error);
            adminStyles = structuredClone(window.UBG_STYLES);
        }
    } else {
        adminStyles = structuredClone(window.UBG_STYLES);
        console.log("ADMIN: Created editable copy.");
    }

    renderStyleList();
    updateStats();

    if (adminStyles.length > 0) {
        selectStyle(0);
    }
}


// ===============================
// STYLE LIST
// ===============================

function renderStyleList() {
    const list = document.getElementById("styleList");

    if (!list) {
        console.error("ADMIN: #styleList not found.");
        return;
    }

    const searchInput = document.getElementById("styleSearch");
    const rarityFilter = document.getElementById("rarityFilter");

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const rarity = rarityFilter
        ? rarityFilter.value
        : "all";

    list.innerHTML = "";

    adminStyles.forEach((style, index) => {

        const name = style.name || "Unnamed Style";
        const styleRarity = style.rarity || "Unknown";

        if (
            search &&
            !name.toLowerCase().includes(search)
        ) {
            return;
        }

        if (
            rarity !== "all" &&
            styleRarity.toLowerCase() !== rarity.toLowerCase()
        ) {
            return;
        }

        const item = document.createElement("button");

        item.className = "style-list-item";

        if (index === selectedStyleIndex) {
            item.classList.add("active");
        }

        item.innerHTML = `
            <strong>${escapeHTML(name)}</strong>
            <span>${escapeHTML(styleRarity)}</span>
        `;

        item.addEventListener("click", () => {
            selectStyle(index);
        });

        list.appendChild(item);
    });
}


// ===============================
// SELECT STYLE
// ===============================

function selectStyle(index) {

    if (!adminStyles[index]) {
        return;
    }

    selectedStyleIndex = index;

    const style = adminStyles[index];

    console.log("ADMIN: Selected", style.name);

    const editor = document.getElementById("editor");

    if (editor) {
        editor.classList.remove("hidden");
    }

    setValue("styleName", style.name);
    setValue("styleRarity", style.rarity);
    setValue("rankedName", style.ranked);
    setValue("baseStyle", style.baseStyle);

    setValue("styleHP", style.hp);
    setValue("styleDash", style.dash);
    setValue("styleRange", style.range);
    setValue("styleBlock", style.block);

    setValue("styleUltimate", style.ultimate);

    setValue("stylePassive", style.passive);
    setValue("styleAbility", style.ability);
    setValue("styleUltimateName", style.ultimateName);

    setValue("styleDescription", style.description);
    setValue("styleStrengths", style.strengths);
    setValue("styleWeaknesses", style.weaknesses);
    setValue("styleObtain", style.obtain);

    setValue("styleAnimation", style.animation);

    const wip = document.getElementById("styleWIP");

    if (wip) {
        wip.checked = Boolean(style.wip);
    }

    renderStyleList();
}


// ===============================
// SAVE STYLE
// ===============================

function saveCurrentStyle() {

    if (
        selectedStyleIndex < 0 ||
        !adminStyles[selectedStyleIndex]
    ) {
        showToast("Select a style first.", true);
        return;
    }

    const style = adminStyles[selectedStyleIndex];

    style.name = getValue("styleName");
    style.rarity = getValue("styleRarity");
    style.ranked = getValue("rankedName");
    style.baseStyle = getValue("baseStyle");

    style.hp = getValue("styleHP");
    style.dash = getValue("styleDash");
    style.range = getValue("styleRange");
    style.block = getValue("styleBlock");

    style.ultimate = getValue("styleUltimate");

    style.passive = getValue("stylePassive");
    style.ability = getValue("styleAbility");
    style.ultimateName = getValue("styleUltimateName");

    style.description = getValue("styleDescription");
    style.strengths = getValue("styleStrengths");
    style.weaknesses = getValue("styleWeaknesses");
    style.obtain = getValue("styleObtain");

    style.animation = getValue("styleAnimation");

    const wip = document.getElementById("styleWIP");

    if (wip) {
        style.wip = wip.checked;
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(adminStyles)
    );

    renderStyleList();
    updateStats();

    showToast(`${style.name} saved.`);
}


// ===============================
// RESET CURRENT STYLE
// ===============================

function resetCurrentStyle() {

    if (selectedStyleIndex < 0) {
        return;
    }

    if (!window.UBG_STYLES[selectedStyleIndex]) {
        return;
    }

    adminStyles[selectedStyleIndex] =
        structuredClone(window.UBG_STYLES[selectedStyleIndex]);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(adminStyles)
    );

    selectStyle(selectedStyleIndex);

    updateStats();

    showToast("Style reset.");
}


// ===============================
// RESET EVERYTHING
// ===============================

function resetAllChanges() {

    const confirmed = confirm(
        "Reset ALL admin changes?\n\nThis cannot be undone."
    );

    if (!confirmed) {
        return;
    }

    adminStyles =
        structuredClone(window.UBG_STYLES);

    localStorage.removeItem(STORAGE_KEY);

    selectedStyleIndex = -1;

    renderStyleList();
    updateStats();

    if (adminStyles.length > 0) {
        selectStyle(0);
    }

    showToast("All changes reset.");
}


// ===============================
// EXPORT
// ===============================

function exportDatabase() {

    const data = JSON.stringify(
        adminStyles,
        null,
        4
    );

    const blob = new Blob(
        [data],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "ubg-styles-database.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    showToast("Database exported.");
}


// ===============================
// IMPORT
// ===============================

function importDatabase(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {

        try {

            const imported =
                JSON.parse(reader.result);

            if (!Array.isArray(imported)) {
                throw new Error(
                    "Database must contain an array."
                );
            }

            adminStyles = imported;

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(adminStyles)
            );

            selectedStyleIndex = -1;

            renderStyleList();
            updateStats();

            if (adminStyles.length > 0) {
                selectStyle(0);
            }

            showToast("Database imported.");

        } catch (error) {

            console.error(error);

            showToast(
                "Invalid database file.",
                true
            );
        }
    };

    reader.readAsText(file);
}


// ===============================
// PREVIEW
// ===============================

function previewStyle() {

    if (
        selectedStyleIndex < 0 ||
        !adminStyles[selectedStyleIndex]
    ) {
        showToast("Select a style first.", true);
        return;
    }

    const style = adminStyles[selectedStyleIndex];

    window.open(
        `style.html?style=${encodeURIComponent(style.name)}`,
        "_blank"
    );
}


// ===============================
// STATS
// ===============================

function updateStats() {

    const total = document.getElementById("totalStyles");
    const wip = document.getElementById("wipStyles");
    const edited = document.getElementById("editedStyles");

    if (total) {
        total.textContent = adminStyles.length;
    }

    if (wip) {
        wip.textContent =
            adminStyles.filter(style => style.wip).length;
    }

    if (edited) {

        const original =
            window.UBG_STYLES || [];

        let count = 0;

        adminStyles.forEach((style, index) => {

            if (
                JSON.stringify(style) !==
                JSON.stringify(original[index])
            ) {
                count++;
            }

        });

        edited.textContent = count;
    }
}


// ===============================
// HELPERS
// ===============================

function getValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value
        : "";
}


function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.value =
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


function showToast(message, error = false) {

    const toast =
        document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.toggle(
        "error",
        error
    );

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ===============================
// EVENT LISTENERS
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const search =
            document.getElementById("styleSearch");

        const rarity =
            document.getElementById("rarityFilter");

        const save =
            document.getElementById("saveStyle");

        const reset =
            document.getElementById("resetStyle");

        const preview =
            document.getElementById("previewStyle");

        const exportButton =
            document.getElementById("exportDatabase");

        const importInput =
            document.getElementById("importDatabase");

        const resetAll =
            document.getElementById("resetAllChanges");

        if (search) {
            search.addEventListener(
                "input",
                renderStyleList
            );
        }

        if (rarity) {
            rarity.addEventListener(
                "change",
                renderStyleList
            );
        }

        if (save) {
            save.addEventListener(
                "click",
                saveCurrentStyle
            );
        }

        if (reset) {
            reset.addEventListener(
                "click",
                resetCurrentStyle
            );
        }

        if (preview) {
            preview.addEventListener(
                "click",
                previewStyle
            );
        }

        if (exportButton) {
            exportButton.addEventListener(
                "click",
                exportDatabase
            );
        }

        if (importInput) {
            importInput.addEventListener(
                "change",
                importDatabase
            );
        }

        if (resetAll) {
            resetAll.addEventListener(
                "click",
                resetAllChanges
            );
        }

        initialiseAdmin();
    }
);

/* =========================================================
   UBG WIKI — ADMIN DASHBOARD
   ========================================================= */

const STORAGE_KEY = "UBG_ADMIN_STYLES";

let styles = [];
let selectedStyleName = null;
let activeRarity = "all";


/* =========================================================
   INITIALISE
   ========================================================= */

function initialiseDatabase() {

    console.log("UBG Admin: starting...");

    /*
     * styles.js should create:
     *
     * window.UBG_STYLES
     */

    if (!window.UBG_STYLES) {

        console.error(
            "UBG Admin: window.UBG_STYLES was not found."
        );

        alert(
            "The style database could not be loaded.\n\n" +
            "Make sure styles.js is loaded before admin.js."
        );

        return false;
    }


    if (!Array.isArray(window.UBG_STYLES)) {

        console.error(
            "UBG Admin: UBG_STYLES is not an array.",
            window.UBG_STYLES
        );

        alert(
            "The style database has an invalid format."
        );

        return false;
    }


    console.log(
        "UBG Admin: loaded",
        window.UBG_STYLES.length,
        "styles."
    );


    /*
     * Check whether we already have locally saved
     * admin changes.
     */

    const saved =
        localStorage.getItem(STORAGE_KEY);


    if (saved) {

        try {

            styles = JSON.parse(saved);

            if (!Array.isArray(styles)) {
                throw new Error(
                    "Saved database is not an array."
                );
            }

            console.log(
                "UBG Admin: loaded saved local database."
            );

        } catch (error) {

            console.warn(
                "UBG Admin: saved database was invalid. " +
                "Using original database.",
                error
            );

            styles =
                JSON.parse(
                    JSON.stringify(
                        window.UBG_STYLES
                    )
                );
        }

    } else {

        /*
         * Clone the original database so we don't
         * accidentally modify styles.js directly.
         */

        styles =
            JSON.parse(
                JSON.stringify(
                    window.UBG_STYLES
                )
            );

    }


    return true;
}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   CHECK EDITED
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
   DASHBOARD STATISTICS
   ========================================================= */

function updateDashboardStats() {

    const total =
        styles.length;


    const wip =
        styles.filter(
            style => style.wip === true
        ).length;


    const edited =
        styles.filter(
            style => isStyleEdited(style.name)
        ).length;


    const totalElement =
        document.getElementById(
            "totalStyles"
        );


    const wipElement =
        document.getElementById(
            "wipStyles"
        );


    const editedElement =
        document.getElementById(
            "editedStyles"
        );


    if (totalElement) {
        totalElement.textContent = total;
    }


    if (wipElement) {
        wipElement.textContent = wip;
    }


    if (editedElement) {
        editedElement.textContent = edited;
    }

}


/* =========================================================
   RENDER STYLE LIST
   ========================================================= */

function renderStyleList() {

    const list =
        document.getElementById(
            "adminStyleList"
        );


    if (!list) return;


    const searchInput =
        document.getElementById(
            "adminSearch"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const filtered =
        styles.filter(style => {

            const rarity =
                String(
                    style.rarity || ""
                ).toLowerCase();


            const name =
                String(
                    style.name || ""
                ).toLowerCase();


            const ranked =
                String(
                    style.ranked || ""
                ).toLowerCase();


            const rarityMatches =
                activeRarity === "all" ||
                rarity ===
                    activeRarity.toLowerCase();


            const searchMatches =
                !search ||
                name.includes(search) ||
                ranked.includes(search);


            return (
                rarityMatches &&
                searchMatches
            );

        });


    if (filtered.length === 0) {

        list.innerHTML = `
            <div style="
                padding: 25px;
                text-align: center;
                color: #858992;
                font-size: 13px;
            ">
                No styles found.
            </div>
        `;

        return;
    }


    list.innerHTML =
        filtered.map(style => {

            const edited =
                isStyleEdited(style.name);


            return `

                <button
                    type="button"
                    class="admin-style-item ${
                        selectedStyleName ===
                        style.name
                            ? "active"
                            : ""
                    }"
                    data-style-name="${escapeHTML(
                        style.name
                    )}"
                >

                    <div>

                        <div class="style-item-name">
                            ${escapeHTML(
                                style.name
                            )}
                        </div>

                        <div class="style-item-meta">

                            <span class="style-item-rarity">
                                ${escapeHTML(
                                    style.rarity ||
                                    "Unknown"
                                )}
                            </span>

                            ${
                                style.wip
                                    ? `
                                        <span class="style-item-rarity">
                                            WIP
                                        </span>
                                    `
                                    : ""
                            }

                        </div>

                    </div>


                    ${
                        edited
                            ? `
                                <span
                                    class="edited-dot"
                                    title="Edited"
                                ></span>
                            `
                            : ""
                    }

                </button>

            `;

        }).join("");


    list
        .querySelectorAll(
            ".admin-style-item"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectStyle(
                        button.dataset.styleName
                    );

                }
            );

        });

}


/* =========================================================
   SELECT STYLE
   ========================================================= */

function selectStyle(name) {

    const style =
        styles.find(
            item => item.name === name
        );


    if (!style) {

        console.warn(
            "Could not find style:",
            name
        );

        return;
    }


    selectedStyleName =
        name;


    const emptyEditor =
        document.getElementById(
            "emptyEditor"
        );


    const editor =
        document.getElementById(
            "styleEditor"
        );


    if (emptyEditor) {
        emptyEditor.classList.add(
            "hidden"
        );
    }


    if (editor) {
        editor.classList.remove(
            "hidden"
        );
    }


    populateEditor(style);

    renderStyleList();

}


/* =========================================================
   POPULATE EDITOR
   ========================================================= */

function populateEditor(style) {

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


    setValue(
        "fieldAnimation",
        style.animation
    );


    const wip =
        document.getElementById(
            "fieldWIP"
        );


    if (wip) {
        wip.checked =
            Boolean(style.wip);
    }


    const title =
        document.getElementById(
            "editorTitle"
        );


    if (title) {
        title.textContent =
            style.name;
    }


    const rarity =
        document.getElementById(
            "editorRarity"
        );


    if (rarity) {
        rarity.textContent =
            style.rarity || "Unknown";
    }

}


/* =========================================================
   SET INPUT VALUE
   ========================================================= */

function setValue(id, value) {

    const element =
        document.getElementById(id);


    if (!element) return;


    element.value =
        value ?? "";

}


/* =========================================================
   READ EDITOR
   ========================================================= */

function readEditor() {

    const hpValue =
        document.getElementById(
            "fieldHP"
        )?.value;


    return {

        name:
            document.getElementById(
                "fieldName"
            )?.value.trim() || "",


        rarity:
            document.getElementById(
                "fieldRarity"
            )?.value || "Uncommon",


        ranked:
            document.getElementById(
                "fieldRanked"
            )?.value.trim() || "",


        baseStyle:
            document.getElementById(
                "fieldBaseStyle"
            )?.value.trim() || "",


        hp:
            hpValue === ""
                ? ""
                : Number(hpValue),


        dash:
            document.getElementById(
                "fieldDash"
            )?.value.trim() || "",


        range:
            document.getElementById(
                "fieldRange"
            )?.value.trim() || "",


        block:
            document.getElementById(
                "fieldBlock"
            )?.value.trim() || "",


        ultimate:
            document.getElementById(
                "fieldUltimate"
            )?.value.trim() || "",


        passive:
            document.getElementById(
                "fieldPassive"
            )?.value.trim() || "",


        ability:
            document.getElementById(
                "fieldAbility"
            )?.value.trim() || "",


        ultimateName:
            document.getElementById(
                "fieldUltimateName"
            )?.value.trim() || "",


        description:
            document.getElementById(
                "fieldDescription"
            )?.value.trim() || "",


        strengths:
            document.getElementById(
                "fieldStrengths"
            )?.value.trim() || "",


        weaknesses:
            document.getElementById(
                "fieldWeaknesses"
            )?.value.trim() || "",


        obtain:
            document.getElementById(
                "fieldObtain"
            )?.value.trim() || "",


        animation:
            document.getElementById(
                "fieldAnimation"
            )?.value.trim() || "",


        wip:
            document.getElementById(
                "fieldWIP"
            )?.checked || false

    };

}


/* =========================================================
   SAVE CURRENT STYLE
   ========================================================= */

function saveCurrentStyle() {

    if (!selectedStyleName) {

        showToast(
            "Select a style first."
        );

        return;
    }


    const index =
        styles.findIndex(
            style =>
                style.name ===
                selectedStyleName
        );


    if (index === -1) {

        showToast(
            "Could not find this style."
        );

        return;
    }


    const oldStyle =
        styles[index];


    const newData =
        readEditor();


    /*
     * Prevent an empty style name.
     */

    if (!newData.name) {

        alert(
            "Style name cannot be empty."
        );

        return;
    }


    /*
     * Preserve any fields that aren't
     * currently exposed in the editor.
     */

    styles[index] = {

        ...oldStyle,

        ...newData

    };


    selectedStyleName =
        newData.name;


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
        "Style saved locally."
    );

}


/* =========================================================
   RESET CURRENT STYLE
   ========================================================= */

function resetCurrentStyle() {

    if (!selectedStyleName) {

        showToast(
            "Select a style first."
        );

        return;
    }


    const confirmed =
        confirm(
            `Reset "${selectedStyleName}" to its original data?`
        );


    if (!confirmed) return;


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
        JSON.parse(
            JSON.stringify(original)
        );


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
        "Style reset."
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
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href = url;

    link.download =
        "ubg-styles-updated.json";


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );


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
                        "The file does not contain a valid style array."
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
                    ?.classList.remove(
                        "hidden"
                    );


                document
                    .getElementById(
                        "styleEditor"
                    )
                    ?.classList.add(
                        "hidden"
                    );


                renderStyleList();

                updateDashboardStats();


                showToast(
                    "Database imported."
                );


            } catch (error) {

                console.error(
                    error
                );


                alert(
                    "Could not import database.\n\n" +
                    error.message
                );

            }


            /*
             * Allows importing the same file again.
             */

            event.target.value = "";

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
            "This will restore the original styles.js database."
        );


    if (!confirmed) return;


    styles =
        JSON.parse(
            JSON.stringify(
                window.UBG_STYLES
            )
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
        ?.classList.remove(
            "hidden"
        );


    document
        .getElementById(
            "styleEditor"
        )
        ?.classList.add(
            "hidden"
        );


    renderStyleList();

    updateDashboardStats();


    showToast(
        "All changes reset."
    );

}


/* =========================================================
   PREVIEW
   ========================================================= */

function previewStyle() {

    if (!selectedStyleName) {

        showToast(
            "Select a style first."
        );

        return;
    }


    /*
     * Save first so the public style page
     * can use the local data later.
     */

    saveCurrentStyle();


    const url =
        `style.html?style=${encodeURIComponent(
            selectedStyleName
        )}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const search =
        document.getElementById(
            "adminSearch"
        );


    if (!search) return;


    search.addEventListener(
        "input",
        () => {

            renderStyleList();

        }
    );

}


/* =========================================================
   RARITY FILTER
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
   EDITOR BUTTONS
   ========================================================= */

function setupEditor() {

    const editor =
        document.getElementById(
            "styleEditor"
        );


    if (editor) {

        editor.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                saveCurrentStyle();

            }
        );

    }


    document
        .getElementById(
            "resetButton"
        )
        ?.addEventListener(
            "click",
            resetCurrentStyle
        );


    document
        .getElementById(
            "previewButton"
        )
        ?.addEventListener(
            "click",
            previewStyle
        );


    document
        .getElementById(
            "previewButtonBottom"
        )
        ?.addEventListener(
            "click",
            previewStyle
        );


    document
        .getElementById(
            "saveAllButton"
        )
        ?.addEventListener(
            "click",
            saveAll
        );


    document
        .getElementById(
            "exportButton"
        )
        ?.addEventListener(
            "click",
            exportDatabase
        );


    document
        .getElementById(
            "importButton"
        )
        ?.addEventListener(
            "change",
            importDatabase
        );


    document
        .getElementById(
            "clearButton"
        )
        ?.addEventListener(
            "click",
            resetEverything
        );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;


function showToast(message) {

    const toast =
        document.getElementById(
            "adminToast"
        );


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
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
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const success =
            initialiseDatabase();


        if (!success) {
            return;
        }


        renderStyleList();

        updateDashboardStats();

        setupSearch();

        setupRarityFilters();

        setupEditor();


        console.log(
            "UBG Admin: ready."
        );

    }
);

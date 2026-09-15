"use strict";

const STORAGE_KEY = "UBG_ADMIN_STYLES";
let adminStyles = [];
let selectedIndex = -1;
let currentRarity = "all";

const $ = id => document.getElementById(id);

function createDefaultCombat() {
    return { m1Damage: 0, m2Damage: 0, counterDamage: 0, ultimateDamage: 0, m1Cooldown: 0, m2Cooldown: 0, m1Stamina: 0, m2Stamina: 0 };
}

function normaliseStyle(style) {
    const result = JSON.parse(JSON.stringify(style || {}));
    result.combat = { ...createDefaultCombat(), ...(result.combat || {}) };
    if (typeof result.ranked === "boolean") result.ranked = result.ranked ? String(result.name || "").replace(/\s+/g, "").toUpperCase() : "";
    if (result.ranked == null) result.ranked = "";
    return result;
}

function getBaseDatabase() {
    return Array.isArray(window.UBG_STYLES) ? window.UBG_STYLES : [];
}

function loadDatabase() {
    const base = getBaseDatabase();
    if (!base.length) {
        adminStyles = [];
        updateStats();
        renderStyleList();
        showToast("Style database could not be loaded.", "error");
        return;
    }
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const parsed = saved ? JSON.parse(saved) : null;
        adminStyles = Array.isArray(parsed) && parsed.length ? parsed.map(normaliseStyle) : base.map(normaliseStyle);
    } catch (error) {
        console.error(error);
        adminStyles = base.map(normaliseStyle);
        localStorage.removeItem(STORAGE_KEY);
    }
    updateStats();
    renderStyleList();
}

function updateStats() {
    $("totalStyles").textContent = adminStyles.length;
    $("wipStyles").textContent = adminStyles.filter(s => s.wip === true).length;
    const base = getBaseDatabase();
    let edited = 0;
    adminStyles.forEach(style => {
        const original = base.find(s => s.name === style.name);
        if (!original || JSON.stringify(normaliseStyle(original)) !== JSON.stringify(normaliseStyle(style))) edited++;
    });
    $("editedStyles").textContent = edited;
}

function renderStyleList() {
    const container = $("adminStyleList");
    if (!container) return;
    const query = ($( "adminSearch")?.value || "").trim().toLowerCase();
    const filtered = adminStyles.map((style, index) => ({ style, index })).filter(({ style }) => {
        const matchesSearch = !query || [style.name, style.ranked, style.rarity].some(v => String(v || "").toLowerCase().includes(query));
        const matchesRarity = currentRarity === "all" || style.rarity === currentRarity;
        return matchesSearch && matchesRarity;
    });
    container.innerHTML = filtered.length ? filtered.map(({ style, index }) => `
        <button type="button" class="style-list-item ${index === selectedIndex ? "active" : ""}" data-index="${index}">
            <span class="style-item-left"><span class="style-item-name">${escapeHTML(style.name)}</span><span class="style-item-rarity">${escapeHTML(style.rarity || "Unknown")}</span></span><span class="style-item-arrow">→</span>
        </button>`).join("") : `<div class="style-list-empty">No styles found.</div>`;
    container.querySelectorAll("[data-index]").forEach(btn => btn.addEventListener("click", () => selectStyle(Number(btn.dataset.index))));
}

function selectStyle(index) {
    if (index < 0 || index >= adminStyles.length) return;
    selectedIndex = index;
    populateEditor(adminStyles[index]);
    $("emptyEditor").style.display = "none";
    $("styleEditor").style.display = "block";
    updateEditorHeader(adminStyles[index]);
    renderStyleList();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateEditorHeader(style) {
    $("editorTitle").textContent = style.name || "Unnamed Style";
    $("editorRarity").textContent = style.rarity || "Unknown";
    $("editorRarity").className = "rarity-badge";
    if (style.rarity) $("editorRarity").classList.add(`rarity-${String(style.rarity).toLowerCase()}`);
}

function populateEditor(style) {
    const combat = { ...createDefaultCombat(), ...(style.combat || {}) };
    $("fieldName").value = style.name || "";
    $("fieldRarity").value = style.rarity || "Uncommon";
    $("fieldRanked").checked = Boolean(style.ranked);
    $("fieldBaseStyle").value = style.baseStyle || "";
    $("fieldHP").value = style.hp ?? "";
    $("fieldDash").value = style.dash || "";
    $("fieldRange").value = style.range || "";
    $("fieldBlock").value = style.block || "";
    $("fieldUltimate").value = style.ultimate || "";
    $("fieldM1Damage").value = combat.m1Damage ?? 0;
    $("fieldM2Damage").value = combat.m2Damage ?? 0;
    $("fieldCounterDamage").value = combat.counterDamage ?? 0;
    $("fieldUltimateDamage").value = combat.ultimateDamage ?? 0;
    $("fieldM1Cooldown").value = combat.m1Cooldown ?? 0;
    $("fieldM2Cooldown").value = combat.m2Cooldown ?? 0;
    $("fieldM1Stamina").value = combat.m1Stamina ?? 0;
    $("fieldM2Stamina").value = combat.m2Stamina ?? 0;
    $("fieldPassive").value = style.passive || "";
    $("fieldAbility").value = style.ability || "";
    $("fieldUltimateName").value = style.ultimateName || "";
    $("fieldDescription").value = style.description || "";
    $("fieldStrengths").value = convertToTextarea(style.strengths);
    $("fieldWeaknesses").value = convertToTextarea(style.weaknesses);
    $("fieldObtain").value = convertToTextarea(style.obtain);
    $("fieldAnimation").value = style.animation || "";
    $("fieldWIP").checked = style.wip === true;
}

function readNumber(id) { const n = parseFloat($(id)?.value); return Number.isFinite(n) ? n : 0; }
function textareaToArray(value) { return String(value || "").split("\n").map(s => s.trim()).filter(Boolean); }
function convertToTextarea(value) { return Array.isArray(value) ? value.join("\n") : String(value || ""); }
function escapeHTML(value) { return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;"); }

function readEditor() {
    if (selectedIndex < 0) return null;
    const old = adminStyles[selectedIndex];
    return normaliseStyle({ ...old,
        name: $("fieldName").value.trim(), rarity: $("fieldRarity").value, ranked: $("fieldRanked").checked ? (old.ranked || $("fieldName").value.replace(/\s+/g, "").toUpperCase()) : "", baseStyle: $("fieldBaseStyle").value.trim(),
        hp: readNumber("fieldHP"), dash: $("fieldDash").value.trim(), range: $("fieldRange").value.trim(), block: $("fieldBlock").value.trim(), ultimate: $("fieldUltimate").value.trim(),
        combat: { m1Damage: readNumber("fieldM1Damage"), m2Damage: readNumber("fieldM2Damage"), counterDamage: readNumber("fieldCounterDamage"), ultimateDamage: readNumber("fieldUltimateDamage"), m1Cooldown: readNumber("fieldM1Cooldown"), m2Cooldown: readNumber("fieldM2Cooldown"), m1Stamina: readNumber("fieldM1Stamina"), m2Stamina: readNumber("fieldM2Stamina") },
        passive: $("fieldPassive").value.trim(), ability: $("fieldAbility").value.trim(), ultimateName: $("fieldUltimateName").value.trim(), description: $("fieldDescription").value.trim(), strengths: textareaToArray($("fieldStrengths").value), weaknesses: textareaToArray($("fieldWeaknesses").value), obtain: textareaToArray($("fieldObtain").value), animation: $("fieldAnimation").value.trim(), wip: $("fieldWIP").checked
    });
}

function saveCurrentStyle(showMessage = true) {
    if (selectedIndex < 0) { showToast("Select a style first.", "error"); return false; }
    const updated = readEditor();
    if (!updated?.name) { showToast("Style name cannot be empty.", "error"); return false; }
    adminStyles[selectedIndex] = updated;
    persist();
    updateEditorHeader(updated); updateStats(); renderStyleList();
    if (showMessage) showToast(`${updated.name} saved.`, "success");
    return true;
}

function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(adminStyles)); return true; } catch (e) { console.error(e); showToast("Could not save database.", "error"); return false; } }
function saveAll() { if (selectedIndex >= 0) saveCurrentStyle(false); if (persist()) showToast("All changes saved.", "success"); }

function resetCurrentStyle() {
    if (selectedIndex < 0) return showToast("Select a style first.", "error");
    const style = adminStyles[selectedIndex];
    if (!confirm(`Reset \"${style.name}\" to its original database values?`)) return;
    const original = getBaseDatabase().find(s => s.name === style.name);
    if (!original) return showToast("Original style could not be found.", "error");
    adminStyles[selectedIndex] = normaliseStyle(JSON.parse(JSON.stringify(original)));
    persist(); populateEditor(adminStyles[selectedIndex]); updateEditorHeader(adminStyles[selectedIndex]); updateStats(); renderStyleList(); showToast(`${style.name} has been reset.`, "success");
}

function resetDatabase() {
    if (!confirm("Reset the entire local database to the original styles? This removes local changes.")) return;
    adminStyles = getBaseDatabase().map(s => normaliseStyle(JSON.parse(JSON.stringify(s))));
    selectedIndex = -1; localStorage.removeItem(STORAGE_KEY); $("styleEditor").style.display = "none"; $("emptyEditor").style.display = "flex"; updateStats(); renderStyleList(); showToast("Database reset.", "success");
}

function previewStyle() {
    if (selectedIndex < 0) return showToast("Select a style first.", "error");
    if (!saveCurrentStyle(false)) return;
    window.open(`style.html?style=${encodeURIComponent(adminStyles[selectedIndex].name)}`, "_blank", "noopener");
}

function exportDatabase() {
    if (selectedIndex >= 0) saveCurrentStyle(false);
    downloadFile("ubg-styles-database.json", JSON.stringify({ version: "1.0", exportedAt: new Date().toISOString(), styles: adminStyles }, null, 2), "application/json");
    showToast("JSON database exported.", "success");
}

function exportStylesJS() {
    if (selectedIndex >= 0) saveCurrentStyle(false);
    const js = `/* UBG STYLE DATABASE — generated by Admin */\nconst styles = ${JSON.stringify(adminStyles, null, 4)};\nwindow.UBG_STYLES = styles;\n`;
    downloadFile("styles.js", js, "application/javascript");
    showToast("styles.js generated successfully.", "success");
}

function downloadFile(name, content, type) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function importDatabase() {
    const input = document.createElement("input"); input.type = "file"; input.accept = ".json,application/json";
    input.addEventListener("change", () => { const file = input.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(reader.result); const imported = Array.isArray(parsed) ? parsed : parsed.styles; if (!Array.isArray(imported)) throw new Error("Invalid format"); adminStyles = imported.map(normaliseStyle); selectedIndex = -1; persist(); $("styleEditor").style.display = "none"; $("emptyEditor").style.display = "flex"; updateStats(); renderStyleList(); showToast("Database imported successfully.", "success"); } catch (e) { console.error(e); showToast("Invalid database file.", "error"); } }; reader.readAsText(file); }); input.click();
}

function showToast(message, type = "success") {
    const toast = $("adminToast"); if (!toast) return; toast.textContent = message; toast.className = `admin-toast ${type} show`; clearTimeout(showToast.timeout); showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

function setupEvents() {
    $("adminSearch")?.addEventListener("input", renderStyleList);
    document.querySelectorAll(".rarity-filter").forEach(button => button.addEventListener("click", () => { currentRarity = button.dataset.rarity || "all"; document.querySelectorAll(".rarity-filter").forEach(b => b.classList.remove("active")); button.classList.add("active"); renderStyleList(); }));
    $("styleEditor")?.addEventListener("submit", e => { e.preventDefault(); saveCurrentStyle(true); });
    $("resetButton")?.addEventListener("click", resetCurrentStyle);
    $("previewButton")?.addEventListener("click", previewStyle);
    $("previewButtonBottom")?.addEventListener("click", previewStyle);
    $("saveAllButton")?.addEventListener("click", saveAll);
    $("exportButton")?.addEventListener("click", exportDatabase);
    $("importButton")?.addEventListener("click", importDatabase);
    $("clearButton")?.addEventListener("click", resetDatabase);
    ($("exportStylesButton") || $("exportJSButton"))?.addEventListener("click", exportStylesJS);
}

document.addEventListener("DOMContentLoaded", () => { setupEvents(); loadDatabase(); });

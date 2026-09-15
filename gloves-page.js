"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const gloveDatabase = Array.isArray(window.UBG_GLOVES) ? window.UBG_GLOVES : [];
    const sections = document.getElementById("gloveSections");
    const searchInput = document.getElementById("gloveSearch");
    const countElement = document.getElementById("gloveCount");
    const noResults = document.getElementById("noResults");
    const filterButtons = document.querySelectorAll(".filter-button");

    if (!sections || !searchInput || !countElement || !noResults) return;

    let currentFilter = "all";
    let currentSearch = "";

    const escapeHTML = value => String(value ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;");
    const rarityClass = rarity => String(rarity || "").toLowerCase().replace(/[^a-z]/g, "");

    function createCard(glove) {
        const image = glove.image ? `<img src="${escapeHTML(glove.image)}" alt="${escapeHTML(glove.name)}" loading="lazy" decoding="async">` : `<div class="glove-placeholder" aria-hidden="true">🥊</div>`;
        const status = glove.wip ? "WIP" : glove.obtainable ? "Available" : "Unobtainable";
        const statusClass = glove.wip ? "wip" : glove.obtainable ? "available" : "";
        return `<a class="glove-card" href="glove.html?glove=${encodeURIComponent(glove.id)}" aria-label="View ${escapeHTML(glove.name)}"><div class="glove-card-image"><div class="glove-status ${statusClass}">${status}</div>${image}</div><div class="glove-card-body"><div class="glove-card-name">${escapeHTML(glove.name)}</div>${glove.subtitle ? `<div class="glove-card-subtitle">${escapeHTML(glove.subtitle)}</div>` : ""}<span class="glove-rarity ${rarityClass(glove.rarity)}">${escapeHTML(glove.rarity || "Unknown")}</span></div></a>`;
    }

    function renderGloves() {
        const query = currentSearch.toLowerCase();
        const filtered = gloveDatabase.filter(glove => {
            const categoryMatch = currentFilter === "all" || glove.category === currentFilter;
            const haystack = [glove.name, glove.subtitle, glove.category, glove.series, glove.rarity, glove.obtain].filter(Boolean).join(" ").toLowerCase();
            return categoryMatch && (!query || haystack.includes(query));
        });
        countElement.textContent = `${filtered.length} ${filtered.length === 1 ? "glove" : "gloves"}`;
        noResults.hidden = filtered.length !== 0;
        if (!filtered.length) { sections.innerHTML = ""; return; }

        const grouped = {};
        filtered.forEach(glove => (grouped[glove.category] ||= []).push(glove));
        sections.innerHTML = Object.entries(grouped).map(([category, items]) => `<section class="glove-category"><div class="category-header"><div class="category-title"><h3>${escapeHTML(category)}</h3></div><span class="category-count">${items.length} ${items.length === 1 ? "ITEM" : "ITEMS"}</span></div><div class="glove-grid">${items.map(createCard).join("")}</div></section>`).join("");
    }

    searchInput.addEventListener("input", event => { currentSearch = event.target.value.trim(); renderGloves(); });
    filterButtons.forEach(button => button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        currentFilter = button.dataset.filter || "all";
        renderGloves();
    }));

    renderGloves();
});

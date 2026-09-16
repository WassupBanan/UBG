"use strict";

/* UBG unusual-effect showcase gallery. */
const UBG_UNUSUAL_EFFECTS = [
    { title: "Pain", note: "Standard Pain crate effects.", items: [
        ["Blood", "assets/gloves/unusual/175px-Unusual_Pain_-_Blood.gif"],
        ["Crows", "assets/gloves/unusual/175px-Unusual_Pain_-_Crows.gif"],
        ["Flames", "assets/gloves/unusual/175px-Unusual_Pain_-_Flames.gif"],
        ["Poison", "assets/gloves/unusual/175px-Unusual_Pain_-_Poison.gif"],
        ["Toxic", "assets/gloves/unusual/175px-Unusual_Pain_-_Toxic.gif"]
    ]},
    { title: "Gems", note: "Standard Gems crate effects.", items: [
        ["Jade", "assets/gloves/unusual/175px-Unusual_Gems_-_Jade.gif"],
        ["Onyx", "assets/gloves/unusual/175px-Unusual_Gems_-_Onyx.gif"],
        ["Shards", "assets/gloves/unusual/175px-Unusual_Gems_-_Shards.gif"],
        ["Starlight", "assets/gloves/unusual/175px-Unusual_Gems_-_Starlight.gif"],
        ["Water", "assets/gloves/unusual/175px-Unusual_Gems_-_Water.gif"]
    ]},
    { title: "Dragon", note: "Standard Dragon crate effects.", items: [
        ["Blue Fire", "assets/gloves/unusual/175px-Unusual_Dragon_-_Blue_Fire.gif"],
        ["Dragon Fire", "assets/gloves/unusual/175px-Unusual_Dragon_-_Dragon_Fire.gif"],
        ["Galaxy", "assets/gloves/unusual/175px-Unusual_Dragon_-_Galaxy.gif"],
        ["Lightning", "assets/gloves/unusual/175px-Unusual_Dragon_-_Lightning.gif"],
        ["Love", "assets/gloves/unusual/175px-Unusual_Dragon_-_Love.gif"]
    ]},
    { title: "Sci-Fi", note: "Standard Sci-Fi crate effects.", items: [
        ["Black Hole", "assets/gloves/unusual/175px-Unusual_Sci-Fi_-_Black_Hole.gif"],
        ["Cosmic", "assets/gloves/unusual/175px-Unusual_Sci-Fi_-_Cosmic.gif"],
        ["Martian", "assets/gloves/unusual/175px-Unusual_Sci-Fi_-_Martian.gif"],
        ["Nebula", "assets/gloves/unusual/175px-Unusual_Sci-Fi_-_Nebula.gif"],
        ["Quasar", "assets/gloves/unusual/175px-Unusual_Sci-Fi_-_Quasar.gif"]
    ]},
    { title: "Anime", note: "Standard Anime crate effects.", items: [
        ["Black Flash", "assets/gloves/unusual/175px-Unusual_Anime_-_Black_Flash.gif"],
        ["Fox", "assets/gloves/unusual/175px-Unusual_Anime_-_Fox.gif"],
        ["Instinct", "assets/gloves/unusual/175px-Unusual_Anime_-_Instinct.gif"],
        ["Legendary", "assets/gloves/unusual/175px-Unusual_Anime_-_Legendary.gif"],
        ["Ripple", "assets/gloves/unusual/175px-Unusual_Anime_-_Ripple.gif"]
    ]},
    { title: "Halloween 2023", note: "Halloween 2023 crate effects.", items: [
        ["Bats", "assets/gloves/unusual/175px-Unusual_HW2023_-_Bats.gif"],
        ["Ghost", "assets/gloves/unusual/175px-Unusual_HW2023_-_Ghost.gif"],
        ["Possessed", "assets/gloves/unusual/175px-Unusual_HW2023_-_Possessed.gif"],
        ["Pumpkins", "assets/gloves/unusual/175px-Unusual_HW2023_-_Pumpkins.gif"],
        ["Spectral", "assets/gloves/unusual/175px-Unusual_HW2023_-_Spectral.gif"]
    ]},
    { title: "Christmas 2023 (Holly Jolly)", note: "Frostbite and Santa's Rage were reran.", items: [
        ["Frostbite", "assets/gloves/unusual/175px-Unusual_HJolly_-_Frostbite.gif"],
        ["Grinch", "assets/gloves/unusual/175px-Unusual_HJolly_-_Grinch.gif"],
        ["Mistletoe", "assets/gloves/unusual/175px-Unusual_HJolly_-_Mistletoe.gif"],
        ["Santa's Rage", "assets/gloves/unusual/175px-Unusual_HJolly_-_Santa's_Rage.gif"],
        ["Snow", "assets/gloves/unusual/175px-Unusual_HJolly_-_Snow.gif"]
    ]},
    { title: "Halloween 2024", note: "The Possessed effect was reran for the Halloween 2024 crate.", items: [
        ["Dusk", "assets/gloves/unusual/175px-Unusual_HW2024_-_Dusk.gif"],
        ["Ecto", "assets/gloves/unusual/175px-Unusual_HW2024_-_Ecto.gif"],
        ["Lantern", "assets/gloves/unusual/175px-Unusual_HW2024_-_Lantern.gif"],
        ["Magic", "assets/gloves/unusual/175px-Unusual_HW2024_-_Magic.gif"]
    ]},
    { title: "Christmas 2024 (Jolly)", note: "The effect names are known, but showcase GIFs are not currently available in this repository.", items: [] },
    { title: "Valentine's 2026", note: "Special event effects.", items: [
        ["Broken", "assets/gloves/unusual/175px-Unusual_VT2026_-_Broken.gif"],
        ["Cold", "assets/gloves/unusual/175px-Unusual_VT2026_-_Cold.gif"],
        ["Devotion", "assets/gloves/unusual/175px-Unusual_VT2026_-_Devotion.gif"],
        ["Passion", "assets/gloves/unusual/175px-Unusual_VT2026_-_Passion.gif"]
    ]},
    { title: "Limited Universal Effects", note: "Special effects that have temporarily been available across multiple crates.", items: [
        ["Troll", "assets/gloves/unusual/175px-Unusual_Misc_-_Troll.gif"],
        ["Love", "assets/gloves/unusual/175px-Unusual_Dragon_-_Love.gif"],
        ["Devotion", "assets/gloves/unusual/175px-Unusual_VT2026_-_Devotion.gif"]
    ]}
];

function renderUnusualEffects() {
    const root = document.getElementById("unusualEffectsGallery");
    if (!root) return;
    const escapeHTML = value => String(value ?? "")
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;").replace(/'/g, "&#039;");

    root.innerHTML = UBG_UNUSUAL_EFFECTS.map(section => {
        const cards = section.items.length
            ? `<div class="unusual-effect-grid">${section.items.map(([name, src]) => `
                <figure class="unusual-effect-card">
                    <div class="unusual-effect-media" data-effect="${escapeHTML(name)}">
                        <img src="${escapeHTML(src)}" alt="${escapeHTML(name)} unusual effect" loading="lazy" decoding="async">
                    </div>
                    <figcaption>${escapeHTML(name)}</figcaption>
                </figure>`).join("")}</div>`
            : `<div class="unusual-empty">No showcase GIFs currently available.</div>`;

        return `<section class="unusual-effect-group">
            <div class="unusual-group-heading">
                <h3>${escapeHTML(section.title)}</h3>
                <span>${section.items.length ? `${section.items.length} SHOWCASES` : "NO GIFS"}</span>
            </div>
            <p class="unusual-group-note">${escapeHTML(section.note)}</p>
            ${cards}
        </section>`;
    }).join("");

    root.querySelectorAll(".unusual-effect-media img").forEach(img => {
        img.addEventListener("error", () => {
            const media = img.parentElement;
            media.classList.add("is-missing");
            media.innerHTML = `<span>Showcase GIF unavailable</span>`;
        }, { once: true });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderUnusualEffects, { once: true });
} else {
    renderUnusualEffects();
}

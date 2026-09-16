/* UBG TOPBAR BRAND
   Use the same UBG title artwork used by the wiki loader, rather than the
   generic Roblox experience icon. */
(() => {
    const icon = document.querySelector('.wiki-brand .brand-icon');
    if (!icon) return;

    icon.src = 'https://i.ytimg.com/vi/clviPNGycOk/maxresdefault.jpg';
    icon.alt = 'Untitled Boxing Game';
    icon.classList.add('loaded');
})();

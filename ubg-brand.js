/* Load the current Untitled Boxing Game experience icon from Roblox's
   thumbnail service. The universe ID is the official UBG universe. */
(() => {
    const icon = document.querySelector('.wiki-brand .brand-icon');
    if (!icon) return;

    const universeId = '4730278139';
    const api = `https://thumbnails.roproxy.com/v1/games/icons?universeIds=${universeId}&size=150x150&format=Png&isCircular=false`;

    fetch(api, { credentials: 'omit' })
        .then(response => response.ok ? response.json() : Promise.reject(response.status))
        .then(data => {
            const imageUrl = data?.data?.[0]?.imageUrl;
            if (!imageUrl) throw new Error('UBG icon unavailable');
            icon.src = imageUrl;
            icon.onload = () => icon.classList.add('loaded');
        })
        .catch(() => {
            /* Keep the CSS UBG fallback if Roblox's thumbnail service is unavailable. */
            icon.removeAttribute('src');
        });
})();

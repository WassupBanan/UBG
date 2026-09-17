/* UBG TOPBAR BRAND + GUIDE DENSITY FIX */
(() => {
    const icon = document.querySelector('.wiki-brand .brand-icon');
    if (icon) {
        icon.src = 'https://i.ytimg.com/vi/clviPNGycOk/maxresdefault.jpg';
        icon.alt = 'Untitled Boxing Game';
        icon.classList.add('loaded');
    }

    /* Keep guide pages compact and prevent oversized empty panels. */
    if (!document.body || document.body.dataset.page !== 'guides') return;

    const style = document.createElement('style');
    style.id = 'ubg-guide-density-fix';
    style.textContent = `
        /* Individual guide pages */
        body[data-page="guides"] .main-content > .content-section {
            margin-bottom: 34px !important;
        }

        body[data-page="guides"] .main-content > .content-section > .section-heading {
            gap: 11px !important;
            margin-bottom: 10px !important;
        }

        body[data-page="guides"] .main-content > .content-section > .section-heading .section-number {
            width: 34px !important;
            height: 34px !important;
            flex-basis: 34px !important;
            font-size: 9px !important;
        }

        body[data-page="guides"] .main-content .wiki-panel {
            padding: 22px 25px !important;
        }

        body[data-page="guides"] .main-content .wiki-panel p {
            line-height: 1.65 !important;
        }

        body[data-page="guides"] .main-content .control-card,
        body[data-page="guides"] .main-content .combat-principle,
        body[data-page="guides"] .main-content .defence-card,
        body[data-page="guides"] .main-content .adapt-card,
        body[data-page="guides"] .main-content .distance-card,
        body[data-page="guides"] .main-content .movement-principle,
        body[data-page="guides"] .main-content .movement-mix-item,
        body[data-page="guides"] .main-content .movement-mistake,
        body[data-page="guides"] .main-content .counter-loop-step,
        body[data-page="guides"] .main-content .bait-card,
        body[data-page="guides"] .main-content .pattern-card,
        body[data-page="guides"] .main-content .counter-mistake {
            padding: 18px !important;
        }

        body[data-page="guides"] .main-content .controls-grid,
        body[data-page="guides"] .main-content .combat-principles,
        body[data-page="guides"] .main-content .defence-grid,
        body[data-page="guides"] .main-content .adapt-grid,
        body[data-page="guides"] .main-content .distance-grid,
        body[data-page="guides"] .main-content .movement-principles,
        body[data-page="guides"] .main-content .movement-mix,
        body[data-page="guides"] .main-content .movement-mistakes,
        body[data-page="guides"] .main-content .bait-grid,
        body[data-page="guides"] .main-content .pattern-grid,
        body[data-page="guides"] .main-content .counter-mistakes {
            gap: 10px !important;
            padding: 10px !important;
        }

        body[data-page="guides"] .main-content .combat-step,
        body[data-page="guides"] .main-content .punish-step,
        body[data-page="guides"] .main-content .counter-loop-step {
            padding: 17px !important;
        }

        body[data-page="guides"] .main-content .guide-callout {
            margin-top: 17px !important;
            padding: 13px 16px !important;
        }

        /* Guides hub — make the Browse Guides cards compact. */
        body[data-page="guides"] .wiki-main > .content-section {
            margin-top: 34px !important;
        }

        body[data-page="guides"] .wiki-main .guide-grid {
            gap: 12px !important;
            max-width: 1180px !important;
        }

        body[data-page="guides"] .wiki-main .guide-card {
            min-height: 0 !important;
            height: 128px !important;
            padding: 18px 20px !important;
            grid-template-columns: 44px minmax(0, 1fr) !important;
            gap: 14px !important;
        }

        body[data-page="guides"] .wiki-main .guide-card-icon {
            width: 44px !important;
            height: 44px !important;
            flex-basis: 44px !important;
            font-size: 23px !important;
        }

        body[data-page="guides"] .wiki-main .guide-card h3 {
            margin: 5px 0 5px !important;
            font-size: 17px !important;
        }

        body[data-page="guides"] .wiki-main .guide-card p {
            font-size: 12px !important;
            line-height: 1.45 !important;
        }

        body[data-page="guides"] .wiki-main .featured-guide {
            min-height: 0 !important;
            padding: 24px 26px !important;
        }

        body[data-page="guides"] .wiki-main .quick-tip {
            min-height: 0 !important;
            padding: 15px !important;
        }

        @media (max-width: 760px) {
            body[data-page="guides"] .main-content > .content-section {
                margin-bottom: 28px !important;
            }

            body[data-page="guides"] .wiki-main .guide-card {
                height: auto !important;
                min-height: 105px !important;
            }
        }
    `;
    document.head.appendChild(style);
})();

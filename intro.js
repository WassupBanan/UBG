"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("ubg-loader");
    const bar = document.getElementById("loaderBar");
    const status = document.getElementById("loaderStatus");
    const percent = document.getElementById("loaderPercent");
    const skip = document.getElementById("loaderSkip");
    if (!loader) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let progress = 0;
    let done = false;
    const stages = ["INITIALISING", "LOADING DATABASE", "CALIBRATING", "READY"];

    function setProgress(value) {
        progress = Math.max(progress, Math.min(100, value));
        if (bar) bar.style.width = `${progress}%`;
        if (status) status.textContent = stages[Math.min(stages.length - 1, Math.floor(progress / 26))];
        if (percent) percent.textContent = `${Math.round(progress)}%`;
    }

    function finish() {
        if (done) return;
        done = true;
        setProgress(100);
        loader.classList.add("final-flash");
        setTimeout(() => loader.classList.add("is-done"), reduceMotion ? 0 : 180);
        setTimeout(() => loader.remove(), reduceMotion ? 20 : 1050);
    }

    skip?.addEventListener("click", finish);
    window.addEventListener("keydown", event => { if (event.key === "Escape") finish(); });

    const start = performance.now();
    const duration = reduceMotion ? 500 : 2400;
    function tick(now) {
        if (done) return;
        const t = Math.min(1, (now - start) / duration);
        setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
        if (t < 1) requestAnimationFrame(tick); else setTimeout(finish, reduceMotion ? 0 : 250);
    }
    requestAnimationFrame(tick);
});

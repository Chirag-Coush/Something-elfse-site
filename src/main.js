import "./styles/main.css";
import { defaultSite, defaultTours, defaultSongs } from "./data.js";
import { initHeroParallax, renderHero } from "./sections/hero.js";
import { renderTourMeta, renderTours } from "./sections/tour.js";
import { renderSongs } from "./sections/songs.js";

function renderSite(site, tours, songs) {
  const brandEls = document.querySelectorAll("[data-brand], [data-brand-footer]");
  brandEls.forEach((el) => (el.textContent = site.brand));

  renderHero(site, defaultSite);
  renderTourMeta(site, defaultSite);

  const listenHeading = document.querySelector("[data-listen-heading]");
  if (listenHeading) listenHeading.textContent = site.listen?.heading || defaultSite.listen.heading;

  const footerNote = document.querySelector("[data-footer-note]");
  if (footerNote) footerNote.textContent = site.footerNote || defaultSite.footerNote;

  const shopLink = document.querySelector("[data-shop]");
  const shopSeparator = document.querySelector(".shop-separator");
  if (shopLink) {
    if (site.links?.shop) {
      shopLink.href = site.links.shop;
      shopLink.classList.remove("hidden");
      if (shopSeparator) shopSeparator.classList.remove("hidden");
    } else {
      shopLink.classList.add("hidden");
      if (shopSeparator) shopSeparator.classList.add("hidden");
    }
  }

  const spotify = document.querySelector("[data-link-spotify]");
  const youtube = document.querySelector("[data-link-youtube]");
  const instagram = document.querySelector("[data-link-instagram]");
  if (spotify && site.links?.spotify) spotify.href = site.links.spotify;
  if (youtube && site.links?.youtube) youtube.href = site.links.youtube;
  if (instagram && site.links?.instagram) instagram.href = site.links.instagram;

  renderTours(tours || []);
  renderSongs(songs || []);
}

async function loadData() {
  try {
    const [siteRes, toursRes, songsRes] = await Promise.all([
      fetch("/data/site.json")
        .then((r) => (r.ok ? r.json() : defaultSite))
        .catch(() => defaultSite),
      fetch("/data/tours.json")
        .then((r) => (r.ok ? r.json() : defaultTours))
        .catch(() => defaultTours),
      fetch("/data/songs.json")
        .then((r) => (r.ok ? r.json() : defaultSongs))
        .catch(() => defaultSongs),
    ]);
    const tourStops = Array.isArray(toursRes) ? toursRes : toursRes?.stops;
    const tracks = Array.isArray(songsRes) ? songsRes : songsRes?.tracks;
    renderSite(siteRes || defaultSite, tourStops || defaultTours, tracks || defaultSongs);
  } catch (err) {
    console.error("Failed to load data, using defaults", err);
    renderSite(defaultSite, defaultTours, defaultSongs);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  initHeroParallax();
});

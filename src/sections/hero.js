export function renderHero(site, defaults) {
  const heroTitle = document.querySelector("[data-hero-title]");
  const heroImage = document.querySelector("[data-hero-background]");
  const heroForeground = document.querySelector("[data-hero-foreground]");
  if (heroTitle) heroTitle.textContent = site.hero?.title || defaults.hero.title;
  if (heroImage && site.hero?.backgroundImage) heroImage.src = site.hero.backgroundImage;
  if (heroForeground && site.hero?.foregroundImage) heroForeground.src = site.hero.foregroundImage;
}

export function initHeroParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bg = document.querySelector("[data-hero-background]");
  const fg = document.querySelector("[data-hero-foreground]");
  if (!bg || !fg) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY || 0;
    bg.style.transform = `translate3d(0, ${Math.round(y * 0.08)}px, 0)`;
    fg.style.transform = `translate3d(0, ${Math.round(y * 0.16)}px, 0)`;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

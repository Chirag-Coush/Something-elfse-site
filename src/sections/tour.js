import { formatDateParts } from "../utils/date.js";

export function renderTours(tours) {
  const list = document.getElementById("tour-list");
  if (!list) return;
  list.innerHTML = "";
  if (!tours || tours.length === 0) {
    list.innerHTML = '<p class="text-sm text-gray-600">No upcoming dates yet. Check back soon.</p>';
    return;
  }
  tours.forEach((stop) => {
    const { month, day } = formatDateParts(stop.date);
    const card = document.createElement("article");
    card.className =
      "flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 ps-2 pe-4 py-4 shadow-md transition hover:-translate-y-0.2 focus-within:ring-2 focus-within:ring-forest-500/70";
    card.innerHTML = `
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-0">
          <div class="flex w-20 flex-col items-center justify-center text-center">
            <span class="text-xs font-semibold tracking-[0.16em] text-gray-600">${
              month || "—"
            }</span>
            <span class="mt-1 text-3xl font-bold text-gray-800">${day || ""}</span>
          </div>
          <div class="h-12 border-r border-dashed border-gray-600/30"></div>
        </div>
        <div>
          <div class="font-display text-lg text-gray-800">${stop.city || "TBA"}</div>
          <div class="text-sm text-gray-600">${stop.venue || ""}</div>
        </div>
      </div>
      <a class="group inline-flex items-center gap-2 rounded-full bg-moss-700 px-4 py-2 text-sm font-semibold text-moss-100 transition hover:bg-moss-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-700" href="${
        stop.ticketUrl || "#"
      }" target="_blank" rel="noreferrer" aria-label="Tickets for ${stop.city || "this show"}">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-4 w-4">
          <path d="M8.33366 6.66668V5.83334M8.33366 10.4167V9.58334M8.33366 14.1667V13.3333M4.33366 3.33334H15.667C16.6004 3.33334 17.0671 3.33334 17.4236 3.515C17.7372 3.67479 17.9922 3.92976 18.152 4.24336C18.3337 4.59988 18.3337 5.06659 18.3337 6.00001V7.08334C16.7228 7.08334 15.417 8.38918 15.417 10C15.417 11.6108 16.7228 12.9167 18.3337 12.9167V14C18.3337 14.9334 18.3337 15.4001 18.152 15.7567C17.9922 16.0703 17.7372 16.3252 17.4236 16.485C17.0671 16.6667 16.6004 16.6667 15.667 16.6667H4.33366C3.40024 16.6667 2.93353 16.6667 2.57701 16.485C2.2634 16.3252 2.00844 16.0703 1.84865 15.7567C1.66699 15.4001 1.66699 14.9334 1.66699 14V12.9167C3.27782 12.9167 4.58366 11.6108 4.58366 10C4.58366 8.38918 3.27782 7.08334 1.66699 7.08334V6.00001C1.66699 5.06659 1.66699 4.59988 1.84865 4.24336C2.00844 3.92976 2.2634 3.67479 2.57701 3.515C2.93353 3.33334 3.40024 3.33334 4.33366 3.33334Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Tickets
      </a>
    `;
    list.appendChild(card);
  });
}

export function renderTourMeta(site, defaults) {
  const tourImage = document.querySelector("[data-tour-image]");
  if (tourImage && site.tour?.featureImage) tourImage.src = site.tour.featureImage;
  const tourHeading = document.querySelector("[data-tour-heading]");
  const tourDesc = document.querySelector("[data-tour-description]");
  if (tourHeading) tourHeading.textContent = site.tour?.heading || defaults.tour.heading;
  if (tourDesc) tourDesc.textContent = site.tour?.description || defaults.tour.description;
}

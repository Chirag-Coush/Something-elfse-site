export function renderSongs(songs) {
  const grid = document.getElementById("songs-grid");
  if (!grid) return;
  grid.innerHTML = "";
  if (!songs || songs.length === 0) {
    grid.innerHTML =
      '<p class="text-sm text-gray-600">No tracks available yet. Add songs in the CMS.</p>';
    return;
  }
  songs.forEach((song) => {
    const card = document.createElement("a");
    card.className =
      "group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-md transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss-950";
    card.href = song.url || "#";
    card.setAttribute("aria-label", `Listen to ${song.title || "song"}`);
    if (song.url) {
      card.target = "_blank";
      card.rel = "noreferrer";
    }
    const coverStyle = song.cover
      ? `background-image: url('${song.cover}');`
      : "background: radial-gradient(circle at 20% 20%, #e0f2f1, #c8e6c9 30%, #b3e5fc 60%, #f0f4c3);";
    card.innerHTML = `
      <div class="relative aspect-[4/3] w-full overflow-hidden" style="${coverStyle} background-size: cover; background-position: center;">
        ${
          song.cover
            ? `<img src="${song.cover}" alt="Cover art for ${
                song.title || "song"
              }" class="absolute inset-0 h-full w-full object-cover">`
            : '<span class="sr-only">Song cover art placeholder</span>'
        }
        <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
      </div>
      <div class="flex items-center justify-between px-4 py-3">
        <div>
          <div class="text-lg font-semibold text-gray-800">${song.title || "Untitled"}</div>  
          <div class="text-sm text-gray-600">${song.duration || ""}</div>
        </div>
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-moss-700 text-moss-100 shadow-card transition group-hover:bg-moss-950" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4">
            <path d="M13.1649 3.33345C14.1098 4.64694 14.6663 6.25854 14.6663 8.00011C14.6663 9.74169 14.1098 11.3533 13.1649 12.6668M10.4965 5.33345C11.0238 6.08934 11.333 7.00862 11.333 8.00011C11.333 8.99161 11.0238 9.91089 10.4965 10.6668M6.42255 3.57724L4.31209 5.68769C4.19679 5.803 4.13914 5.86065 4.07186 5.90187C4.01222 5.93843 3.94719 5.96536 3.87916 5.98169C3.80244 6.00011 3.72091 6.00011 3.55785 6.00011H2.39967C2.02631 6.00011 1.83962 6.00011 1.69701 6.07278C1.57157 6.13669 1.46959 6.23868 1.40567 6.36412C1.33301 6.50673 1.33301 6.69341 1.33301 7.06678V8.93345C1.33301 9.30682 1.33301 9.4935 1.40567 9.63611C1.46959 9.76155 1.57157 9.86354 1.69701 9.92745C1.83962 10.0001 2.02631 10.0001 2.39967 10.0001H3.55785C3.72091 10.0001 3.80244 10.0001 3.87916 10.0185C3.94719 10.0349 4.01222 10.0618 4.07186 10.0984C4.13914 10.1396 4.19679 10.1972 4.31209 10.3125L6.42255 12.423C6.70813 12.7086 6.85093 12.8514 6.97352 12.861C7.07989 12.8694 7.18385 12.8263 7.25314 12.7452C7.33301 12.6517 7.33301 12.4497 7.33301 12.0459V3.95436C7.33301 3.55048 7.33301 3.34855 7.25314 3.25504C7.18385 3.1739 7.07989 3.13084 6.97352 3.13921C6.85093 3.14886 6.70813 3.29165 6.42255 3.57724Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    `;
    grid.appendChild(card);
  });
}

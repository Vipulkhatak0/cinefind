
const ITEMS = [
  {
    id: 1, type: "movie",
    title: "Kantara", year: "2024",
    language: "hindi", category: "action",
    rating: 9.1, watchLink: "https://www.youtube.com/watch?v=example",
    desc: "A fierce conflict over land and power erupts in a south Indian village where ancient folklore and politics dangerously collide.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiaWKhRhmsP-Dzqn6KyRVFwdXU9G5h7Sbl9g&s",
    trending: true, cast: "Rishab Shetty, Sapthami Gowda"
  },
  {
    id: 2, type: "movie", title: "Nikka Zaildar 4", year: "2025",
    language: "punjabi", category: "comedy", rating: 7.8,
    desc: "The lovable Nikka returns in another hilarious Punjabi adventure packed with family drama and village comedy.",
    image: "https://m.media-amazon.com/images/S/pv-target-images/4e05bd2b7be93ddf4f9c94acaf5f027eaeee51ffb4b0f38de5a136f4570987b6.jpg",
    trending: false, cast: "Ammy Virk, Wamiqa Gabbi"
  },
  {
    id: 3, type: "movie", title: "Oppenheimer", year: "2023", language: "english", category: "thriller",
    rating: 9.0, watchLink: "https://www.youtube.com/watch?v=example",
    desc: "The story of J. Robert Oppenheimer and the creation of the first nuclear weapon — a race that changed the world forever.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FFJNBaIXvhEwqXXw40rYYDci8jPlYxWfy9082flliYoZ-SqqZjy0az-G5rIWuSJp2pn7xQ&s=10",
    trending: true, cast: "Cillian Murphy, Emily Blunt"
  },
  {
    id: 4, type: "movie", title: "Jawan", year: "2023",
    language: "hindi", category: "action", rating: 8.3,
     watchLink: "https://www.youtube.com/watch?v=example",
    desc: "A prison warden recruits inmates to correct societal wrongs, inspired by a man on a mission of vengeance.",
    image: "data:image/jpeg;base64,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", trending: true, cast: "Shah Rukh Khan, Nayanthara"
  },
  {
    id: 5, type: "movie", title: "Animal", year: "2023",
    language: "hindi", category: "action", rating: 7.6,
    desc: "A son's obsessive bond with his father drives him into a dark world of crime and violence.",
    image: "https://m.media-amazon.com/images/M/MV5BZThmNDg1NjUtNWJhMC00YjA3LWJiMjItNmM4ZDQ5ZGZiN2Y2XkEyXkFqcGc@._V1_.jpg",
    watchLink: "https://www.youtube.com/watch?v=example",
 cast: "Ranbir Kapoor, Rashmika Mandanna"
  },
  {
    id: 6, type: "movie", title: "Past Lives", year: "2023", language: "english",
    category: "romance", rating: 8.7,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "Two childhood friends separated by migration reconnect years later in this deeply moving story about love, loss, and destiny.",
    image: "💕", trending: false, cast: "Greta Lee, Teo Yoo"
  },
  {
    id: 7, type: "movie", title: "Poor Things", year: "2023", language: "english",
    category: "drama", rating: 8.3, desc: "A young woman brought back to life by an eccentric scientist embarks on a wild odyssey of self-discovery.",
    image: "🎭", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Emma Stone, Mark Ruffalo"
  },
  {
    id: 8, type: "movie", title: "Dune: Part Two", year: "2024", language: "english",
    category: "scifi", rating: 9.2,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "Paul Atreides unites with Arrakis's Fremen and rides giant sandworms as he seeks revenge against the conspirators who destroyed his family.",
    image: "🏜️", trending: true, cast: "Timothée Chalamet, Zendaya"
  },
  {
    id: 9, type: "movie", title: "Stree 2", year: "2024", language: "hindi", category: "horror", rating: 8.9,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "The town of Chanderi faces a terrifying new supernatural threat and the gang must once again rise to save the day.",
    image: "👻", trending: true, cast: "Rajkummar Rao, Shraddha Kapoor"
  },
  {
    id: 10, type: "movie", title: "Crew", year: "2024", language: "hindi",
    category: "comedy", rating: 7.5,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "Three fearless flight attendants find themselves entangled in a dangerous smuggling operation.",
    image: "✈️", trending: false, cast: "Kareena Kapoor, Tabu, Kriti Sanon"
  },
  {
    id: 11, type: "movie", title: "The Holdovers", year: "2023", language: "english",
    category: "drama", rating: 8.8, 
    watchLink: "https://www.youtube.com/watch?v=example",
    desc: "A cranky classics professor must stay with unruly students over the holidays and forms an unlikely bond.",
    image: "❄️", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Paul Giamatti, Dominic Sessa"
  },
  {
    id: 12, type: "movie", title: "Laapata Ladies", year: "2024", language: "hindi",
    category: "comedy", rating: 8.5,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "Two brides get accidentally swapped on a train, setting off a heartwarming and hilarious comedy of errors.",
    image: "👰", trending: true, cast: "Nitanshi Goel, Pratibha Ranta"
  },
  {
    id: 13, type: "series", title: "The Bear", year: "2023", language: "english",
    category: "drama", rating: 9.3,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "A young chef transforms a Chicago beef sandwich shop after his brother's death in this intensely raw and emotional drama.",
    image: "🐻", trending: true, cast: "Jeremy Allen White, Ayo Edebiri"
  },
  {
    id: 14, type: "series", title: "Mirzapur S3", year: "2024", language: "hindi",
    category: "action", rating: 8.6,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "Power struggles and crime dynasties continue to collide in the gritty, blood-soaked world of Mirzapur's underworld.",
    image: "🔱", trending: true, cast: "Pankaj Tripathi, Ali Fazal"
  },
  {
    id: 15, type: "series", title: "Squid Game S2", year: "2024", language: "korean",
    category: "thriller", rating: 9.5,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "The deadly games return as desperate contestants compete in brutal children's games for a life-changing cash prize.",
    image: "🎮", trending: true, cast: "Lee Jung-jae, Lee Byung-hun"
  },
  {
    id: 16, type: "series", title: "Shogun", year: "2024", language: "english",
    category: "drama", rating: 9.4,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "A shipwrecked English sailor navigates feudal Japan's lethal political intrigue and rises to become a samurai lord.",
    image: "⚔️", trending: true, cast: "Hiroyuki Sanada, Cosmo Jarvis"
  },
  {
    id: 17, type: "series", title: "Panchayat S3", year: "2024", language: "hindi",
    category: "drama", rating: 9.1,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "The endearing journey of a city-bred civil servant managing the messy affairs of a rural UP village continues.",
    image: "🌾", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Jitendra Kumar, Raghubir Yadav"
  },
  {
    id: 18, type: "series", title: "The Last of Us", year: "2023", language: "english",
    category: "thriller", rating: 9.4,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "A hardened survivor and a teenage girl with immunity must survive a post-apocalyptic world in this acclaimed HBO adaptation.",
    image: "🍄", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Pedro Pascal, Bella Ramsey"
  },
  {
    id: 19, type: "series", title: "Scam 2003", year: "2023", language: "hindi",
    category: "thriller", rating: 8.4,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "The chilling true story of Abdul Karim Telgi and the massive stamp paper scam that shook an entire nation.",
    image: "📄", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Gagan Dev Riar, Hemant Kher"
  },
  {
    id: 20, type: "series", title: "Fallout", year: "2024", language: "english",
    category: "scifi", rating: 8.8,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "A sheltered vault dweller emerges into a brutal post-nuclear wasteland and encounters factions fighting over survival.",
    image: "☢️", trending: true, cast: "Ella Purnell, Walton Goggins"
  },
  {
    id: 21, type: "series", title: "Dark Winds", year: "2024", language: "english",
    category: "thriller", rating: 8.5,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "Navajo tribal police investigate a series of mysterious crimes on a remote 1970s reservation in this gripping crime drama.",
    image: "🌵", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Zahn McClarnon, Kiowa Gordon"
  },
  {
    id: 22, type: "series", title: "Taaza Khabar S2", year: "2024", language: "hindi",
    category: "comedy", rating: 8.1,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "A Mumbai gutter cleaner's supernatural ability to see tomorrow's news returns with bigger consequences.",
    image: "📰", watchlink: "https://www.youtube.com/watch?v=example"
, cast: "Bhuvan Bam, Shriya Pilgaonkar"
  },
  {
    id: 23, type: "movie", title: "Yodha", year: "2024", language: "hindi",
    category: "action", rating: 7.2,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "An elite commando battles heavily armed terrorists who have taken over a plane at 35,000 feet.",
    image: "🛩️", trending: false, cast: "Sidharth Malhotra, Raashii Khanna"
  },
  {
    id: 24, type: "movie", title: "Alien: Romulus", year: "2024", language: "english",
    category: "horror", rating: 8.2,
    watchLink: "https://www.youtube.com/watch?v=example",
     desc: "A group of young space colonizers venture into an abandoned space station and encounter the most terrifying organism in the universe.",
    image: "👾", trending: true, cast: "Cailee Spaeny, David Jonsson"
  },
];

// ===== APP STATE =====
let state = {
  tab: "home",
  cat: "all",
  search: "",
  lang: "all",
  year: "all",
  rating: "all",
  watchlist: [],
  light: false
};

let currentItem = null;

// ===== FILTER LOGIC =====
function filtered() {
  let d = [...ITEMS];

  if (state.tab === "movies") d = d.filter(x => x.type === "movie");
  else if (state.tab === "series") d = d.filter(x => x.type === "series");
  else if (state.tab === "trending") d = d.filter(x => x.trending);
  else if (state.tab === "watchlist") d = d.filter(x => state.watchlist.includes(x.id));

  if (state.cat !== "all") d = d.filter(x => x.category === state.cat);
  if (state.lang !== "all") d = d.filter(x => x.language === state.lang);
  if (state.year !== "all") d = d.filter(x => x.year === state.year);
  if (state.rating !== "all") d = d.filter(x => x.rating >= parseFloat(state.rating));

  if (state.search) {
    const q = state.search.toLowerCase();
    d = d.filter(x =>
      x.title.toLowerCase().includes(q) ||
      x.category.toLowerCase().includes(q) ||
      x.cast.toLowerCase().includes(q) ||
      x.language.toLowerCase().includes(q)
    );
  }

  return d;
}

// ===== CARD HTML =====
function card(item) {
  const inWL = state.watchlist.includes(item.id);
  return `
    <div class="card" onclick="openModal(${item.id})">
      <button
        class="wl-heart ${inWL ? 'saved' : ''}"
        onclick="event.stopPropagation(); toggleWl(${item.id})"
        title="${inWL ? 'Remove from watchlist' : 'Add to watchlist'}"
      >
        <i class="fa-${inWL ? 'solid' : 'regular'} fa-heart"></i>
      </button>
      <div class="card-thumb">

<img src="${item.image}" alt="${item.title}">

        <div class="card-overlay">
          <div class="card-overlay-btn"><i class="fa-solid fa-play"></i> Play</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span class="card-rating">★ ${item.rating}</span>
          <span class="pill ${item.type === 'series' ? 'pill-blue' : 'pill-red'}">
            ${item.type === 'series' ? 'Series' : 'Movie'}
          </span>
          ${item.trending ? '<span class="pill pill-gold">🔥</span>' : ''}
        </div>
        <div class="card-meta" style="margin-top:4px;">${item.year} · ${item.language}</div>
      </div>
    </div>`;
}

// ===== SECTION HTML =====
function section(title, items, limit) {
  const slice = limit ? items.slice(0, limit) : items;
  return `
    <div class="section-block">
      <div class="section-header">
        <div class="section-title">${title}</div>
        ${limit && items.length > limit ? '<a class="see-all">See all →</a>' : ''}
      </div>
      ${slice.length
      ? `<div class="grid">${slice.map(card).join('')}</div>`
      : `<div class="empty"><div class="empty-icon">🔍</div><p>No results found.</p></div>`
    }
    </div>`;
}

// ===== RENDER =====
function render() {
  state.lang = document.getElementById("langFilter").value;
  state.year = document.getElementById("yearFilter").value;
  state.rating = document.getElementById("ratingFilter").value;

  document.getElementById("wlCount").textContent = state.watchlist.length;

  const mc = document.getElementById("mainContent");

  if (state.tab === "home" && !state.search) {
    mc.innerHTML =
      section("🔥 Trending Now", ITEMS.filter(x => x.trending), 8) +
      section("🎬 Popular Movies", ITEMS.filter(x => x.type === "movie"), 8) +
      section("📺 Popular Series", ITEMS.filter(x => x.type === "series"), 6);

  } else if (state.tab === "watchlist" && !state.search) {
    const d = filtered();
    mc.innerHTML = d.length
      ? section("❤️ Your Watchlist", d)
      : `<div class="empty"><div class="empty-icon">💔</div><p>Your watchlist is empty. Click ♥ on any title to save it.</p></div>`;

  } else {
    const d = filtered();
    const label = state.search
      ? `Search results for "${state.search}"`
      : state.tab === "trending" ? "🔥 Trending"
        : state.tab === "movies" ? "🎬 Movies"
          : "📺 Series";

    mc.innerHTML = d.length
      ? section(label, d)
      : `<div class="empty"><div class="empty-icon">🔍</div><p>No results found. Try different filters or search terms.</p></div>`;
  }
}

// ===== TAB SWITCHING =====
function setMainTab(t, btn) {
  state.tab = t;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.querySelectorAll("nav a").forEach((a, i) => {
    const tabs = ["home", "movies", "series", "trending", "watchlist"];
    a.classList.toggle("active", tabs[i] === t);
  });
  render();
}

function setTab(t, el) {
  state.tab = t;
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  if (el) el.classList.add("active");
  const tabEl = document.getElementById("tab-" + t);
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  if (tabEl) tabEl.classList.add("active");
  render();
}

// ===== CATEGORY FILTER =====
function setCat(c, btn) {
  state.cat = c;
  document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  render();
}

// ===== SEARCH =====
function doSearch() {
  state.search = document.getElementById("searchInput").value.trim();
  render();
}

// ===== MODAL =====
function openModal(id) {
  const item = ITEMS.find(x => x.id === id);
  if (!item) return;
  currentItem = item;

  const inWL = state.watchlist.includes(item.id);

  document.getElementById("modalThumb").innerHTML =
    `<button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
     <img 
src="${item.image}" 
style="width:100%;height:100%;object-fit:cover;"
>`;

  document.getElementById("modalTitle").textContent = item.title;

  document.getElementById("modalMeta").innerHTML =
    `<span>★ ${item.rating}</span><span>·</span><span>${item.year}</span><span>·</span>
     <span class="pill ${item.type === 'series' ? 'pill-blue' : 'pill-red'}">
       ${item.type === 'series' ? 'TV Series' : 'Movie'}
     </span>
     <span class="pill pill-gold">${item.category}</span>
     ${item.trending ? '<span class="pill pill-gold">🔥 Trending</span>' : ''}`;

  document.getElementById("modalDesc").textContent = item.desc;
  document.getElementById("modalCast").innerHTML =
    `<span style="color:var(--muted)">Cast: </span><span>${item.cast}</span>`;

  const wlBtn = document.getElementById("modalWlBtn");
  document.getElementById("modalWlText").textContent = inWL ? "Remove from Watchlist" : "Add to Watchlist";
  wlBtn.querySelector("i").className = `fa-${inWL ? 'solid' : 'regular'} fa-heart`;
  wlBtn.classList.toggle("saved", inWL);

  document.getElementById("modalBg").classList.add("open");
}

function closeModal() {
  document.getElementById("modalBg").classList.remove("open");
}

function closeModalBg(e) {
  if (e.target === document.getElementById("modalBg")) closeModal();
}

// ===== WATCHLIST =====
function toggleWl(id) {
  const idx = state.watchlist.indexOf(id);
  const item = ITEMS.find(x => x.id === id);
  if (idx > -1) {
    state.watchlist.splice(idx, 1);
    showToast("Removed from watchlist");
  } else {
    state.watchlist.push(id);
    showToast(`"${item.title}" added to watchlist ❤️`);
  }
  render();
}

function toggleWlModal() {
  if (currentItem) toggleWl(currentItem.id);
  openModal(currentItem.id);
}

// ===== WATCH NOW =====
function watchNow() {
  if (!currentItem) return;

  if (currentItem.watchLink) {
    window.open(currentItem.watchLink, "_blank");
  } else {
    showToast("No watch link available");
  }
}
// ===== THEME =====
function toggleTheme() {
  state.light = !state.light;
  document.body.classList.toggle("light", state.light);
  document.getElementById("themeBtn").innerHTML = state.light
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

// ===== INIT =====
render();
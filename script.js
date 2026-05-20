
const ITEMS = [
  {
    id: 1, type: "movie",
    title: "Kantara", year: "2024",
    language: "hindi", category: "action",
    rating: 9.1, watchLink: "https://youtu.be/oQu5KACS5_I",
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
    id: 4, type: "movie", title: "shubham kuamr ", year: "2023",
    language: "hindi", category: "action", rating: 8.3,
     watchLink: "",
    desc: "A prison warden recruits inmates to correct societal wrongs, inspired by a man on a mission of vengeance.",
      image: "1000010867.jpg"
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
// ===== FULL SCREEN ADS =====
// ===== FULL SCREEN ADS FIXED =====
function watchNow() {

  if (!currentItem) return;

  const adLinks = [
    "https:https://www.effectivecpmnetwork.com/bjmg4vv6?key=a5bd89c5973a77f8b215f1aaff2f2087",
    "https:",
    "https://www.effectivecpmnetwork.com/link3",
    "https://www.effectivecpmnetwork.com/link4"
  ];

  // Random ad
  const adLink = adLinks[Math.floor(Math.random() * adLinks.length)];

  const adScreen = document.createElement("div");

  adScreen.innerHTML = `
    <div id="fullAdScreen">

      <iframe 
        src="${adLink}"
        frameborder="0">
      </iframe>

      <div class="ad-info">
        <h2>Advertisement</h2>
        <p>Movie starts in <span id="adCount">5</span> seconds...</p>
      </div>

    </div>
  `;

  document.body.appendChild(adScreen);

  let time = 5;

  document.getElementById("adCount").innerText = time;

  const counter = setInterval(() => {

    time--;

    document.getElementById("adCount").innerText = time;

    if(time <= 0){

      clearInterval(counter);

      document.getElementById("fullAdScreen").remove();

      if(currentItem.watchLink){
        window.location.href = currentItem.watchLink;
      } else {
        showToast("No movie link found");
      }

    }

  },1000);

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
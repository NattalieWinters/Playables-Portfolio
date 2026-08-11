const games = [
  { title: "Black and White Triangle", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 0, file: "Playable Ads/Arrow Out - Black and White Triangle.html" },
  { title: "Black and White Van Gogh", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 1, file: "Playable Ads/Arrow Out - Black and White Van Gogh.html" },
  { title: "Dark Triangle", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 2, file: "Playable Ads/Arrow Out - Dark Triangle.html" },
  { title: "Dark Van Gogh", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 3, file: "Playable Ads/Arrow Out - Dark Van Gogh.html" },
  { title: "Light Triangle", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 4, file: "Playable Ads/Arrow Out - Light Triangle.html" },
  { title: "Light Van Gogh", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 5, file: "Playable Ads/Arrow Out - Light Van Gogh.html" },
  { title: "Orange and Blue Van Gogh", variant: "", collection: "Arrow Out", engine: "Unity", dimension: "2D", motif: "arrow", palette: 6, file: "Playable Ads/Arrow Out - Orange and Blue Van Gogh.html" },

  { title: "Checkers Level Pt1", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 7, file: "Playable Ads/Block Buster - Checkers Level Pt1.html" },
  { title: "Chess Saver", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 8, file: "Playable Ads/Block Buster - Chess Saver.html" },
  { title: "Chop", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 9, file: "Playable Ads/Block Buster - Chop.html" },
  { title: "Corners", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 10, file: "Playable Ads/Block Buster - Corners.html" },
  { title: "Fluffies", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 11, file: "Playable Ads/Block Buster - Fluffies.html" },
  { title: "Fluffy Board", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 12, file: "Playable Ads/Block Buster - Fluffy Board.html" },
  { title: "Fluffy Saw", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 13, file: "Playable Ads/Block Buster - Fluffy Saw.html" },
  { title: "Huge Level Pt1", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 14, file: "Playable Ads/Block Buster - Huge Level Pt1.html" },
  { title: "Huge Level Pt2", variant: "", collection: "Block Buster", engine: "Unity", motif: "blocks", palette: 15, file: "Playable Ads/Block Buster - Huge Level Pt2.html" },
  { title: "Multi Color Lego", variant: "", collection: "Block Buster", engine: "Babylon", motif: "blocks", palette: 16, file: "Playable Ads/Block Buster - Multi Color Lego.html" },

  { title: "Snake Landmark", variant: "", collection: "Bubble Word Jam", engine: "Phaser 3", motif: "words", palette: 17, file: "Playable Ads/Bubble Word Jam - Snake Landmark.html" },
  { title: "Trivia", variant: "", collection: "Bubble Word Jam", engine: "Phaser 3", motif: "words", palette: 18, file: "Playable Ads/Bubble Word Jam - Trivia.html" },
  { title: "Cheater", variant: "", collection: "Category Sort", engine: "Unity", dimension: "2D", motif: "flags", palette: 18, file: "Playable Ads/Category Sort - Cheater.html" },
  { title: "Flags", variant: "", collection: "Category Sort", engine: "Phaser 3", motif: "flags", palette: 19, file: "Playable Ads/Category Sort - Flags.html" },
  { title: "Gold Digger", variant: "", collection: "Category Sort", engine: "Phaser 3", motif: "coins", palette: 20, file: "Playable Ads/Category Sort - Gold Digger.html" },
  { title: "Horizontal Roll", variant: "", collection: "Coin Sort", engine: "Phaser 3", dimension: "3D", motif: "coins", palette: 21, file: "Playable Ads/Coin Sort - Horizontal Roll.html" },
  { title: "Santa", variant: "", collection: "Color By Number", engine: "Phaser 3", motif: "paint", palette: 22, file: "Playable Ads/Color By Number - Santa.html" },
  { title: "Scratch Plan", variant: "", collection: "Fabulous", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "tiles", palette: 3, file: "Playable Ads/Fabulous - Scratch Plan.html" },
  { title: "Ying Yang Bottle Blue", variant: "", collection: "Get Color Pack", engine: "Phaser 3", motif: "bottles", palette: 23, file: "Playable Ads/Get Color Pack - Ying Yang Bottle Blue.html" },
  { title: "Ying Yang Bottle White", variant: "", collection: "Get Color Pack", engine: "Phaser 3", motif: "bottles", palette: 24, file: "Playable Ads/Get Color Pack - Ying Yang Bottle White.html" },
  { title: "Slot Machine", variant: "", collection: "Glamnetic", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "coins", palette: 43, file: "Playable Ads/Glamnetic - Slot Machine.html" },
  { title: "World Cylinder", variant: "", collection: "Hexasort", engine: "Babylon", motif: "world", palette: 25, file: "Playable Ads/Hexasort - World Cylinder.html" },
  { title: "Spin The Wheel", variant: "", collection: "Liquid IV", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "well", palette: 39, file: "Playable Ads/Liquid IV - Spin The Wheel.html" },
  { title: "Vending Machine", variant: "", collection: "Mudwtr", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "bottles", palette: 37, file: "Playable Ads/Mudwtr - Vending Machine.html" },
  { title: "Thermometer", variant: "", collection: "Perimenopause", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "thermometer", palette: 40, file: "Playable Ads/Perimenopause - Thermometer.html" },
  { title: "Scratch Ticket", variant: "", collection: "Plateful July 4th", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "tiles", palette: 0, file: "Playable Ads/Plateful July 4th - Scratch Ticket.html" },
  { title: "Conveyor Belt", variant: "", collection: "Prenatal", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "conveyor", palette: 41, file: "Playable Ads/Prenatal - Conveyor Belt.html" },
  { title: "Doggy Level", variant: "", collection: "Profile Perfect", engine: "Phaser 3", dimension: "2D", motif: "paw", palette: 42, file: "Playable Ads/Profile Perfect - Doggy Level.html" },
  { title: "Spring Stress Level", variant: "", collection: "Solitaire", engine: "Unity", dimension: "2D", motif: "tiles", palette: 26, file: "Playable Ads/Solitaire - Spring Stress Level.html" },
  { title: "Summer Stress Level", variant: "", collection: "Solitaire", engine: "Unity", dimension: "2D", motif: "tiles", palette: 27, file: "Playable Ads/Solitaire - Summer Stress Level.html" },
  { title: "Plinko", variant: "", collection: "Wayfair", type: "Miscellaneous", engine: "HTML5", dimension: "2D", motif: "coins", palette: 38, file: "Playable Ads/Wayfair - Plinko.html" },
  { title: "Muted WellRotate", variant: "", collection: "Woodoku", engine: "Unity", motif: "well", palette: 28, file: "Playable Ads/Woodoku - Muted WellRotate.html" },
  { title: "Score WellRotate", variant: "", collection: "Woodoku", engine: "Unity", motif: "well", palette: 29, file: "Playable Ads/Woodoku - Score WellRotate.html" },
  { title: "Symbols WellRotate", variant: "", collection: "Woodoku", engine: "Unity", motif: "well", palette: 30, file: "Playable Ads/Woodoku - Symbols WellRotate.html" },
  { title: "Colorful WellRotate", variant: "", collection: "Woodoku Blast", engine: "Unity", motif: "well", palette: 31, file: "Playable Ads/Woodoku Blast - Colorful WellRotate.html" },
  { title: "Pink WellRotate", variant: "", collection: "Woodoku Blast", engine: "Unity", motif: "well", palette: 32, file: "Playable Ads/Woodoku Blast - Pink WellRotate.html" },
  { title: "Score WellRotate", variant: "", collection: "Woodoku Blast", engine: "Unity", motif: "well", palette: 33, file: "Playable Ads/Woodoku Blast - Score WellRotate.html" },
  { title: "Specials WellRotate", variant: "", collection: "Woodoku Blast", engine: "Unity", motif: "well", palette: 34, file: "Playable Ads/Woodoku Blast - Specials WellRotate.html" },
  { title: "Food Sort Dessert", variant: "", collection: "Word Association Tiles", engine: "Unity", motif: "food", palette: 35, file: "Playable Ads/Word Association Tiles - Food Sort Dessert.html" },
  { title: "Food Sort Fastfood", variant: "", collection: "Word Association Tiles", engine: "Unity", motif: "food", palette: 36, file: "Playable Ads/Word Association Tiles - Food Sort Fastfood.html" },
];

const engineDimensions = {
  Unity: "3D",
  "Phaser 3": "2D",
  Babylon: "3D",
  HTML5: "2D",
};

const palettes = [
  ["#eee9df", "#cdc5b8", "#ff5c35"],
  ["#252c2a", "#4d5652", "#c8f45a"],
  ["#ffd6ca", "#fff1e9", "#ff5c35"],
  ["#c6b6ff", "#836ee4", "#e8ff95"],
  ["#1c2321", "#434d49", "#ff7350"],
  ["#bde5ff", "#76c5ee", "#fff5a5"],
  ["#171c1a", "#292f2c", "#c8f45a"],
  ["#82ddeb", "#4ba3c7", "#ffec7c"],
  ["#ff9bc2", "#ffcfdd", "#ccff69"],
  ["#ae97ff", "#d8ceff", "#ff7858"],
  ["#62d6bb", "#b5f0dd", "#ffe066"],
  ["#28312e", "#65706b", "#c8f45a"],
  ["#ff835f", "#ffb69e", "#fff29c"],
  ["#202825", "#4c5b55", "#c5adff"],
  ["#fecf4f", "#ff8f4a", "#b8f45a"],
  ["#ff7453", "#ffb18e", "#ffe765"],
  ["#d8c8ff", "#9f87e5", "#c8f45a"],
  ["#262d2b", "#56615d", "#ffce4f"],
  ["#88dcbe", "#c9f2df", "#ff6c4a"],
  ["#6a98ef", "#a8c8ff", "#ffe36a"],
  ["#ff9ab8", "#ffd2df", "#c8f45a"],
  ["#ffd460", "#ff9d55", "#9eea67"],
  ["#83d7ee", "#c0ecf6", "#ff6551"],
  ["#a994ff", "#d9d0ff", "#fff17a"],
  ["#fd7956", "#ffbea9", "#cbf65d"],
  ["#25312d", "#5b6c64", "#f1c75b"],
  ["#b397f3", "#d9caff", "#d2f760"],
  ["#ffc94d", "#ff9050", "#fff4ae"],
  ["#65cddd", "#afeaf0", "#ffda62"],
  ["#cf6c57", "#f5ae75", "#ffe470"],
  ["#80c487", "#bce0a6", "#ffe467"],
  ["#4ea8e3", "#97d7f2", "#fff275"],
  ["#ef78b1", "#ffb9d8", "#86e8d2"],
  ["#5ab7be", "#9cdee1", "#d5f56a"],
  ["#5449b8", "#9889ed", "#ffd861"],
  ["#ef3f45", "#ff8d69", "#d7f46a"],
  ["#72c884", "#b8e3a2", "#ffe163"],
  ["#f6b24d", "#ffd681", "#ff6a4b"],
  ["#ef7155", "#ffad91", "#c9f45c"],
  ["#9e7bd9", "#d5b6f3", "#ffdb65"],
  ["#f5ecdc", "#f0c8cf", "#f04455"],
  ["#fbfaf8", "#c9b69d", "#f0c54d"],
  ["#f0d9dd", "#bcaeaa", "#c8f45a"],
  ["#edcad5", "#fbf7f4", "#2c2327"],
];

const grid = document.querySelector("#game-grid");
const highlightsGrid = document.querySelector("#highlight-grid");
const highlightConfigMessage = document.querySelector("#highlight-config-message");
const template = document.querySelector("#game-card-template");
const searchInput = document.querySelector("#game-search");
const engineFilterButtons = [...document.querySelectorAll("[data-engine-filter]")];
const dimensionFilterButtons = [...document.querySelectorAll("[data-dimension-filter]")];
const typeFilterList = document.querySelector("#type-filter-list");
const visibleCount = document.querySelector("#visible-count");
const visibleLabel = document.querySelector("#visible-label");
const activeFilterSummary = document.querySelector("#active-filter-summary");
const emptyState = document.querySelector("#empty-state");
const resetFiltersButton = document.querySelector("#reset-filters");

const dialog = document.querySelector("#player-dialog");
const frame = document.querySelector("#game-frame");
const loader = document.querySelector("#player-loader");
const playerTitle = document.querySelector("#player-title");
const playerMeta = document.querySelector("#player-meta");
const closePlayerButton = document.querySelector("#close-player");
const toggleFitButton = document.querySelector("#toggle-fit");
const reloadButton = document.querySelector("#reload-game");
const openGameLink = document.querySelector("#open-game");

let activeEngine = "all";
let activeDimension = "all";
let activeType = "all";
let currentGame = null;

function shortEngine(engine) {
  if (engine === "Phaser 3") return "P3";
  if (engine === "Babylon") return "BJS";
  if (engine === "HTML5") return "H5";
  return "U";
}

function getDimension(game) {
  return game.dimension ?? engineDimensions[game.engine];
}

function getType(game) {
  return game.type ?? game.collection;
}

function getPlayableUrl(file) {
  return file.split("/").map(encodeURIComponent).join("/");
}

function createGameCard(game, animationIndex, artNumber) {
  const originalIndex = games.indexOf(game);
  const node = template.content.cloneNode(true);
  const wrapper = node.querySelector(".game-card-wrap");
  const card = node.querySelector(".game-card");
  const art = node.querySelector(".game-art");
  const motif = node.querySelector(".art-motif");
  const palette = palettes[game.palette % palettes.length];

  wrapper.style.animationDelay = `${Math.min(animationIndex, 11) * 32}ms`;
  art.style.setProperty("--c1", palette[0]);
  art.style.setProperty("--c2", palette[1]);
  art.style.setProperty("--c3", palette[2]);
  motif.dataset.motif = game.motif;
  node.querySelector(".art-no").textContent = artNumber ?? String(originalIndex + 1).padStart(2, "0");
  node.querySelector(".art-engine").textContent = shortEngine(game.engine);
  node.querySelector(".card-kicker").textContent = `${game.engine} · ${game.collection}`;
  node.querySelector(".card-title").textContent = game.title;
  node.querySelector(".card-variant").textContent = game.variant;

  card.setAttribute("aria-label", `Play ${game.collection} - ${game.title}`);
  card.addEventListener("click", () => openPlayer(game));
  return node;
}

function renderHighlights() {
  const configuredFiles = window.PLAYABLE_HIGHLIGHTS;
  const configErrors = [];
  const seenFiles = new Set();
  const highlightedGames = [];

  if (!Array.isArray(configuredFiles)) {
    configErrors.push("PLAYABLE_HIGHLIGHTS must be an array in highlights.js.");
  } else {
    if (configuredFiles.length !== 5) {
      configErrors.push(`Expected exactly 5 entries, received ${configuredFiles.length}.`);
    }

    configuredFiles.forEach((file) => {
      if (typeof file !== "string") {
        configErrors.push("Every entry in highlights.js must be a file path string.");
        return;
      }
      if (seenFiles.has(file)) {
        configErrors.push(`Duplicate entry: ${file}`);
        return;
      }

      seenFiles.add(file);
      const game = games.find((candidate) => candidate.file === file);
      if (!game) {
        configErrors.push(`No playable matches: ${file}`);
        return;
      }
      highlightedGames.push(game);
    });
  }

  if (configErrors.length || highlightedGames.length !== 5) {
    highlightsGrid.replaceChildren();
    highlightsGrid.hidden = true;
    highlightConfigMessage.hidden = false;
    configErrors.forEach((message) => console.warn(`Highlights: ${message}`));
    return;
  }

  highlightConfigMessage.hidden = true;
  highlightsGrid.hidden = false;
  highlightsGrid.replaceChildren();
  highlightedGames.forEach((game, index) => {
    highlightsGrid.append(createGameCard(game, index, `H${index + 1}`));
  });
}

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleGames = games.filter((game) => {
    const matchesEngine = activeEngine === "all" || game.engine === activeEngine;
    const matchesDimension = activeDimension === "all" || getDimension(game) === activeDimension;
    const matchesType = activeType === "all" || getType(game) === activeType;
    const haystack = `${game.title} ${game.variant} ${game.collection} ${getType(game)} ${game.engine} ${getDimension(game)}`.toLowerCase();
    return matchesEngine && matchesDimension && matchesType && haystack.includes(query);
  });

  grid.replaceChildren();

  visibleGames.forEach((game, visibleIndex) => {
    grid.append(createGameCard(game, visibleIndex));
  });

  visibleCount.textContent = String(visibleGames.length);
  visibleLabel.textContent = visibleGames.length === 1 ? "game" : "games";
  const activeLabels = [];
  if (activeEngine !== "all") activeLabels.push(activeEngine);
  if (activeDimension !== "all") activeLabels.push(activeDimension);
  if (activeType !== "all") activeLabels.push(activeType);
  if (query) activeLabels.push(`Search: "${searchInput.value.trim()}"`);
  activeFilterSummary.textContent = activeLabels.length ? ` · ${activeLabels.join(" · ")}` : "";
  emptyState.hidden = visibleGames.length !== 0;
}

function setEngineFilter(engine) {
  activeEngine = engine;
  engineFilterButtons.forEach((button) => {
    const isActive = button.dataset.engineFilter === engine;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderGames();
}

function setDimensionFilter(dimension) {
  activeDimension = dimension;
  dimensionFilterButtons.forEach((button) => {
    const isActive = button.dataset.dimensionFilter === dimension;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderGames();
}

function setTypeFilter(type) {
  activeType = type;
  document.querySelectorAll("[data-type-filter]").forEach((button) => {
    const isActive = button.dataset.typeFilter === type;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderGames();
}

function renderTypeFilters() {
  const types = [...new Set(games.map(getType))];
  const options = [
    { value: "all", label: "All types", count: games.length },
    ...types.map((type) => ({
      value: type,
      label: type,
      count: games.filter((game) => getType(game) === type).length,
    })),
  ];

  const fragment = document.createDocumentFragment();
  options.forEach((option) => {
    const button = document.createElement("button");
    const count = document.createElement("span");
    button.type = "button";
    button.className = `filter-button type-filter-button${option.value === activeType ? " is-active" : ""}`;
    button.dataset.typeFilter = option.value;
    button.setAttribute("aria-pressed", String(option.value === activeType));
    button.setAttribute("aria-controls", "game-grid");
    button.setAttribute("aria-label", `${option.label}, ${option.count} ${option.count === 1 ? "game" : "games"}`);
    button.append(document.createTextNode(option.label));
    count.textContent = String(option.count);
    count.setAttribute("aria-hidden", "true");
    button.append(count);
    button.addEventListener("click", () => setTypeFilter(option.value));
    fragment.append(button);
  });
  typeFilterList.replaceChildren(fragment);
}

function openPlayer(game) {
  currentGame = game;
  const url = getPlayableUrl(game.file);

  playerTitle.textContent = `${game.collection} - ${game.title}`;
  playerMeta.textContent = [game.engine, game.variant].filter(Boolean).join(" · ");
  frame.title = `${game.title} playable`;
  frame.classList.remove("is-loaded");
  loader.hidden = false;
  openGameLink.href = url;
  document.querySelector(".player-canvas").classList.remove("fit-wide");
  toggleFitButton.setAttribute("aria-pressed", "false");
  toggleFitButton.setAttribute("aria-label", "Use wide game view");
  frame.src = url;

  document.body.classList.add("player-open");
  dialog.showModal();
}

function closePlayer() {
  if (!dialog.open) return;
  dialog.close();
}

function unloadPlayer() {
  frame.src = "about:blank";
  frame.classList.remove("is-loaded");
  loader.hidden = false;
  currentGame = null;
  document.body.classList.remove("player-open");
}

engineFilterButtons.forEach((button) => {
  button.addEventListener("click", () => setEngineFilter(button.dataset.engineFilter));
});

dimensionFilterButtons.forEach((button) => {
  button.addEventListener("click", () => setDimensionFilter(button.dataset.dimensionFilter));
});

searchInput.addEventListener("input", renderGames);

resetFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  activeEngine = "all";
  activeDimension = "all";
  activeType = "all";
  engineFilterButtons.forEach((button) => {
    const isActive = button.dataset.engineFilter === "all";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  dimensionFilterButtons.forEach((button) => {
    const isActive = button.dataset.dimensionFilter === "all";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-type-filter]").forEach((button) => {
    const isActive = button.dataset.typeFilter === "all";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderGames();
  searchInput.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !dialog.open && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

closePlayerButton.addEventListener("click", closePlayer);
dialog.addEventListener("close", unloadPlayer);

toggleFitButton.addEventListener("click", () => {
  const canvas = document.querySelector(".player-canvas");
  const isWide = canvas.classList.toggle("fit-wide");
  toggleFitButton.setAttribute("aria-pressed", String(isWide));
  toggleFitButton.setAttribute("aria-label", isWide ? "Use portrait game view" : "Use wide game view");
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closePlayer();
});

frame.addEventListener("load", () => {
  if (frame.getAttribute("src") === "about:blank") return;
  frame.classList.add("is-loaded");
  loader.hidden = true;
});

reloadButton.addEventListener("click", () => {
  if (!currentGame) return;
  frame.classList.remove("is-loaded");
  loader.hidden = false;
  frame.src = getPlayableUrl(currentGame.file);
});

document.querySelectorAll("[data-total-games]").forEach((element) => {
  element.textContent = String(games.length).padStart(2, "0");
});

document.querySelectorAll("[data-count]").forEach((element) => {
  const engine = element.dataset.count;
  element.textContent = engine === "all"
    ? String(games.length)
    : String(games.filter((game) => game.engine === engine).length);
});

document.querySelectorAll("[data-dimension-count]").forEach((element) => {
  const dimension = element.dataset.dimensionCount;
  element.textContent = dimension === "all"
    ? String(games.length)
    : String(games.filter((game) => getDimension(game) === dimension).length);
});

renderHighlights();
renderTypeFilters();
renderGames();

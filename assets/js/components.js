async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(`components/${file}`);
  el.innerHTML = await res.text();

  if (id === "header") {
    initHeader();
  }
}

function navigate(page) {
  window.location.href = page;
}

function norm(value) {
  return (value || "").toString().toLowerCase();
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function pick(item, ...keys) {
  for (const key of keys) {
    if (item && item[key] !== undefined && item[key] !== null && item[key] !== "") {
      return item[key];
    }
  }
  return "";
}

function getAplicacao(item) {
  return pick(item, "aplicacao", "aplicação", "modulo", "módulo") || "Retaguarda";
}

async function fetchJson(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Erro ao carregar ${path}`);
  }
  return res.json();
}

function getCurrentPage() {
  const path = window.location.pathname || "";
  const name = path.split("/").pop();
  return name || "dashboard.html";
}

function renderQuickNav() {
  const nav = document.getElementById("quick-nav");
  if (!nav) return;

  const page = getCurrentPage();
  const isDashboard = page === "dashboard.html";

  if (isDashboard) {
    nav.innerHTML = "";
    return;
  }

  const links = [
    { label: "Telas", href: "biblioteca.html?tipo=tela" },
    { label: "Processos", href: "biblioteca.html?tipo=processo" },
    { label: "Trilhas", href: "biblioteca.html?tipo=trilha" }
  ];

  nav.innerHTML = links
    .map(link => `<button type="button" data-nav-href="${link.href}">${link.label}</button>`)
    .join("");

  nav.querySelectorAll("button[data-nav-href]").forEach(btn => {
    btn.addEventListener("click", () => navigate(btn.dataset.navHref));
  });
}

function wireGlobalSearchButton() {
  const btn = document.getElementById("btn-global-search");
  const panel = document.getElementById("global-search-panel");
  const input = document.getElementById("header-global-search-input");
  const resultsEl = document.getElementById("header-global-search-results");
  if (!btn) return;

  const page = getCurrentPage();
  btn.hidden = page === "dashboard.html";
  if (btn.hidden || !panel || !input || !resultsEl) return;

  let itemsCache = null;

  const mapTelaItem = item => ({
    badge: "Tela",
    titulo: pick(item, "nome_tela", "nome", "slug"),
    descricao: pick(item, "descricao", "descrição", "menu"),
    aplicacao: getAplicacao(item),
    extra: [pick(item, "menu"), getAplicacao(item), pick(item, "nivel"), pick(item, "publico_alvo", "público_alvo")].filter(Boolean).join(" "),
    url: `manual.html?tipo=tela&slug=${encodeURIComponent(item.slug)}`
  });

  const mapProcessoItem = item => ({
    badge: "Processo",
    titulo: pick(item, "nome", "slug"),
    descricao: pick(item, "descricao", "descrição", "area"),
    aplicacao: getAplicacao(item),
    extra: [pick(item, "area"), getAplicacao(item), pick(item, "nivel")].filter(Boolean).join(" "),
    url: `manual.html?tipo=processo&slug=${encodeURIComponent(item.slug)}`
  });

  const mapTrilhaItem = item => ({
    badge: "Trilha",
    titulo: pick(item, "nome", "slug"),
    descricao: pick(item, "descricao", "descrição", "publico_alvo", "público_alvo"),
    aplicacao: getAplicacao(item),
    extra: [pick(item, "publico_alvo", "público_alvo"), getAplicacao(item), pick(item, "nivel")].filter(Boolean).join(" "),
    url: `manual.html?tipo=trilha&slug=${encodeURIComponent(item.slug)}`
  });

  const renderResults = (query, results) => {
    resultsEl.innerHTML = "";

    if (!query) {
      resultsEl.innerHTML = '<p class="global-search-placeholder">Digite para pesquisar.</p>';
      return;
    }

    if (!results.length) {
      resultsEl.innerHTML = '<p class="global-search-placeholder">Nenhum resultado encontrado.</p>';
      return;
    }

    results.forEach(item => {
      const el = document.createElement("div");
      el.className = "global-search-item";
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");

      el.innerHTML = `
        <div class="global-search-item-top">
          <span class="global-search-badge">${item.badge}</span>
          <span class="global-search-title">${item.titulo}</span>
        </div>
        <p class="global-search-desc">${item.descricao || "Sem descrição adicional."}</p>
      `;

      const openItem = () => navigate(item.url);
      el.addEventListener("click", openItem);
      el.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openItem();
        }
      });

      resultsEl.appendChild(el);
    });
  };

  const runSearch = () => {
    const query = norm(input.value.trim());
    const results = !query
      ? []
      : itemsCache
          .map(item => ({ item, s: norm([item.titulo, item.descricao, item.extra, item.aplicacao, item.badge, "aplicacao", "aplicação"].join(" ")) }))
          .filter(x => x.s.includes(query))
          .slice(0, 40)
          .map(x => x.item);

    renderResults(query, results);
  };

  const loadSearchIndex = async () => {
    if (itemsCache) return;
    const [telas, processos, trilhas] = await Promise.all([
      fetchJson("docs-content/index-telas-submenus.json").catch(() => fetchJson("docs-content/index-telas.json")),
      fetchJson("docs-content/index-processos.json").catch(() => []),
      fetchJson("docs-content/index-trilhas.json").catch(() => [])
    ]);
    itemsCache = [
      ...telas.map(mapTelaItem),
      ...processos.map(mapProcessoItem),
      ...trilhas.map(mapTrilhaItem)
    ];
  };

  const closePanel = () => {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  };

  const openPanel = async () => {
    try {
      await loadSearchIndex();
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      input.focus();
      runSearch();
    } catch (err) {
      console.error(err);
      panel.hidden = false;
      resultsEl.innerHTML = '<p class="global-search-placeholder">Não foi possível carregar a pesquisa.</p>';
    }
  };

  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => {
    if (panel.hidden) {
      openPanel();
    } else {
      closePanel();
    }
  });

  input.addEventListener("input", debounce(runSearch, 120));

  document.addEventListener("click", event => {
    if (!panel.hidden && !panel.contains(event.target) && event.target !== btn) {
      closePanel();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePanel();
    }
  });
}

function wireUserMenu() {
  const root = document.getElementById("user-menu");
  const trigger = document.getElementById("user-menu-trigger");
  const dropdown = document.getElementById("user-menu-dropdown");
  if (!root || !trigger || !dropdown) return;
  if (root.dataset.wired === "1") return;
  root.dataset.wired = "1";
  dropdown.hidden = true;

  const close = () => {
    dropdown.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    dropdown.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
  };

  const toggle = () => {
    const isOpen = !dropdown.hidden;
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  trigger.addEventListener("click", event => {
    event.stopPropagation();
    toggle();
  });

  document.addEventListener("click", event => {
    if (!root.contains(event.target)) {
      close();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      close();
    }
  });
}

function applyHeaderPageMode() {
  const headerEl = document.querySelector(".header");
  if (!headerEl) return;

  const page = getCurrentPage();
  headerEl.classList.toggle("header-dashboard", page === "dashboard.html");
}

function initHeader() {
  applyHeaderPageMode();
  renderQuickNav();
  wireGlobalSearchButton();
  wireUserMenu();

  if (typeof loadUserInfo === "function") {
    loadUserInfo();
  }
}

window.navigate = navigate;

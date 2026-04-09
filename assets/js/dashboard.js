function norm(value) {
  return (value || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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

async function fetchJson(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Erro ao carregar ${path}`);
  }
  return res.json();
}

function getAplicacao(item) {
  return pick(item, "aplicacao", "aplicação", "modulo", "módulo") || "Retaguarda";
}

function mapTelaItem(item) {
  return {
    tipo: "tela",
    badge: "Manual de tela",
    titulo: pick(item, "nome_tela", "nome", "slug"),
    descricao: pick(item, "descricao", "descrição", "menu"),
    aplicacao: getAplicacao(item),
    extra: [pick(item, "menu"), getAplicacao(item), pick(item, "nivel"), pick(item, "publico_alvo", "público_alvo")]
      .filter(Boolean)
      .join(" "),
    url: `manual.html?tipo=tela&slug=${encodeURIComponent(item.slug)}`
  };
}

function mapAplicacaoItem(item) {
  const manualSlug = pick(item, "manual_slug", "manualSlug");
  const appSlug = pick(item, "slug");
  const targetUrl = manualSlug
    ? `manual.html?tipo=tela&slug=${encodeURIComponent(manualSlug)}`
    : `biblioteca2.html?tipo=tela&aplicacao=${encodeURIComponent(appSlug)}`;

  return {
    tipo: "aplicacao",
    badge: "Aplicação",
    titulo: pick(item, "nome", "slug"),
    descricao: pick(item, "descricao", "descrição"),
    aplicacao: pick(item, "nome", "slug"),
    extra: [pick(item, "descricao", "descrição"), pick(item, "slug"), "aplicação"].filter(Boolean).join(" "),
    url: targetUrl
  };
}

function mapProcessoItem(item) {
  return {
    tipo: "processo",
    badge: "Manual de processo",
    titulo: pick(item, "nome", "slug"),
    descricao: pick(item, "descricao", "descrição", "area"),
    aplicacao: getAplicacao(item),
    extra: [pick(item, "area"), getAplicacao(item), pick(item, "nivel")].filter(Boolean).join(" "),
    url: `manual.html?tipo=processo&slug=${encodeURIComponent(item.slug)}`
  };
}

function mapTrilhaItem(item) {
  return {
    tipo: "trilha",
    badge: "Trilha de aprendizado",
    titulo: pick(item, "nome", "slug"),
    descricao: pick(item, "descricao", "descrição", "publico_alvo", "público_alvo"),
    aplicacao: getAplicacao(item),
    extra: [pick(item, "publico_alvo", "público_alvo"), getAplicacao(item), pick(item, "nivel")].filter(Boolean).join(" "),
    url: `manual.html?tipo=trilha&slug=${encodeURIComponent(item.slug)}`
  };
}

function buildSearchText(item) {
  return norm([item.titulo, item.descricao, item.extra, item.aplicacao, item.badge, "aplicacao", "aplicação"].join(" "));
}


function normalizeToken(token) {
  const t = norm(token).trim();
  if (!t) return "";
  if (t.length > 3 && t.endsWith("oes")) return `${t.slice(0, -3)}ao`;
  if (t.length > 3 && t.endsWith("es")) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s")) return t.slice(0, -1);
  return t;
}

function matchesQuery(searchable, query) {
  const tokens = norm(query).split(/\s+/).filter(Boolean);
  if (!tokens.length) return false;
  return tokens.every(token => {
    const base = normalizeToken(token);
    return searchable.includes(token) || (base && searchable.includes(base));
  });
}

function renderResults(container, results, query) {
  container.innerHTML = "";

  if (!query) {
    container.innerHTML = '<p class="search-placeholder">Digite para pesquisar os conte\u00fados.</p>';
    return;
  }

  if (!results.length) {
    container.innerHTML = '<p class="search-placeholder">Nenhum resultado encontrado.</p>';
    return;
  }

  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "search-item";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <div class="search-item-top">
        <span class="search-badge">${item.badge}</span>
        <span class="search-item-title">${item.titulo}</span>
      </div>
      <p class="search-item-desc">${item.descricao || "Sem descrição adicional."}</p>
    `;

    const openItem = () => {
      window.location.href = item.url;
    };

    card.addEventListener("click", openItem);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openItem();
      }
    });

    container.appendChild(card);
  });
}

async function loadGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const resultsEl = document.getElementById("global-search-results");
  if (!input || !resultsEl) return;

  try {
    const [aplicacoes, telas, processos, trilhas] = await Promise.all([
      fetchJson("docs-content/index-telas-aplicacoes.json").catch(() => []),
      fetchJson("docs-content/index-telas-submenus.json").catch(() => fetchJson("docs-content/index-telas.json")),
      fetchJson("docs-content/index-processos.json").catch(() => []),
      fetchJson("docs-content/index-trilhas.json").catch(() => [])
    ]);

    const telasFiltradas = telas.filter(item => item.path && (pick(item, "tipo") || "").toLowerCase() !== "pasta");
    const items = [
      ...aplicacoes.map(mapAplicacaoItem),
      ...telasFiltradas.map(mapTelaItem),
      ...processos.map(mapProcessoItem),
      ...trilhas.map(mapTrilhaItem)
    ];

    const runSearch = () => {
      const query = norm(input.value.trim());
      const filtered = !query
        ? []
        : items
            .map(item => ({ item, searchable: buildSearchText(item) }))
            .filter(x => matchesQuery(x.searchable, query))
            .slice(0, 60)
            .map(x => x.item);

      renderResults(resultsEl, filtered, query);
    };

    input.addEventListener("input", debounce(runSearch, 120));
    runSearch();

    const params = new URLSearchParams(window.location.search);
    if (params.get("focusSearch") === "1") {
      setTimeout(() => {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    }
  } catch (err) {
    console.error(err);
    resultsEl.innerHTML = '<p class="search-placeholder">Não foi possível carregar a pesquisa agora.</p>';
  }
}

loadGlobalSearch();




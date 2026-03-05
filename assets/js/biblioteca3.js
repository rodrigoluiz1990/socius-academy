function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    tipo: params.get("tipo") || "tela",
    grupo: params.get("grupo") || "",
    aplicacao: params.get("aplicacao") || ""
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

function renderCard(container, item) {
  const card = document.createElement("div");
  card.className = "course-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  const titulo = pick(item, "nome_tela", "nome", "slug");
  const descricao = pick(item, "descricao", "descrição", "menu");
  const isFolder = (pick(item, "tipo") || "").toLowerCase() === "pasta" || pick(item, "subgrupo_slug");
  const iconText = isFolder ? "\u{1F5C2}\uFE0F" : "\u{1F5A5}\uFE0F";

  card.innerHTML = `
    <div class="course-header">
      <span class="course-icon">${iconText}</span>
      <h3 class="course-title">${titulo}</h3>
    </div>
    <p class="course-description">${descricao}</p>
  `;

  const openManual = () => {
    if (isFolder) {
      const nextGrupo = pick(item, "subgrupo_slug") || item.slug;
      const params = new URLSearchParams({
        tipo: "tela",
        grupo: nextGrupo
      });
      window.location.href = "biblioteca3.html?" + params.toString();
      return;
    }
    window.location.href = "manual.html?tipo=tela&slug=" + encodeURIComponent(item.slug);
  };

  card.addEventListener("click", openManual);
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openManual();
    }
  });

  container.appendChild(card);
}

async function loadBibliotecaNivel3() {
  const { tipo, grupo } = getParams();
  const titleEl = document.getElementById("page-title");
  const container = document.getElementById("items");

  if (!container) return;

  if (tipo !== "tela" || !grupo) {
    if (titleEl) titleEl.textContent = "Telas";
    container.innerHTML = "<p>Menu não informado.</p>";
    return;
  }

  try {
    const grupos = await fetchJson("docs-content/index-telas-grupos.json");
    const submenus = await fetchJson("docs-content/index-telas-submenus.json");

    const grupoItem = grupos.find(g => g.slug === grupo) || submenus.find(s => s.slug === grupo);
    if (titleEl) {
      const nomeGrupo = grupoItem ? pick(grupoItem, "nome_tela", "nome") : grupo;
      titleEl.textContent = `Telas de ${nomeGrupo}`;
    }

    const itens = submenus.filter(s => {
      const parent = pick(s, "parent_slug");
      if (parent) {
        return parent === grupo;
      }
      return s.grupo_slug === grupo;
    });
    container.innerHTML = "";

    if (!itens.length) {
      container.innerHTML = "<p>Nenhuma tela cadastrada para este menu.</p>";
      return;
    }

    itens.forEach(item => renderCard(container, item));
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Erro ao carregar as telas.</p>";
  }
}

loadBibliotecaNivel3();

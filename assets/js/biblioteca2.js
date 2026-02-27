function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    tipo: params.get("tipo") || "tela",
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
  const tipoMenu = (pick(item, "menu") || "").toLowerCase();
  const iconText = tipoMenu.includes("acesso") ? "\u26A1" : "\u{1F5C2}\uFE0F";

  card.innerHTML = `
    <div class="course-header">
      <span class="course-icon">${iconText}</span>
      <h3 class="course-title">${titulo}</h3>
    </div>
    <p class="course-description">${descricao}</p>
  `;

  const openGrupo = () => {
    const params = new URLSearchParams({
      tipo: "tela",
      aplicacao: pick(item, "aplicacao") || "retaguarda",
      grupo: item.slug
    });
    window.location.href = "biblioteca3.html?" + params.toString();
  };

  card.addEventListener("click", openGrupo);
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openGrupo();
    }
  });

  container.appendChild(card);
}

async function loadBibliotecaNivel2() {
  const { tipo, aplicacao } = getParams();
  const titleEl = document.getElementById("page-title");
  const container = document.getElementById("items");

  if (!container) return;

  if (tipo !== "tela" || !aplicacao) {
    if (titleEl) titleEl.textContent = "Menus";
    container.innerHTML = "<p>Aplicação não informada.</p>";
    return;
  }

  try {
    const aplicacoes = await fetchJson("docs-content/index-telas-aplicacoes.json");
    const grupos = await fetchJson("docs-content/index-telas-grupos.json");

    const appItem = aplicacoes.find(a => a.slug === aplicacao);
    if (titleEl) {
      const nomeApp = appItem ? pick(appItem, "nome") : aplicacao;
      titleEl.textContent = `Menus de ${nomeApp}`;
    }

    const itens = grupos.filter(g => (pick(g, "aplicacao") || "").toLowerCase() === aplicacao.toLowerCase());
    container.innerHTML = "";

    if (!itens.length) {
      container.innerHTML = "<p>Nenhum menu cadastrado para esta aplicação.</p>";
      return;
    }

    itens.forEach(item => renderCard(container, item));
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Erro ao carregar os menus.</p>";
  }
}

loadBibliotecaNivel2();

function getTipoFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tipo") || "tela";
}

function getIndexPath(tipo) {
  if (tipo === "tela") return "docs-content/index-telas-aplicacoes.json";
  if (tipo === "processo") return "docs-content/index-processos.json";
  if (tipo === "trilha") return "docs-content/index-trilhas.json";
  return "docs-content/index-telas-aplicacoes.json";
}

function getPageTitle(tipo) {
  if (tipo === "processo") return "Manuais de processos";
  if (tipo === "trilha") return "Trilhas de aprendizado";
  return "Aplicações";
}

function getTipoInfo(tipo) {
  if (tipo === "tela") return { icon: "\u{1F3DB}\uFE0F" };
  if (tipo === "processo") return { icon: "\u{1F4C4}" };
  if (tipo === "trilha") return { icon: "\u{1F3AF}" };
  return { icon: "\u{1F3DB}\uFE0F" };
}

function pick(item, ...keys) {
  for (const key of keys) {
    if (item && item[key] !== undefined && item[key] !== null && item[key] !== "") {
      return item[key];
    }
  }
  return "";
}

function getIconInfo(item, tipoInfo) {
  const slug = (pick(item, "slug") || "").toLowerCase();
  const browserApps = new Set(["meu-cartao", "resultados", "portal-do-socio", "voucher"]);

  if (slug === "socius-go") {
    return { text: "\u{1F4F1}" };
  }

  if (browserApps.has(slug)) {
    return { text: "\u{1F310}" };
  }

  return { text: "\u{1F5A5}\uFE0F" };
}

async function loadBiblioteca() {
  const tipo = getTipoFromUrl();
  const indexPath = getIndexPath(tipo);
  const titleEl = document.getElementById("page-title");
  if (titleEl) titleEl.textContent = getPageTitle(tipo);

  const container = document.getElementById("items");
  if (!container) return;

  try {
    const res = await fetch(indexPath);
    if (!res.ok) {
      throw new Error(`Erro ao carregar ${indexPath}`);
    }

    const itens = await res.json();
    container.innerHTML = "";

    if (!itens.length) {
      container.innerHTML = "<p>Nenhum item cadastrado ainda.</p>";
      return;
    }

    const tipoInfo = getTipoInfo(tipo);

    itens.forEach(item => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      const titulo = pick(item, "nome_tela", "nome", "slug");
      const descricao = pick(item, "descricao", "descrição", "menu", "area", "publico_alvo", "público_alvo");
      const iconInfo = getIconInfo(item, tipoInfo);
      card.innerHTML = `
        <div class="course-header">
          <span class="course-icon">${iconInfo.text}</span>
          <h3 class="course-title">${titulo}</h3>
        </div>
        <p class="course-description">${descricao}</p>
      `;

      const openItem = () => {
        if (tipo === "tela") {
          const manualSlug = pick(item, "manual_slug", "manualSlug");
          if (manualSlug) {
            window.location.href =
              "manual.html?tipo=tela&slug=" + encodeURIComponent(manualSlug);
            return;
          }
          window.location.href = "biblioteca2.html?tipo=tela&aplicacao=" + encodeURIComponent(item.slug);
          return;
        }

        window.location.href =
          "manual.html?tipo=" + encodeURIComponent(tipo) + "&slug=" + encodeURIComponent(item.slug);
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
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Erro ao carregar a biblioteca.</p>";
  }
}

loadBiblioteca();

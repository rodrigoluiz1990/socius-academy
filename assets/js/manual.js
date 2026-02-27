function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    tipo: params.get("tipo") || "tela",
    slug: params.get("slug") || ""
  };
}

function getIndexPath(tipo) {
  if (tipo === "processo") return "docs-content/index-processos.json";
  if (tipo === "trilha") return "docs-content/index-trilhas.json";
  return "docs-content/index-telas.json";
}

function mapTipoLabel(tipo) {
  if (tipo === "processo") return "Manual de Processo";
  if (tipo === "trilha") return "Trilha de Conhecimento";
  return "Manual de Tela";
}

function pick(item, ...keys) {
  for (const key of keys) {
    if (item && item[key] !== undefined && item[key] !== null && item[key] !== "") {
      return item[key];
    }
  }
  return "";
}

function slugify(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fillSubtitle(tipo, item, tituloManual) {
  const el = document.getElementById("manual-contexto");
  if (!el) return;
  el.textContent = "";
  el.hidden = true;
}

function buildIndice() {
  const contentEl = document.getElementById("aula-conteudo");
  const indiceListEl = document.getElementById("manual-indice-list");
  const indiceEl = document.getElementById("manual-indice");
  if (!contentEl || !indiceListEl || !indiceEl) return;

  const headings = Array.from(contentEl.querySelectorAll("h2, h3"));
  indiceListEl.innerHTML = "";

  if (!headings.length) {
    indiceEl.style.display = "none";
    return;
  }

  indiceEl.style.display = "";

  headings.forEach((heading, index) => {
    if (!heading.id) {
      const generated = slugify(heading.textContent) || `secao-${index + 1}`;
      heading.id = generated;
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    if (heading.tagName.toLowerCase() === "h3") {
      link.classList.add("nivel-3");
    }
    indiceListEl.appendChild(link);
  });
}

async function loadManual() {
  const { tipo, slug } = getQueryParams();

  if (!slug) {
    document.getElementById("aula-conteudo").innerHTML =
      '<p>Informe o manual desejado usando os parâmetros <code>tipo</code> e <code>slug</code> na URL.</p>';
    return;
  }

  try {
    const indexPath = getIndexPath(tipo);
    const indexRes = await fetch(indexPath);

    if (!indexRes.ok) {
      throw new Error("Não foi possível carregar o índice de manuais.");
    }

    const lista = await indexRes.json();
    const item = lista.find(i => i.slug === slug);

    if (!item) {
      document.getElementById("aula-conteudo").innerHTML =
        "<p>Não encontramos um manual com o identificador solicitado.</p>";
      return;
    }

    preencherMeta(tipo, item);

    const mdRes = await fetch(item.path);
    if (!mdRes.ok) {
      throw new Error("Não foi possível carregar o arquivo de conteúdo do manual.");
    }

    const mdText = await mdRes.text();
    const { meta, body } = parseFrontMatter(mdText);

    const tituloManual =
      pick(meta, "nome_tela", "nome") || pick(item, "nome_tela", "nome") || "Manual";

    const manualTipoEl = document.getElementById("manual-tipo");
    if (manualTipoEl) {
      manualTipoEl.textContent = tipo === "tela" ? tituloManual : mapTipoLabel(tipo);
    }

    fillSubtitle(tipo, item, tituloManual);

    const html = renderMarkdown(body);
    document.getElementById("aula-conteudo").innerHTML = html;
    buildIndice();
  } catch (err) {
    console.error(err);
    document.getElementById("aula-conteudo").innerHTML =
      "<p>Ocorreu um erro ao carregar o conteúdo deste manual.</p>";
  }
}

function preencherMeta(tipo, item) {
  const metaEl = document.getElementById("manual-meta");
  if (!metaEl) return;

  const linhas = [];

  if (tipo === "tela") {
    if (pick(item, "aplicacao", "aplicação", "modulo", "módulo")) linhas.push(`<div><strong>Aplicação:</strong> ${pick(item, "aplicacao", "aplicação", "modulo", "módulo")}</div>`);
    if (pick(item, "menu")) linhas.push(`<div><strong>Menu:</strong> ${pick(item, "menu")}</div>`);
    if (pick(item, "codigo_form")) linhas.push(`<div><strong>Form:</strong> ${pick(item, "codigo_form")}</div>`);
  } else if (tipo === "processo") {
    if (pick(item, "area")) linhas.push(`<div><strong>Área:</strong> ${pick(item, "area")}</div>`);
    if (pick(item, "nivel")) linhas.push(`<div><strong>Nível:</strong> ${pick(item, "nivel")}</div>`);
  } else if (tipo === "trilha") {
    if (pick(item, "publico_alvo", "público_alvo")) linhas.push(`<div><strong>Público-alvo:</strong> ${pick(item, "publico_alvo", "público_alvo")}</div>`);
    if (pick(item, "nivel")) linhas.push(`<div><strong>Nível:</strong> ${pick(item, "nivel")}</div>`);
    if (pick(item, "duracao_estimada_horas", "duração_estimada_horas")) {
      linhas.push(`<div><strong>Duração estimada:</strong> ${pick(item, "duracao_estimada_horas", "duração_estimada_horas")}h</div>`);
    }
  }

  metaEl.innerHTML = linhas.join("") || "<p>Nenhuma informação adicional.</p>";
}

function parseFrontMatter(text) {
  if (!text.startsWith("---")) {
    return { meta: {}, body: text };
  }

  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    return { meta: {}, body: text };
  }

  const rawMeta = text.slice(3, end).trim();
  const body = text.slice(end + 4).trim();

  const meta = {};
  rawMeta.split("\n").forEach(line => {
    const idx = line.indexOf(":");
    if (idx > -1) {
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      if (key) meta[key] = value;
    }
  });

  return { meta, body };
}

function renderMarkdown(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let inList = false;

  function closeList() {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  }

  lines.forEach(rawLine => {
    const line = rawLine.trimEnd();

    if (!line) {
      closeList();
      return;
    }

    if (line.startsWith("### ")) {
      closeList();
      const text = line.slice(4).trim();
      out.push(`<h3>${inlineMarkdown(text)}</h3>`);
      return;
    }

    if (line.startsWith("## ")) {
      closeList();
      const text = line.slice(3).trim();
      out.push(`<h2>${inlineMarkdown(text)}</h2>`);
      return;
    }

    if (line.startsWith("# ")) {
      closeList();
      const text = line.slice(2).trim();
      out.push(`<h1>${inlineMarkdown(text)}</h1>`);
      return;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      const text = line.slice(2).trim();
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inlineMarkdown(text)}</li>`);
      return;
    }

    closeList();
    out.push(`<p>${inlineMarkdown(line)}</p>`);
  });

  closeList();
  return out.join("\n");
}

function inlineMarkdown(text) {
  return (text || "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

loadManual();


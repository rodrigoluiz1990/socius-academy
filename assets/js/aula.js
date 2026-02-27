const params = new URLSearchParams(window.location.search);
const cursoId = params.get("curso");

if (!cursoId) {
  window.location.href = "/dashboard.html";
}

let cursoAtual = null;

async function loadAulas() {
  try {
    const res = await fetch("data/aulas.json");

    if (!res.ok) {
      throw new Error("Não foi possível carregar aulas.json");
    }

    const data = await res.json();

    cursoAtual = data[cursoId];

    if (!cursoAtual) {
      document.getElementById("curso-título").textContent = "Curso indisponível";
      document.getElementById("aula-conteudo").innerHTML =
        "<p>Este curso ainda não possui aulas cadastradas.</p>";
      return;
    }

    document.getElementById("curso-título").textContent = cursoAtual.título;

    const lista = document.getElementById("lista-aulas");
    lista.innerHTML = "";

    cursoAtual.aulas.forEach((aula, index) => {
      const li = document.createElement("li");
      li.textContent = aula.título;
      li.onclick = () => abrirAula(index, li);
      lista.appendChild(li);
    });

  } catch (err) {
    console.error(err);
    alert("Erro ao carregar aulas");
  }
}

function abrirAula(index, el) {
  document.querySelectorAll(".sidebar li").forEach(li =>
    li.classList.remove("active")
  );
  el.classList.add("active");

  const aula = cursoAtual.aulas[index];

  document.getElementById("aula-título").textContent = aula.título;
  document.getElementById("aula-conteudo").innerHTML = aula.conteudo;
}

function voltarDashboard() {
  window.location.href = "dashboard.html";
}

loadAulas();


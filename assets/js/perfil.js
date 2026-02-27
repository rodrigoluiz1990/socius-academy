function getCurrentUserRecord() {
  const session = getSession();
  if (!session) return null;

  const users = getUsers();
  return users.find(u => u.id === session.id || u.email === session.email) || null;
}

function setPerfilMessage(text, isError) {
  const msg = document.getElementById("perfil-msg");
  if (!msg) return;

  msg.textContent = text || "";
  msg.classList.toggle("erro", Boolean(isError));
}

function loadPerfilForm() {
  const user = getCurrentUserRecord();
  if (!user) {
    setPerfilMessage("Não foi possível localizar o usuário atual.", true);
    return;
  }

  document.getElementById("perfil-nome").value = user.nome || "";
  document.getElementById("perfil-email").value = user.email || "";
}

function wirePerfilForm() {
  const form = document.getElementById("perfil-form");
  const btnCancelar = document.getElementById("perfil-cancelar");
  if (!form) return;

  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
        return;
      }
      window.location.href = "dashboard.html";
    });
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    setPerfilMessage("");

    const nome = document.getElementById("perfil-nome").value.trim();
    const email = document.getElementById("perfil-email").value.trim().toLowerCase();
    const senha = document.getElementById("perfil-senha").value;
    const confirmarSenha = document.getElementById("perfil-confirmar").value;

    if (!nome || !email) {
      setPerfilMessage("Preencha nome e e-mail.", true);
      return;
    }

    if (senha && senha.length < 6) {
      setPerfilMessage("A nova senha deve ter ao menos 6 caracteres.", true);
      return;
    }

    if (senha !== confirmarSenha) {
      setPerfilMessage("A confirmação de senha não confere.", true);
      return;
    }

    const session = getSession();
    if (!session) {
      window.location.href = "index.html";
      return;
    }

    const users = getUsers();
    const currentIndex = users.findIndex(u => u.id === session.id || u.email === session.email);
    if (currentIndex === -1) {
      setPerfilMessage("Usuário não encontrado na base local.", true);
      return;
    }

    const duplicatedEmail = users.some((u, index) => index !== currentIndex && (u.email || "").toLowerCase() === email);
    if (duplicatedEmail) {
      setPerfilMessage("Este e-mail já está em uso por outro usuário.", true);
      return;
    }

    users[currentIndex].nome = nome;
    users[currentIndex].email = email;
    if (senha) {
      users[currentIndex].senha = senha;
    }

    saveUsers(users);

    setSession({
      id: users[currentIndex].id,
      nome: users[currentIndex].nome,
      email: users[currentIndex].email,
      perfil: users[currentIndex].perfil
    });

    loadUserInfo();
    form.reset();
    loadPerfilForm();
    setPerfilMessage("Dados atualizados com sucesso.");
  });
}

loadPerfilForm();
wirePerfilForm();

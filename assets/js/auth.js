/* ==============================
   Socius Academy - Auth Mock
   ============================== */

   const USERS_KEY = "socius_users";
   const SESSION_KEY = "socius_session";
   
   /* ==============================
      Utilidades
      ============================== */
   
   function ensureDefaultUser(users) {
     const hasDefault = users.some(u => {
       const email = (u.email || "").toLowerCase();
       const nome = (u.nome || "").toLowerCase();
       return email === "socius" || nome === "socius";
     });
     if (!hasDefault) {
       users.push({
         id: 1,
         nome: "Socius",
         email: "socius",
         senha: "socius",
         perfil: "Usuario"
       });
     }
   }

   function getUsers() {
     const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
     ensureDefaultUser(users);
     saveUsers(users);
     return users;
   }
   
   function saveUsers(users) {
     localStorage.setItem(USERS_KEY, JSON.stringify(users));
   }
   
   function setSession(user) {
     localStorage.setItem(SESSION_KEY, JSON.stringify(user));
   }
   
   function getSession() {
     return JSON.parse(localStorage.getItem(SESSION_KEY));
   }
   
   /* ==============================
      Logout
      ============================== */
   
   function logout() {
     localStorage.removeItem(SESSION_KEY);
     window.location.href = "index.html";
   }
   
   /* ==============================
      Login
      ============================== */
   
   const loginForm = document.getElementById("loginForm");
   
   if (loginForm) {
     loginForm.addEventListener("submit", function (e) {
       e.preventDefault();
   
       const loginId = document.getElementById("email").value.trim().toLowerCase();
       const senha = document.getElementById("senha").value;
   
       const users = getUsers();
       const user = users.find(u => {
         const email = (u.email || "").toLowerCase();
         const nome = (u.nome || "").toLowerCase();
         return (loginId === email || loginId === nome) && u.senha === senha;
       });
   
       if (!user) {
         alert("Usuário ou senha inválidos.");
         return;
       }
   
       setSession({
         id: user.id,
         nome: user.nome,
         email: user.email,
         perfil: user.perfil
       });
   
       window.location.href = "dashboard.html";
     });
   }

   /* ==============================
      Cadastro
      ============================== */

   const registerForm = document.getElementById("registerForm");
   const registerMessageEl = document.getElementById("register-message");

   function setRegisterMessage(text, type) {
     if (!registerMessageEl) return;
     registerMessageEl.textContent = text || "";
     registerMessageEl.className = "auth-message";

     if (!text) return;

     registerMessageEl.classList.add("show");
     registerMessageEl.classList.add(type === "success" ? "success" : "error");
   }

   if (registerForm) {
     registerForm.reset();
     const nomeEl = document.getElementById("nome");
     const emailEl = document.getElementById("email");
     const senhaEl = document.getElementById("senha");
     const confirmarEl = document.getElementById("confirmarSenha");
     if (nomeEl) nomeEl.value = "";
     if (emailEl) emailEl.value = "";
     if (senhaEl) senhaEl.value = "";
     if (confirmarEl) confirmarEl.value = "";

     registerForm.addEventListener("submit", function (e) {
       e.preventDefault();
       setRegisterMessage("");

       const nome = document.getElementById("nome").value.trim();
       const email = document.getElementById("email").value.trim().toLowerCase();
       const senha = document.getElementById("senha").value;
       const confirmarSenha = document.getElementById("confirmarSenha").value;

       if (!nome || !email || !senha || !confirmarSenha) {
         setRegisterMessage("Preencha todos os campos.", "error");
         return;
       }

       if (senha.length < 6) {
         setRegisterMessage("A senha deve ter no mínimo 6 caracteres.", "error");
         return;
       }

       if (senha !== confirmarSenha) {
         setRegisterMessage("A confirmação de senha não confere.", "error");
         return;
       }

       const users = getUsers();
       const jaExiste = users.some(u => (u.email || "").toLowerCase() === email);

       if (jaExiste) {
         setRegisterMessage("Já existe uma conta cadastrada com este e-mail.", "error");
         return;
       }

       const novoUsuario = {
         id: Date.now(),
         nome,
         email,
         senha,
         perfil: "Usuario"
       };

       users.push(novoUsuario);
       saveUsers(users);

       setRegisterMessage("Conta criada com sucesso. Redirecionando para o login...", "success");
       setTimeout(() => {
         window.location.href = "index.html";
       }, 900);
     });
   }
   
   /* ==============================
      Proteção
      ============================== */
   
   function requireAuth() {
     if (!getSession()) {
       window.location.href = "index.html";
     }
   }
   
   function loadUserInfo() {
     const session = getSession();
     if (session?.nome) {
       const el = document.getElementById("user-name");
       if (el) el.textContent = session.nome;
     }
   }
   
   /* ==============================
      Expor global
      ============================== */
   
   window.logout = logout;
   window.requireAuth = requireAuth;
   window.loadUserInfo = loadUserInfo;
   

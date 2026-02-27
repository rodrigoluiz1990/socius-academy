/* ==============================
   Socius Academy - Auth Mock
   ============================== */

   const USERS_KEY = "socius_users";
   const SESSION_KEY = "socius_session";
   
   /* ==============================
      Utilidades
      ============================== */
   
   function getUsers() {
     return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
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
   
       const email = document.getElementById("email").value.trim().toLowerCase();
       const senha = document.getElementById("senha").value;
   
       const users = getUsers();
       const user = users.find(u => u.email === email && u.senha === senha);
   
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
   

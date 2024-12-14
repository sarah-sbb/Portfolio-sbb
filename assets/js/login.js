document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const editMenu = document.getElementById('edit-menu');
    const logoutBtn = document.getElementById('logout-btn');

    // Identifiants de test (simulés côté frontend)
    const defaultUsername = "admin";
    const defaultPassword = "password123";

    // Fonction de gestion de la connexion (simulateur de backend)
    async function authenticateUser() {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Simulation d'une requête de validation des identifiants (comme un appel backend)
        if (storedUsername === defaultUsername && storedPassword === defaultPassword) {
            // Simuler la génération d'un token (comme un backend ferait)
            const authToken = 'simulated_token_12345';
            localStorage.setItem('authToken', authToken);

            // Affichage du menu d'édition
            editMenu.classList.remove('hidden');
        } else {
            // Si l'utilisateur n'est pas authentifié, rediriger vers la page de login (burger.html)
            if (window.location.pathname !== "/burger.html") {
                window.location.href = "burger.html";
            }
        }
    }

    // Fonction de gestion de la déconnexion
    function logout() {
        // Suppression des données de connexion du localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('authToken');

        // Rediriger vers index.html et recharger la page
        window.location.href = "index.html";  // Rediriger vers index.html
    }

    // Si le formulaire de login existe, on l'écoute
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simuler l'authentification via un "backend"
            if (username === defaultUsername && password === defaultPassword) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                // Simuler un token généré côté serveur
                const authToken = 'simulated_token_12345';
                localStorage.setItem('authToken', authToken);

                // Rediriger vers index.html après la connexion
                window.location.href = "index.html";
            } else {
                alert("Identifiant ou mot de passe incorrect.");
            }
        });
    }

    // Si le bouton de déconnexion existe, on l'écoute
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();  // Appelle la fonction logout qui nettoie localStorage et redirige
        });
    }

    // Lors du chargement de la page index.html, vérifier si l'utilisateur est connecté
    if (window.location.pathname === "/index.html") {
        authenticateUser();
    }
});

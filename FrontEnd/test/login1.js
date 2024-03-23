const form = document.getElementById("login");

// On ajoute un gestionnaire d'évènement 'submit'
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userLogin = {
    email: event.target.querySelector("[name=email]").value,
    password: event.target.querySelector("[name=mdp]").value,
  };

  console.log(userLogin);

  // Création de la charge utile au format JSON
  const chargeUtile = JSON.stringify(userLogin);

  try {
    // Appel de la fonction fetch avec toutes les informations nécessaires
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: chargeUtile,
    });

    if (!response.ok) {
      throw new Error("Email ou mot de passe incorrect");
    }

    const loginData = await response.json();
    const token = loginData.token;

    // Stockage du token dans le localStorage
    localStorage.setItem("token", token);

    // Redirection vers la page d'accueil
    window.location.href = "http://127.0.0.1:5501/FrontEnd/index.html";
  } catch (error) {
    // En cas d'erreur, afficher un message d'alerte
    alert(error.message);
  }
});
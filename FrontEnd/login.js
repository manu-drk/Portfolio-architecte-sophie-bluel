// const retour = await fetch("http://localhost:5678/api/users/login");
// const userLogin = await retour.json();
// window.localStorage.setItem(userLogin)

// On récupère une référence au formulaire HTML
const form = document.getElementById("login");

// On ajoute un gestionnaire d'évènement 'submit'
form.addEventListener("submit", (event) => {
  event.preventDefault();
const userLogin = {
    email: event.target.querySelector("[name=email").value,
    password: event.target.querySelector("[name=mdp]").value,
 };

 console.log(userLogin);

 
 // Création de la charge utile au format JSON
   const chargeUtile = JSON.stringify(userLogin);
   // Appel de la fonction fetch avec toutes les informations nécessaires
   fetch("http://localhost:5678/api/users/login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: chargeUtile
   });
   
   sessionStorage.setItem("token", userLoginId.token);
})
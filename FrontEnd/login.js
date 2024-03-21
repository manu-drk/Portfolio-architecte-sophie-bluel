// const retour = await fetch("http://localhost:5678/api/users/login");
// const userLogin = await retour.json();
// window.localStorage.setItem(userLogin)

// On récupère une référence au formulaire HTML
const form = document.getElementById("login");

// On ajoute un gestionnaire d'évènement 'submit'
form.addEventListener("submit", async(event) => {
  event.preventDefault();
  const userLogin = {
    email: event.target.querySelector("[name=email").value,
    password: event.target.querySelector("[name=mdp]").value,
  };

  console.log(userLogin);


  // Création de la charge utile au format JSON
  const chargeUtile = JSON.stringify(userLogin);
  // Appel de la fonction fetch avec toutes les informations nécessaires
  let loginId = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: chargeUtile

  
  }) 
  loginId = await loginId.json()

console.log(loginId);

  localStorage.setItem("token", userLogin.token);

  // window.location.href = "http://127.0.0.1:5501/FrontEnd/index.html"

  if (localStorage.token) {window.location.href = "http://127.0.0.1:5501/FrontEnd/index.html";
  } else { 
    alert("Email ou mot de passe incorrect");
  }

})


//   } else(localStorage.token === 401) {
//     alert("Email ou mot de passe incorrect");
//   }
  // if (localStorage.token) {
  //   // Code to execute if there's a valid token (assumed)
  // } else if (localStorage.token) {
  //   alert("Une erreur est survenue lors de l'authentification (An error occurred during authentication)");
  //   // Or redirect to login page, etc.
  // }


// 

  // .then((response) => {
  //   if (response.status === 200) {
  //     window.location.assign("http://127.0.0.1:5500/FrontEnd/index.html");
  //   } else if (response.status === 404) {
  //     alert("Email ou mot de passe incorrect");
  //   } else if (response.status === 401) {
  //     alert("Email ou mot de passe incorrect");
  //   }
  //   // On transforme la promesse du serv en format JSON
  //   return response.json();
  // })
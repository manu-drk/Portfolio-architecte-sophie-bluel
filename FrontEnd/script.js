// if(localStorage.token)[
//     alert("Ok")
// ]
var token = localStorage.getItem("token");

let works = window.sessionStorage.getItem("works");

const reponse = await fetch('http://localhost:5678/api/works');
works = await reponse.json();

let categories = window.sessionStorage.getItem("categories");

const response = await fetch('http://localhost:5678/api/categories');
categories = await response.json();

// ne pas avoir d'affichage en double
const categoriesSet = new Set();



const displayWorks = (filtered = []) => {
  let tabImg = filtered?.length ? filtered : works;
  const gallery = document.querySelector('.gallery');
  const galleryWorks = tabImg.map(work => {
    return `
        
        <figure data-id="${work.categoryId}">
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}"</figcaption>
        </figure>
    
        `;
  }).join('')
  gallery.innerHTML = galleryWorks
};
displayWorks();

// ajouter le filtre toutes catégories
const tousLesTavaux = {
  id: 0,
  name: 'Tous',
}

// **************   ajouter le bouton en début de tableau     ***********
categories.unshift(tousLesTavaux);
if (!token) {
  categories.forEach(function (categorie) {


    let button = document.createElement('button');
    button.classList.add('boutonFiltre');
    button.textContent = categorie.name;
    button.dataset.id = categorie.id;
    document.querySelector('.filtres').appendChild(button);

  })


  // ******************** ajout de la partie filtre      **************


  const boutonsFiltre = document.querySelectorAll('.boutonFiltre');
  boutonsFiltre.forEach(button => {
    button.addEventListener('click', function () {
      const filtreId = button.dataset.id;
      const filtered = filtreId == 0 ? works : works.filter(work => work.category.id == filtreId);
      displayWorks(filtered);
    })
  })
}
// ****************    texte "login" en "logout" si l'utilisateur est connecté **************

function login(token) {
  if (token) {
    document.getElementById("bouton_login").innerText = "logout";
    // logout.href = './index.html';
  } else {
    document.getElementById("bouton_login").innerText = "login";
  }
}
login(token);



// Fonction de déconnexion
function deco() {
  // Supprimer le token
  localStorage.removeItem("token");

  // Rediriger vers la page index.html
  window.location.href = "index.html";
}

// Sélection de l'élément de déconnexion
const logoutButton = document.getElementById("bouton_login");

// Gestion de l'état du bouton lors du chargement de la page
document.addEventListener("DOMContentLoaded", function() {
  const token = localStorage.getItem("token");

  if (token) {
    // Si un token est présent, l'utilisateur est connecté, donc le bouton affiche "logout"
    logoutButton.textContent = "logout";
  } else {
    // Si aucun token n'est présent, l'utilisateur n'est pas connecté, donc le bouton affiche "login"
    logoutButton.textContent = "login";
    logoutButton.href = "login.html"; // Mettre à jour l'URL du lien si nécessaire
  }
});

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton de déconnexion/login
logoutButton.addEventListener("click", function(event) {
  // Empêcher le comportement par défaut du lien (éviter de suivre le lien)
  event.preventDefault();

  // Vérifier si l'utilisateur est connecté ou déconnecté
  const token = localStorage.getItem("token");
  if (token) {
    // Si l'utilisateur est connecté, déconnectez-le
    deco();
  } else {
    // Si l'utilisateur est déconnecté, redirigez-le vers la page de connexion
    window.location.href = "login.html";
  }
});


 


// Ces lignes affichent un bouton modifier dans la section introduction si l'utilisateur est connecté

if (token) {
  const topbar = document.querySelector('header');
  const header = document.createElement('div');
  header.id = 'topbarLogin';
  const texteHeader = document.createElement('p');
  texteHeader.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Mode édition';
 

  topbar.prepend(header);
  header.appendChild(texteHeader)

  const navigation = document.getElementById('navigation');
  navigation.style.paddingTop = '80px';

  const sectionWorks = document.querySelector('#sectionProjet');
  const modifierWorks = document.createElement('p');
  modifierWorks.id = 'ouvrir-modal';
  modifierWorks.innerHTML = '<a href="#modal"><i class="fa-solid fa-pen-to-square"></i>Modifier</a>';
  sectionWorks.appendChild(modifierWorks);

}


// ***********      Modal      ****************

const fenetreModal1 = document.querySelector('.modalEcran');

function afficherModal() {
  fenetreModal1.style.display = 'flex';
}

// const openModal = function (e) {
//   e.preventDefault();
//   const target = document.querySelector(e.target.getAttribute('href'));
//   target.style.display = 'flex';
//   modal = target;
//   modal.addEventListener('click', closeModal);
// };

// Gestionnaire d'événements pour ouvrir la fenêtre modale
const openModal = function (e) {
  e.preventDefault();
  afficherModal(); // Appel de la fonction afficherModal pour ouvrir la fenêtre modale
};

// *************       Ouverture de la fenêtre modale         ****************

const boutonOuvrirModal = document.querySelector('#ouvrir-modal');

// ************** ecoute du bouton pour ouvrir la fenêtre modale    *************

boutonOuvrirModal.addEventListener('click', openModal);


const closeModal = function (e) {
  if (modal === null) return;
  e.preventDefault();
  modal.style.display = "none"; 
  modal.removeEventListener('click', closeModal); 
  modal = null;
};

document.querySelectorAll('#ouvrir-modal').forEach(a => {
  a.addEventListener('click', openModal);
});





// **************   appel de la gallerie de l'API works    **************

const modalGallery = document.querySelector('#galleryModal');

function genererListeModal(works) {
  works.forEach(work => {
    const figureModal = document.createElement('figure');
    figureModal.dataset.id = work.id;
    figureModal.id = 'figure-modal';
    modalGallery.appendChild(figureModal); 

    const imageModal = document.createElement('img');
    imageModal.src = work.imageUrl;
    figureModal.appendChild(imageModal);

    const divBoutons = document.createElement('div');
    divBoutons.id = 'boutons-modal';
    figureModal.appendChild(divBoutons);



    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    boutonSupprimer.id = 'bouton-supprimer';
    divBoutons.appendChild(boutonSupprimer);

    //    figureModal.addEventListener('mouseover', event => {
    //   boutonEditer.style.display = 'block';

    // });
  });
}
genererListeModal(works);

const button = document.createElement('button');
    button.classList.add('bouton-ajouter');
    button.textContent = "Ajouter une photo"
    document.querySelector('#modal1').appendChild(button);
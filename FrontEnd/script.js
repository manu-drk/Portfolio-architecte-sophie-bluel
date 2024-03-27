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

  } else {
    document.getElementById("bouton_login").innerText = "login";
  }
}
login(token);

function deco(token) {
  if (token) {
    localStorage.removeItem("token");
    login(token);

  }
}
const logout = document.getElementById("bouton_login");
logout.onclick = (token) => {
  deco(token);
  localStorage.removeItem("editMode");
  // logout.href = "http://127.0.0.1:5501/FrontEnd/index.html";


};
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

    const texteModal = document.createElement('figcaption');
    texteModal.innerText = 'éditer';
    figureModal.appendChild(texteModal);

    const divBoutons = document.createElement('div');
    divBoutons.id = 'boutons-modal';
    figureModal.appendChild(divBoutons);



    const boutonSupprimer = document.createElement('p');
    boutonSupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    divBoutons.appendChild(boutonSupprimer);

    figureModal.addEventListener('mouseover', event => {
      boutonEditer.style.display = 'block';
    });
  });
}
genererListeModal(works);

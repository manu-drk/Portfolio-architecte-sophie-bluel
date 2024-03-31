

// const fenetreModal1 = document.querySelector('#modal1');

// function afficherModal() {
//   fenetreModal1.style.display = 'flex';
// }

// // const openModal = function (e) {
// //   e.preventDefault();
// //   const target = document.querySelector(e.target.getAttribute('href'));
// //   target.style.display = 'flex';
// //   modal = target;
// //   modal.addEventListener('click', closeModal);
// // };

// // Gestionnaire d'événements pour ouvrir la fenêtre modale
// const openModal = function (e) {
//   e.preventDefault();
//   afficherModal(); 
// };

// // Sélectionnez l'élément qui déclenche l'ouverture de la fenêtre modale
// const boutonOuvrirModal = document.querySelector('#ouvrir-modal');

// // Ajoutez un gestionnaire d'événements au bouton pour ouvrir la fenêtre modale
// boutonOuvrirModal.addEventListener('click', openModal);


// const closeModal = function (e) {
//   if (modal === null) return;
//   e.preventDefault();
//   modal.style.display = "none"; 
//   modal.removeEventListener('click', closeModal); 
//   modal = null;
// };

// document.querySelectorAll('#ouvrir-modal').forEach(a => {
//   a.addEventListener('click', openModal);
// });

// const modalGallery = document.querySelector('#galleryModal');

// function genererListeModal(works) {
//   works.forEach(work => {
//     const figureModal = document.createElement('figure');
//     figureModal.dataset.id = work.id;
//     figureModal.id = 'figure-modal';
//     modalGallery.appendChild(figureModal); 

//     const imageModal = document.createElement('img');
//     imageModal.src = work.imageUrl;
//     figureModal.appendChild(imageModal);

//     const texteModal = document.createElement('figcaption');
//     texteModal.innerText = 'éditer';
//     figureModal.appendChild(texteModal);

//     const divBoutons = document.createElement('div');
//     divBoutons.id = 'boutons-modal';
//     figureModal.appendChild(divBoutons);

//     const boutonEditer = document.createElement('p');
//     boutonEditer.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"></i>';
//     divBoutons.appendChild(boutonEditer);
//     boutonEditer.style.display = 'none';

//     const boutonSupprimer = document.createElement('p');
//     boutonSupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
//     divBoutons.appendChild(boutonSupprimer);

//     figureModal.addEventListener('mouseover', event => {
//       boutonEditer.style.display = 'block';
//     });
//   });
// }



// const openModal = function (e) {
//   e.preventDefault();
//   const target = document.querySelector(e.target.getAttribute('href'));
//   target.style.display = 'flex';
//   modal = target;
//   modal.addEventListener('click', closeModal);
// };


// const closeModal = function (e) {
//   if (modal === null) return;
//   e.preventDefault();
//   modal.style.display = "none"; 
//   modal.removeEventListener('click', closeModal); 
//   modal = null;
// };

// // Définir la fonction afficherModal pour afficher une modal spécifique
// function afficherModal(modal) {
//   fenetreModal1.style.display = 'none';
//   fenetreModal2.style.display = 'none';

//   modal.style.display = 'flex';
// }

// // Définir les fonctions d'ouverture de modal spécifiques
// function afficherModal1(e) {
//   e.preventDefault();
//   afficherModal(fenetreModal1); // Afficher la modal 1
// }

// function afficherModal2(e) {
//   e.preventDefault();
//   afficherModal(fenetreModal2); // Afficher la modal 2
// }

// // Définir les gestionnaires d'événements pour ouvrir les modales
// const boutonOuvrirModal1 = document.querySelector('#bouton-ouvrir-modal1');
// boutonOuvrirModal1.addEventListener('click', afficherModal1);

// const boutonOuvrirModal2 = document.querySelector('#bouton-ouvrir-modal2');
// boutonOuvrirModal2.addEventListener('click', afficherModal2);

// // Définir le gestionnaire d'événements pour fermer les modales
// const boutonFermerModal = document.querySelectorAll('.bouton-fermer');
// boutonFermerModal.forEach(bouton => {
//   bouton.addEventListener('click', closeModal);
// });

// // Définir le gestionnaire d'événements pour le bouton Ajouter
// boutonAjouter.addEventListener('click', openModal2);



// code a voir dimanche



// Définition des modales
const fenetreModal1 = document.querySelector('.modalEcran');
const fenetreModal2 = document.querySelector('.modalForm');

// Fonction pour afficher une modal spécifique
function afficherModal(modal) {
  fenetreModal1.style.display = 'none';
  fenetreModal2.style.display = 'none';
  modal.style.display = 'flex';
}

// Fonction pour afficher la modal 1 et cacher la modal 2
function afficherModal1(e) {
  e.preventDefault();
  fenetreModal2.style.display = 'none';
  afficherModal(fenetreModal1);
  genererListeModal(works, fenetreModal1); // Générer la liste des éléments de la modal 1
}

// Fonction pour afficher la modal 2 et cacher la modal 1
function afficherModal2(e) {
  e.preventDefault();
  fenetreModal1.style.display = 'none';
  afficherModal(fenetreModal2);
}

// Fonction pour fermer les modales
function closeModal(e) {
  e.preventDefault();
  fenetreModal1.style.display = 'none';
  fenetreModal2.style.display = 'none';
}

// Gestionnaires d'événements pour ouvrir les modales
const boutonOuvrirModal1 = document.querySelector('#bouton-ouvrir-modal1');
boutonOuvrirModal1.addEventListener('click', afficherModal1);

const boutonOuvrirModal2 = document.querySelector('#bouton-ouvrir-modal2');
boutonOuvrirModal2.addEventListener('click', afficherModal2);

// Gestionnaire d'événement pour fermer les modales
const boutonFermerModal = document.querySelectorAll('.bouton-fermer');
boutonFermerModal.forEach(bouton => {
  bouton.addEventListener('click', closeModal);
});

// Gestionnaire d'événement pour le bouton "Ajouter"
const boutonAjouter = document.createElement('button');
boutonAjouter.classList.add('bouton-ajouter');
boutonAjouter.textContent = 'Ajouter une photo';
document.querySelector('.modalEcran').appendChild(boutonAjouter);
boutonAjouter.addEventListener('click', afficherModal2); // Ouvre la modal 2

// Fonction pour générer la liste d'éléments dans une modal
function genererListeModal(works, modal) {
  const modalGallery = modal.querySelector('#galleryModal');
  modalGallery.innerHTML = '';

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
  });
}


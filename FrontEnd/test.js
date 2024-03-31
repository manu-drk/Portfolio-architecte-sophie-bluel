const sectionWorks = document.querySelector('#sectionProjet');
  const modifierWorks = document.createElement('p');
  modifierWorks.id = 'bouton-ouvrir-modal1';
  modifierWorks.innerHTML = '<a href="#modal1"><i class="fa-solid fa-pen-to-square"></i>Modifier</a>';
  sectionWorks.appendChild(modifierWorks);




// ***********      Modal      ****************

const fenetreModal1 = document.querySelector('.modalEcran');
const fenetreModal2 = document.querySelector('.modalForm');

// function afficherModal() {
//   fenetreModal1.style.display = 'none';
//   fenetreModal2.style.display = 'none';

// function afficherModal(modal) {
//   fenetreModal1.style.display = 'none';
//   fenetreModal2.style.display = 'none';

//   modal.style.display = 'flex';
// }
function afficherModal1(e) {
  e.preventDefault();
  fenetreModal2.style.display = 'none'; // Cacher la modal 2
  afficherModal(fenetreModal1); // Afficher la modal 1
}

function afficherModal2(e) {
  e.preventDefault();
  fenetreModal1.style.display = 'none'; // Cacher la modal 1
  afficherModal(fenetreModal2); // Afficher la modal 2
}

function closeModal(e) {
  e.preventDefault();
  fenetreModal1.style.display = "none";
  fenetreModal2.style.display = 'none'; 
}

// // Gestionnaire d'événements pour ouvrir la fenêtre modale
// const openModal = function (e) {
//   e.preventDefault();
//   afficherModal(); // Appel de la fonction afficherModal pour ouvrir la fenêtre modale
// };

const openModal1 = function (e) {
  e.preventDefault();
  afficherModal1(fenetreModal1);
  genererListeModal(works, fenetreModal1);
};

const openModal2 = function (e) {
  e.preventDefault();
  afficherModal2(fenetreModal2);
};

// *************       Ouverture de la fenêtre modale         ****************

// const boutonOuvrirModal = document.querySelector('#ouvrir-modal');
// boutonOuvrirModal.addEventListener('click', openModal1);

const boutonOuvrirModal1 = document.querySelector('#bouton-ouvrir-modal1');
boutonOuvrirModal1.addEventListener('click', afficherModal1);

const boutonOuvrirModal2 = document.querySelector('#bouton-ouvrir-modal2');
boutonOuvrirModal2.addEventListener('click', afficherModal2);


// *************       Fermeture de la fenêtre modale         ****************

const boutonFermerModal = document.querySelectorAll('.bouton-fermer');
boutonFermerModal.forEach(bouton => {
  bouton.addEventListener('click', closeModal);
});

// const boutonAjouter = document.querySelector('.bouton-ajouter');
// boutonAjouter.addEventListener('click', openModal2);

document.querySelectorAll('#ouvrir-modal').forEach(a => {
  a.addEventListener('click', openModal1);
});

const boutonAjouter = document.createElement('button'); // Créer le bouton "bouton-ajouter"
boutonAjouter.classList.add('bouton-ajouter');
boutonAjouter.textContent = "Ajouter une photo";

// Ajouter le bouton "bouton-ajouter" à la fenêtre modal 1
document.querySelector('.modalEcran').appendChild(boutonAjouter);
boutonAjouter.addEventListener('click', openModal2); // Ajouter un gestionnaire d'événements pour ouvrir la fenêtre modal 2



// **************   appel de la gallerie de l'API works    **************

const modalGallery = document.querySelector('#galleryModal');

// function genererListeModal(works) {
  function genererListeModal(works, modal) {
    const modalGallery = modal.querySelector('#galleryModal'); // Sélection de la galerie dans la modal spécifiée
    modalGallery.innerHTML = ''; // Nettoyer la galerie existant
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


// const button = document.createElement('button');
//     button.classList.add('bouton-ajouter');
//     button.textContent = "Ajouter une photo"
//     document.querySelector('#modal1').appendChild(button);


// ************************************************************************

// const fenetreModal1 = document.querySelector('.modalEcran');
// const fenetreModal2 = document.querySelector('.modalForm');

// // function afficherModal() {
// //   fenetreModal1.style.display = 'none';
// //   fenetreModal2.style.display = 'none';

// // function afficherModal(modal) {
// //   fenetreModal1.style.display = 'none';
// //   fenetreModal2.style.display = 'none';

// //   modal.style.display = 'flex';
// // }
// function afficherModal1(e) {
//   e.preventDefault();
//   fenetreModal2.style.display = 'none'; // Cacher la modal 2
//   afficherModal(fenetreModal1); // Afficher la modal 1
// }

// function afficherModal2(e) {
//   e.preventDefault();
//   fenetreModal1.style.display = 'none'; // Cacher la modal 1
//   afficherModal(fenetreModal2); // Afficher la modal 2
// }

// function closeModal(e) {
//   e.preventDefault();
//   fenetreModal1.style.display = "none";
//   fenetreModal2.style.display = 'none'; 
// }

// // // Gestionnaire d'événements pour ouvrir la fenêtre modale
// // const openModal = function (e) {
// //   e.preventDefault();
// //   afficherModal(); // Appel de la fonction afficherModal pour ouvrir la fenêtre modale
// // };

// const openModal1 = function (e) {
//   e.preventDefault();
//   afficherModal1(fenetreModal1);
//   genererListeModal(works, fenetreModal1);
// };

// const openModal2 = function (e) {
//   e.preventDefault();
//   afficherModal2(fenetreModal2);
// };

// // *************       Ouverture de la fenêtre modale         ****************

// // const boutonOuvrirModal = document.querySelector('#ouvrir-modal');
// // boutonOuvrirModal.addEventListener('click', openModal1);

// const boutonOuvrirModal1 = document.querySelector('#bouton-ouvrir-modal1');
// boutonOuvrirModal1.addEventListener('click', afficherModal1);

// const boutonOuvrirModal2 = document.querySelector('#bouton-ouvrir-modal2');
// boutonOuvrirModal2.addEventListener('click', afficherModal2);


// // *************       Fermeture de la fenêtre modale         ****************

// const boutonFermerModal = document.querySelectorAll('.bouton-fermer');
// boutonFermerModal.forEach(bouton => {
//   bouton.addEventListener('click', closeModal);
// });

// // const boutonAjouter = document.querySelector('.bouton-ajouter');
// // boutonAjouter.addEventListener('click', openModal2);

// document.querySelectorAll('#ouvrir-modal').forEach(a => {
//   a.addEventListener('click', openModal1);
// });

// const boutonAjouter = document.createElement('button'); // Créer le bouton "bouton-ajouter"
// boutonAjouter.classList.add('bouton-ajouter');
// boutonAjouter.textContent = "Ajouter une photo";

// // Ajouter le bouton "bouton-ajouter" à la fenêtre modal 1
// document.querySelector('.modalEcran').appendChild(boutonAjouter);
// boutonAjouter.addEventListener('click', openModal2); // Ajouter un gestionnaire d'événements pour ouvrir la fenêtre modal 2



// // **************   appel de la gallerie de l'API works    **************

// const modalGallery = document.querySelector('#galleryModal');

// // function genererListeModal(works) {
//   function genererListeModal(works, modal) {
//     const modalGallery = modal.querySelector('#galleryModal'); // Sélection de la galerie dans la modal spécifiée
//     modalGallery.innerHTML = ''; // Nettoyer la galerie existant
//   works.forEach(work => {
//     const figureModal = document.createElement('figure');
//     figureModal.dataset.id = work.id;
//     figureModal.id = 'figure-modal';
//     modalGallery.appendChild(figureModal); 

//     const imageModal = document.createElement('img');
//     imageModal.src = work.imageUrl;
//     figureModal.appendChild(imageModal);

//     const divBoutons = document.createElement('div');
//     divBoutons.id = 'boutons-modal';
//     figureModal.appendChild(divBoutons);



//     const boutonSupprimer = document.createElement('button');
//     boutonSupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
//     boutonSupprimer.id = 'bouton-supprimer';
//     divBoutons.appendChild(boutonSupprimer);

    
//   });
// }

/***************************************************************/
// const button = document.createElement('button');
//     button.classList.add('bouton-ajouter');
//     button.textContent = "Ajouter une photo"
//     document.querySelector('#modal1').appendChild(button);



const fenetreModal1 = document.querySelector('#modal1');

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

// Sélectionnez l'élément qui déclenche l'ouverture de la fenêtre modale
const boutonOuvrirModal = document.querySelector('#ouvrir-modal');

// Ajoutez un gestionnaire d'événements au bouton pour ouvrir la fenêtre modale
boutonOuvrirModal.addEventListener('click', openModal);


const closeModal = function (e) {
  if (modal === null) return;
  e.preventDefault();
  modal.style.display = "none"; // Utilisation de la bonne variable 'modal'
  modal.removeEventListener('click', closeModal); // Changement de addEventListener à removeEventListener
  modal = null;
};

document.querySelectorAll('#ouvrir-modal').forEach(a => {
  a.addEventListener('click', openModal);
});

const modalGallery = document.querySelector('#galleryModal');

function genererListeModal(works) {
  works.forEach(work => {
    const figureModal = document.createElement('figure');
    figureModal.dataset.id = work.id;
    figureModal.id = 'figure-modal';
    modalGallery.appendChild(figureModal); // Ajout à modalGallery au lieu de grilleWorks

    const imageModal = document.createElement('img');
    imageModal.src = work.imageUrl;
    figureModal.appendChild(imageModal);

    const texteModal = document.createElement('figcaption');
    texteModal.innerText = 'éditer';
    figureModal.appendChild(texteModal);

    const divBoutons = document.createElement('div');
    divBoutons.id = 'boutons-modal';
    figureModal.appendChild(divBoutons);

    const boutonEditer = document.createElement('p');
    boutonEditer.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"></i>';
    divBoutons.appendChild(boutonEditer);
    boutonEditer.style.display = 'none';

    const boutonSupprimer = document.createElement('p');
    boutonSupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    divBoutons.appendChild(boutonSupprimer);

    figureModal.addEventListener('mouseover', event => {
      boutonEditer.style.display = 'block';
    });
  });
}

// const openModal = function () {
//     if (sessionStorage.getItem("token")) {
//       modal = document.querySelector(".modal");
//       modal.style.display = "flex";
//       document.querySelector("#addPicture").style.display = "none";
//       document.querySelector("#editGallery").style.display = "flex";
//       modalGallery(displayWorks);

//     }
// };

// const fenetreModal1 = document.querySelector('.modal1');

// function afficherModal() {
//     fenetreModal1.style.display = 'flex';
//   };
// modifierWorks.addEventListener('click');

// let modal = null

// const openModal = function (e) {
//   e.preventDefault()
//   const target = document.querySelector(e.target.getAttribute('href'));
//   target.style.display = null
//   modal = target
//   modal.addEventListener('click', closeModal)
// }

// const closeModal = function (e) {
//   if (modal === null) return
//   e.preventDefault();
//   target.style.display = "none"
//   modal.addEventListener('click', closeModal)
//   modal = null
// }

// document.querySelector('#ouvrir-modal').forEach(a => {
//   a.addEventListener(`click`, openModal)
// }) 

// const modalGallery = document.querySelector('#galleryModal');

// function genererListeModal(works) {
//   works.forEach(work => {
//     const figureModal = document.createElement('figure');
//     figureModal.dataset.id = work.id;
//     figureModal.id = 'figure-modal';
//     grilleWorks.appendChild(figureModal);

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
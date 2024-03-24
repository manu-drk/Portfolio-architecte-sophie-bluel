// const openModal = function () {
//     if (sessionStorage.getItem("token")) {
//       modal = document.querySelector(".modal");
//       modal.style.display = "flex";
//       document.querySelector("#addPicture").style.display = "none";
//       document.querySelector("#editGallery").style.display = "flex";
//       modalGallery(displayWorks);

//     }
// };

const fenetreModale1 = document.querySelector('.modale1');
function afficherModale() {
    fenetreModale1.style.display = 'flex';
  }
const modifierWorks = document.querySelector('#ouvrir-modale');
modifierWorks.addEventListener('click', afficherModale);
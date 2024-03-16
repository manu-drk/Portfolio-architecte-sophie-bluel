
// let listProjects = window.sessionStorage.getItem("listProjects");

// const reponse = await fetch('http://localhost:5678/api/works');
// listProjects = await reponse.json();








// récupération élements du dom

//     const sectionPortfolio = document.querySelector(".gallery");
//     sectionPortfolio.innerHTML = ""

//     for (let i = 0; i < listProjects.length; i++) {

//         const works = listProjects[i];

//         // création de la balise figure
//         const projectElement = document.createElement("figure");
//         projectElement.classList.add("figureGallery")
//         // projectElement.dataset.index = works.userId
//         // projectElement.dataset.index = listProjects.userId
    
//         // création des images
//         const titleElement = document.createElement("figcaption");
//         titleElement.innerText = works.title;

//         const imageElement = document.createElement("img");
//         imageElement.src = works.imageUrl;

        
        
//         sectionPortfolio.appendChild(projectElement);

//         projectElement.appendChild(imageElement);
//         projectElement.appendChild(titleElement);
       
//         //ajout des catégories avec gallerie
//         listFiltresSet.add(works.category.name);
//     }
// }
// await genererProjets(listProjects);








// listProjects.forEach(function(listProject) {
    

//     let button = document.createElement('button');
//     button.classList.add('figcaption');
//     button.textContent = listFiltre.name;
//     button.dataset.id = listFiltre.id;
//     document.querySelector('.gallery').appendChild(button);
// })

// //  Afficher les projets
// async function genererFiltre(listFiltres){

//     for (let category of listFiltresSet) { 
//  // création bouton filtre
//  const bouton = document.createElement("button");
//  bouton.textContent = category.name;
//  bouton.dataset.id = category.id;

//  const boutonFiltres = document.querySelector("#filtres");
//  // Création élément texte
 
 
//  boutonFiltres.appendChild(bouton);

//  bouton.addEventListener('click', event => {
//     let filtered = category.id === 0 ? listProjects : listProjects.filter(works => category.id === works.categoryId);
//     genererProjets(filtered);
//   })
// }
// }
// await genererFiltre(listFiltres)









 // button.addEventListener('click', event => {
    //     let filtered = listFiltre.id === 0 ? listProjects : listProjects.filter(listProject => listFiltre.id === listProject.listFiltreId);
    //     genererProjets(filtered);
    // })

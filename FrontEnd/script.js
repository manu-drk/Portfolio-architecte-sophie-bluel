let listProjects = window.sessionStorage.getItem("listProjects");

const reponse = await fetch('http://localhost:5678/api/works');
listProjects = await reponse.json();


//  Afficher les projets
async function genererProjets(listProjects){

// récupération élements du dom

    const sectionPortfolio = document.querySelector(".gallery");
    sectionPortfolio.innerHTML = ""

    for (let i = 0; i < listProjects.length; i++) {

        const works = listProjects[i];

        // création de la balise figure
        const projectElement = document.createElement("figure");
        projectElement.classList.add("figureGallery")
        projectElement.dataset.index = works.id
    
        // création des images
        const titleElement = document.createElement("figcaption");
        titleElement.innerText = works.title;

        const imageElement = document.createElement("img");
        imageElement.src = works.imageUrl;

        
        
        sectionPortfolio.appendChild(projectElement);

        projectElement.appendChild(imageElement);
        projectElement.appendChild(titleElement);
       
    }
}
await genererProjets(listProjects);


let works = window.sessionStorage.getItem("works");

const reponse = await fetch('http://localhost:5678/api/works');
works = await reponse.json();

let listFiltres = window.sessionStorage.getItem("listFiltres");

const response = await fetch('http://localhost:5678/api/categories');
listFiltres = await response.json();

const listFiltresSet = new Set();
//  Afficher les projets
async function genererProjets(listProjects){}


    const displayWorks = () => {
        const gallery = document.querySelector('.gallery');
        const galleryWorks = works.map(work => {
            return `
        <figure>
        <img src="${work.imageUrl}" alt="${work.title}">
        <figurecaption>${work.title}"</figurecaption>
        </figure>
    
        `;
        }).join('')
        gallery.innerHTML = galleryWorks
    };
    displayWorks();




listFiltres.forEach(function(listFiltre) {
    

    let button = document.createElement('button');
    button.classList.add('boutonFiltre');
    button.textContent = listFiltre.name;
    button.dataset.id = listFiltre.id;
    document.querySelector('.filtres').appendChild(button);
    

   
    button.addEventListener('click', event => {
        let filtered = listFiltre.id === 0 ? works : works.filter(work => listFiltre.id === work.listFiltreId);
        displayWorks(filtered);
    })
});
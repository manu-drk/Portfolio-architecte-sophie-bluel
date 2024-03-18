
let works = window.sessionStorage.getItem("works");

const reponse = await fetch('http://localhost:5678/api/works');
works = await reponse.json();

let categories = window.sessionStorage.getItem("categories");

const response = await fetch('http://localhost:5678/api/categories');
categories = await response.json();

const categoriesSet = new Set();



    const displayWorks = () => {
        const gallery = document.querySelector('.gallery');
        const galleryWorks = works.map(work => {
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




    categories.forEach(function(categorie) {
    

    let button = document.createElement('button');
    button.classList.add('boutonFiltre');
    button.textContent = categorie.name;
    button.dataset.id = categorie.id;
    document.querySelector('.filtres').appendChild(button);
    
})
   
  

    const boutonsFiltre = document.querySelectorAll('.boutonFiltre');
    boutonsFiltre.forEach(button => {
        button.addEventListener('click', function () {
           
            const filtreId = button.dataset.id;
            
            const filtered = filtreId === 0 ? works : works.filter(work => work.filtreId === filtreId);
           
            displayWorks(filtered);
    })
})


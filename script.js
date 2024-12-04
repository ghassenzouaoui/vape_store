// Tableau d'images de fond
const backgrounds = [
    './img/liquide.jpg',
    './img/vape.jpg',
    './img/puff.jpg'
];

// Fonction pour changer l'image de fond
function changeBackground(index) {
    const accueilSection = document.querySelector('.accueil');
    accueilSection.style.backgroundImage = `url(${backgrounds[index - 1]})`;
}

// Fonction pour changer automatiquement les images de fond
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    changeBackground(currentIndex + 1);
}, 3000); // Change l'image toutes les 5 secondes



// Fonction pour naviguer dans les images
function navigate1(direction) {
    const container = document.getElementById('images-container');
    const scrollAmount = 120; // Valeur du défilement
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
    });
}

function navigate2(direction) {
    const container = document.getElementById('images-container2');
    const scrollAmount = 120; // Valeur du défilement
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
    });
}

function navigate3(direction) {
    const container = document.getElementById('images-container3');
    const scrollAmount = 120; // Valeur du défilement
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
    });
}
function navigate4(direction) {
    const container = document.getElementById('images-container4');
    const scrollAmount = 120; // Valeur du défilement
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
    })
};

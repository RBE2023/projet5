const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.jpg",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("p");
const containerDots = document.querySelector(".dots");
const nbSlides = slides.length;
let index = 0;

// Event on click on the Left arrow
arrowLeft.addEventListener("click", previousSlide);

// Event on click on the Right arrow
arrowRight.addEventListener("click", nextSlide);

// Création des div dot en fonction du nombre d'objet dans le tableau
for (let i = 0; i < nbSlides; i++) {
  const dot = document.createElement("div"); /*creation div dot */
  dot.className = "dot"; /*donne la class dot à ma div*/
  containerDots.appendChild(dot); /* Liée à l'élément parent avec l'élément enfant*/
}

// sélection de tous les éléments avec la class .dot
const dot = document.querySelectorAll(".dot");
// ajout class point sélectionné au premier bullet-point
dot[0].classList.add("dot_selected");

function showSlide() {
  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  bannerText.innerHTML = slides[index].tagLine;
  dot[index].classList.add("dot_selected");
}

// Fonction pour supprimer la bullet-point sélectionné
function removeClass() {
  dot[index].classList.remove("dot_selected");
}

const lastSlide = slides.length - 1;

function previousSlide() {
  removeClass();
  if (index === 0) {
    index = lastSlide;
  } else {
    index--;
  }
  showSlide();
}

function nextSlide() {
  removeClass();
  if (index === lastSlide) {
    index = 0;
  } else {
    index++;
  }
  showSlide();
}

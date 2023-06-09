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
const bannerText = document.querySelector(".banner-img p");

const nbSlides = slides.length;
let currentIndex = 1;

// Event on click on the Left arrow
arrowLeft.addEventListener("click", previousSlide);
// Event on click on the Right arrow
arrowRight.addEventListener("click", nextSlide);

// Création des Dots
const dots = document.querySelector(".dots");
for (let i = 1; i < nbSlides; i++) {
  const dot = document.createElement("div"); /*creation div dot */
  dot.className = "dot"; /*donne la class dot à ma div*/
  dots.appendChild(dot); /* Liée à l'élément parent avec l'élément enfant*/
  // showSlide(i);
}

function previousSlide() {
  if (currentIndex <= 1) currentIndex = 4;
  else currentIndex--;
  // bannerImage.src = `./assets/images/slideshow/slide${currentIndex}.jpg`;
  showSlide(currentIndex);
}

function nextSlide() {
  if (currentIndex >= 4) currentIndex = 1;
  else currentIndex++;
  showSlide(currentIndex);
}

function showSlide(currentIndex) {
  // bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
  bannerImage.src = `./assets/images/slideshow/slide${currentIndex}.jpg`;
  // bannerText.innerHTML = slides[i].tagLine;
}

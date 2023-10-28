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
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/*Variables*/
const nextSlide = document.querySelector(".arrow_right");
const prevSlide = document.querySelector(".arrow_left");
/*Selection de la zone d'affichage des images*/
const imgSlider = document.querySelector(".banner-img");
const tagLineSlider = document.querySelector("#banner p");
/*initialisation de la position des images */
let index = 0;
const lastElement = slides.length - 1;
/*bullets points*/
const dots = document.querySelector(".dots");

/*Structure Globale du code enregistré dans des fonctions*/
function main() {
  createSliderPoints();
  slideRight();
  slideLeft();
  dinamicSlidesContent();
}
/*Lancement du script*/
main();

/*Création des bullets points*/
function createSliderPoints() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i == index) {
      dot.classList.add("dot_selected");
    }
    dots.appendChild(dot);
  }
}
/*Récupération des dot Ne peut pas ètre déclareée avant
 car nous créons les dot dans cette boucle*/
const dot = document.querySelectorAll(".dots .dot");

/*evenement au click droit*/
function slideRight() {
  nextSlide.addEventListener("click", () => {
    dot[index].classList.remove("dot_selected");
    index++;
    if (index > lastElement) {
      index = 0;
    }
    dot[index].classList.add("dot_selected");
    dinamicSlidesContent();
  });
}

/*evenement au click gauche*/
function slideLeft() {
  prevSlide.addEventListener("click", () => {
    dot[index].classList.remove("dot_selected");
    index--;
    if (index < 0) {
      index = lastElement;
    }
    dot[index].classList.add("dot_selected");
    dinamicSlidesContent();
  });
}
/* Ajout de L'image et du titre dynamique*/
function dinamicSlidesContent() {
  imgSlider.src = "./assets/images/slideshow/" + slides[index].image;
  tagLineSlider.innerHTML = slides[index].tagLine;
}

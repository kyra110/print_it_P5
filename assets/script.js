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
/*Selection des fleches dans une variable*/
const flecheDroite = document.querySelector(".arrow_right");
const flecheGauche = document.querySelector(".arrow_left");
/*Selection de la zone d'affichage des images*/
const affichage = document.querySelector(".banner-img");
/*initialisation de la position des images */
let index = 0;

/*bullets points*/
const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i == index) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
}

/*evenement au click droit*/
flecheDroite.addEventListener("click", () => {
  console.log("droite");
  affichage.src = "./assets/images/slideshow/" + slides[index].image;
  index++;
  if (index > 0) {
  }
  if (index > 3) {
    index = 0;
  }
  console.log(index);
});

flecheGauche.addEventListener("click", () => {
  console.log("gauche");
  affichage.src = "./assets/images/slideshow/" + slides[index].image;
  index++;
  if (index < 0 || index > 3) {
    index = 0;
  }
  console.log(index);
});

const hamburger = document.querySelector("#hamburger");
const iconSearchResponsive = document.querySelector(".icon-search-responsive");
const navbar = document.querySelector(".navbar");
const navButtons = document.querySelectorAll(".nav-btn button");
const navLinks = document.querySelectorAll(".nav-link");
const news = document.querySelector(".news");
const multicards = document.querySelector(".multicards");
const greenBackgroundContainer = document.querySelector(".green-background-container");
const students = document.querySelector(".students");
const footer = document.querySelector("footer");

/**
 * permet d'afficher sur mobile le contenu du menu burger quand on clique sur ce dernier
 */
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    news.style.display = "none";
    multicards.style.display = "none";
    greenBackgroundContainer.style.display = "none";
    students.style.display = "none";
    footer.style.display = "none";
});

/**
 * permet de cacher le contenu du menu burger quand on clique sur l'icone loupe de la barre de recherche
 */
iconSearchResponsive.addEventListener("click", () => {
    navbar.classList.remove("active");
    news.style.display = "block";
    multicards.style.display = "flex";
    greenBackgroundContainer.style.display = "flex";
    students.style.display = "flex";
    footer.style.display = "block";
});

/**
 * permet de cacher le contenu du menu burger quand on clique sur le bouton register ou login
 */
navButtons.forEach(navButton => {
    navButton.addEventListener("click", () => {
        navbar.classList.remove("active");
        news.style.display = "block";
        multicards.style.display = "flex";
        greenBackgroundContainer.style.display = "flex";
        students.style.display = "flex";
        footer.style.display = "block";
    });
});


/**
 * permet de cacher le contenu du menu burger quand on clique sur l'un des éléments de navigation sur notre site
 */
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navbar.classList.remove("active");
        news.style.display = "block";
        multicards.style.display = "flex";
        greenBackgroundContainer.style.display = "flex";
        students.style.display = "flex";
        footer.style.display = "block";
    });
});


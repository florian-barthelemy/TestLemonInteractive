const hamburger  = document.querySelector("#hamburger");
const iconSearchResponsive = document.querySelector(".icon-search-responsive");
const navbar = document.querySelector(".navbar");
const navButtons =  document.querySelectorAll(".nav-btn button");
const navLinks = document.querySelectorAll(".nav-link");

/**
 * permet d'afficher sur mobile le contenu du menu burger quand on clique sur ce dernier
 */
hamburger.addEventListener("click" , ()=>{
    navbar.classList.toggle("active");
});

/**
 * permet de cacher le contenu du menu burger quand on clique sur l'icone loupe de la barre de recherche
 */
iconSearchResponsive.addEventListener("click",()=>{
    navbar.classList.remove("active");
});

/**
 * permet de cacher le contenu du menu burger quand on clique sur le bouton register ou login
 */
navButtons.forEach(navButton =>{
    navButton.addEventListener("click",()=>{
        navbar.classList.remove("active");
    });
});


/**
 * permet de cacher le contenu du menu burger quand on clique sur l'un des éléments de navigation sur notre site
 */
navLinks.forEach(navLink =>{
    navLink.addEventListener("click",()=>{
        navbar.classList.remove("active");
    });
});

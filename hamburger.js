const menu = document.querySelector(".hbMenu");
const overFade = document.querySelector(".overFade");
const menuSide = document.querySelector(".menuSide")
    menu.addEventListener("click", () => {

    menu.classList.toggle("active");
    overFade.classList.toggle("active");
    menuSide.classList.toggle("active");
    
    });
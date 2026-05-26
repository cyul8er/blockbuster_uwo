const hbMenu =
    document.querySelector(".hbMenu");

const menuSide =
    document.querySelector(".menuSide");

const overFade =
    document.querySelector(".overFade");

hbMenu.addEventListener("click", () => {

    hbMenu.classList.toggle("active");

    menuSide.classList.toggle("active");

    overFade.classList.toggle("active");

});

/* CLICK OUTSIDE TO CLOSE */

overFade.addEventListener("click", () => {

    hbMenu.classList.remove("active");

    menuSide.classList.remove("active");

    overFade.classList.remove("active");

});
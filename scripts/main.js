const burgerKing1 = document.querySelector(".burger1");
const burgerKing2 = document.querySelector(".burger2");
const burgerKing3 = document.querySelector(".burger3");
const burgerBotones = document.querySelectorAll(".botones");
const burger = document.getElementById("burger");
const burgers = [
    { img: "assets/images/burger1.png" },
    { img: "assets/images/burger2.png" },
    { img: "assets/images/burger3.png" }
];

function changeBurger(img) {
    document.getElementById("burgerking").src = img;
}

burgerBotones.forEach((boton) => {
    boton.addEventListener("click", () => {
        if (boton.id == "burger1") {
            changeBurger(burgers[0].img);
        } else if (boton.id == "burger2") {
            changeBurger(burgers[1].img);
        } else if (boton.id == "burger3") {
            changeBurger(burgers[2].img);
        }
    });
});

burger.addEventListener("click", () => {
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
    burger.classList.toggle("fa-xmark");
});
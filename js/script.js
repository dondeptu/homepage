console.log("Hello Friends!");

let resizeImageButton = document.querySelector(".js-resizeImageButton");
let image = document.querySelector(".js-headerImage");

resizeImageButton.addEventListener("click", () => {
    image.classList.toggle("header__image--resizeImage");
    resizeImageButton.innerText = image.classList.contains("header__image--resizeImage") ? "Pomniejsz" : "Powiększ";
});
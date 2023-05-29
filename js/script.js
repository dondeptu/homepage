{
    const welcome = () => { console.log("Hello Friends!"); };

    const toggleImageSize = () => {
        const image = document.querySelector(".js-headerImage");

        image.classList.toggle("header__image--resizeImage");
        resizeImageButton.innerText = image.classList.contains("header__image--resizeImage") ? "Pomniejsz" : "Powiększ";
    }

    const init = () => {
        const resizeImageButton = document.querySelector(".js-resizeImageButton");
        resizeImageButton.addEventListener("click", toggleImageSize);

        welcome();
    };

    init();
}
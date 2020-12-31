const header = document.querySelector("header");
const h1 = document.querySelector('h1');
let image = true;
let title = true;

const changeImage = () => {
    image = !image;
    title = !title;
    header.style.backgroundImage = image ? "url(img.jpg)" : "url(img2.jpg)";
    h1.textContent.textContent = title ? "image" : "image2"
}

header.addEventListener("click", changeImage)
const header = document.querySelector("header");
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
let image = true;
let title = true;

const changeImage = () => {
    image = !image;
    title = !title;
    header.style.backgroundImage = image ? "url(img.jpg)" : "url(img2.jpg)";
    h1.textContent = title ? "image" : "image2"
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita culpa minima voluptate earum voluptatum excepturi facilis quia? Asperiores, vero voluptatem quis exercitationem architecto maxime saepe ipsam iusto ea quae."
}

header.addEventListener("click", changeImage)
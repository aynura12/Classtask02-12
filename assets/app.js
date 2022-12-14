let navbar=document.querySelector("nav");

window.addEventListener("scroll",()=>{
    navbar.classList.toggle("sticky",window.scrollY>150)

})

const containerSlider = document.querySelector(".container-slider");
const imgs = document.querySelectorAll("img");
const inner = document.querySelector(".inner-img");
const btns = document.querySelectorAll("button");
const back = btns[0];
const next = btns[1];
let width = parseInt(window.getComputedStyle(containerSlider).width);
let offset = 0;

next.addEventListener("click", () => {
    if (offset === width * (imgs.length - 1)) {
        offset = 0;
    } else {
        offset = offset + width;
    }

    inner.style.transform = `translateX(-${offset}px)`;
})

back.addEventListener("click", () => {
    if (offset === 0) {
        offset = width * (imgs.length - 1)
    } else {
        offset = offset - width;
    }

    inner.style.transform = `translateX(-${offset}px)`;
});

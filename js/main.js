let imgsList = Array.from(document.getElementsByClassName("img-item")); // Array have 6 photos
let lightBoxContainer = document.querySelector(".lightBox-container");
let lightBoxItem = document.querySelector(".lightBox-item");
let currentIndex = 0;
let prevArrow = document.getElementById("prev");
let nextArrow = document.getElementById("next");
let closeBtn = document.getElementById("close");

for (let i = 0; i < imgsList.length; i++) {

    imgsList[i].addEventListener("click", function (e) {

        currentIndex = imgsList.indexOf(e.target);

        let imgSrc = e.target.getAttribute("src");
        lightBoxContainer.classList.replace("d-none", "d-flex");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    })
};

// For Arrow Slide
function nextSlide() {

    currentIndex++;

    if (currentIndex == imgsList.length) {
        currentIndex = 0;
    }
    let nextImg = imgsList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${nextImg})`;
};
nextArrow.addEventListener("click", nextSlide);

function previousSlide() {

    currentIndex--;
    if (currentIndex == -1) {
        currentIndex = imgsList.length - 1;
    }

    let previousImg = imgsList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${previousImg})`;
};

prevArrow.addEventListener("click", previousSlide);

// For Close 
function closeSlide() {
    lightBoxContainer.classList.replace("d-flex", "d-none");
};

closeBtn.addEventListener("click", closeSlide);

// For Arrow Key Buttons
document.addEventListener('keydown', function (e) {

    if (e.key == 'ArrowRight') {
        nextSlide();
    }
    else if (e.key == 'ArrowLeft'){
        previousSlide();
    }
    else if(e.key == 'Escape'){
        closeSlide()
    }
});

// function slide(i) {

//     currentIndex = currentIndex + i;
//     if (currentIndex == -1) {
//         currentIndex = imgsList.length - 1;
//     }

//     if (currentIndex == imgsList.length) {
//         currentIndex = 0;
//     }

//     let imgSrc = imgsList[currentIndex].getAttribute("src");
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`
// };

// nextArrow.addEventListener("click", function () {
//     slide(1)
// });

// prevArrow.addEventListener("click", function () {
//     slide(-1)
// });
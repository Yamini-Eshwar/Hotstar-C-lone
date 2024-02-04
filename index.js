const carousel = document.querySelector('.carousel');
let sliders = [];
let sliderIndex = 0;

const createSlide = () => {
    if (sliderIndex >= movies.length) {
        sliderIndex = 0;
    }

    // Creating DOM elements
    let slide = document.createElement('div');
    let content = document.createElement('div');
    let imgElement = document.createElement('img');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.src = movies[sliderIndex].image;
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);

    carousel.appendChild(slide);

    // Setting up class names
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    // Adjusting margin-left for sliding effect
    if (sliders.length > 1) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${30 * (sliders.length - 1)}px)`;
    }

    sliderIndex++;
};

// Initial creation of slides
for (let i = 0; i < 3; i++) {
    createSlide();
}

// Set interval for automatic sliding
setInterval(() => {
    createSlide();
}, 3000);

//video playing
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    })
})


let cardContainer = document.querySelectorAll(".card-container");
let  preBtn = document.querySelectorAll('.pre-btn');
let  nxtBtn = document.querySelectorAll('.nxt-btn');

cardContainer.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth -200;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})


































const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    //check for nextslide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');   
    }else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    // Get current class
    current.classList.remove('current');
    //check for prevslide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');   
    }else{
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//button event
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});


//autoslide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
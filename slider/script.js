const caro = document.querySelector('.carousal-tracker');

const slide = Array.from(caro.children);

const next = document.querySelector('.right');

const prev = document.querySelector('.left');

const slideWeigh = slide[0].getBoundingClientRect().width;


const slidePositioning = (slides, index) => {
    slides.style.left = slideWeigh * index + 'px';
}

slide.forEach(slidePositioning);

const moveslide = (caro, currentslide, targetslide) =>{
    caro.style.transform = 'translateX(-'+ targetslide.style.left +')';
    currentslide.classList.remove('current-slide');
    targetslide.classList.add('current-slide');
}


next.addEventListener('click', e=>{
    const currentslide = caro.querySelector('.current-slide');

    const nextslide = currentslide.nextElementSibling;

    moveslide(caro, currentslide, nextslide);
})

prev.addEventListener('click', e=>{

    const currentslide = caro.querySelector('.current-slide');

    const prevslide = currentslide.previousElementSibling;

    moveslide(caro, currentslide, prevslide);
})


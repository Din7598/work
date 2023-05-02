let openBtn = document.querySelector('#toggle-slider');

let remove = document.getElementById('month-pay');

let showcase = document.getElementById('year-pay');

openBtn.addEventListener('change', function () {

    
    if (openBtn.checked) {
        
        showcase.style.display='flex';

        remove.style.display= 'none';

        console.log('Year pay checked');
        
    } 
    else {
        
        showcase.style.display='none';

        remove.style.display= 'flex';

        console.log('Month pay checked');
    }
});


// CAROUSAL

const track = document.querySelector('.click-slide');

const slides = Array.from(track.children); 

const next = document.querySelector('.right-button');

const prev = document.querySelector('.left-button');

const slideSize = slides[0].getBoundingClientRect().width;

// console.log(slideSize);

// arrange slides next to eachother.
// PROTOTYPE
// slides[0].style.left= slideSize *0 + 'px';
// slides[1].style.left= slideSize *1 + 'px';
// slides[2].style.left= slideSize *2 + 'px';


const slidePositioning = (slide, index) => {
    slide.style.left = slideSize * index + 'px';   
}

slides.forEach(slidePositioning);


// when i click left, move slides to the left.

// next.addEventListener('click', e =>{
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
    
//     // move the slide

//     // to move to the next slide, knowing the amount to move

//     const amountToMove = nextSlide.style.left;

//     track.style.transform = 'translateX(-' + amountToMove +')';

//     // initially looking for current slide,
//     // to shift current slide to next sibling

//     currentSlide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');


// } )


// when i click right, move slides to the right.

// prev.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;

    // const amountToMove = prevSlide.style.left;

//     track.style.transform = 'translateX(' + amountToMove +')';

//     currentSlide.classList.remove('current-slide');
//     prevSlide.classList.add('current-slide');
// })


const moveToSlide = (track, currentSlide, targetSlide)=>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

next.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;


    moveToSlide(track, currentSlide,nextSlide);
})

prev.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})







// MOBILE CAROUSAL
const caros = document.querySelector('.mobile-carousal');
const contents = Array.from(caros.children);

const nextbutton = document.querySelector('.right');
const previousbutton = document.querySelector('.left');

const slideweight = contents[0].getBoundingClientRect().width;

const postionSlides = (skip, ind) =>{
    skip.style.left = slideweight * ind + 'px';
}

contents.forEach(postionSlides);


const moveslides = (caro, currentContent, targetContent) =>{
    caro.style.transform = 'translateX(-'+ targetContent.style.left +')';
    currentContent.classList.remove('current-content');
    targetContent.classList.add('current-content');

}

nextbutton.addEventListener('click', e=>{
    const currentContent = caros.querySelector('.current-content');
    const nextContent = currentContent.nextElementSibling;

    moveslides(caros, currentContent, nextContent);
})

previousbutton.addEventListener('click', e=>{
    
    const currentContent = caros.querySelector('.current-content');
    const prevContent = currentContent.previousElementSibling;

    moveslides(caros, currentContent, prevContent);
})
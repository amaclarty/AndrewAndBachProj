const image1 = document.getElementById('image1')
let data

fetch('https://picsum.photos/v2/list?page=2&limit=3')
    .then(response => response.json())
    .then(json => {
        console.log(json)

        image(json)
        data = json

        const carouselSlide = document.querySelector('.carousel-container');
        const carouselImages = document.querySelectorAll('img');
        console.log(carouselImages)

        //Buttons
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');

        //Counter

        let counter = 1;
        const size = data[0].clientWidth;

        carouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px)';


        //Button Listeners

        nextBtn.addEventListener('click', () => {
        if (counter >= 2) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        image1.src = data[counter].download_url
        console.log(counter)
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })

        prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        image1.src = data[counter].download_url
        console.log(counter)
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })
})

function image(json){
    const imageDiv = document.getElementById("image")
    

    // for(let i=0; i<json.length; i++){
        //const image = document.createElement('img')
        image1.src = json[0].download_url
        //imageDiv.appendChild(image)
    // }
}

// document.addEventListener('DOMContentLoaded',()=> {
//     const carouselSlide = document.querySelector('.carousel-container');
//     const carouselImages = document.querySelectorAll('.carousel-slide img');
//     console.log(carouselImages)
// })
//create buttons and transitions
// const carouselSlide = document.querySelector('.carousel-container');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
// console.log(carouselImages)

// //Buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //Counter

// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform= 'translateX(' +(-size * counter) + 'px)';


// //Button Listeners

// nextBtn.addEventListener('click', () => {
//     if (counter >= carouselImages.length-1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// })

// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// })
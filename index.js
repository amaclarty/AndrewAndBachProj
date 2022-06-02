//fetch date from an API
fetch('https://picsum.photos/v2/list?page=2&limit=5')
    .then(response => response.json())
    .then(json => {
        console.log(json)

        displayImage(json)
    })

//display images
function displayImage(json){
    const carousel = document.querySelector(".carousel")

    for(let i=0; i< json.length; i++){
        const picsUl = document.createElement('ul')
        const picsLi = document.createElement('li')
        const pics = document.createElement('img')
        
        carousel.appendChild(picsUl)

        picsUl.appendChild(picsLi)

        picsLi.appendChild(pics)

        picsLi.className = "slide"
        pics.src = json[i].download_url
    }
    
    const firstUl = document.querySelector("ul");
    const firstLi = document.getElementsByTagName("li")[0];
    
    firstUl.setAttribute("data-slides", true)
    firstLi.setAttribute("data-active", true)

    const buttonDiv = document.getElementById('button')

const prevBttn = document.createElement('button')
const nextBttn = document.createElement('button')

prevBttn.textContent = "PREV"
nextBttn.textContent = "NEXT"

buttonDiv.appendChild(prevBttn)
buttonDiv.appendChild(nextBttn)

prevBttn.setAttribute("class","carousel-button prev")
nextBttn.setAttribute("class","carousel-button next")
prevBttn.setAttribute("data-carousel-button","prev")
nextBttn.setAttribute("data-carousel-button","next")


const buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offSet = button.dataset.carouselButton === "next" ? 1 : -1
        
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        console.log(slides)
        
        const activeSlides = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlides) + offSet
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlides.dataset.active
    })
})
}

//button

